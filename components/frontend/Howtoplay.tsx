"use client";

import AuthGuard from "./AuthGuard";

export default function HowToPlay() {
    return (
        <AuthGuard>
            <main className="
                bg-slate-950
                min-h-screen
                px-6
                py-12
                text-slate-100
            ">

                {/* =========================================
                    HEADER
                   ========================================= */}

                <div className="
                    mx-auto
                    max-w-5xl
                    text-center
                ">

                    <p className="
                        font-mono
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.3em]
                        text-sky-500
                    ">
                        STEP BACK // TRAINING
                    </p>

                    <h1 className="
                        mt-3
                        text-4xl
                        font-extrabold
                        text-slate-100
                        md:text-5xl
                    ">
                        How to Play
                    </h1>

                    <p className="
                        mt-3
                        text-slate-400
                    ">
                        Learn how to investigate suspicious messages.
                    </p>

                </div>


                {/* =========================================
                    INSTRUCTIONS
                   ========================================= */}

                <div className="
                    mx-auto
                    mt-12
                    max-w-4xl
                    space-y-6
                ">

                    <InstructionSection title="1. Investigate the Message">

                        <p>
                            Read the message carefully before making your decision.
                        </p>

                        <p className="mt-3">
                            Pay attention to the sender, wording, spelling,
                            and anything else that seems unusual.
                        </p>

                    </InstructionSection>


                    <InstructionSection title="2. Inspect the Links">

                        <p>
                            Some messages may contain links.
                            Hover over them to see where they actually lead.
                        </p>

                        <p className="mt-3">
                            Don't rely solely on the text displayed on the link.
                        </p>

                        {/* Screenshot can be added later */}
                        {/* image="/images/how-to-play/link-example.png" */}

                    </InstructionSection>


                    <InstructionSection title="3. Choose PHISH or LEGIT">

                        <p>
                            Once you have investigated the message thoroughly,
                            decide whether it is a phishing message or a legitimate one.
                        </p>


                        <div className="
                            mt-6
                            flex
                            justify-center
                            gap-4
                        ">

                            <span className="
                                rounded-xl
                                border
                                border-red-900/70
                                bg-red-950/20
                                px-6
                                py-3
                                font-mono
                                font-bold
                                tracking-wider
                                text-red-400
                            ">
                                PHISH
                            </span>

                            <span className="
                                rounded-xl
                                border
                                border-emerald-900/70
                                bg-emerald-950/20
                                px-6
                                py-3
                                font-mono
                                font-bold
                                tracking-wider
                                text-emerald-400
                            ">
                                LEGIT
                            </span>

                        </div>

                    </InstructionSection>


                    <InstructionSection title="4. Take Your Time">

                        <p>
                            Don't rush your decision.
                        </p>

                        <p className="mt-3">
                            Look at all the available clues before submitting
                            your answer.
                        </p>

                    </InstructionSection>


                    <InstructionSection title="5. Check Your Performance">

                        <p>
                            Your performance is evaluated based on how many
                            messages you identify correctly.
                        </p>


                        <div className="
                            mt-6
                            overflow-hidden
                            rounded-xl
                            border
                            border-sky-900/60
                        ">

                            {/* TABLE HEADER */}

                            <div className="
                                grid
                                grid-cols-2
                                border-b
                                border-sky-900/60
                                bg-sky-950/30
                                p-4
                                font-mono
                                text-sm
                                font-bold
                                uppercase
                                tracking-wider
                                text-sky-400
                            ">
                                <span>Score</span>
                                <span>Feedback</span>
                            </div>


                            {/* 100% */}

                            <div className="
                                grid
                                grid-cols-2
                                border-b
                                border-slate-800
                                bg-slate-950/40
                                p-4
                                transition
                                hover:bg-slate-900
                            ">
                                <span className="
                                    font-mono
                                    font-bold
                                    text-emerald-400
                                ">
                                    100%
                                </span>

                                <span className="text-slate-300">
                                    Perfect! You handled those messages well.
                                </span>
                            </div>


                            {/* 90% */}

                            <div className="
                                grid
                                grid-cols-2
                                border-b
                                border-slate-800
                                bg-slate-950/40
                                p-4
                                transition
                                hover:bg-slate-900
                            ">
                                <span className="
                                    font-mono
                                    font-bold
                                    text-sky-400
                                ">
                                    90%
                                </span>

                                <span className="text-slate-300">
                                    Excellent work, just a bit of additional thorough checks.
                                </span>
                            </div>


                            {/* 70% */}

                            <div className="
                                grid
                                grid-cols-2
                                border-b
                                border-slate-800
                                bg-slate-950/40
                                p-4
                                transition
                                hover:bg-slate-900
                            ">
                                <span className="
                                    font-mono
                                    font-bold
                                    text-yellow-400
                                ">
                                    70%
                                </span>

                                <span className="text-slate-300">
                                    Good job, but you should take more time on inspecting them.
                                </span>
                            </div>


                            {/* 50% */}

                            <div className="
                                grid
                                grid-cols-2
                                bg-slate-950/40
                                p-4
                                transition
                                hover:bg-slate-900
                            ">
                                <span className="
                                    font-mono
                                    font-bold
                                    text-orange-400
                                ">
                                    50%
                                </span>

                                <span className="text-slate-300">
                                    I believe you are much better than this, don't rush!
                                </span>
                            </div>

                        </div>

                    </InstructionSection>


                    {/* =========================================
                        STEP BACK RULE
                       ========================================= */}

                    <InstructionSection title="STEP BACK's Rule">

                        <p className="
                            border-l-2
                            border-sky-500
                            pl-5
                            text-xl
                            font-bold
                            italic
                            text-sky-300
                        ">
                            "Trust your gut. If it feels off, then probably it is."
                        </p>

                    </InstructionSection>

                </div>

            </main>
        </AuthGuard>
    );
}


// =========================================
// INSTRUCTION SECTION
// =========================================

function InstructionSection({
    title,
    children,
    image,
}: {
    title: string;
    children: React.ReactNode;
    image?: string;
}) {

    return (
        <section className="
            rounded-2xl
            border
            border-sky-900/60
            bg-slate-950/90
            p-8
            shadow-[0_0_30px_rgba(56,189,248,0.04)]
            transition
            hover:border-sky-800
        ">

            <h2 className="
                text-2xl
                font-bold
                text-slate-100
            ">
                {title}
            </h2>


            <div className="
                mt-4
                leading-relaxed
                text-slate-300
            ">
                {children}
            </div>


            {/* =========================================
                OPTIONAL SCREENSHOT
               ========================================= */}

            {image && (

                <div className="
                    mt-6
                    overflow-hidden
                    rounded-xl
                    border
                    border-sky-900/60
                    bg-slate-900
                ">

                    <img
                        src={image}
                        alt=""
                        className="
                            w-full
                            object-cover
                        "
                    />

                </div>

            )}

        </section>
    );
}