"use client";

// This is the page for those who want to learn more about the game.
//
// It is unlocked by default and recommended for first-timers.

import { useState } from "react";
import { LoreItems } from "./loreData/loreData";
import BackButton from "./buttons/backButton";

interface LoreInfo {
    name: string;
    description: string;
    imageUrl?: string;
}

export default function Lore() {

    const [selectedLore, setSelectedLore] =
        useState<LoreInfo | null>(null);

    return (
        <main className="min-h-screen px-6 py-12">
            <BackButton/>

            {/* =========================================
                HEADER
               ========================================= */}

            <div className="mx-auto max-w-5xl text-center">

                <h1 className="
                    text-4xl
                    font-extrabold
                    md:text-5xl
                ">
                    Lore
                </h1>

                <p className="
                    mt-3
                    text-zinc-400
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
                border-2
                border-zinc-700
                bg-zinc-900
                p-8
                text-left
                shadow-xl
                transition
                hover:-translate-y-1
                hover:border-zinc-500
                hover:bg-zinc-800
            "
        >

            <div className="
                flex
                items-center
                justify-between
                gap-4
            ">

                <h2 className="
                    text-2xl
                    font-extrabold
                ">
                    {lore.name}
                </h2>

                <span className="
                    text-zinc-500
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
                bg-black/70
                px-6
            "
            onClick={onClose}
        >

            <div
                className="
                    w-full
                    max-w-2xl
                    rounded-2xl
                    border-2
                    border-zinc-700
                    bg-zinc-900
                    p-8
                    shadow-2xl
                "
                onClick={(event) => event.stopPropagation()}
            >

                {/* Title */}

                <div className="
                    flex
                    items-center
                    justify-between
                    gap-4
                ">

                    <h2 className="
                        text-3xl
                        font-extrabold
                    ">
                        {lore.name}
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            rounded-full
                            px-3
                            py-1
                            text-xl
                            text-zinc-500
                            transition
                            hover:bg-zinc-800
                            hover:text-white
                        "
                        aria-label="Close lore"
                    >
                        ×
                    </button>

                </div>


                {/* Image placeholder */}

                {lore.imageUrl && (

                    <div className="
                        mt-6
                        overflow-hidden
                        rounded-xl
                        border
                        border-zinc-800
                    ">
                        <img
                            src={lore.imageUrl}
                            alt={lore.name}
                            className="
                                w-full
                                object-cover
                            "
                        />
                    </div>

                )}


                {/* Description */}

                <div className="
                    mt-6
                    whitespace-pre-line
                    leading-relaxed
                    text-zinc-300
                ">
                    {lore.description}
                </div>


                {/* Close */}

                <button
                    type="button"
                    onClick={onClose}
                    className="
                        mt-8
                        w-full
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
                    Close
                </button>

            </div>

        </div>

    );
}