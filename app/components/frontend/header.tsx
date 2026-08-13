"use client";

import Link from "next/link";
import { useState, } from "react";
import {X, Menu} from "lucide-react";


export default function Header(){
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false)
    return(
        <>
        <header
            className="
                    sticky
                    top-0
                    z-50
                    border-b
                    border-zinc-200
                    bg-white/80
                    backdrop-blur-md
                    dark:border-zinc-800
                    dark:bg-zinc-900/80
                "
        >
        <div
                className="
                    mx-auto
                    flex
                    h-16
                    lg:h-20
                    max-w-7xl
                    items-center
                    justify-between
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >    
        <Link
            href={`/`}
            className="
                text-2xl
                font-bold
                tracking-tight"
                >
            Urgent or Is It?
        </Link>

        <div className="lg:hidden">

                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="
                        rounded-lg
                        p-2
                        transition
                        hover:bg-zinc-300
                        dark:hover:bg-zinc-800
                    "
                >
                    {mobileMenuOpen ? (
                        <X size={24}/>
                    ) : (
                        <Menu size={24}/>
                    )}
                </button>
        </div>
        </div>

        </header>
        </>
    )
}