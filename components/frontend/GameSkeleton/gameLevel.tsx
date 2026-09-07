"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Message {
    sender: string;
    subject?: string;
    message: string;
    chapter: number;
    level: number;
    order: number;
    messageType: "email" | "sms";
    legit: boolean;
}

export default function GameLevel({
    messages,
    levelId,
    chapter,
}: {
    messages: Message[];
    levelId?: number;
    chapter?: number;
}) {

    const [currentMessage, setCurrentMessage] =
        useState(0);

    const [selectedAnswer, setSelectedAnswer] =
        useState<"phish" | "legit" | null>(null);

    const router = useRouter();


    // =========================================
    // CURRENT MESSAGE
    // =========================================

    const message = messages[currentMessage];


    // =========================================
    // FINISH LEVEL
    // =========================================

    async function finishLevel() {

        const token =
            localStorage.getItem("access_token");

        if (
            !token ||
            levelId === undefined ||
            chapter === undefined
        ) {
            return;
        }


        const response = await fetch(
            `http://localhost:3001/users/story-progress/${levelId}`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );


        if (!response.ok) {

            console.error(
                "Failed to complete level"
            );

            return;
        }


        router.push(
            `/storymode/${chapter}`
        );
    }


    // =========================================
    // ANSWER
    // =========================================

    function answer(
        choice: "phish" | "legit"
    ) {

        // Prevent answering twice

        if (selectedAnswer !== null) {
            return;
        }

        setSelectedAnswer(choice);
    }


    // =========================================
    // NEXT MESSAGE
    // =========================================

    function nextMessage() {

        setCurrentMessage(
            currentMessage + 1
        );

        setSelectedAnswer(null);
    }


    // =========================================
    // CHECK ANSWER
    // =========================================

    const isCorrect =
        selectedAnswer !== null &&
        (
            selectedAnswer === "legit"
        ) === message?.legit;


    // =========================================
    // LEVEL COMPLETE FALLBACK
    // =========================================

    if (!message) {

        return (
            <section className="
                rounded-2xl
                border-2
                border-zinc-800
                bg-zinc-900
                p-8
                text-center
            ">

                <h2 className="
                    text-3xl
                    font-extrabold
                ">
                    Level Complete
                </h2>

                <p className="
                    mt-3
                    text-zinc-400
                ">
                    You have reviewed all messages.
                </p>

            </section>
        );
    }


    // =========================================
    // RENDER
    // =========================================

    return (

        <section className="space-y-6">


            {/* =================================
                PROGRESS
               ================================= */}

            <div className="
                text-sm
                text-zinc-500
            ">

                Message {currentMessage + 1}
                {" / "}
                {messages.length}

            </div>


            {/* =================================
                MESSAGE
               ================================= */}

            {message.messageType === "email" ? (

                <EmailMessage
                    message={message}
                />

            ) : (

                <SMSMessage
                    message={message}
                />

            )}


            {/* =================================
                ANSWER BUTTONS
               ================================= */}

            <div className="
                flex
                gap-4
            ">

                <button
                    onClick={() => answer("phish")}
                    disabled={selectedAnswer !== null}
                    className="
                        flex-1
                        rounded-xl
                        border-2
                        border-zinc-700
                        bg-black
                        px-8
                        py-4
                        font-bold
                        transition
                        hover:border-zinc-500
                        hover:bg-zinc-800
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    PHISH
                </button>


                <button
                    onClick={() => answer("legit")}
                    disabled={selectedAnswer !== null}
                    className="
                        flex-1
                        rounded-xl
                        border-2
                        border-zinc-700
                        bg-black
                        px-8
                        py-4
                        font-bold
                        transition
                        hover:border-zinc-500
                        hover:bg-zinc-800
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    LEGIT
                </button>

            </div>


            {/* =================================
                FEEDBACK
               ================================= */}

            {selectedAnswer !== null && (

                <div className="
                    rounded-xl
                    border-2
                    border-zinc-800
                    bg-zinc-900
                    p-6
                ">

                    <h3 className="
                        text-xl
                        font-bold
                    ">

                        {isCorrect
                            ? "Correct!"
                            : "Incorrect!"
                        }

                    </h3>


                    <p className="
                        mt-2
                        text-zinc-400
                    ">

                        This message was actually{" "}

                        <span className="
                            font-bold
                            text-white
                        ">

                            {message.legit
                                ? "LEGIT"
                                : "PHISH"
                            }

                        </span>.

                    </p>


                    {/* =================================
                        NEXT / FINISH BUTTON
                       ================================= */}

                    <button
                        onClick={
                            currentMessage ===
                            messages.length - 1
                                ? finishLevel
                                : nextMessage
                        }
                        className="
                            mt-5
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

                        {currentMessage ===
                        messages.length - 1
                            ? "Finish Level"
                            : "Next"
                        }

                    </button>

                </div>

            )}

        </section>

    );
}


// =========================================
// EMAIL MESSAGE
// =========================================

function EmailMessage({
    message
}: {
    message: Message;
}) {

    return (

        <article className="
            rounded-2xl
            border-2
            border-zinc-800
            bg-zinc-900
            p-8
        ">

            <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-zinc-500
            ">
                Email
            </p>


            <div className="mt-6">

                <p className="
                    text-sm
                    text-zinc-500
                ">
                    From
                </p>

                <p className="
                    mt-1
                    font-semibold
                ">
                    {message.sender}
                </p>

            </div>


            <div className="mt-5">

                <p className="
                    text-sm
                    text-zinc-500
                ">
                    Subject
                </p>

                <h2 className="
                    mt-1
                    text-2xl
                    font-bold
                ">
                    {message.subject}
                </h2>

            </div>


            <div className="
                mt-8
                whitespace-pre-line
                leading-relaxed
                text-zinc-300
            ">
                {message.message}
            </div>

        </article>

    );
}


// =========================================
// SMS MESSAGE
// =========================================

function SMSMessage({
    message
}: {
    message: Message;
}) {

    return (

        <article className="
            rounded-2xl
            border-2
            border-zinc-800
            bg-zinc-900
            p-8
        ">

            <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-zinc-500
            ">
                SMS
            </p>


            <div className="mt-6">

                <p className="
                    text-sm
                    text-zinc-500
                ">
                    From
                </p>

                <p className="
                    mt-1
                    font-semibold
                ">
                    {message.sender}
                </p>

            </div>


            <div className="
                mt-8
                rounded-2xl
                bg-black
                p-6
            ">

                <p className="
                    whitespace-pre-line
                    leading-relaxed
                    text-zinc-300
                ">
                    {message.message}
                </p>

            </div>

        </article>

    );
}