"use client";

import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import { useAuth } from "./AuthContext";
type HeaderProps = {
    isLoggedIn: boolean;
};


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {isLoggedIn, logout} = useAuth()
    


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
                border-zinc-200
                bg-white/80
                backdrop-blur-md
                dark:border-zinc-800
                dark:bg-zinc-900/80
            "
        >
            {/* Main header row */}
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
                {/* Logo */}
                <Link
                    href="/"
                    className="
                        text-2xl
                        font-bold
                        tracking-tight
                    "
                >
                    Urgent or Is It?
                </Link>

                {/* Mobile menu button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    aria-label={
                        mobileMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={mobileMenuOpen}
                    className="
                        rounded-lg
                        p-2
                        transition
                        hover:bg-zinc-300
                        dark:hover:bg-zinc-800
                        lg:hidden
                    "
                >
                    {mobileMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>

                {/* Desktop navigation */}
                {!isLoggedIn && (
                    <nav
                        className="
                            hidden
                            items-center
                            gap-8
                            text-sm
                            font-medium
                            lg:flex
                        "
                    >
                        <Link href="/login"
                        className="transition-opacity hover:opacity-60">
                            Login
                        </Link>

                        <Link href="/register"
                        className="transition-opacity hover:opacity-60">
                            Register
                        </Link>
                    </nav>
                )}

                {isLoggedIn && (
                    <nav
                        className="
                            hidden
                            items-center
                            gap-8
                            text-sm
                            font-medium
                            lg:flex
                        "
                    >
                        <Link href="/userProfile" 
                        className="transition-opacity hover:opacity-60">
                            Profile Settings
                        </Link>
                        <button onClick={() => logout()}
                        className="transition-opacity hover:opacity-60">
                            Logout
                        </button>
                    </nav>
                )}

            </div>

            {/* Mobile navigation */}
            {mobileMenuOpen && (
                <nav
                    className="
                        border-t
                        border-zinc-200
                        bg-white
                        dark:border-zinc-800
                        dark:bg-zinc-900
                        lg:hidden
                    "
                >
                    {!isLoggedIn && (
                    <div
                    className=" mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6 ">
                        <Link href="/login" onClick={closeMobileMenu}
                        className=" rounded-lg px-4 py-3 text-base font-medium transition hover:bg-zinc-100 dark:hover:bg-zinc-800 ">
                            Login
                        </Link>

                        <Link href="/register" onClick={closeMobileMenu}
                        className=" rounded-lg px-4 py-3 text-base font-medium transition hover:bg-zinc-100 dark:hover:bg-zinc-800 ">
                            Register
                        </Link>
                    </div>
                )}

                {isLoggedIn && (
                    <div
                    className=" mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6 ">
                        <Link href="/userProfile" onClick={closeMobileMenu}
                        className=" rounded-lg px-4 py-3 text-base font-medium transition hover:bg-zinc-100 dark:hover:bg-zinc-800 ">
                            Profile Settings
                        </Link>
                        <button
                            onClick={() => {
                                logout();
                                closeMobileMenu();
                            }}
                        >
                            Logout
                        </button>
                    </div>
                )}
                    
                </nav>
            )}
        </header>
    );
}