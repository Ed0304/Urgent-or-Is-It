"use client";

export default function Footer() {
    return (
        <footer className="
            border-t
            border-slate-800/80
            bg-slate-950
            px-6
            py-10
            text-center
            text-sm
            text-slate-500
        ">

            <div className="
                mx-auto
                max-w-5xl
            ">

                {/* System indicator */}

                <div className="
                    mb-6
                    flex
                    items-center
                    justify-center
                    gap-2
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-slate-600
                ">

                    <span className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-sky-500
                        shadow-[0_0_8px_rgba(14,165,233,0.7)]
                    " />

                    STEP BACK // SYSTEM ONLINE

                </div>


                {/* Logo */}

                <p className="
                    text-lg
                    font-extrabold
                    tracking-tight
                    text-slate-200
                ">
                    Urgent or Is It?
                </p>


                {/* Description */}

                <p className="
                    mt-2
                    text-slate-500
                ">
                    A phishing awareness game by Edbert Taidy
                </p>


                {/* Version */}

                <p className="
                    mt-4
                    font-mono
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-slate-600
                ">
                    VERSION 0.1.0 // DEMO
                </p>


                {/* Divider */}

                <div className="
                    mx-auto
                    my-6
                    h-px
                    max-w-md
                    bg-slate-800
                " />


                {/* Disclaimer */}

                <p className="
                    mx-auto
                    max-w-2xl
                    text-xs
                    leading-relaxed
                    text-slate-600
                ">
                    Disclaimer: This game is for educational purposes only.
                    All organizations, messages, and characters depicted
                    are fictional unless otherwise stated.
                </p>


                {/* Bottom system text */}

                <p className="
                    mt-6
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-slate-700
                ">
                    FUTUREPURA NETWORK // SECURE CONNECTION
                </p>

            </div>

        </footer>
    );
}