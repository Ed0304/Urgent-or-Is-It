"use client";

import Link from "next/link";

export default function Login() {
    return (
        <main className="min-h-screen px-6 py-16">
            <div className="mx-auto max-w-2xl">

                {/* TITLE */}
                <h1
                    className="
                        text-center
                        text-5xl
                        font-extrabold
                        tracking-tight
                        md:text-6xl
                    "
                >
                    Welcome Back
                </h1>

                <p
                    className="
                        mx-auto
                        mt-4
                        max-w-xl
                        text-center
                        text-lg
                        leading-relaxed
                        md:text-xl
                    "
                >
                    STEP BACK needs you. Deceivious isn't waiting.
                </p>

                {/* LOGIN CARD */}
                <div
                    className="
                        mx-auto
                        mt-10
                        max-w-xl
                        rounded-2xl
                        border-2
                        p-8
                        shadow-xl
                        md:p-10
                    "
                >
                    <form className="space-y-6">

                        {/* EMAIL */}
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="
                                    block
                                    text-lg
                                    font-semibold
                                "
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="
                                    w-full
                                    rounded-lg
                                    border-2
                                    px-4
                                    py-3
                                    text-lg
                                    outline-none
                                    transition
                                    focus:ring-2
                                "
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* PASSWORD */}
                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="
                                    block
                                    text-lg
                                    font-semibold
                                "
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="
                                    w-full
                                    rounded-lg
                                    border-2
                                    px-4
                                    py-3
                                    text-lg
                                    outline-none
                                    transition
                                    focus:ring-2
                                "
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* LOGIN BUTTON */}
                        <button
                            type="submit"
                            className="
                                w-full
                                rounded-lg
                                border-2
                                px-6
                                py-4
                                text-lg
                                font-bold
                                shadow-md
                                transition
                                hover:scale-[1.02]
                                hover:shadow-lg
                            "
                        >
                            LOGIN
                        </button>

                    </form>

                    {/* RECOVERY */}
                    <div
                        className="
                            mt-8
                            flex
                            flex-col
                            items-center
                            gap-3
                            text-base
                            md:text-lg
                        "
                    >
                        <Link
                            href="/passwordReset"
                            className="hover:underline"
                        >
                            Forgot Password?
                        </Link>

                        <Link
                            href="/usernameReset"
                            className="hover:underline"
                        >
                            Forgot Username?
                        </Link>
                    </div>
                </div>

                {/* REGISTER */}
                <div
                    className="
                        mt-10
                        text-center
                        text-lg
                        md:text-xl
                    "
                >
                    Don't have an account?{" "}
                    <Link
                        href="/register"
                        className="font-bold hover:underline"
                    >
                        Join STEP BACK
                    </Link>
                </div>

            </div>
        </main>
    );
}