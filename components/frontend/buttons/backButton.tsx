"use client";

// This is a simple back button component
// that allows users to route back to the previous page.

import { useRouter } from "next/navigation";

export default function BackButton() {
    // Handles client-side routing
    // Works similar to a stack (LIFO)
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-slate-700
                bg-slate-950
                px-5
                py-2.5
                font-mono
                text-sm
                font-bold
                uppercase
                tracking-wider
                text-slate-400
                transition
                hover:border-sky-700
                hover:bg-sky-950/30
                hover:text-sky-400
                hover:shadow-[0_0_15px_rgba(56,189,248,0.12)]
                active:scale-[0.98]
            "
        >
            <span className="text-base">←</span>
            Back
        </button>
    );
}