"use client";

import AuthGuard from "@/components/frontend/AuthGuard";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import LevelSelectionBox from "@/components/frontend/GameSkeleton/levelselectionbox";
import {
    storyChapters
} from "@/components/frontend/GameSkeleton/chapters";

import {
    chapterLevels,
    Level
} from "@/components/frontend/GameSkeleton/levels";

import BackButton from "@/components/frontend/buttons/backButton";


export default function ChapterLevelSelect({
    params
}: {
    params: Promise<{
        chapter: string;
    }>;
}) {

    const { chapter } = use(params);

    const chapterNumber = Number(chapter);

    const chapterData = storyChapters.find(
        (chapter) =>
            chapter.order === chapterNumber
    );

    const levels = chapterLevels[chapterNumber] ?? [];

    const [completedLevels, setCompletedLevels] =
        useState<number[]>([]);

    const [loading, setLoading] =
        useState(true);


    // =========================================
    // FETCH USER PROGRESS
    // =========================================

    useEffect(() => {

        async function getProgress() {

            const token =
                localStorage.getItem("access_token");

            if (!token) {
                setLoading(false);
                return;
            }

            try {

                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/auth/profile`,
                    {
                        method: "GET",
                        headers: {
                            Authorization:
                                `Bearer ${token}`,
                        },
                    }
                );

                if (!response.ok) {
                    setLoading(false);
                    return;
                }

                const data = await response.json();

                


                setCompletedLevels(
                    data.storyLevelsCompleted ?? []
                );

            } catch (error) {

                console.error(
                    "Failed to fetch story progress:",
                    error
                );

            } finally {

                setLoading(false);

            }
        }

        getProgress();

    }, []);


    // =========================================
    // INVALID CHAPTER
    // =========================================

    if (!chapterData) {

        return (
            <AuthGuard>
                <main className="
                    min-h-screen
                    bg-slate-950
                    px-6
                    py-16
                    text-slate-100
                ">

                    <div className="
                        mx-auto
                        flex
                        min-h-[60vh]
                        max-w-4xl
                        items-center
                        justify-center
                        text-center
                    ">

                        <div className="
                            w-full
                            rounded-2xl
                            border
                            border-red-900/60
                            bg-slate-900/80
                            p-10
                            shadow-[0_0_35px_rgba(248,113,113,0.05)]
                        ">

                            <p className="
                                font-mono
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-red-500
                            ">
                                ERROR // 404
                            </p>

                            <h1 className="
                                mt-4
                                text-4xl
                                font-extrabold
                                md:text-5xl
                            ">
                                Chapter Not Found
                            </h1>

                            <p className="
                                mt-4
                                text-slate-400
                            ">
                                The requested investigation could not
                                be located.
                            </p>

                            <div className="
                                mt-8
                                flex
                                justify-center
                            ">
                                <BackButton />
                            </div>

                        </div>

                    </div>

                </main>
            </AuthGuard>
        );
    }


    // =========================================
    // PAGE
    // =========================================

    return (
        <AuthGuard>

            <main className="
                min-h-screen
                bg-slate-950
                px-6
                py-12
                text-slate-100
            ">

                <div className="
                    mx-auto
                    max-w-6xl
                ">

                    {/* =========================================
                        HEADER
                       ========================================= */}

                    <section className="
                        py-10
                        text-center
                    ">

                        <p className="
                            font-mono
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.3em]
                            text-sky-500
                        ">

                            {chapterNumber === 0
                                ? "STEP BACK // PROLOGUE"
                                : `STEP BACK // CHAPTER ${chapterNumber}`}

                        </p>


                        <h1 className="
                            mt-4
                            text-4xl
                            font-extrabold
                            tracking-tight
                            text-slate-100
                            md:text-6xl
                        ">
                            {chapterData.title}
                        </h1>


                        <p className="
                            mx-auto
                            mt-4
                            max-w-xl
                            text-slate-400
                        ">
                            Select an investigation to continue.
                        </p>

                    </section>


                    {/* =========================================
                        LEVEL SELECT
                       ========================================= */}

                    {levels.length > 0 ? (

                        <section className="
                            rounded-3xl
                            border
                            border-sky-900/50
                            bg-slate-900/50
                            p-6
                            shadow-[0_0_40px_rgba(56,189,248,0.04)]
                            md:p-8
                        ">

                            {/* Section header */}

                            <div className="
                                mb-6
                                flex
                                items-center
                                justify-between
                                gap-4
                                border-b
                                border-slate-800
                                pb-5
                            ">

                                <div>

                                    <p className="
                                        font-mono
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.2em]
                                        text-slate-600
                                    ">
                                        Available Investigations
                                    </p>

                                    <p className="
                                        mt-1
                                        text-sm
                                        text-slate-500
                                    ">
                                        {levels.length} level
                                        {levels.length !== 1 ? "s" : ""}
                                    </p>

                                </div>


                                <div className="
                                    hidden
                                    rounded-lg
                                    border
                                    border-slate-800
                                    bg-slate-950
                                    px-3
                                    py-2
                                    font-mono
                                    text-xs
                                    text-slate-500
                                    sm:block
                                ">
                                    CASE // {chapterNumber.toString().padStart(2, "0")}
                                </div>

                            </div>


                            {/* Level carousel */}

                            <div className="
                                flex
                                gap-6
                                overflow-x-auto
                                pb-4
                                pt-2
                                snap-x
                                snap-mandatory
                                scrollbar-thin
                                scrollbar-track-transparent
                                scrollbar-thumb-slate-700
                            ">

                                {levels.map((level) => {

                                    const completed =
                                        completedLevels.includes(
                                            level.level_id
                                        );

                                    const previousLevel =
                                        levels.find(
                                            (previous) =>
                                                previous.order ===
                                                level.order - 1
                                        );

                                    const locked =
                                        level.order > 1 &&
                                        previousLevel !== undefined &&
                                        !completedLevels.includes(
                                            previousLevel.level_id
                                        );


                                    return (
                                        <div
                                            key={level.order}
                                            className="
                                                snap-start
                                            "
                                        >

                                            <LevelSelectionBox
                                                chapter={chapterNumber}
                                                level={level}
                                                completed={completed}
                                                locked={locked}
                                                loading={loading}
                                            />

                                        </div>
                                    );

                                })}

                            </div>

                        </section>

                    ) : (

                        <div className="
                            rounded-2xl
                            border
                            border-slate-800
                            bg-slate-900/70
                            p-12
                            text-center
                        ">

                            <p className="
                                font-mono
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-slate-600
                            ">
                                STATUS // UNAVAILABLE
                            </p>

                            <h2 className="
                                mt-4
                                text-2xl
                                font-bold
                                text-slate-200
                            ">
                                Coming Soon
                            </h2>

                            <p className="
                                mt-3
                                text-slate-500
                            ">
                                More investigations will be available
                                in a future update.
                            </p>

                        </div>

                    )}


                    {/* =========================================
                        BACK
                       ========================================= */}

                    <div className="
                        mt-10
                        flex
                        justify-center
                    ">
                        <BackButton />
                    </div>


                </div>

            </main>

        </AuthGuard>
    );
}