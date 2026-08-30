"use client";
import Link from "next/link";
import { validatePasswordFunction, getPasswordScore } from "@/utils/passwordValidation"
import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";

function showStrengthMessage(score:number): string{
    switch(score){
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
            return "Please enter a strong password."

    }
}



export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [passwordScore, setPasswordScore] = useState<number | null>(null);
    const router = useRouter();
    const { setIsLoggedIn, setFlashMessage,flashMessage } = useAuth();
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

                    <form
                        onSubmit={ async (event) => {
                            event.preventDefault();

                            if (!validatePasswordFunction(password)) {
                               setPasswordError("Password does not meet the requirements.")
                               return;
                            }
                            setPasswordError("")
                            const response = await fetch("http://localhost:3001/auth/register",
                                {
                                    method:"POST",
                                    headers:{
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        username,
                                        email,
                                        password,
                                    })
                                }
                            )

                            const data = await response.json();

                            if (response.ok) {
                                setFlashMessage({
                                    messageType: "success",
                                    messageContent: "Registration Successful. Enter your credentials again to login."
                                })
                                router.push("/login")
                            }else{
                                setFlashMessage({
                                    messageType: "error",
                                    messageContent: "An error occured. Please try again."
                                })
                            }
                            

                            
                        }}
                        className="space-y-6"
                    >

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
                                onChange={(e) => setUsername(e.target.value)}
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
                                 onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => {
                                    const newPassword = e.target.value;

                                    setPassword(newPassword);
                                    setPasswordScore(getPasswordScore(newPassword));
                                }}

                            />

                            <p className="
                                text-sm
                                leading-relaxed
                                opacity-70
                            ">
                                Don't create something Deceivious can easily guess.
                            </p>
                            {passwordError && (
                                <p className="text-sm">
                                    {passwordError}
                                </p>
                            )}
                            {passwordScore !== null && (
                                <p className="text-sm">
                                {showStrengthMessage(passwordScore)}
                                </p>
                            )}

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
                            href="/login"
                            className="hover:underline"
                        >
                            Been here before? Click here to sign in.
                        </Link>
                </div>
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