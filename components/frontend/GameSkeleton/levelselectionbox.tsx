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
                border
                p-8
                shadow-[0_0_30px_rgba(0,0,0,0.25)]
                transition-all
                duration-200

                ${
                    completed
                        ? `
                            border-emerald-800/70
                            bg-slate-950
                            shadow-[0_0_25px_rgba(16,185,129,0.06)]
                        `
                        : locked
                            ? `
                                border-slate-800
                                bg-slate-950
                                opacity-45
                            `
                            : `
                                border-sky-900/70
                                bg-slate-950
                                hover:-translate-y-1
                                hover:border-sky-500/70
                                hover:shadow-[0_0_30px_rgba(56,189,248,0.10)]
                            `
                }
            `}
        >

            {/* STATUS */}

            {completed ? (

                <h1 className="
                    mt-3
                    text-2xl
                    font-extrabold
                    uppercase
                    tracking-wide
                    text-emerald-400
                ">
                    Completed
                </h1>

            ) : locked ? (

                <h1 className="
                    mt-3
                    text-2xl
                    font-extrabold
                    uppercase
                    tracking-wide
                    text-slate-600
                ">
                    Locked
                </h1>

            ) : (

                <h1 className="
                    mt-3
                    text-2xl
                    font-extrabold
                    uppercase
                    tracking-wide
                    text-sky-400
                ">
                    Available
                </h1>

            )}


            {/* LEVEL NUMBER */}

            <p className="
                mt-2
                font-mono
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-slate-500
            ">
                Level {level.order}
            </p>


            {/* TITLE */}

            <h2 className="
                mt-3
                text-2xl
                font-extrabold
                text-slate-100
            ">
                {level.title}
            </h2>


            {/* DESCRIPTION */}

            <p className="
                mt-4
                min-h-[80px]
                text-sm
                leading-relaxed
                text-slate-400
            ">
                {level.description}
            </p>


            {/* STATUS / BUTTON */}

            {loading ? (

                <div className="
                    mt-8
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-900
                    px-8
                    py-3
                    text-center
                    font-mono
                    text-sm
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-500
                ">
                    Loading...
                </div>

            ) : completed ? (

                <Link
                    href={`/storymode/${chapter}/${level.order}`}
                    className="
                        mt-8
                        rounded-xl
                        border
                        border-emerald-800/70
                        bg-emerald-950/30
                        px-8
                        py-3
                        text-center
                        font-bold
                        tracking-wider
                        text-emerald-400
                        transition
                        hover:border-emerald-500
                        hover:bg-emerald-950/50
                    "
                >
                    REPLAY
                </Link>

            ) : locked ? (

                <div className="
                    mt-8
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-900/50
                    px-8
                    py-3
                    text-center
                    font-mono
                    text-sm
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-700
                ">
                    🔒 LOCKED
                </div>

            ) : (

                <Link
                    href={`/storymode/${chapter}/${level.order}`}
                    className="
                        mt-8
                        rounded-xl
                        border
                        border-sky-800/70
                        bg-sky-950/30
                        px-8
                        py-3
                        text-center
                        font-bold
                        tracking-wider
                        text-sky-400
                        transition
                        hover:border-sky-400
                        hover:bg-sky-950/50
                    "
                >
                    START
                </Link>

            )}

        </article>
    );
}