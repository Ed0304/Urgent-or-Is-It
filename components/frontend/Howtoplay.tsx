"use client";

export default function HowToPlay() {
    return (
        <main className="min-h-screen px-6 py-12">

            {/* Header */}

            <div className="mx-auto max-w-5xl text-center">
                <h1 className="
                    text-4xl
                    font-extrabold
                    md:text-5xl
                ">
                    How to Play
                </h1>

                <p className="
                    mt-3
                    text-zinc-400
                ">
                    Learn how to investigate suspicious messages.
                </p>
            </div>


            {/* Instructions */}

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
                            border-2
                            border-zinc-700
                            bg-black
                            px-6
                            py-3
                            font-bold
                        ">
                            PHISH
                        </span>

                        <span className="
                            rounded-xl
                            border-2
                            border-zinc-700
                            bg-black
                            px-6
                            py-3
                            font-bold
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
                        border-zinc-700
                    ">
                        <div className="
                            grid
                            grid-cols-2
                            border-b
                            border-zinc-700
                            bg-zinc-800
                            p-4
                            font-bold
                        ">
                            <span>Score</span>
                            <span>Feedback</span>
                        </div>

                        <div className="grid grid-cols-2 border-b border-zinc-800 p-4">
                            <span>100%</span>
                            <span>Perfect! You handled those messages well.</span>
                        </div>

                        <div className="grid grid-cols-2 border-b border-zinc-800 p-4">
                            <span>90%</span>
                            <span>Excellent work, just a bit of additional thorough checks.</span>
                        </div>

                        <div className="grid grid-cols-2 border-b border-zinc-800 p-4">
                            <span>70%</span>
                            <span>Good job, but you should take more time on inspecting them.</span>
                        </div>

                        <div className="grid grid-cols-2 p-4">
                            <span>50%</span>
                            <span>I believe you are much better than this, don't rush!</span>
                        </div>
                    </div>
                </InstructionSection>


                <InstructionSection title="STEP BACK's Rule">
                    <p className="
                        text-xl
                        font-bold
                        italic
                    ">
                        "Trust your gut. If it feels off, then it feels off."
                    </p>
                </InstructionSection>

            </div>

        </main>
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
            border-2
            border-zinc-800
            bg-zinc-900
            p-8
        ">

            <h2 className="text-2xl font-bold">
                {title}
            </h2>

            <div className="mt-4 text-zinc-300">
                {children}
            </div>

            {image && (
                <div className="mt-6">
                    <img
                        src={image}
                        alt=""
                        className="
                            w-full
                            rounded-xl
                            border
                            border-zinc-700
                        "
                    />
                </div>
            )}

        </section>
    );
}