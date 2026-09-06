"use client";

import { useState } from "react";
import { TextPart } from "./levels";
import BackButton from "../buttons/backButton";
interface LevelIntroProps {
    blurb?: TextPart[];
    messageCount: number;
    children: React.ReactNode;
}

export default function LevelIntro({
    blurb,
    messageCount,
    children,
}: LevelIntroProps) {

    const [started, setStarted] = useState(false);


    // =========================================
    // NO BLURB
    // =========================================

    // Some levels don't have a story introduction.
    // Skip the intro and go directly to the game.

    if (!blurb) {
        return <>{children}</>;
    }


    // =========================================
    // LEVEL STARTED
    // =========================================

    // The player has clicked "Begin Level".
    // Render the actual GameLevel.

    if (started) {
        return <>{children}</>;
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

                {blurb.map((part, index) => (

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
                    onClick={() => setStarted(true)}
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
                    Begin Level
                </button>
                <div className="mt-8 flex justify-center">
                    <BackButton />
                </div>


            </div>

        </section>
    );
}