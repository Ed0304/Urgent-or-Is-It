"use client";

import { useState } from "react";


export default function GameLevel({
    params
}: {
    params: {
        chapter: string;
        level: string;
    };
}) {

    const [stage, setStage] = useState(0);


    return (
        <main className="
            min-h-screen
            bg-black
            px-6
            py-12
            text-white
        ">

            <div className="
                mx-auto
                max-w-4xl
            ">


                {/* =================================
                    STAGE 0
                    STORY BLURB
                   ================================= */}

                {stage === 0 && (

                    <StoryBlurb
                        onContinue={() => setStage(1)}
                    />

                )}


                {/* =================================
                    STAGE 1
                    TUTORIAL
                   ================================= */}

                {stage === 1 && (

                    <Tutorial
                        onContinue={() => setStage(2)}
                    />

                )}


                {/* =================================
                    STAGE 2
                    GAME
                   ================================= */}

                {stage === 2 && (

                    <ActualGame />

                )}

            </div>

        </main>
    );
}


/* =========================================
   STORY BLURB
   ========================================= */

function StoryBlurb({
    onContinue
}: {
    onContinue: () => void;
}) {

    return (
        <section className="
            flex
            min-h-[80vh]
            flex-col
            items-center
            justify-center
            text-center
        ">

            <p className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-zinc-500
            ">
                Futurepura
            </p>

            <h1 className="
                mt-4
                text-5xl
                font-extrabold
                tracking-tight
                md:text-7xl
            ">
                Futurepura, 20XX.
            </h1>

            <p className="
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-zinc-300
                md:text-2xl
            ">
                A modern, civilized society — a world where
                people have high digital literacy.
            </p>

            <p className="
                mt-6
                text-xl
                font-semibold
                text-zinc-400
                md:text-2xl
            ">
                But something is wrong.
            </p>

            <button
                onClick={onContinue}
                className="
                    mt-12
                    rounded-xl
                    border-2
                    border-zinc-700
                    bg-zinc-900
                    px-10
                    py-4
                    text-lg
                    font-bold
                    shadow-xl
                    transition
                    hover:-translate-y-1
                    hover:border-zinc-500
                    hover:bg-zinc-800
                "
            >
                Continue
            </button>

        </section>
    );
}


/* =========================================
   TUTORIAL
   ========================================= */

function Tutorial({
    onContinue
}: {
    onContinue: () => void;
}) {

    return (
        <section className="
            flex
            min-h-[80vh]
            flex-col
            justify-center
        ">

            <p className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-zinc-500
            ">
                STEP BACK
            </p>

            <h1 className="
                mt-3
                text-4xl
                font-extrabold
                md:text-6xl
            ">
                Welcome to STEP BACK
            </h1>

            <div className="
                mt-8
                space-y-4
                text-lg
                leading-relaxed
                text-zinc-300
            ">

                <p>
                    This is your first day of training.
                </p>

                <p>
                    Before that, I want you to know what
                    kind of emails claim to be from legitimate
                    companies that we deal with.
                </p>

                <p>
                    Take your time to read this.
                </p>

                <p>
                    First — press the
                    {" "}
                    <b>Investigate</b>
                    {" "}
                    button.
                </p>

            </div>

            <button
                onClick={onContinue}
                className="
                    mt-10
                    w-fit
                    rounded-xl
                    border-2
                    border-zinc-700
                    bg-zinc-900
                    px-8
                    py-3
                    font-bold
                    transition
                    hover:border-zinc-500
                    hover:bg-zinc-800
                "
            >
                Continue
            </button>

        </section>
    );
}


/* =========================================
   ACTUAL GAME
   ========================================= */

function ActualGame() {

    const [investigated, setInvestigated] = useState(false);


    return (
        <section>

            <p className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-zinc-500
            ">
                LEVEL 1
            </p>

            <h1 className="
                mt-3
                text-4xl
                font-extrabold
            ">
                First Day Training
            </h1>


            {/* EMAIL */}

            <div className="
                mt-10
                rounded-2xl
                border-2
                border-zinc-700
                bg-zinc-900
                p-8
            ">

                <h2 className="
                    text-2xl
                    font-bold
                ">
                    Suspicious Email
                </h2>

                <p className="
                    mt-6
                    leading-relaxed
                    text-zinc-300
                ">
                    Your email inbox contains a new message.
                </p>


                {!investigated && (

                    <button
                        onClick={() => setInvestigated(true)}
                        className="
                            mt-8
                            rounded-xl
                            border-2
                            border-zinc-700
                            bg-black
                            px-8
                            py-3
                            font-bold
                            transition
                            hover:border-zinc-500
                            hover:bg-zinc-800
                        "
                    >
                        Investigate
                    </button>

                )}


                {investigated && (

                    <div className="
                        mt-8
                        rounded-xl
                        border
                        border-zinc-700
                        bg-black
                        p-6
                    ">

                        <h3 className="
                            font-bold
                        ">
                            Investigation Results
                        </h3>

                        <p className="
                            mt-4
                            text-zinc-400
                        ">
                            Investigation information goes here.
                        </p>


                        <div className="
                            mt-6
                            flex
                            gap-4
                        ">

                            <button className="
                                rounded-xl
                                border-2
                                border-zinc-700
                                px-6
                                py-3
                                font-bold
                                transition
                                hover:bg-zinc-800
                            ">
                                Phish
                            </button>

                            <button className="
                                rounded-xl
                                border-2
                                border-zinc-700
                                px-6
                                py-3
                                font-bold
                                transition
                                hover:bg-zinc-800
                            ">
                                Legit
                            </button>

                        </div>

                    </div>

                )}

            </div>

        </section>
    );
}