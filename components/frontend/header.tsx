"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { useAuth } from "./AuthContext";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { isLoggedIn, logout } = useAuth();

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header
            className="
                sticky
                top-0
                z-50
                border-b
                border-slate-800/80
                bg-slate-950/85
                backdrop-blur-xl
            "
        >

            {/* =========================================
                MAIN HEADER
               ========================================= */}

            <div
                className="
                    mx-auto
                    flex
                    h-16
                    max-w-7xl
                    items-center
                    justify-between
                    px-4
                    sm:px-6
                    lg:h-20
                    lg:px-8
                "
            >

                {/* =========================================
                    LOGO
                   ========================================= */}

                <Link
                    href="/"
                    className="
                        group
                        flex
                        items-center
                        gap-3
                    "
                >

                    {/* Status indicator */}

                    <span
                        className="
                            h-2
                            w-2
                            rounded-full
                            bg-sky-400
                            shadow-[0_0_10px_rgba(56,189,248,0.8)]
                            transition
                            group-hover:shadow-[0_0_16px_rgba(56,189,248,1)]
                        "
                    />

                    <div>

                        <div
                            className="
                                text-lg
                                font-extrabold
                                tracking-tight
                                text-slate-100
                                transition
                                group-hover:text-sky-400
                                sm:text-xl
                            "
                        >
                            Urgent or Is It?
                        </div>

                        <div
                            className="
                                hidden
                                font-mono
                                text-[9px]
                                uppercase
                                tracking-[0.3em]
                                text-slate-600
                                sm:block
                            "
                        >
                            STEP BACK // SYSTEM
                        </div>

                    </div>

                </Link>


                {/* =========================================
                    MOBILE MENU BUTTON
                   ========================================= */}

                <button
                    type="button"
                    onClick={() =>
                        setMobileMenuOpen((prev) => !prev)
                    }
                    aria-label={
                        mobileMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={mobileMenuOpen}
                    className="
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-900/70
                        p-2.5
                        text-slate-400
                        transition
                        hover:border-sky-900
                        hover:bg-slate-900
                        hover:text-sky-400
                        lg:hidden
                    "
                >
                    {mobileMenuOpen ? (
                        <X size={22} />
                    ) : (
                        <Menu size={22} />
                    )}
                </button>


                {/* =========================================
                    DESKTOP NAVIGATION
                   ========================================= */}

                {!isLoggedIn && (
                    <nav
                        className="
                            hidden
                            items-center
                            gap-2
                            lg:flex
                        "
                    >

                        <Link
                            href="/login"
                            className="
                                rounded-lg
                                border
                                border-transparent
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-slate-400
                                transition
                                hover:border-slate-800
                                hover:bg-slate-900
                                hover:text-sky-400
                            "
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="
                                rounded-lg
                                border
                                border-sky-900/60
                                bg-sky-950/30
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-sky-400
                                transition
                                hover:border-sky-700
                                hover:bg-sky-900/30
                                hover:text-sky-300
                            "
                        >
                            Register
                        </Link>

                    </nav>
                )}


                {isLoggedIn && (
                    <nav
                        className="
                            hidden
                            items-center
                            gap-1
                            lg:flex
                        "
                    >

                        <Link
                            href="/gamemode"
                            className="
                                rounded-lg
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-slate-400
                                transition
                                hover:bg-slate-900
                                hover:text-sky-400
                            "
                        >
                            Game Modes
                        </Link>

                        <Link
                            href="/lore"
                            className="
                                rounded-lg
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-slate-400
                                transition
                                hover:bg-slate-900
                                hover:text-sky-400
                            "
                        >
                            Lore
                        </Link>

                        <Link
                            href="/howtoplay"
                            className="
                                rounded-lg
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-slate-400
                                transition
                                hover:bg-slate-900
                                hover:text-sky-400
                            "
                        >
                            How to Play
                        </Link>

                        <Link
                            href="/userProfile"
                            className="
                                rounded-lg
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-slate-400
                                transition
                                hover:bg-slate-900
                                hover:text-sky-400
                            "
                        >
                            Profile
                        </Link>

                        <div
                            className="
                                mx-2
                                h-6
                                w-px
                                bg-slate-800
                            "
                        />

                        <button
                            type="button"
                            onClick={logout}
                            className="
                                rounded-lg
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-slate-500
                                transition
                                hover:bg-red-950/30
                                hover:text-red-400
                            "
                        >
                            Logout
                        </button>

                    </nav>
                )}

            </div>


            {/* =========================================
                MOBILE NAVIGATION
               ========================================= */}

            {mobileMenuOpen && (
                <nav
                    className="
                        border-t
                        border-slate-800
                        bg-slate-950
                        lg:hidden
                    "
                >

                    <div
                        className="
                            mx-auto
                            flex
                            max-w-7xl
                            flex-col
                            gap-1
                            px-4
                            py-4
                            sm:px-6
                        "
                    >

                        {!isLoggedIn && (
                            <>
                                <Link
                                    href="/login"
                                    onClick={closeMobileMenu}
                                    className="
                                        rounded-xl
                                        border
                                        border-transparent
                                        px-4
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-slate-400
                                        transition
                                        hover:border-slate-800
                                        hover:bg-slate-900
                                        hover:text-sky-400
                                    "
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    onClick={closeMobileMenu}
                                    className="
                                        rounded-xl
                                        border
                                        border-sky-900/60
                                        bg-sky-950/30
                                        px-4
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-sky-400
                                    "
                                >
                                    Register
                                </Link>
                            </>
                        )}


                        {isLoggedIn && (
                            <>
                                <Link
                                    href="/gamemode"
                                    onClick={closeMobileMenu}
                                    className="
                                        rounded-xl
                                        px-4
                                        py-3
                                        text-sm
                                        font-medium
                                        text-slate-400
                                        transition
                                        hover:bg-slate-900
                                        hover:text-sky-400
                                    "
                                >
                                    Game Modes
                                </Link>

                                <Link
                                    href="/lore"
                                    onClick={closeMobileMenu}
                                    className="
                                        rounded-xl
                                        px-4
                                        py-3
                                        text-sm
                                        font-medium
                                        text-slate-400
                                        transition
                                        hover:bg-slate-900
                                        hover:text-sky-400
                                    "
                                >
                                    Lore
                                </Link>

                                <Link
                                    href="/howtoplay"
                                    onClick={closeMobileMenu}
                                    className="
                                        rounded-xl
                                        px-4
                                        py-3
                                        text-sm
                                        font-medium
                                        text-slate-400
                                        transition
                                        hover:bg-slate-900
                                        hover:text-sky-400
                                    "
                                >
                                    How to Play
                                </Link>

                                <Link
                                    href="/userProfile"
                                    onClick={closeMobileMenu}
                                    className="
                                        rounded-xl
                                        px-4
                                        py-3
                                        text-sm
                                        font-medium
                                        text-slate-400
                                        transition
                                        hover:bg-slate-900
                                        hover:text-sky-400
                                    "
                                >
                                    Profile Settings
                                </Link>

                                <div
                                    className="
                                        my-2
                                        h-px
                                        bg-slate-800
                                    "
                                />

                                <button
                                    type="button"
                                    onClick={() => {
                                        logout();
                                        closeMobileMenu();
                                    }}
                                    className="
                                        rounded-xl
                                        px-4
                                        py-3
                                        text-left
                                        text-sm
                                        font-medium
                                        text-slate-500
                                        transition
                                        hover:bg-red-950/30
                                        hover:text-red-400
                                    "
                                >
                                    Logout
                                </button>
                            </>
                        )}

                    </div>

                </nav>
            )}

        </header>
    );
}