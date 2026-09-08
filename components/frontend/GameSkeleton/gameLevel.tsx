"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthGuard from "../AuthGuard";

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
    linkUrl?: string;
}

interface TextPart {
    text: string;
    bold?: boolean;
    italic?: boolean;
}

export default function GameLevel({
    messages,
    levelId,
    chapter,
    finalmessage,
}: {
    messages: Message[];
    levelId?: number;
    chapter?: number;
    finalmessage?: TextPart[];
}) {
    const router = useRouter();

    const [currentMessage, setCurrentMessage] = useState(0);
    const [selectedAnswer, setSelectedAnswer] =
        useState<"phish" | "legit" | null>(null);

    const [correctAnswers, setCorrectAnswers] = useState(0);

    const [levelFinished, setLevelFinished] =
        useState(false);

    const [showFinalMessage, setShowFinalMessage] =
        useState(false);

    const [finishing, setFinishing] =
        useState(false);


    // =========================================
    // CURRENT MESSAGE
    // =========================================

    const message = messages[currentMessage];


    // =========================================
    // FINISH LEVEL
    // =========================================

    async function finishLevel() {

        if (
            levelId === undefined ||
            chapter === undefined
        ) {
            console.error(
                "Missing levelId or chapter"
            );
            return;
        }

        const token =
            localStorage.getItem("access_token");

        if (!token) {
            console.error(
                "No access token found"
            );
            return;
        }

        setFinishing(true);

        try {

            const response = await fetch(
                `http://localhost:3001/users/story-progress/${levelId}`,
                {
                    method: "POST",
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                console.error(
                    "Failed to complete level"
                );

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

        const percentage =
            Math.round(
                (correctAnswers /
                    messages.length) * 100
            );

        const feedback =
            getFeedback(
                correctAnswers,
                messages.length
            );


        // =====================================
        // FINAL MESSAGE / DEMO DISCLAIMER
        // =====================================

        if (showFinalMessage) {

            return (
                <AuthGuard>

                    <section className="
                        rounded-2xl
                        border
                        border-sky-900/60
                        bg-slate-950/90
                        p-8
                        shadow-[0_0_40px_rgba(56,189,248,0.06)]
                        md:p-10
                    ">

                        {/* SYSTEM LABEL */}

                        <p className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.3em]
                            text-sky-500
                        ">
                            STEP BACK // TRANSMISSION
                        </p>


                        {/* FINAL MESSAGE */}

                        <div className="
                            mt-8
                            space-y-5
                            text-center
                        ">

                            {finalmessage?.map(
                                (part, index) => (

                                    <p
                                        key={index}
                                        className={`
                                            leading-relaxed
                                            text-zinc-300
                                            ${part.bold
                                                ? "font-bold text-slate-100"
                                                : ""
                                            }
                                            ${part.italic
                                                ? "italic"
                                                : ""
                                            }
                                        `}
                                    >
                                        {part.text}
                                    </p>

                                )
                            )}

                        </div>


                        {/* DEMO DISCLAIMER */}

                        <div className="
                            mt-10
                            rounded-xl
                            border
                            border-slate-800
                            bg-black/40
                            p-5
                            text-left
                        ">

                            <p className="
                                font-mono
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-slate-500
                            ">
                                Demo Notice
                            </p>

                            <p className="
                                mt-3
                                text-sm
                                leading-relaxed
                                text-slate-500
                            ">
                                You have reached the end of the
                                currently available story content.
                                This version of Urgent or Is It?
                                is a demo, and additional chapters
                                and levels will be added in a future
                                version.
                            </p>

                        </div>


                        {/* FINISH */}

                        <button
                            type="button"
                            onClick={finishLevel}
                            disabled={finishing}
                            className="
                                mt-8
                                w-full
                                rounded-xl
                                border
                                border-sky-500
                                bg-sky-500
                                px-6
                                py-3
                                font-bold
                                text-slate-950
                                transition
                                hover:bg-sky-400
                                hover:border-sky-400
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >
                            {finishing
                                ? "Saving..."
                                : "Return to Chapter Select"
                            }
                        </button>

                    </section>

                </AuthGuard>
            );
        }


        // =====================================
        // NORMAL RESULTS SCREEN
        // =====================================

        return (
            <AuthGuard>

                <section className="
                    rounded-2xl
                    border
                    border-sky-900/60
                    bg-slate-950/90
                    p-8
                    text-center
                    shadow-[0_0_40px_rgba(56,189,248,0.06)]
                    md:p-10
                ">

                    {/* HEADER */}

                    <p className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.3em]
                        text-sky-500
                    ">
                        Level Complete
                    </p>


                    {/* SCORE */}

                    <h2 className="
                        mt-6
                        text-6xl
                        font-extrabold
                        text-sky-400
                        drop-shadow-[0_0_15px_rgba(56,189,248,0.25)]
                    ">
                        {percentage}%
                    </h2>


                    {/* FEEDBACK */}

                    <h3 className="
                        mt-4
                        text-3xl
                        font-bold
                    ">
                        {feedback.title}
                    </h3>


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
                        font-mono
                        text-sm
                        text-sky-500
                    ">
                        {correctAnswers} / {messages.length} correct
                    </p>


                    {/* CONTINUE */}

                    <button
                        type="button"
                        onClick={() => {

                            if (
                                finalmessage &&
                                finalmessage.length > 0
                            ) {
                                setShowFinalMessage(true);
                            } else {
                                finishLevel();
                            }

                        }}
                        disabled={finishing}
                        className="
                            mt-8
                            rounded-xl
                            border
                            border-sky-500
                            bg-sky-500
                            px-8
                            py-3
                            font-bold
                            text-slate-950
                            transition
                            hover:border-sky-400
                            hover:bg-sky-400
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        {finalmessage &&
                        finalmessage.length > 0
                            ? "Continue"
                            : finishing
                                ? "Saving..."
                                : "Finish Level"
                        }
                    </button>

                </section>

            </AuthGuard>
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
            (choice === "legit") ===
            message.legit;

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
        <AuthGuard>

            <section className="
                relative
                space-y-6
            ">

                {/* PROGRESS */}

                <div className="
                    font-mono
                    text-sm
                    tracking-wider
                    text-sky-400
                ">
                    Message {currentMessage + 1}
                    {" / "}
                    {messages.length}
                </div>


                {/* MESSAGE */}

                {message.messageType === "Email" ? (

                    <EmailMessage
                        message={message}
                    />

                ) : (

                    <SMSMessage
                        message={message}
                    />

                )}


                {/* ANSWER BUTTONS */}

                <div className="
                    flex
                    gap-4
                ">

                    <button
                        type="button"
                        onClick={() =>
                            answer("phish")
                        }
                        disabled={
                            selectedAnswer !== null
                        }
                        className="
                            flex-1
                            rounded-xl
                            border
                            border-red-900/70
                            bg-red-950/20
                            px-8
                            py-4
                            font-bold
                            tracking-wider
                            text-red-400
                            transition
                            hover:border-red-500
                            hover:bg-red-950/40
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        PHISH
                    </button>


                    <button
                        type="button"
                        onClick={() =>
                            answer("legit")
                        }
                        disabled={
                            selectedAnswer !== null
                        }
                        className="
                            flex-1
                            rounded-xl
                            border
                            border-emerald-900/70
                            bg-emerald-950/20
                            px-8
                            py-4
                            font-bold
                            tracking-wider
                            text-emerald-400
                            transition
                            hover:border-emerald-500
                            hover:bg-emerald-950/40
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        LEGIT
                    </button>

                </div>


                {/* FEEDBACK */}

                {selectedAnswer !== null && (

                    <div className="
                        rounded-xl
                        border
                        border-sky-900/60
                        bg-slate-950
                        p-6
                        shadow-[0_0_40px_rgba(56,189,248,0.06)]
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
                                border
                                border-sky-500
                                bg-sky-500
                                px-6
                                py-3
                                font-bold
                                text-slate-950
                                transition
                                hover:bg-sky-400
                            "
                        >
                            {currentMessage ===
                            messages.length - 1
                                ? "View Results"
                                : "Next"
                            }
                        </button>

                    </div>

                )}

            </section>

        </AuthGuard>
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
                "You handled those messages well.",
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
            border
            border-sky-900/60
            bg-slate-950/90
            p-8
            shadow-[0_0_30px_rgba(56,189,248,0.04)]
        ">

            <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-sky-500
            ">
                Email
            </p>


            <div className="mt-6">

                <p className="
                    text-sm
                    text-slate-500
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
                    text-slate-500
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


            {message.linkText &&
             message.linkUrl && (

                <div className="
                    group
                    relative
                    mt-8
                ">

                    <button
                        type="button"
                        className="
                            rounded-xl
                            border
                            border-sky-900/70
                            bg-slate-950
                            px-6
                            py-3
                            font-bold
                            text-sky-400
                            transition
                            hover:border-sky-500
                            hover:bg-sky-950/40
                        "
                    >
                        {message.linkText}
                    </button>


                    {/* URL */}

                    <div className="
                        pointer-events-none
                        absolute
                        bottom-full
                        left-0
                        mb-2
                        hidden
                        max-w-xl
                        rounded-lg
                        border
                        border-sky-900
                        bg-slate-950
                        px-4
                        py-2
                        font-mono
                        text-sm
                        text-sky-300
                        shadow-xl
                        group-hover:block
                    ">
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
            border
            border-sky-900/60
            bg-slate-950/90
            p-8
            shadow-[0_0_30px_rgba(56,189,248,0.04)]
        ">

            <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-sky-500
            ">
                SMS
            </p>


            <div className="mt-6">

                <p className="
                    text-sm
                    text-sky-500
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