"use client";

import { motion } from "motion/react";
import Register from "./register";
import Link from "next/link";


export default function Home() {
    return (
        <>
            {/* TITLE */}
            <motion.h1
                className="
                    mt-3
                    text-center
                    text-5xl
                    font-extrabold
                    tracking-tight
                    md:text-6xl
                    lg:text-7xl
                "
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
            >
                Urgent or <b>Is It?</b>
            </motion.h1>

            {/* WORLD */}
            <motion.h2
                className="
                    mt-12
                    text-center
                    text-4xl
                    font-bold
                    tracking-tight
                    md:text-5xl
                    lg:text-6xl
                "
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                FuturePura
            </motion.h2>

            <motion.p
                className="
                    mx-auto
                    mt-6
                    max-w-3xl
                    text-center
                    text-lg
                    leading-relaxed
                    md:text-xl
                    lg:text-2xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <b>FuturePura</b> — an alternate universe of our world.
                A place remarkably similar to our own...
            </motion.p>

            <motion.p
                className="
                    mx-auto
                    mt-4
                    max-w-3xl
                    text-center
                    text-lg
                    leading-relaxed
                    md:text-xl
                    lg:text-2xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
            >
                But something is wrong.
            </motion.p>

            {/* THREAT */}
            <motion.h2
                className="
                    mt-20
                    text-center
                    text-4xl
                    font-bold
                    tracking-tight
                    md:text-5xl
                    lg:text-6xl
                "
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
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
                    md:text-xl
                    lg:text-2xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.7 }}
            >
                Messages. Calls. Emails. Offers that seem too important to
                ignore. Warnings that demand an immediate response.
            </motion.p>

            {/* DECEIVIOUS */}
            <motion.h2
                className="
                    mt-20
                    text-center
                    text-4xl
                    font-bold
                    tracking-tight
                    md:text-5xl
                    lg:text-6xl
                "
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.0 }}
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
                    md:text-xl
                    lg:text-2xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.3 }}
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
                    md:text-xl
                    lg:text-2xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.6 }}
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
                    md:text-xl
                    lg:text-2xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.9 }}
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
                    md:text-2xl
                    lg:text-3xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 3.2 }}
            >
                His greatest weapon is something far more familiar:
                <br />
                <b>urgency and fear.</b>
            </motion.p>

            {/* HOPE */}
            <motion.p
                className="
                    mx-auto
                    mt-16
                    max-w-3xl
                    text-center
                    text-xl
                    font-semibold
                    leading-relaxed
                    md:text-2xl
                    lg:text-3xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 4.2 }}
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
                    md:text-xl
                    lg:text-2xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 5.0 }}
            >
                A fellowship of strangers. A group of{" "}
                <i>'nobodies'</i> who came together with one mission:
                stop Deceivious and his schemes.
            </motion.p>

            {/* STEP BACK */}
            <motion.h2
                className="
                    mt-20
                    text-center
                    text-5xl
                    font-extrabold
                    tracking-tight
                    md:text-6xl
                    lg:text-7xl
                "
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 5.8 }}
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
                    md:text-xl
                    lg:text-2xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 6.4 }}
            >
                A group of five founders from different nations, along with
                other members who came before you, strive toward one mission:
                stop Deceivious and his schemes.
            </motion.p>

            {/* PLAYER MISSION */}
            <motion.p
                className="
                    mx-auto
                    mt-8
                    max-w-3xl
                    text-center
                    text-lg
                    leading-relaxed
                    md:text-xl
                    lg:text-2xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 7.0 }}
            >
                As a member of <b>Step Back</b>, your mission is simple:
                help people identify phishing attempts.
            </motion.p>

            {/* MOTTO */}
            <motion.p
                className="
                    mx-auto
                    mt-10
                    max-w-3xl
                    text-center
                    text-2xl
                    font-bold
                    leading-relaxed
                    md:text-3xl
                    lg:text-4xl
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 7.6 }}
            >
                One victim scammed
                <br />
                is one too many.
            </motion.p>

            {/* CTA */}
            <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 8.4 }}
            >
                <Link href="/register"
                    className="
                        rounded-full
                        border-2
                        bg-black
                        px-8
                        py-4
                        text-lg
                        font-bold
                        text-white
                        shadow-lg
                        transition
                        hover:scale-105
                        hover:bg-gray-800
                    "
                >
                    JOIN STEP BACK
                </Link>
            </motion.div>
        </>
    );
}