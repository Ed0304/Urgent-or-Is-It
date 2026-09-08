"use client";

// This is the page for those who want to learn more about the game.
//
// It is unlocked by default and recommended for first-timers.

import { useState } from "react";
import { LoreItems } from "./loreData/loreData";
import BackButton from "./buttons/backButton";
import AuthGuard from "./AuthGuard";

interface LoreInfo {
    name: string;
    description: string;
    imageUrl?: string;
}

export default function Lore() {

    const [selectedLore, setSelectedLore] =
        useState<LoreInfo | null>(null);

    return (
        <AuthGuard>
            <main className="
                bg-slate-950
                min-h-screen
                px-6
                py-12
                text-slate-100
            ">

                <BackButton />


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
                        STEP BACK // ARCHIVES
                    </p>

                    <h1 className="
                        mt-3
                        text-4xl
                        font-extrabold
                        text-slate-100
                        md:text-5xl
                    ">
                        Lore
                    </h1>

                    <p className="
                        mt-3
                        text-slate-400
                    ">
                        Learn more about the world of Urgent or Is It?
                    </p>

                </div>


                {/* =========================================
                    LORE ITEMS
                   ========================================= */}

                <div className="
                    mx-auto
                    mt-12
                    grid
                    max-w-5xl
                    gap-6
                    md:grid-cols-2
                ">

                    {LoreItems.map((lore) => (

                        <LoreItem
                            key={lore.name}
                            lore={lore}
                            onClick={() => setSelectedLore(lore)}
                        />

                    ))}

                </div>


                {/* =========================================
                    MODAL
                   ========================================= */}

                {selectedLore && (

                    <LoreModal
                        lore={selectedLore}
                        onClose={() => setSelectedLore(null)}
                    />

                )}

            </main>
        </AuthGuard>
    );
}


// =========================================
// ITEM BOX FOR LORE PAGE
// =========================================

function LoreItem({
    lore,
    onClick,
}: {
    lore: LoreInfo;
    onClick: () => void;
}) {

    return (

        <button
            type="button"
            onClick={onClick}
            className="
                w-full
                rounded-2xl
                border
                border-sky-900/60
                bg-slate-950/90
                p-8
                text-left
                shadow-[0_0_25px_rgba(56,189,248,0.04)]
                transition-all
                duration-200
                hover:-translate-y-1
                hover:border-sky-500/70
                hover:bg-slate-900
                hover:shadow-[0_0_30px_rgba(56,189,248,0.10)]
                focus:outline-none
                focus:ring-2
                focus:ring-sky-500/50
            "
        >

            <div className="
                flex
                items-center
                justify-between
                gap-4
            ">

                <div>

                    <p className="
                        font-mono
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-slate-600
                    ">
                        ARCHIVE ENTRY
                    </p>

                    <h2 className="
                        mt-2
                        text-2xl
                        font-extrabold
                        text-slate-100
                    ">
                        {lore.name}
                    </h2>

                </div>


                <span className="
                    font-mono
                    text-xl
                    text-sky-500
                    transition
                    group-hover:text-sky-300
                ">
                    →
                </span>

            </div>

        </button>

    );
}


// =========================================
// MODAL BOX FOR LORE
// =========================================

function LoreModal({
    lore,
    onClose,
}: {
    lore: LoreInfo;
    onClose: () => void;
}) {

    return (

        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-slate-950/80
                px-6
                backdrop-blur-sm
            "
            onClick={onClose}
        >

            <div
                className="
                    w-full
                    max-w-2xl
                    rounded-2xl
                    border
                    border-sky-900/70
                    bg-slate-950
                    p-8
                    shadow-[0_0_50px_rgba(56,189,248,0.08)]
                "
                onClick={(event) => event.stopPropagation()}
            >

                {/* =========================================
                    TITLE
                   ========================================= */}

                <div className="
                    flex
                    items-start
                    justify-between
                    gap-4
                ">

                    <div>

                        <p className="
                            font-mono
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-sky-500
                        ">
                            ARCHIVE ENTRY
                        </p>

                        <h2 className="
                            mt-2
                            text-3xl
                            font-extrabold
                            text-slate-100
                        ">
                            {lore.name}
                        </h2>

                    </div>


                    {/* CLOSE ICON */}

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            rounded-lg
                            border
                            border-slate-800
                            px-3
                            py-1
                            font-mono
                            text-xl
                            text-slate-500
                            transition
                            hover:border-sky-800
                            hover:bg-sky-950/30
                            hover:text-sky-400
                        "
                        aria-label="Close lore"
                    >
                        ×
                    </button>

                </div>


                {/* =========================================
                    IMAGE
                   ========================================= */}

                {lore.imageUrl && (

                    <div className="
                        mt-6
                        overflow-hidden
                        rounded-xl
                        border
                        border-sky-900/50
                        bg-slate-900
                    ">

                        <img
                            src={lore.imageUrl}
                            alt={lore.name}
                            className="
                                mx-auto
                                max-h-80
                                max-w-sm
                                rounded-lg
                                object-contain
                            "
                        />

                    </div>

                )}


                {/* =========================================
                    DESCRIPTION
                   ========================================= */}

                <div className="
                    mt-6
                    whitespace-pre-line
                    leading-relaxed
                    text-slate-300
                ">
                    {lore.description}
                </div>


                {/* =========================================
                    CLOSE
                   ========================================= */}

                <button
                    type="button"
                    onClick={onClose}
                    className="
                        mt-8
                        w-full
                        rounded-xl
                        border
                        border-sky-800/70
                        bg-sky-950/30
                        px-6
                        py-3
                        font-bold
                        tracking-wider
                        text-sky-400
                        transition
                        hover:border-sky-400
                        hover:bg-sky-950/50
                        hover:text-sky-300
                    "
                >
                    CLOSE
                </button>

            </div>

        </div>

    );
}