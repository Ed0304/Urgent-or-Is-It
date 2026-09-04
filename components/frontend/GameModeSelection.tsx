"use client";

import Link from "next/link";

export default function GameModeSelection() {
    return (
        <main className="min-h-screen px-6 py-16 text-white">
            <div className="mx-auto max-w-4xl">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
                        Select Your Game Mode
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400 md:text-xl">
                        Choose how you want to face the threats of Futurepura.
                    </p>
                </div>

                {/* Game Modes */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">

                    {/* Story Mode */}
                    <Link
                        href="/storymode"
                        className="
                            group
                            rounded-2xl
                            border-2
                            border-zinc-700
                            bg-zinc-900
                            p-8
                            shadow-xl
                            transition
                            hover:-translate-y-1
                            hover:border-zinc-500
                            hover:bg-zinc-800
                            hover:shadow-2xl
                        "
                    >
                        <div className="flex h-full flex-col">
                            <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                                Campaign
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold">
                                Story Mode
                            </h2>

                            <p className="mt-4 flex-1 text-zinc-300 leading-relaxed">
                                Join STEP BACK, learn to distinguish the malicious
                                from the legitimate, and help defeat Decievious.
                            </p>

                            <div className="mt-8 font-bold">
                                Begin the story →
                            </div>
                        </div>
                    </Link>

                    {/* Survival Mode */}
                    <div
                        className="
                            rounded-2xl
                            border-2
                            border-zinc-800
                            bg-zinc-950
                            p-8
                            opacity-50
                        "
                    >
                        <div className="flex h-full flex-col">
                            <p className="text-sm font-bold uppercase tracking-widest text-zinc-600">
                                Coming Soon
                            </p>

                            <h2 className="mt-3 text-3xl font-extrabold">
                                Survival Mode
                            </h2>

                            <p className="mt-4 flex-1 text-zinc-500 leading-relaxed">
                                No time limit. Investigate carefully and don't let
                                a single malicious message get through.
                            </p>

                            <div className="mt-8 font-bold text-zinc-600">
                                Locked
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}