"use client";

import Link from "next/link";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

export async function getProfile(token: string) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/profile`,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();

    return {
        ok: response.ok,
        data,
    };
}

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const {
        setIsLoggedIn,
        setFlashMessage,
        flashMessage,
        setUser,
    } = useAuth();

    const router = useRouter();

    return (
        <main className="
                min-h-screen
                bg-slate-950
                px-6
                py-16
                text-slate-100
        ">

            <div className="
                mx-auto
                max-w-2xl
            ">

                {/* =========================================
                    HEADER
                   ========================================= */}

                <div className="text-center">

                    <p className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.35em]
                        text-cyan-500
                    ">
                        STEP BACK // ACCESS PORTAL
                    </p>

                    <h1 className="
                        mt-4
                        text-5xl
                        font-extrabold
                        tracking-tight
                        md:text-6xl
                    ">
                        Welcome Back
                    </h1>

                    <p className="
                        mx-auto
                        mt-4
                        max-w-xl
                        text-lg
                        leading-relaxed
                        text-zinc-400
                    ">
                        STEP BACK needs you.
                        <br />
                        Deceivious isn't waiting.
                    </p>

                </div>


                {/* =========================================
                    LOGIN CARD
                   ========================================= */}

                <div className="
                    relative
                    mx-auto
                    mt-12
                    max-w-xl
                    overflow-hidden
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-950/90
                    p-8
                    shadow-2xl
                    md:p-10
                ">

                    {/* Top accent line */}

                    <div className="
                        absolute
                        left-0
                        right-0
                        top-0
                        h-px
                        bg-cyan-500/70
                    " />


                    {/* Status */}

                    <div className="
                        mb-8
                        flex
                        items-center
                        gap-3
                        border-b
                        border-zinc-800
                        pb-5
                    ">

                        <span className="
                            h-2
                            w-2
                            rounded-full
                            bg-cyan-400
                            shadow-[0_0_10px_rgba(34,211,238,0.8)]
                        " />

                        <span className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-zinc-500
                        ">
                            Secure Login
                        </span>

                    </div>


                    <form
                        className="space-y-6"
                        onSubmit={async (event) => {

                            event.preventDefault();

                            setPasswordError("");

                            const response = await fetch(
                                `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                                {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                        username,
                                        password,
                                    }),
                                }
                            );

                            const data = await response.json();

                            if (response.ok) {

                                setIsLoggedIn(true);

                                const profile =
                                    await getProfile(
                                        data.access_token
                                    );

                                setUser(profile.data);

                                console.log(profile);

                                if (response.ok) {

                                    localStorage.setItem(
                                        "access_token",
                                        data.access_token
                                    );

                                    setFlashMessage({
                                        messageType: "success",
                                        messageContent:
                                            "Login Successful. Welcome back.",
                                    });

                                    router.push("/");

                                } else {

                                    setFlashMessage({
                                        messageType: "error",
                                        messageContent:
                                            "An error occured. Please try again.",
                                    });

                                }

                                return data;
                            }
                        }}
                    >

                        {/* =========================================
                            USERNAME
                           ========================================= */}

                        <div className="space-y-2">

                            <label
                                htmlFor="username"
                                className="
                                    block
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-zinc-400
                                "
                            >
                                Username
                            </label>

                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                placeholder="Enter your username"
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-zinc-700
                                    bg-black
                                    px-4
                                    py-3
                                    text-white
                                    placeholder:text-zinc-600
                                    outline-none
                                    transition
                                    focus:border-cyan-500
                                    focus:ring-1
                                    focus:ring-cyan-500
                                "
                            />

                        </div>


                        {/* =========================================
                            PASSWORD
                           ========================================= */}

                        <div className="space-y-2">

                            <label
                                htmlFor="password"
                                className="
                                    block
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-zinc-400
                                "
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Enter your password"
                                onChange={(e) => {

                                    const newPassword =
                                        e.target.value;

                                    setPassword(newPassword);
                                }}
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-zinc-700
                                    bg-black
                                    px-4
                                    py-3
                                    text-white
                                    placeholder:text-zinc-600
                                    outline-none
                                    transition
                                    focus:border-cyan-500
                                    focus:ring-1
                                    focus:ring-cyan-500
                                "
                            />

                        </div>


                        {/* =========================================
                            LOGIN BUTTON
                           ========================================= */}

                        <button
                            type="submit"
                            className="
                                mt-2
                                w-full
                                rounded-xl
                                border
                                border-cyan-500
                                bg-cyan-500
                                px-6
                                py-4
                                text-sm
                                font-extrabold
                                uppercase
                                tracking-[0.2em]
                                text-black
                                transition
                                hover:bg-cyan-400
                                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                                active:scale-[0.98]
                            "
                        >
                            Access STEP BACK
                        </button>

                    </form>


                    {/* =========================================
                        RECOVERY OPTIONS
                       ========================================= */}

                    {/*
                    <div className="
                        mt-8
                        flex
                        flex-col
                        items-center
                        gap-3
                        text-sm
                    ">

                        <Link
                            href="/passwordReset"
                            className="
                                text-zinc-500
                                transition
                                hover:text-cyan-400
                            "
                        >
                            Forgot Password?
                        </Link>

                        <Link
                            href="/usernameReset"
                            className="
                                text-zinc-500
                                transition
                                hover:text-cyan-400
                            "
                        >
                            Forgot Username?
                        </Link>

                    </div>
                    */}

                </div>


                {/* =========================================
                    REGISTER
                   ========================================= */}

                <div className="
                    mt-10
                    text-center
                    text-sm
                    text-zinc-500
                ">

                    Don't have an account?{" "}

                    <Link
                        href="/register"
                        className="
                            font-bold
                            text-cyan-400
                            transition
                            hover:text-cyan-300
                            hover:underline
                            underline-offset-4
                        "
                    >
                        Join STEP BACK
                    </Link>

                </div>


                {/* =========================================
                    SECURITY NOTICE
                   ========================================= */}

                <p className="
                    mx-auto
                    mt-8
                    max-w-md
                    text-center
                    text-xs
                    leading-relaxed
                    text-zinc-700
                ">
                    AUTHENTICATED ACCESS REQUIRED
                    <br />
                    STEP BACK // FUTUREPURA NETWORK
                </p>

            </div>

        </main>
    );
}