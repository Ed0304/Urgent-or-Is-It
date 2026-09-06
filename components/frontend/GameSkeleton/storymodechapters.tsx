"use client";

import Link from "next/link";
import { useState } from "react";
import { Chapter, storyChapters } from "./chapters";
import BackButton from "../buttons/backButton";
// Function to define how chapter select boxes look
function ChapterSelectionBox({ chapter }: { chapter: Chapter }) {
    return (
        <div
            className="
                w-full
                max-w-2xl
                rounded-2xl
                border-2
                border-zinc-700
                bg-zinc-900
                p-8
                text-center
                shadow-xl
            "
        >
            {/* Chapter number */}
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                Chapter {chapter.order}
            </p>

            {/* Title */}
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
                {chapter.title}
            </h2>

            {/* Description */}
            <p className="mt-5 text-lg leading-relaxed text-zinc-300">
                {chapter.description.map((part, index) => (
                    <span
                        key={index}
                        className={`
                            ${part.bold ? "font-bold" : ""}
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
                    inline-block
                    rounded-xl
                    border-2
                    border-zinc-700
                    bg-black
                    px-8
                    py-3
                    font-bold
                    transition
                    hover:scale-105
                    hover:bg-zinc-800
                "
            >
                Play Chapter
            </Link>
        </div>
    );
}


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
            Math.min(storyChapters.length - 1, current + 1)
        );
    };

    return (
        <main className="min-h-screen px-6 py-12">

            {/* Heading */}
            <div className="text-center">
                <h1 className="text-4xl font-extrabold md:text-5xl">
                    Select Story Chapter
                </h1>

                <p className="mt-3 text-zinc-400">
                    Continue your investigation in Futurepura.
                </p>
            </div>


            {/* Carousel */}
            <div className="mx-auto mt-12 flex max-w-5xl items-center justify-center gap-4">

                {/* Previous */}
                <button
                    type="button"
                    onClick={previousChapter}
                    disabled={currentChapter === 0}
                    className="
                        shrink-0
                        rounded-full
                        border-2
                        border-zinc-700
                        px-4
                        py-3
                        text-2xl
                        transition
                        hover:bg-zinc-800
                        disabled:cursor-not-allowed
                        disabled:opacity-30
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
                        currentChapter === storyChapters.length - 1
                    }
                    className="
                        shrink-0
                        rounded-full
                        border-2
                        border-zinc-700
                        px-4
                        py-3
                        text-2xl
                        transition
                        hover:bg-zinc-800
                        disabled:cursor-not-allowed
                        disabled:opacity-30
                    "
                    aria-label="Next chapter"
                >
                    →
                </button>

            </div>


            {/* Chapter indicators */}
            <div className="mt-8 flex justify-center gap-2">
                {storyChapters.map((chapter, index) => (
                    <button
                        key={chapter.order}
                        type="button"
                        onClick={() => setCurrentChapter(index)}
                        aria-label={`Go to chapter ${chapter.order}`}
                        className={`
                            h-3
                            w-3
                            rounded-full
                            transition
                            ${
                                index === currentChapter
                                    ? "scale-125 bg-white"
                                    : "bg-zinc-700 hover:bg-zinc-500"
                            }
                        `}
                    />
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <BackButton />
            </div>

        </main>
    );
}