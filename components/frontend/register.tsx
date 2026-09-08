"use client";

import Link from "next/link";
import {
    validatePasswordFunction,
    getPasswordScore,
    getPasswordRequirements,
} from "@/utils/passwordValidation";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

function showStrengthMessage(score: number): string {
    switch (score) {
        case 0:
            return "Your password is at risk of being cracked";

        case 1:
            return "Your password is STILL at risk of being cracked";

        case 2:
            return "Strengthen your password to minimize your risk";

        case 3:
            return "Your password is strong enough";

        case 4:
            return "Great job, you are practicing good security hygiene";

        default:
            return "Please enter a strong password.";
    }
}

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordScore, setPasswordScore] = useState<number | null>(null);

    const router = useRouter();

    const { setFlashMessage } = useAuth();

    const passwordRequirements =
        getPasswordRequirements(password);

    return (
        <main
            className="
                min-h-screen
                bg-slate-950
                px-6
                py-16
                text-slate-100
            "
        >
            <div
                className="
                    mx-auto
                    max-w-2xl
                "
            >

                {/* =========================================
                    SYSTEM HEADER
                   ========================================= */}

                <div className="mb-12 text-center">

                    <div
                        className="
                            mx-auto
                            mb-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-cyan-500/30
                            bg-cyan-500/5
                            px-4
                            py-2
                            font-mono
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-cyan-400
                            shadow-[0_0_20px_rgba(34,211,238,0.08)]
                        "
                    >
                        <span
                            className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-cyan-400
                                shadow-[0_0_8px_rgba(34,211,238,0.9)]
                            "
                        />

                        STEP BACK NETWORK
                    </div>

                    <p
                        className="
                            font-mono
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.35em]
                            text-slate-500
                        "
                    >
                        Registration Protocol // 001
                    </p>

                    <h1
                        className="
                            mt-4
                            text-4xl
                            font-black
                            tracking-tight
                            text-white
                            md:text-5xl
                        "
                    >
                        Join{" "}
                        <span
                            className="
                                text-cyan-400
                                drop-shadow-[0_0_15px_rgba(34,211,238,0.35)]
                            "
                        >
                            STEP BACK
                        </span>
                        .
                        <br />
                        Fight Deceivious together.
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-lg
                            text-sm
                            leading-relaxed
                            text-slate-400
                            md:text-base
                        "
                    >
                        Create your investigator account and begin
                        your investigation across Futurepura.
                    </p>

                </div>


                {/* =========================================
                    REGISTER CARD
                   ========================================= */}

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        border-slate-800
                        bg-slate-900/80
                        shadow-[0_0_60px_rgba(34,211,238,0.05)]
                        backdrop-blur-xl
                    "
                >

                    {/* Decorative top line */}

                    <div
                        className="
                            h-px
                            w-full
                            bg-gradient-to-r
                            from-transparent
                            via-cyan-400/70
                            to-transparent
                        "
                    />

                    <div className="p-8 md:p-10">

                        {/* Terminal label */}

                        <div
                            className="
                                mb-8
                                flex
                                items-center
                                justify-between
                                border-b
                                border-slate-800
                                pb-5
                            "
                        >

                            <div>

                                <p
                                    className="
                                        font-mono
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.25em]
                                        text-slate-600
                                    "
                                >
                                    New Investigator
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        font-semibold
                                        text-slate-300
                                    "
                                >
                                    Account Registration
                                </p>

                            </div>


                            <span
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-cyan-500/20
                                    bg-cyan-500/5
                                    px-3
                                    py-1.5
                                    font-mono
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-wider
                                    text-cyan-400
                                "
                            >
                                <span
                                    className="
                                        h-1.5
                                        w-1.5
                                        rounded-full
                                        bg-cyan-400
                                        shadow-[0_0_8px_rgba(34,211,238,0.8)]
                                    "
                                />

                                Secure
                            </span>

                        </div>


                        {/* =================================
                            FORM
                           ================================= */}

                        <form
                            onSubmit={async (event) => {
                                event.preventDefault();

                                if (!validatePasswordFunction(password)) {
                                    setPasswordError(
                                        "Password does not meet the requirements."
                                    );
                                    return;
                                }

                                setPasswordError("");

                                const response = await fetch(
                                    "http://localhost:3001/auth/register",
                                    {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            username,
                                            email,
                                            password,
                                        }),
                                    }
                                );

                                await response.json();

                                if (response.ok) {
                                    setFlashMessage({
                                        messageType: "success",
                                        messageContent:
                                            "Registration Successful. Enter your credentials again to login.",
                                    });

                                    router.push("/login");
                                } else {
                                    setFlashMessage({
                                        messageType: "error",
                                        messageContent:
                                            "An error occurred. Please try again.",
                                    });
                                }
                            }}
                            className="space-y-7"
                        >

                            {/* USERNAME */}

                            <div className="space-y-2">

                                <label
                                    htmlFor="username"
                                    className="
                                        block
                                        font-mono
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-slate-400
                                    "
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
                                        rounded-xl
                                        border
                                        border-slate-700
                                        bg-slate-950/80
                                        px-4
                                        py-3.5
                                        text-sm
                                        text-slate-100
                                        outline-none
                                        transition
                                        placeholder:text-slate-700
                                        hover:border-slate-600
                                        focus:border-cyan-500/70
                                        focus:ring-2
                                        focus:ring-cyan-500/10
                                        focus:shadow-[0_0_20px_rgba(34,211,238,0.06)]
                                    "
                                    placeholder="Choose your username"
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />

                            </div>


                            {/* EMAIL */}

                            <div className="space-y-2">

                                <label
                                    htmlFor="email"
                                    className="
                                        block
                                        font-mono
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-slate-400
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
                                        rounded-xl
                                        border
                                        border-slate-700
                                        bg-slate-950/80
                                        px-4
                                        py-3.5
                                        text-sm
                                        text-slate-100
                                        outline-none
                                        transition
                                        placeholder:text-slate-700
                                        hover:border-slate-600
                                        focus:border-cyan-500/70
                                        focus:ring-2
                                        focus:ring-cyan-500/10
                                        focus:shadow-[0_0_20px_rgba(34,211,238,0.06)]
                                    "
                                    placeholder="you@example.com"
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />

                            </div>


                            {/* PASSWORD */}

                            <div className="space-y-2">

                                <label
                                    htmlFor="password"
                                    className="
                                        block
                                        font-mono
                                        text-xs
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-slate-400
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
                                        rounded-xl
                                        border
                                        border-slate-700
                                        bg-slate-950/80
                                        px-4
                                        py-3.5
                                        text-sm
                                        text-slate-100
                                        outline-none
                                        transition
                                        placeholder:text-slate-700
                                        hover:border-slate-600
                                        focus:border-cyan-500/70
                                        focus:ring-2
                                        focus:ring-cyan-500/10
                                        focus:shadow-[0_0_20px_rgba(34,211,238,0.06)]
                                    "
                                    placeholder="Enter a strong password"
                                    value={password}
                                    onChange={(e) => {
                                        const newPassword =
                                            e.target.value;

                                        setPassword(newPassword);

                                        setPasswordScore(
                                            getPasswordScore(newPassword)
                                        );
                                    }}
                                />


                                {/* PASSWORD REQUIREMENTS */}

                                <div
                                    className="
                                        mt-4
                                        rounded-2xl
                                        border
                                        border-slate-800
                                        bg-slate-950/80
                                        p-5
                                    "
                                >

                                    <div
                                        className="
                                            mb-4
                                            flex
                                            items-center
                                            justify-between
                                        "
                                    >

                                        <p
                                            className="
                                                font-mono
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-[0.2em]
                                                text-slate-500
                                            "
                                        >
                                            Security Requirements
                                        </p>

                                        <span
                                            className="
                                                font-mono
                                                text-[9px]
                                                uppercase
                                                tracking-wider
                                                text-slate-700
                                            "
                                        >
                                            AUTH CHECK
                                        </span>

                                    </div>


                                    <div
                                        className="
                                            grid
                                            grid-cols-1
                                            gap-3
                                            text-sm
                                            sm:grid-cols-2
                                        "
                                    >

                                        <p
                                            className={
                                                passwordRequirements.minimumLength
                                                    ? "text-emerald-400"
                                                    : "text-slate-600"
                                            }
                                        >
                                            {passwordRequirements.minimumLength
                                                ? "✓"
                                                : "○"}{" "}
                                            At least 8 characters
                                        </p>

                                        <p
                                            className={
                                                passwordRequirements.lowercase
                                                    ? "text-emerald-400"
                                                    : "text-slate-600"
                                            }
                                        >
                                            {passwordRequirements.lowercase
                                                ? "✓"
                                                : "○"}{" "}
                                            Lowercase letter
                                        </p>

                                        <p
                                            className={
                                                passwordRequirements.uppercase
                                                    ? "text-emerald-400"
                                                    : "text-slate-600"
                                            }
                                        >
                                            {passwordRequirements.uppercase
                                                ? "✓"
                                                : "○"}{" "}
                                            Uppercase letter
                                        </p>

                                        <p
                                            className={
                                                passwordRequirements.number
                                                    ? "text-emerald-400"
                                                    : "text-slate-600"
                                            }
                                        >
                                            {passwordRequirements.number
                                                ? "✓"
                                                : "○"}{" "}
                                            Number
                                        </p>

                                        <p
                                            className={
                                                passwordRequirements.specialSymbol
                                                    ? "text-emerald-400"
                                                    : "text-slate-600"
                                            }
                                        >
                                            {passwordRequirements.specialSymbol
                                                ? "✓"
                                                : "○"}{" "}
                                            Special character
                                        </p>

                                    </div>

                                </div>


                                <p
                                    className="
                                        pt-2
                                        text-sm
                                        leading-relaxed
                                        text-slate-500
                                    "
                                >
                                    Don't create something Deceivious can
                                    easily guess.
                                </p>


                                {/* PASSWORD ERROR */}

                                {passwordError && (
                                    <p
                                        className="
                                            rounded-xl
                                            border
                                            border-red-500/20
                                            bg-red-500/5
                                            px-4
                                            py-3
                                            text-sm
                                            text-red-400
                                        "
                                    >
                                        {passwordError}
                                    </p>
                                )}


                                {/* PASSWORD STRENGTH */}

                                {passwordScore !== null && (
                                    <p
                                        className={`
                                            rounded-lg
                                            border
                                            border-slate-800
                                            bg-slate-950/50
                                            px-3
                                            py-2
                                            text-sm
                                            ${
                                                passwordScore <= 1
                                                    ? "text-red-400"
                                                    : passwordScore === 2
                                                        ? "text-yellow-400"
                                                        : "text-emerald-400"
                                            }
                                        `}
                                    >
                                        {showStrengthMessage(passwordScore)}
                                    </p>
                                )}

                            </div>


                            {/* SUBMIT */}

                            <button
                                type="submit"
                                className="
                                    group
                                    relative
                                    w-full
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-cyan-400/50
                                    bg-cyan-500
                                    px-6
                                    py-3.5
                                    font-mono
                                    text-sm
                                    font-black
                                    uppercase
                                    tracking-wider
                                    text-slate-950
                                    shadow-[0_0_25px_rgba(34,211,238,0.12)]
                                    transition
                                    hover:border-cyan-300
                                    hover:bg-cyan-400
                                    hover:shadow-[0_0_35px_rgba(34,211,238,0.22)]
                                    active:scale-[0.99]
                                "
                            >
                                <span className="relative z-10">
                                    JOIN STEP BACK
                                </span>
                            </button>

                        </form>


                        {/* =================================
                            LOGIN LINK
                           ================================= */}

                        <div
                            className="
                                mt-8
                                border-t
                                border-slate-800
                                pt-6
                                text-center
                            "
                        >

                            <Link
                                href="/login"
                                className="
                                    text-sm
                                    text-slate-500
                                    transition
                                    hover:text-cyan-400
                                "
                            >
                                Been here before?

                                <span
                                    className="
                                        ml-1
                                        font-semibold
                                        text-slate-300
                                        transition
                                        group-hover:text-cyan-400
                                    "
                                >
                                    Sign in.
                                </span>

                            </Link>

                        </div>

                    </div>

                </div>


                {/* =========================================
                    WHY EMAIL?
                   ========================================= */}

                <section
                    className="
                        mx-auto
                        mt-12
                        max-w-xl
                        rounded-2xl
                        border
                        border-slate-800
                        bg-slate-900/40
                        p-6
                        shadow-[0_0_35px_rgba(34,211,238,0.03)]
                        md:p-8
                    "
                >

                    <p
                        className="
                            font-mono
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-cyan-600
                        "
                    >
                        Security Information
                    </p>

                    <h2
                        className="
                            mt-3
                            text-2xl
                            font-bold
                            text-slate-100
                            md:text-3xl
                        "
                    >
                        Hold on. Why do you need my email?
                    </h2>

                    <p
                        className="
                            mt-4
                            text-sm
                            leading-relaxed
                            text-slate-400
                        "
                    >
                        If you forget your password, a reset email can be
                        sent to you.
                    </p>

                    <p
                        className="
                            mt-3
                            text-sm
                            leading-relaxed
                            text-slate-400
                        "
                    >
                        You wouldn't want someone else changing your password
                        without your permission, right?
                    </p>

                    <p
                        className="
                            mt-5
                            rounded-r-xl
                            border-l-2
                            border-yellow-500/50
                            bg-yellow-500/5
                            py-3
                            pl-4
                            text-xs
                            leading-relaxed
                            text-slate-500
                        "
                    >
                        P.S. This feature hasn't arrived yet. If you forgot
                        your password of your old account, you currently have
                        to create a new one here.
                    </p>

                </section>


                {/* SYSTEM FOOTER LABEL */}

                <div
                    className="
                        mt-10
                        text-center
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-slate-700
                    "
                >
                    FUTUREPURA NETWORK // ACCOUNT REGISTRATION
                </div>

            </div>

        </main>
    );
}