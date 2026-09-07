"use client"

export default function Footer(){
    return(
    <>
    <footer className="
        mt-20
        border-t
        border-zinc-800
        px-6
        py-8
        text-center
        text-sm
        text-zinc-500
    ">
        <p className="font-semibold text-zinc-400">
            Urgent or Is It?
        </p>

        <p className="mt-2">
            A phishing awareness game by Edbert Taidy
        </p>

        <p className="mt-4">
            Version 0.1.0 (Demo)
        </p>

        <p className="
            mx-auto
            mt-4
            max-w-2xl
            leading-relaxed
        ">
            Disclaimer: This game is for educational purposes only.
            All organizations, messages, and characters depicted
            are fictional unless otherwise stated.
        </p>
    </footer>
    </>
    )
}