"use client";

import Link from "next/link";
import { useState } from "react";
import { Chapter, storyChapters } from "./chapters";
import BackButton from "../buttons/backButton";
import AuthGuard from "../AuthGuard";

// =========================================
// CHAPTER SELECTION BOX
// =========================================

function ChapterSelectionBox({ chapter }: { chapter: Chapter }) {
    return (
        <div
            className="
                w-full
                max-w-2xl
                rounded-2xl
                border
                border-sky-900/60
                bg-slate-950/90
                p-8
                text-center
                shadow-[0_0_30px_rgba(56,189,248,0.05)]
                transition
                hover:border-sky-800
                hover:shadow-[0_0_40px_rgba(56,189,248,0.08)]
            "
        >

            {/* Chapter number */}

            <p
                className="
                    font-mono
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-sky-500
                "
            >
                Chapter {chapter.order}
            </p>


            {/* Title */}

            <h2
                className="
                    mt-4
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-slate-100
                    md:text-4xl
                "
            >
                {chapter.title}
            </h2>


            {/* Description */}

            <p
                className="
                    mt-5
                    text-base
                    leading-relaxed
                    text-slate-400
                    md:text-lg
                "
            >
                {chapter.description.map((part, index) => (
                    <span
                        key={index}
                        className={`
                            ${part.bold ? "font-bold text-slate-200" : ""}
                            ${part.italic ? "italic" : ""}
                        `}
                    >
                        {part.text}
                    </span>
                ))}
            </p>


            {/* Play button */}

            <Link
                href={`/storymode/${chapter.order}`}
                className="
                    mt-8
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-sky-800/70
                    bg-sky-950/30
                    px-8
                    py-3
                    font-mono
                    text-sm
                    font-bold
                    uppercase
                    tracking-wider
                    text-sky-400
                    transition
                    hover:border-sky-400
                    hover:bg-sky-950/60
                    hover:text-sky-300
                    hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]
                "
            >
                Play Chapter
                <span>→</span>
            </Link>

        </div>
    );
}


// =========================================
// CHAPTER SELECT
// =========================================

export default function SelectChapter() {

    const [currentChapter, setCurrentChapter] = useState(0);

    const chapter = storyChapters[currentChapter];


    const previousChapter = () => {
        setCurrentChapter((current) =>
            Math.max(0, current - 1)
        );
    };


    const nextChapter = () => {
        setCurrentChapter((current) =>
            Math.min(
                storyChapters.length - 1,
                current + 1
            )
        );
    };


    return (
        <AuthGuard>

            <main
                className="
                    min-h-screen
                    bg-slate-950
                    px-6
                    py-16
                    text-slate-100
                "
            >

                <div className="mx-auto max-w-6xl">


                    {/* =========================================
                        HEADER
                       ========================================= */}

                    <div className="text-center">

                        <p
                            className="
                                font-mono
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.3em]
                                text-sky-500
                            "
                        >
                            STORY MODE // CHAPTER SELECT
                        </p>


                        <h1
                            className="
                                mt-4
                                text-4xl
                                font-extrabold
                                tracking-tight
                                md:text-5xl
                            "
                        >
                            Select Story Chapter
                        </h1>


                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-2xl
                                text-slate-400
                            "
                        >
                            Continue your investigation in Futurepura.
                        </p>

                    </div>


                    {/* =========================================
                        CAROUSEL
                       ========================================= */}

                    <div
                        className="
                            mx-auto
                            mt-12
                            flex
                            max-w-5xl
                            items-center
                            justify-center
                            gap-4
                        "
                    >

                        {/* Previous */}

                        <button
                            type="button"
                            onClick={previousChapter}
                            disabled={currentChapter === 0}
                            className="
                                flex
                                h-12
                                w-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-700
                                bg-slate-950
                                font-mono
                                text-xl
                                text-slate-400
                                transition
                                hover:border-sky-700
                                hover:bg-sky-950/30
                                hover:text-sky-400
                                hover:shadow-[0_0_15px_rgba(56,189,248,0.1)]
                                disabled:cursor-not-allowed
                                disabled:opacity-25
                                disabled:hover:border-slate-700
                                disabled:hover:bg-slate-950
                                disabled:hover:text-slate-400
                            "
                            aria-label="Previous chapter"
                        >
                            ←
                        </button>


                        {/* Chapter */}

                        <ChapterSelectionBox
                            chapter={chapter}
                        />


                        {/* Next */}

                        <button
                            type="button"
                            onClick={nextChapter}
                            disabled={
                                currentChapter ===
                                storyChapters.length - 1
                            }
                            className="
                                flex
                                h-12
                                w-12
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-700
                                bg-slate-950
                                font-mono
                                text-xl
                                text-slate-400
                                transition
                                hover:border-sky-700
                                hover:bg-sky-950/30
                                hover:text-sky-400
                                hover:shadow-[0_0_15px_rgba(56,189,248,0.1)]
                                disabled:cursor-not-allowed
                                disabled:opacity-25
                                disabled:hover:border-slate-700
                                disabled:hover:bg-slate-950
                                disabled:hover:text-slate-400
                            "
                            aria-label="Next chapter"
                        >
                            →
                        </button>

                    </div>


                    {/* =========================================
                        CHAPTER INDICATORS
                       ========================================= */}

                    <div
                        className="
                            mt-8
                            flex
                            items-center
                            justify-center
                            gap-3
                        "
                    >

                        {storyChapters.map((chapter, index) => (

                            <button
                                key={chapter.order}
                                type="button"
                                onClick={() =>
                                    setCurrentChapter(index)
                                }
                                aria-label={`Go to chapter ${chapter.order}`}
                                className={`
                                    h-2
                                    rounded-full
                                    transition-all
                                    ${
                                        index === currentChapter
                                            ? `
                                                w-8
                                                bg-sky-400
                                                shadow-[0_0_10px_rgba(56,189,248,0.6)]
                                            `
                                            : `
                                                w-2
                                                bg-slate-700
                                                hover:bg-sky-800
                                            `
                                    }
                                `}
                            />

                        ))}

                    </div>


                    {/* =========================================
                        BACK
                       ========================================= */}

                    <div className="mt-10 flex justify-center">
                        <BackButton />
                    </div>

                </div>

            </main>

        </AuthGuard>
    );
}