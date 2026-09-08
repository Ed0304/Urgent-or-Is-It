"use client";

import { motion } from "motion/react";
import Register from "./register";
import Link from "next/link";
import { useAuth } from "./AuthContext";

export default function Home() {
    const { user, isLoggedIn } = useAuth();

    return (
        <>

        {isLoggedIn ? (

            <main 
                className="
                min-h-screen
                bg-slate-950
                px-6
                py-16
                text-slate-100
            ">

                <div className="
                    mx-auto
                    flex
                    min-h-[70vh]
                    max-w-5xl
                    flex-col
                    justify-center
                ">

                    {/* =========================================
                        WELCOME
                       ========================================= */}

                    <div className="text-center">

                        <p className="
                            font-mono
                            text-sm
                            font-bold
                            uppercase
                            tracking-[0.3em]
                            text-sky-500
                        ">
                            STEP BACK // OPERATIONS
                        </p>

                        <h1 className="
                            mt-4
                            text-5xl
                            font-extrabold
                            tracking-tight
                            text-slate-100
                            md:text-6xl
                            lg:text-7xl
                        ">
                            Welcome back
                        </h1>

                        <p className="
                            mt-4
                            text-2xl
                            font-bold
                            text-sky-400
                            md:text-3xl
                        ">
                            {user?.username}
                        </p>

                        <p className="
                            mt-4
                            text-lg
                            text-slate-400
                            md:text-xl
                        ">
                            Ready to continue your investigation?
                        </p>

                        <p className="
                            mt-4
                            text-lg
                            text-slate-400
                            md:text-xl
                        ">
                            For first-time players: Take your time to read the lore and how to play instructions.
                        </p>

                    </div>


                    {/* =========================================
                        MAIN MENU
                       ========================================= */}

                    <div className="
                        mt-12
                        grid
                        gap-6
                        md:grid-cols-3
                    ">

                        {/* CONTINUE GAME */}

                        <Link
                            href="/gamemode"
                            className="
                                group
                                rounded-2xl
                                border
                                border-sky-900/60
                                bg-slate-950/90
                                p-8
                                text-center
                                shadow-[0_0_30px_rgba(56,189,248,0.04)]
                                transition-all
                                duration-200
                                hover:-translate-y-1
                                hover:border-sky-500/70
                                hover:bg-slate-900
                                hover:shadow-[0_0_35px_rgba(56,189,248,0.10)]
                            "
                        >

                            <p className="
                                font-mono
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-sky-500
                            ">
                                ACTIVE
                            </p>

                            <h2 className="
                                mt-3
                                text-2xl
                                font-extrabold
                                text-slate-100
                            ">
                                Continue Game
                            </h2>

                            <p className="
                                mt-3
                                text-slate-400
                            ">
                                Continue your investigation.
                            </p>

                            <span className="
                                mt-6
                                block
                                font-mono
                                text-sm
                                text-slate-600
                                transition
                                group-hover:text-sky-500
                            ">
                                ACCESS →
                            </span>

                        </Link>


                        {/* LORE */}

                        <Link
                            href="/lore"
                            className="
                                group
                                rounded-2xl
                                border
                                border-sky-900/60
                                bg-slate-950/90
                                p-8
                                text-center
                                shadow-[0_0_30px_rgba(56,189,248,0.04)]
                                transition-all
                                duration-200
                                hover:-translate-y-1
                                hover:border-sky-500/70
                                hover:bg-slate-900
                                hover:shadow-[0_0_35px_rgba(56,189,248,0.10)]
                            "
                        >

                            <p className="
                                font-mono
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-slate-600
                            ">
                                ARCHIVES
                            </p>

                            <h2 className="
                                mt-3
                                text-2xl
                                font-extrabold
                                text-slate-100
                            ">
                                Lore
                            </h2>

                            <p className="
                                mt-3
                                text-slate-400
                            ">
                                Discover the world of Futurepura.
                            </p>

                            <span className="
                                mt-6
                                block
                                font-mono
                                text-sm
                                text-slate-600
                                transition
                                group-hover:text-sky-500
                            ">
                                OPEN →
                            </span>

                        </Link>


                        {/* HOW TO PLAY */}

                        <Link
                            href="/howtoplay"
                            className="
                                group
                                rounded-2xl
                                border
                                border-sky-900/60
                                bg-slate-950/90
                                p-8
                                text-center
                                shadow-[0_0_30px_rgba(56,189,248,0.04)]
                                transition-all
                                duration-200
                                hover:-translate-y-1
                                hover:border-sky-500/70
                                hover:bg-slate-900
                                hover:shadow-[0_0_35px_rgba(56,189,248,0.10)]
                            "
                        >

                            <p className="
                                font-mono
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-slate-600
                            ">
                                TRAINING
                            </p>

                            <h2 className="
                                mt-3
                                text-2xl
                                font-extrabold
                                text-slate-100
                            ">
                                How to Play
                            </h2>

                            <p className="
                                mt-3
                                text-slate-400
                            ">
                                Learn how to investigate suspicious messages.
                            </p>

                            <span className="
                                mt-6
                                block
                                font-mono
                                text-sm
                                text-slate-600
                                transition
                                group-hover:text-sky-500
                            ">
                                OPEN →
                            </span>

                        </Link>

                    </div>

                </div>

            </main>

        ) : (

            <>
            <main className="min-h-screen
                bg-slate-950
                px-6
                py-16
                text-slate-100">
            

                {/* =========================================
                    TITLE
                   ========================================= */}

                <motion.h1
                    className="
                        mt-3
                        text-center
                        text-5xl
                        font-extrabold
                        tracking-tight
                        text-slate-100
                        md:text-6xl
                        lg:text-7xl
                    "
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.15
                    }}
                >
                    Urgent or <b className="text-sky-400">Is It?</b>
                </motion.h1>


                {/* =========================================
                    WORLD
                   ========================================= */}

                <motion.p
                    className="
                        mt-4
                        text-center
                        font-mono
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.3em]
                        text-sky-500
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4
                    }}
                >
                    STEP BACK // CASE FILE
                </motion.p>


                <motion.h2
                    className="
                        mt-12
                        text-center
                        text-4xl
                        font-bold
                        tracking-tight
                        text-slate-100
                        md:text-5xl
                        lg:text-6xl
                    "
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.5
                    }}
                >
                    Futurepura
                </motion.h2>


                <motion.p
                    className="
                        mx-auto
                        mt-6
                        max-w-3xl
                        text-center
                        text-lg
                        leading-relaxed
                        text-slate-300
                        md:text-xl
                        lg:text-2xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.8
                    }}
                >
                    <b className="text-sky-400">Futurepura</b> — an alternate
                    universe of our world. A place remarkably similar to our
                    own...
                </motion.p>


                <motion.p
                    className="
                        mx-auto
                        mt-4
                        max-w-3xl
                        text-center
                        text-lg
                        font-semibold
                        leading-relaxed
                        text-slate-400
                        md:text-xl
                        lg:text-2xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 1.1
                    }}
                >
                    But something is wrong.
                </motion.p>


                {/* =========================================
                    THREAT
                   ========================================= */}

                <motion.h2
                    className="
                        mt-20
                        text-center
                        text-4xl
                        font-bold
                        tracking-tight
                        text-slate-100
                        md:text-5xl
                        lg:text-6xl
                    "
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 1.4
                    }}
                >
                    A threat is spreading.
                </motion.h2>


                <motion.p
                    className="
                        mx-auto
                        mt-6
                        max-w-3xl
                        text-center
                        text-lg
                        leading-relaxed
                        text-slate-300
                        md:text-xl
                        lg:text-2xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 1.7
                    }}
                >
                    Messages. Calls. Emails. Offers that seem too important to
                    ignore. Warnings that demand an immediate response.
                </motion.p>


                {/* =========================================
                    DECEIVIOUS
                   ========================================= */}

                <motion.h2
                    className="
                        mt-20
                        text-center
                        text-4xl
                        font-bold
                        tracking-tight
                        text-sky-400
                        md:text-5xl
                        lg:text-6xl
                    "
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 2.0
                    }}
                >
                    Deceivious
                </motion.h2>


                <motion.p
                    className="
                        mx-auto
                        mt-6
                        max-w-3xl
                        text-center
                        text-lg
                        leading-relaxed
                        text-slate-300
                        md:text-xl
                        lg:text-2xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 2.3
                    }}
                >
                    A master scammer who has made manipulation an art.
                </motion.p>


                <motion.p
                    className="
                        mx-auto
                        mt-6
                        max-w-3xl
                        text-center
                        text-lg
                        leading-relaxed
                        text-slate-300
                        md:text-xl
                        lg:text-2xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 2.6
                    }}
                >
                    What makes Deceivious terrifying is that he is just a{" "}
                    <b>
                        <i>human</i>
                    </b>
                    .
                </motion.p>


                <motion.p
                    className="
                        mx-auto
                        mt-4
                        max-w-3xl
                        text-center
                        text-lg
                        leading-relaxed
                        text-slate-400
                        md:text-xl
                        lg:text-2xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 2.9
                    }}
                >
                    No extraordinary powers.
                    <br />
                    No supernatural abilities.
                    <br />
                    No magic.
                </motion.p>


                <motion.p
                    className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-center
                        text-xl
                        font-semibold
                        leading-relaxed
                        text-slate-100
                        md:text-2xl
                        lg:text-3xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 3.2
                    }}
                >
                    His greatest weapon is something far more familiar:
                    <br />
                    <b className="text-sky-400">
                        urgency and fear.
                    </b>
                </motion.p>


                {/* =========================================
                    HOPE
                   ========================================= */}

                <motion.p
                    className="
                        mx-auto
                        mt-16
                        max-w-3xl
                        text-center
                        text-xl
                        font-semibold
                        leading-relaxed
                        text-slate-100
                        md:text-2xl
                        lg:text-3xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 4.2
                    }}
                >
                    Luckily, the world isn't without hope.
                </motion.p>


                <motion.p
                    className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-center
                        text-lg
                        leading-relaxed
                        text-slate-300
                        md:text-xl
                        lg:text-2xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 5.0
                    }}
                >
                    A fellowship of strangers. A group of{" "}
                    <i>'nobodies'</i> who came together with one mission:
                    stop Deceivious and his schemes.
                </motion.p>


                {/* =========================================
                    STEP BACK
                   ========================================= */}

                <motion.h2
                    className="
                        mt-20
                        text-center
                        text-5xl
                        font-extrabold
                        tracking-tight
                        text-sky-400
                        drop-shadow-[0_0_20px_rgba(56,189,248,0.25)]
                        md:text-6xl
                        lg:text-7xl
                    "
                    initial={{
                        opacity: 0,
                        scale: 0.95
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 5.8
                    }}
                >
                    STEP BACK
                </motion.h2>


                <motion.p
                    className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-center
                        text-lg
                        leading-relaxed
                        text-slate-300
                        md:text-xl
                        lg:text-2xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 6.4
                    }}
                >
                    A group of five founders from different nations, along
                    with other members who came before you, strive toward one
                    mission: stop Deceivious and his schemes.
                </motion.p>


                {/* =========================================
                    PLAYER MISSION
                   ========================================= */}

                <motion.p
                    className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-center
                        text-lg
                        leading-relaxed
                        text-slate-300
                        md:text-xl
                        lg:text-2xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 7.0
                    }}
                >
                    As a member of{" "}
                    <b className="text-sky-400">
                        STEP BACK
                    </b>
                    , your mission is simple:
                    help people identify phishing attempts.
                </motion.p>


                {/* =========================================
                    MOTTO
                   ========================================= */}

                <motion.p
                    className="
                        mx-auto
                        mt-10
                        max-w-3xl
                        text-center
                        text-2xl
                        font-bold
                        leading-relaxed
                        text-slate-100
                        md:text-3xl
                        lg:text-4xl
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 7.6
                    }}
                >
                    One victim scammed
                    <br />
                    <span className="text-sky-400">
                        is one too many.
                    </span>
                </motion.p>


                {/* =========================================
                    CTA
                   ========================================= */}

                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 8.4
                    }}
                >

                    <Link
                        href="/register"
                        className="
                            rounded-xl
                            border
                            border-sky-500
                            bg-sky-950/40
                            px-8
                            py-4
                            font-mono
                            text-lg
                            font-bold
                            tracking-wider
                            text-sky-300
                            shadow-[0_0_25px_rgba(56,189,248,0.10)]
                            transition-all
                            duration-200
                            hover:scale-105
                            hover:bg-sky-900/40
                            hover:text-white
                            hover:shadow-[0_0_35px_rgba(56,189,248,0.20)]
                        "
                    >
                        JOIN STEP BACK →
                    </Link>

                </motion.div>
                </main>
            </>

        )}

        </>
    );
}