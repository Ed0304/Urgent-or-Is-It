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
    messageType: "Email" | "sms";
    legit: boolean;
    linkText?: string;
    linkUrl?:string;
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

    const router = useRouter();

    const [currentMessage, setCurrentMessage] = useState(0);

    const [selectedAnswer, setSelectedAnswer] =
        useState<"phish" | "legit" | null>(null);

    const [correctAnswers, setCorrectAnswers] = useState(0);

    const [levelFinished, setLevelFinished] = useState(false);

    const [finishing, setFinishing] = useState(false);

    console.log(messages)

    // =========================================
    // CURRENT MESSAGE
    // =========================================

    const message = messages[currentMessage];


    // =========================================
    // FINISH LEVEL
    // =========================================

    async function finishLevel() {

        if (levelId === undefined || chapter === undefined) {
            console.error("Missing levelId or chapter");
            return;
        }

        const token =
            localStorage.getItem("access_token");

        if (!token) {
            console.error("No access token found");
            return;
        }

        setFinishing(true);

        try {

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
                console.error("Failed to complete level");
                setFinishing(false);
                return;
            }

            router.push(
                `/storymode/${chapter}`
            );

        } catch (error) {

            console.error(
                "Failed to save story progress",
                error
            );

            setFinishing(false);
        }
    }


    // =========================================
    // RESULTS
    // =========================================

    if (levelFinished) {

        const percentage = Math.round(
            (correctAnswers / messages.length) * 100
        );

        const feedback = getFeedback(
            correctAnswers,
            messages.length
        );


        return (
            <section className="
                rounded-2xl
                border-2
                border-zinc-800
                bg-zinc-900
                p-8
                text-center
            ">

                <p className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-zinc-500
                ">
                    Level Complete
                </p>


                {/* SCORE */}

                <h2 className="
                    mt-6
                    text-6xl
                    font-extrabold
                ">
                    {percentage}%
                </h2>


                {/* FEEDBACK TITLE */}

                <h3 className="
                    mt-4
                    text-3xl
                    font-bold
                ">
                    {feedback.title}
                </h3>


                {/* FEEDBACK MESSAGE */}

                <p className="
                    mx-auto
                    mt-4
                    max-w-xl
                    leading-relaxed
                    text-zinc-400
                ">
                    {feedback.message}
                </p>


                {/* SCORE BREAKDOWN */}

                <p className="
                    mt-6
                    text-zinc-500
                ">
                    {correctAnswers} / {messages.length} correct
                </p>


                {/* FINISH */}

                <button
                    type="button"
                    onClick={finishLevel}
                    disabled={finishing}
                    className="
                        mt-8
                        rounded-xl
                        bg-white
                        px-8
                        py-3
                        font-bold
                        text-black
                        transition
                        hover:bg-zinc-200
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    {finishing
                        ? "Saving..."
                        : "Finish Level"
                    }
                </button>

            </section>
        );
    }


    // =========================================
    // NO MESSAGE
    // =========================================

    if (!message) {

        setLevelFinished(true);

        return null;
    }


    // =========================================
    // ANSWER
    // =========================================

    function answer(
        choice: "phish" | "legit"
    ) {

        if (selectedAnswer !== null) {
            return;
        }

        setSelectedAnswer(choice);


        const correct =
            (choice === "legit") === message.legit;


        if (correct) {

            setCorrectAnswers(
                (current) => current + 1
            );

        }
    }


    // =========================================
    // NEXT MESSAGE
    // =========================================

    function nextMessage() {

        if (
            currentMessage ===
            messages.length - 1
        ) {

            setLevelFinished(true);
            return;
        }

        setCurrentMessage(
            (current) => current + 1
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
        ) === message.legit;


    // =========================================
    // RENDER GAME
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

            {message.messageType === "Email" ? (

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
                    type="button"
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
                    type="button"
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


                    <button
                        type="button"
                        onClick={nextMessage}
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
                        {currentMessage === messages.length - 1
                            ? "View Results"
                            : "Next"
                        }
                    </button>

                </div>

            )}

        </section>
    );
}


// =============================================
// FEEDBACK SYSTEM
// =============================================

function getFeedback(
    correct: number,
    total: number
) {

    const percentage =
        (correct / total) * 100;


    if (percentage === 100) {

        return {
            title: "Perfect!",
            message:
                "You handled those emails well.",
        };

    }


    if (percentage >= 90) {

        return {
            title: "Excellent!",
            message:
                "Just a bit of additional thorough checks.",
        };

    }


    if (percentage >= 70) {

        return {
            title: "Good job!",
            message:
                "But you should take more time on inspecting them.",
        };

    }


    if (percentage >= 50) {

        return {
            title:
                "I believe you are much better than this!",
            message:
                "Don't rush!",
        };

    }


    return {
        title: "Keep practicing!",
        message:
            "Take your time and inspect each message carefully.",
    };
}


// =============================================
// EMAIL
// =============================================

function EmailMessage({
    message,
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

                {message.linkText && message.linkUrl && (
            <div className="relative mt-8 group">

                <button
                    type="button"
                    className="
                        rounded-xl
                        border-2
                        border-zinc-700
                        bg-black
                        px-6
                        py-3
                        font-bold
                        transition
                        hover:border-zinc-500
                        hover:bg-zinc-800
                    "
                >
                    {message.linkText}
                </button>

                {/* URL shown on hover */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-full
                        left-0
                        mb-2
                        hidden
                        max-w-xl
                        rounded-lg
                        border
                        border-zinc-700
                        bg-black
                        px-4
                        py-2
                        text-sm
                        text-zinc-300
                        shadow-xl
                        group-hover:block
                    "
                >
                    {message.linkUrl}
                </div>

    </div>
)}

        </article>
    );
}


// =============================================
// SMS
// =============================================

function SMSMessage({
    message,
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