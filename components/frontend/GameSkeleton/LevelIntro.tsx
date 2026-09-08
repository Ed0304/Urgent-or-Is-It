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
            <section className="
                space-y-8
            ">

                {/* =========================================
                    TUTORIAL CONVERSATION
                    ========================================= */}

                <div className="
                    rounded-2xl
                    border
                    border-sky-900/60
                    bg-slate-950/90
                    p-6
                    shadow-[0_0_35px_rgba(56,189,248,0.05)]
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

                                {/* SPEAKER */}

                                <p className={`
                                    mb-2
                                    px-2
                                    font-mono
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-sky-500
                                    ${
                                        dialogue.speaker === "You"
                                            ? "text-right text-slate-500"
                                            : ""
                                    }
                                `}>
                                    {dialogue.speaker}
                                </p>


                                {/* DIALOGUE BUBBLE */}

                                <div className={`
                                    rounded-2xl
                                    border
                                    px-6
                                    py-4
                                    shadow-[0_0_20px_rgba(0,0,0,0.15)]
                                    ${
                                        dialogue.speaker === "You"
                                            ? `
                                                border-slate-700
                                                bg-slate-800/80
                                            `
                                            : `
                                                border-sky-900/60
                                                bg-sky-950/20
                                            `
                                    }
                                `}>

                                    <p className="
                                        leading-relaxed
                                        text-slate-200
                                    ">
                                        {dialogue.text}
                                    </p>

                                </div>

                            </div>

                        </motion.div>

                    </AnimatePresence>


                    {/* =========================================
                        DIALOGUE CONTROLS
                        ========================================= */}

                    <div className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        border-t
                        border-slate-800
                        pt-5
                    ">

                        <p className="
                            font-mono
                            text-xs
                            tracking-wider
                            text-slate-600
                        ">
                            {String(currentDialogue + 1).padStart(2, "0")}
                            {" / "}
                            {String(tutorial.length).padStart(2, "0")}
                        </p>


                        <button
                            type="button"
                            onClick={nextDialogue}
                            className="
                                rounded-xl
                                border
                                border-sky-700/70
                                bg-sky-950/30
                                px-6
                                py-3
                                font-bold
                                tracking-wider
                                text-sky-400
                                transition
                                hover:border-sky-400
                                hover:bg-sky-950/50
                                hover:text-sky-300
                            "
                        >
                            {lastDialogue
                                ? "START LEVEL"
                                : "CONTINUE"
                            }
                        </button>

                    </div>

                </div>


                {/* BACK BUTTON */}

                <div className="
                    flex
                    justify-center
                ">
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
            border
            border-sky-900/60
            bg-slate-950/90
            p-8
            shadow-[0_0_35px_rgba(56,189,248,0.05)]
        ">

            {/* =========================================
                BRIEFING HEADER
                ========================================= */}

            <p className="
                font-mono
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-sky-500
            ">
                STEP BACK // BRIEFING
            </p>


            {/* =========================================
                STORY BLURB
                ========================================= */}

            <div className="
                mt-8
            ">

                {blurb?.map((part, index) => (

                    <p
                        key={index}
                        className="
                            mt-4
                            leading-relaxed
                            text-slate-300
                        "
                    >

                        <span
                            className={`
                                ${
                                    part.bold
                                        ? "font-bold text-slate-100"
                                        : ""
                                }
                                ${
                                    part.italic
                                        ? "italic"
                                        : ""
                                }
                            `}
                        >
                            {part.text}
                        </span>

                    </p>

                ))}

            </div>


            {/* =========================================
                BRIEFING FOOTER
                ========================================= */}

            <div className="
                mt-10
                flex
                items-center
                justify-between
                border-t
                border-slate-800
                pt-6
            ">

                <p className="
                    font-mono
                    text-xs
                    tracking-wider
                    text-slate-500
                ">
                    {String(messageCount).padStart(2, "0")} MESSAGES TO REVIEW
                </p>


                {/* NEXT BUTTON */}

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
                        border
                        border-sky-700/70
                        bg-sky-950/30
                        px-8
                        py-3
                        font-bold
                        tracking-wider
                        text-sky-400
                        transition
                        hover:border-sky-400
                        hover:bg-sky-950/50
                        hover:text-sky-300
                    "
                >
                    {tutorial && tutorial.length > 0
                        ? "NEXT"
                        : "BEGIN LEVEL"
                    }
                </button>

            </div>


            {/* BACK BUTTON */}

            <div className="
                mt-8
                flex
                justify-center
            ">
                <BackButton />
            </div>

        </section>
    );
}