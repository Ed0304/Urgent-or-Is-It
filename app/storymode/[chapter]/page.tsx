"use client";

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
                    "http://localhost:3001/auth/profile",
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
            <main className="
                min-h-screen
                bg-black
                px-6
                py-12
                text-white
            ">

                <div className="
                    mx-auto
                    max-w-4xl
                    text-center
                ">

                    <h1 className="
                        text-4xl
                        font-extrabold
                    ">
                        Chapter Not Found
                    </h1>

                </div>

            </main>
        );
    }


    // =========================================
    // PAGE
    // =========================================

    return (
        <main className="
            min-h-screen
            bg-black
            px-6
            py-12
            text-white
        ">

            <div className="
                mx-auto
                max-w-6xl
            ">

                {/* HEADER */}

                <section className="
                    py-10
                    text-center
                ">

                    <p className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.3em]
                        text-zinc-500
                    ">

                        {chapterNumber === 0
                            ? "Prologue"
                            : `Chapter ${chapterNumber}`}

                    </p>


                    <h1 className="
                        mt-3
                        text-4xl
                        font-extrabold
                        md:text-6xl
                    ">
                        {chapterData.title}
                    </h1>


                    <p className="
                        mt-4
                        text-zinc-400
                    ">
                        Select a level to continue.
                    </p>

                </section>


                {/* LEVEL SELECT */}

                {levels.length > 0 ? (

                    <div className="
                        flex
                        gap-6
                        overflow-x-auto
                        pb-6
                    ">

                        {levels.map((level) => {

                            const completed =
                                completedLevels.includes(level.level_id);

                            const previousLevel =
                                levels.find(
                                    (previous) =>
                                        previous.order === level.order - 1
                                );

                            const locked =
                                level.order > 1 &&
                                previousLevel !== undefined &&
                                !completedLevels.includes(previousLevel.level_id);


                            return (
                                <LevelSelectionBox
                                    key={level.order}
                                    chapter={chapterNumber}
                                    level={level}
                                    completed={completed}
                                    locked={locked}
                                    loading={loading}
                                />
                            );

                        })}

                    </div>

                ) : (

                    <div className="
                        rounded-2xl
                        border-2
                        border-zinc-800
                        bg-zinc-900
                        p-10
                        text-center
                    ">

                        <h2 className="
                            text-2xl
                            font-bold
                        ">
                            Coming Soon
                        </h2>

                    </div>

                )}


                <BackButton />

            </div>

        </main>
    );
}
