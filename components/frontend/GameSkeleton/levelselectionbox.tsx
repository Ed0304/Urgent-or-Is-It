"use client";

import { Level } from "./levels";
import Link from "next/link";

export default function LevelSelectionBox({
    chapter,
    level,
    completed,
    locked,
    loading,
}: {
    chapter: number;
    level: Level;
    completed: boolean;
    locked: boolean;
    loading: boolean;
}) {

    return (
        <article
            className={`
                flex
                min-w-[300px]
                max-w-[320px]
                shrink-0
                flex-col
                rounded-2xl
                border-2
                p-8
                shadow-xl
                transition

                ${
                    completed
                        ? `
                            border-green-800
                            bg-zinc-950
                        `
                        : locked
                            ? `
                                border-zinc-900
                                bg-zinc-950
                                opacity-40
                            `
                            : `
                                border-zinc-700
                                bg-zinc-900
                                hover:-translate-y-1
                                hover:border-zinc-500
                            `
                }
            `}
        >
            {completed ? (
                <h1
                className="mt-3
                text-2xl
                font-extrabold"
                >Completed
                </h1>
            ) : locked ? (
                <h1
                className="mt-3
                text-2xl
                font-extrabold"
                >Locked</h1>
            ) : (
                <h1
                className="mt-3
                text-2xl
                font-extrabold">
                Available</h1>
            )}

            {/* LEVEL NUMBER */}

            <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-zinc-500
            ">
                Level {level.order}
            </p>


            {/* TITLE */}

            <h2 className="
                mt-3
                text-2xl
                font-extrabold
            ">
                {level.title}
            </h2>


            {/* DESCRIPTION */}

            <p className="
                mt-4
                min-h-[80px]
                text-sm
                leading-relaxed
                text-zinc-400
            ">
                {level.description}
            </p>


            {/* STATUS / BUTTON */}

            {loading ? (

                <div className="
                    mt-8
                    rounded-xl
                    border-2
                    border-zinc-800
                    px-8
                    py-3
                    text-center
                    font-bold
                    text-zinc-600
                ">
                    Loading...
                </div>

            ) : completed ? (

                <Link
                    href={`/storymode/${chapter}/${level.order}`}
                    className="
                        mt-8
                        rounded-xl
                        border-2
                        border-zinc-700
                        bg-black
                        px-8
                        py-3
                        text-center
                        font-bold
                        transition
                        hover:border-zinc-500
                        hover:bg-zinc-800
                    "
                >
                    START
                </Link>
            ) : locked ? (

                <div className="
                    mt-8
                    rounded-xl
                    border-2
                    border-zinc-900
                    bg-zinc-950
                    px-8
                    py-3
                    text-center
                    font-bold
                    text-zinc-700
                ">
                    🔒 LOCKED
                </div>

            ) : (

                <Link
                    href={`/storymode/${chapter}/${level.order}`}
                    className="
                        mt-8
                        rounded-xl
                        border-2
                        border-zinc-700
                        bg-black
                        px-8
                        py-3
                        text-center
                        font-bold
                        transition
                        hover:border-zinc-500
                        hover:bg-zinc-800
                    "
                >
                    START
                </Link>

            )}

        </article>
    );
}