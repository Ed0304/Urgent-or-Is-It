"use client";

import Link from "next/link";
import BackButton from "./buttons/backButton";
import AuthGuard from "./AuthGuard";

export default function GameModeSelection() {
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
                    max-w-5xl
                ">

                    {/* BACK */}

                    <BackButton />


                    {/* HEADER */}

                    <div className="
                        mt-10
                        text-center
                    ">

                        <p className="
                            font-mono
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.35em]
                            text-sky-500
                        ">
                            STEP BACK // GAME SYSTEM
                        </p>

                        <h1 className="
                            mt-4
                            text-4xl
                            font-extrabold
                            tracking-tight
                            md:text-6xl
                        ">
                            Select Your Game Mode
                        </h1>

                        <p className="
                            mx-auto
                            mt-4
                            max-w-2xl
                            text-lg
                            leading-relaxed
                            text-slate-400
                            md:text-xl
                        ">
                            Choose how you want to face the threats
                            of Futurepura.
                        </p>

                    </div>


                    {/* GAME MODES */}

                    <div className="
                        mt-14
                        grid
                        gap-6
                        md:grid-cols-2
                    ">


                        {/* =========================================
                            STORY MODE
                           ========================================= */}

                        <Link
                            href="/storymode"
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-sky-500/30
                                bg-slate-900/80
                                p-8
                                shadow-[0_0_30px_rgba(14,165,233,0.05)]
                                transition
                                duration-200

                                hover:-translate-y-1
                                hover:border-sky-400/70
                                hover:bg-slate-900
                                hover:shadow-[0_0_35px_rgba(14,165,233,0.12)]
                            "
                        >

                            {/* Accent line */}

                            <div className="
                                absolute
                                left-0
                                top-0
                                h-full
                                w-1
                                bg-sky-500/60
                                transition
                                group-hover:bg-sky-400
                            " />


                            <div className="
                                flex
                                h-full
                                flex-col
                            ">

                                {/* Status */}

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                ">

                                    <span className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-sky-400
                                        shadow-[0_0_10px_rgba(56,189,248,0.8)]
                                    " />

                                    <p className="
                                        font-mono
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.25em]
                                        text-sky-400
                                    ">
                                        Available
                                    </p>

                                </div>


                                {/* Title */}

                                <h2 className="
                                    mt-5
                                    text-3xl
                                    font-extrabold
                                    tracking-tight
                                    text-slate-100
                                ">
                                    Story Mode
                                </h2>


                                {/* Subtitle */}

                                <p className="
                                    mt-1
                                    font-mono
                                    text-xs
                                    uppercase
                                    tracking-[0.2em]
                                    text-slate-600
                                ">
                                    Campaign // Investigation
                                </p>


                                {/* Description */}

                                <p className="
                                    mt-6
                                    flex-1
                                    leading-relaxed
                                    text-slate-400
                                ">
                                    Join STEP BACK, learn to distinguish
                                    malicious messages from legitimate ones,
                                    and help defeat Deceivious.
                                </p>


                                {/* Action */}

                                <div className="
                                    mt-8
                                    flex
                                    items-center
                                    justify-between
                                    border-t
                                    border-slate-800
                                    pt-5"
                                >

                                    <span className="
                                        font-mono
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]
                                        text-slate-600
                                    ">
                                        Mode 01
                                    </span>

                                    <span className="
                                        font-bold
                                        text-sky-400
                                        transition
                                        group-hover:translate-x-1
                                    ">
                                        Begin Story →
                                    </span>

                                </div>

                            </div>

                        </Link>


                        {/* =========================================
                            SURVIVAL MODE
                           ========================================= */}

                        <div className="
                            relative
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-800
                            bg-slate-950
                            p-8
                            opacity-60
                        ">

                            {/* Locked accent */}

                            <div className="
                                absolute
                                left-0
                                top-0
                                h-full
                                w-1
                                bg-slate-800
                            " />


                            <div className="
                                flex
                                h-full
                                flex-col
                            ">

                                {/* Status */}

                                <div className="
                                    flex
                                    items-center
                                    gap-2
                                ">

                                    <span className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-slate-700
                                    " />

                                    <p className="
                                        font-mono
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.25em]
                                        text-slate-600
                                    ">
                                        Locked
                                    </p>

                                </div>


                                {/* Title */}

                                <h2 className="
                                    mt-5
                                    text-3xl
                                    font-extrabold
                                    tracking-tight
                                    text-slate-400
                                ">
                                    Survival Mode
                                </h2>


                                {/* Subtitle */}

                                <p className="
                                    mt-1
                                    font-mono
                                    text-xs
                                    uppercase
                                    tracking-[0.2em]
                                    text-slate-700
                                ">
                                    Mode 02 // Coming Soon
                                </p>


                                {/* Description */}

                                <p className="
                                    mt-6
                                    flex-1
                                    leading-relaxed
                                    text-slate-600
                                ">
                                    No time limit. Investigate carefully
                                    and don't let a single malicious
                                    message get through.
                                </p>


                                {/* Locked action */}

                                <div className="
                                    mt-8
                                    flex
                                    items-center
                                    justify-between
                                    border-t
                                    border-slate-800
                                    pt-5"
                                >

                                    <span className="
                                        font-mono
                                        text-xs
                                        uppercase
                                        tracking-[0.2em]
                                        text-slate-700
                                    ">
                                        Mode 02
                                    </span>

                                    <span className="
                                        font-mono
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-[0.15em]
                                        text-slate-700
                                    ">
                                        🔒 Locked
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>
        </AuthGuard>
    );
}