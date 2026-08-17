"use client"
import Link from 'next/link'

export default function ResetUsername(){
    return(
    <>
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
                    Reset Username
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
                    Don’t worry. We’ve got you covered. <b>If we trust you.</b>
                </p>

                {/* RESET USERNAME CARD */}
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
                            Reset Username
                        </button>
                        <Link
                            href="/login"
                            className="hover:underline"
                        >
                            You suddenly remembered? Good, let’s get you back in.
                        </Link>
                    </form>
                </div>
            </div>
        </main>
    </>)
}