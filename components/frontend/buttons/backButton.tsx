"use client";

// This is a simple back button component
// that allows users to route back to the previous page.

import { useRouter } from "next/navigation";

export default function BackButton() {
    //Handles client-side routine
    //Works similar like a stack (LIFO)
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="
                rounded-xl
                border-2
                border-zinc-700
                bg-black
                px-5
                py-2
                font-bold
                text-white
                transition
                hover:border-zinc-500
                hover:bg-zinc-800
            "
        >
            ← Back
        </button>
    );
}