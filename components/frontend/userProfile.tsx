//TODO: Make the frontend interface for display profile configuration.

"use client";

import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useRouter } from "next/navigation";
import ChangePasswordModal from "../modals/changePassword";
import AuthGuard from "./AuthGuard";

export default function UserProfile() {
    const { user } = useAuth();
    const router = useRouter();

    const [changePasswordModalOpen, setChangePasswordModalOpen] =
        useState(false);

    return (
        <AuthGuard>
            <main className="
                min-h-screen
                bg-slate-950
                px-6
                py-16
                text-slate-100
            ">

                <div className="
                    mx-auto
                    max-w-4xl
                ">

                    {/* =========================================
                        HEADER
                       ========================================= */}

                    <div className="text-center">

                        <p className="
                            font-mono
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.3em]
                            text-sky-500
                        ">
                            STEP BACK // USER SYSTEM
                        </p>

                        <h1 className="
                            mt-3
                            text-4xl
                            font-extrabold
                            tracking-tight
                            md:text-6xl
                        ">
                            User Settings
                        </h1>

                        <p className="
                            mx-auto
                            mt-4
                            max-w-xl
                            text-lg
                            leading-relaxed
                            text-slate-400
                            md:text-xl
                        ">
                            Manage your account and keep your credentials secure.
                        </p>

                    </div>


                    {/* =========================================
                        PROFILE INFORMATION
                       ========================================= */}

                    <section className="
                        mx-auto
                        mt-12
                        max-w-2xl
                        rounded-2xl
                        border
                        border-sky-900/60
                        bg-slate-950/90
                        p-8
                        shadow-[0_0_30px_rgba(56,189,248,0.05)]
                        md:p-10
                    ">

                        {/* System label */}

                        <div className="
                            mb-8
                            flex
                            items-center
                            gap-2
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.3em]
                            text-slate-600
                        ">

                            <span className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-sky-500
                                shadow-[0_0_8px_rgba(14,165,233,0.7)]"
                            />

                            Account Information

                        </div>


                        <div className="space-y-8">

                            {/* Username */}

                            <div>

                                <p className="
                                    font-mono
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-sky-500
                                ">
                                    Username
                                </p>

                                <p className="
                                    mt-2
                                    break-words
                                    text-xl
                                    font-bold
                                    text-slate-100
                                    md:text-2xl
                                ">
                                    {user?.username}
                                </p>

                            </div>


                            {/* Divider */}

                            <div className="
                                h-px
                                bg-slate-800
                            " />


                            {/* Email */}

                            <div>

                                <p className="
                                    font-mono
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-sky-500
                                ">
                                    Email
                                </p>

                                <p className="
                                    mt-2
                                    break-words
                                    text-xl
                                    font-bold
                                    text-slate-100
                                    md:text-2xl
                                ">
                                    {user?.email}
                                </p>

                            </div>

                        </div>

                    </section>


                    {/* =========================================
                        SECURITY TIP
                       ========================================= */}

                    <div className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-900/60
                        px-6
                        py-4
                    ">

                        <p className="
                            font-mono
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-slate-500
                        ">
                            Security Notice
                        </p>

                        <p className="
                            mt-2
                            text-sm
                            leading-relaxed
                            text-slate-400
                        ">
                            Rotate your passwords regularly to reduce the risk
                            of compromised credentials.
                        </p>

                    </div>


                    {/* =========================================
                        SETTINGS
                       ========================================= */}

                    <div className="
                        mx-auto
                        mt-6
                        grid
                        max-w-2xl
                        gap-4
                        md:grid-cols-3
                    ">

                        {/* Change Password */}

                        <button
                            type="button"
                            onClick={() =>
                                setChangePasswordModalOpen(true)
                            }
                            className="
                                rounded-xl
                                border
                                border-sky-800/70
                                bg-sky-950/30
                                px-6
                                py-4
                                font-bold
                                text-sky-400
                                transition
                                hover:-translate-y-0.5
                                hover:border-sky-400
                                hover:bg-sky-950/50
                                hover:shadow-[0_0_20px_rgba(56,189,248,0.12)]
                            "
                        >
                            Change Password
                        </button>


                        {/* Change Email */}

                        <button
                            type="button"
                            disabled
                            className="
                                cursor-not-allowed
                                rounded-xl
                                border
                                border-slate-800
                                bg-slate-950
                                px-6
                                py-4
                                font-bold
                                text-slate-600
                                opacity-60
                            "
                        >
                            Change Email
                        </button>


                        {/* Return Home */}

                        <button
                            type="button"
                            onClick={() => router.push("/")}
                            className="
                                rounded-xl
                                border
                                border-slate-700
                                bg-slate-900
                                px-6
                                py-4
                                font-bold
                                text-slate-300
                                transition
                                hover:-translate-y-0.5
                                hover:border-sky-700
                                hover:bg-slate-800
                                hover:text-sky-400
                            "
                        >
                            Return Home
                        </button>

                    </div>


                    {/* =========================================
                        SYSTEM FOOTER TEXT
                       ========================================= */}

                    <p className="
                        mt-10
                        text-center
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-slate-700
                    ">
                        FUTUREPURA NETWORK // ACCOUNT TERMINAL
                    </p>

                </div>


                {/* =========================================
                    CHANGE PASSWORD MODAL
                   ========================================= */}

                {changePasswordModalOpen && (
                    <ChangePasswordModal
                        onClose={() =>
                            setChangePasswordModalOpen(false)
                        }
                    />
                )}

            </main>
        </AuthGuard>
    );
}