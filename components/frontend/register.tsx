"use client";

export default function Register() {
    return (
        <main className="min-h-screen px-6 py-16">
            <div className="mx-auto max-w-2xl">

                {/* TITLE */}
                <h1 className="
                    text-center
                    text-4xl
                    font-extrabold
                    tracking-tight
                    md:text-5xl
                ">
                    Join <span className="font-black">STEP BACK</span>.
                    <br />
                    Fight Deceivious together.
                </h1>

                {/* REGISTER CARD */}
                <div className="
                    mx-auto
                    mt-10
                    max-w-xl
                    rounded-2xl
                    border-2
                    p-8
                    shadow-xl
                    md:p-10
                ">

                    <form className="space-y-6">

                        {/* USERNAME */}
                        <div className="space-y-2">
                            <label
                                htmlFor="username"
                                className="block text-sm font-semibold"
                            >
                                Username
                            </label>

                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="
                                    w-full
                                    rounded-lg
                                    border-2
                                    px-4
                                    py-3
                                    outline-none
                                    transition
                                    focus:ring-2
                                "
                                placeholder="Choose your username"
                            />
                        </div>

                        {/* EMAIL */}
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold"
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
                                    outline-none
                                    transition
                                    focus:ring-2
                                "
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* PASSWORD */}
                        <div className="space-y-2">
                            <label
                                htmlFor="password"
                                className="block text-sm font-semibold"
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
                                    outline-none
                                    transition
                                    focus:ring-2
                                "
                                placeholder="Enter a strong password"
                            />

                            <p className="
                                text-sm
                                leading-relaxed
                                opacity-70
                            ">
                                Don't create something Deceivious can easily guess.
                            </p>
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="
                                w-full
                                rounded-lg
                                border-2
                                px-6
                                py-3
                                font-bold
                                shadow-md
                                transition
                                hover:scale-[1.02]
                                hover:shadow-lg
                            "
                        >
                            JOIN STEP BACK
                        </button>

                    </form>
                </div>

                {/* WHY EMAIL? */}
                <section className="
                    mx-auto
                    mt-16
                    max-w-xl
                    text-center
                ">
                    <h2 className="
                        text-2xl
                        font-bold
                        md:text-3xl
                    ">
                        Hold on. Why do you need my email?
                    </h2>

                    <p className="
                        mt-4
                        text-base
                        leading-relaxed
                        opacity-80
                        md:text-lg
                    ">
                        If you forget your password, a reset email can be
                        sent to you.
                    </p>

                    <p className="
                        mt-3
                        text-base
                        leading-relaxed
                        opacity-80
                        md:text-lg
                    ">
                        You wouldn't want someone else changing your password
                        without your permission, right?
                    </p>
                </section>
            </div>
        </main>
    );
}