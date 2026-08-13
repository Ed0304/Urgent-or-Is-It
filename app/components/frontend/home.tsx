"use client"

import { motion } from "motion/react";


export default function Home(){
    return(
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
                Messages. Calls. Emails. Offers that seem too important to ignore.
                Warnings that demand an immediate response.
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
                <b><i>human</i></b>.
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
                No supernatural abilities.
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
                transition={{ duration: 0.8, delay: 4.2 }}
            >
                <br/>
                Luckily, the world isn't without hope.
            </motion.p>
            </>
    )



}