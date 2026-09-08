"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextPart, TutorialDialogue } from "./levels";
import BackButton from "../buttons/backButton";

interface LevelIntroProps {
    blurb?: TextPart[];
    messageCount: number;
    tutorial?: TutorialDialogue[];
    children: React.ReactNode;
}

export default function LevelIntro({
    blurb,
    messageCount,
    tutorial,
    children,
}: LevelIntroProps) {

    const [showTutorial, setShowTutorial] = useState(false);
    const [started, setStarted] = useState(false);
    const [currentDialogue, setCurrentDialogue] = useState(0);


    // =========================================
    // NO INTRO
    // =========================================

    if (!blurb && !tutorial) {
        return <>{children}</>;
    }


    // =========================================
    // LEVEL STARTED
    // =========================================

    if (started) {
        return <>{children}</>;
    }


    // =========================================
    // TUTORIAL
    // =========================================

    if (showTutorial && tutorial) {

        const dialogue = tutorial[currentDialogue];

        const lastDialogue =
            currentDialogue === tutorial.length - 1;


        function nextDialogue() {

            if (lastDialogue) {
                setStarted(true);
                return;
            }

            setCurrentDialogue(
                currentDialogue + 1
            );
        }


        return (
            <section className="space-y-8">

                <div className="
                    rounded-2xl
                    border-2
                    border-zinc-800
                    bg-zinc-950
                    p-6
                    md:p-8
                ">

                    <AnimatePresence mode="wait">

                        <motion.div
                            key={currentDialogue}
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -15,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                            className={`
                                flex
                                ${
                                    dialogue.speaker === "You"
                                        ? "justify-end"
                                        : "justify-start"
                                }
                            `}
                        >

                            <div className="max-w-[80%]">

                                <p className={`
                                    mb-2
                                    px-2
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-zinc-500
                                    ${
                                        dialogue.speaker === "You"
                                            ? "text-right"
                                            : ""
                                    }
                                `}>
                                    {dialogue.speaker}
                                </p>


                                <div className={`
                                    rounded-2xl
                                    border-2
                                    px-6
                                    py-4
                                    ${
                                        dialogue.speaker === "You"
                                            ? `
                                                border-zinc-700
                                                bg-zinc-800
                                            `
                                            : `
                                                border-zinc-800
                                                bg-zinc-900
                                            `
                                    }
                                `}>

                                    <p className="
                                        leading-relaxed
                                        text-zinc-200
                                    ">
                                        {dialogue.text}
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    </AnimatePresence>


                    {/* DIALOGUE CONTROLS */}

                    <div className="
                        mt-6
                        flex
                        items-center
                        justify-between
                    ">

                        <p className="
                            text-xs
                            text-zinc-600
                        ">
                            {currentDialogue + 1} / {tutorial.length}
                        </p>


                        <button
                            type="button"
                            onClick={nextDialogue}
                            className="
                                rounded-xl
                                bg-white
                                px-6
                                py-3
                                font-bold
                                text-black
                                transition
                                hover:bg-zinc-200
                            "
                        >
                            {lastDialogue
                                ? "Start Level"
                                : "Continue"
                            }
                        </button>

                    </div>

                </div>


                <div className="flex justify-center">
                    <BackButton />
                </div>

            </section>
        );
    }


    // =========================================
    // BLURB
    // =========================================

    return (
        <section className="
            rounded-2xl
            border-2
            border-zinc-800
            bg-zinc-900
            p-8
        ">

            <p className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-zinc-500
            ">
                Briefing
            </p>


            <div className="mt-8">

                {blurb?.map((part, index) => (

                    <p
                        key={index}
                        className="
                            mt-4
                            leading-relaxed
                            text-zinc-300
                        "
                    >

                        <span
                            className={`
                                ${part.bold ? "font-bold" : ""}
                                ${part.italic ? "italic" : ""}
                            `}
                        >
                            {part.text}
                        </span>

                    </p>

                ))}

            </div>


            <div className="
                mt-10
                flex
                items-center
                justify-between
                border-t
                border-zinc-800
                pt-6
            ">

                <p className="
                    text-sm
                    text-zinc-500
                ">
                    {messageCount} messages to review
                </p>


                <button
                    type="button"
                    onClick={() => {

                        if (tutorial && tutorial.length > 0) {
                            setShowTutorial(true);
                        } else {
                            setStarted(true);
                        }

                    }}
                    className="
                        rounded-xl
                        bg-white
                        px-8
                        py-3
                        font-bold
                        text-black
                        transition
                        hover:bg-zinc-200
                    "
                >
                    {tutorial && tutorial.length > 0
                        ? "Next"
                        : "Begin Level"
                    }
                </button>

            </div>


            <div className="mt-8 flex justify-center">
                <BackButton />
            </div>

        </section>
    );
}