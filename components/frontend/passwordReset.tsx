"use client"
import Link from 'next/link'

export default function ResetPassword(){
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
                    Reset Password
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

                {/* RESET PASSWORD CARD */}
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
                        {/* USERNAME */}
                        <div className="space-y-2">
                            <label
                                htmlFor="username"
                                className="
                                    block
                                    text-lg
                                    font-semibold
                                "
                            >
                                Username
                            </label>

                            <input
                                id="username"
                                name="username"
                                type="username"
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
                                placeholder="Enter your username"
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
                            Reset Password
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