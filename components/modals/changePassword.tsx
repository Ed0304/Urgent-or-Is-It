"use client";

import { useState } from "react";
import {
    validatePasswordFunction,
    getPasswordRequirements,
} from "@/utils/passwordValidation";

type ChangePasswordModalProps = {
    onClose: () => void;
};

export async function changePassword(
    token: string,
    currentPassword: string,
    newPassword: string
) {
    const response = await fetch(
        "http://localhost:3001/auth/password",
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                currentPassword,
                newPassword,
            }),
        }
    );

    const data = await response.json();

    return {
        ok: response.ok,
        data,
    };
}

export default function ChangePasswordModal({
    onClose,
}: ChangePasswordModalProps) {

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const passwordRequirements =
        getPasswordRequirements(newPassword);

    const passwordIsValid =
        validatePasswordFunction(newPassword);

    const passwordsMatch =
        newPassword === confirmPassword;

    const canSubmit =
        currentPassword.length > 0 &&
        passwordIsValid &&
        passwordsMatch &&
        !isSubmitting;

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setErrorMessage("");

        if (!passwordIsValid) {
            setErrorMessage(
                "Your new password does not meet all the requirements."
            );
            return;
        }

        if (!passwordsMatch) {
            setErrorMessage(
                "New passwords do not match."
            );
            return;
        }

        const token =
            localStorage.getItem("access_token");

        if (!token) {
            setErrorMessage(
                "You are not logged in. Please log in again."
            );
            return;
        }

        try {
            setIsSubmitting(true);

            const response = await changePassword(
                token,
                currentPassword,
                newPassword
            );

            if (response.ok) {
                onClose();
                return;
            }

            setErrorMessage(
                response.data?.message ??
                "Unable to change your password."
            );

        } catch {
            setErrorMessage(
                "Something went wrong. Please try again."
            );

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                overflow-y-auto
                bg-black/70
                px-4
                py-6
            "
        >

            {/* Modal */}
            <div
                className="
                    w-full
                    max-w-xl
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-2xl
                    border-2
                    border-zinc-700
                    bg-zinc-900
                    p-6
                    text-white
                    shadow-2xl
                    md:p-10
                "
            >

                {/* Header */}
                <div
                    className="
                        mb-8
                        flex
                        items-center
                        justify-between
                    "
                >
                    <h1
                        className="
                            text-3xl
                            font-extrabold
                            tracking-tight
                            md:text-4xl
                        "
                    >
                        Change Password
                    </h1>

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isSubmitting}
                        className="
                            rounded-lg
                            px-3
                            py-1
                            text-3xl
                            font-light
                            transition
                            hover:bg-zinc-800
                            disabled:cursor-not-allowed
                            disabled:opacity-40
                        "
                        aria-label="Close"
                    >
                        ×
                    </button>
                </div>

                <form
                    className="space-y-6"
                    onSubmit={handleSubmit}
                >

                    {/* Current Password */}
                    <div className="space-y-2">

                        <label
                            htmlFor="currentPassword"
                            className="
                                block
                                text-lg
                                font-semibold
                            "
                        >
                            Current Password
                        </label>

                        <input
                            id="currentPassword"
                            name="currentPassword"
                            type="password"
                            required
                            value={currentPassword}
                            onChange={(e) =>
                                setCurrentPassword(
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                rounded-lg
                                border-2
                                border-zinc-700
                                bg-zinc-950
                                px-4
                                py-3
                                text-lg
                                text-white
                                outline-none
                                transition
                                placeholder:text-zinc-500
                                focus:border-zinc-500
                                focus:ring-2
                                focus:ring-zinc-700
                            "
                            placeholder="Enter your current password"
                        />

                    </div>

                    {/* New Password */}
                    <div className="space-y-2">

                        <label
                            htmlFor="newPassword"
                            className="
                                block
                                text-lg
                                font-semibold
                            "
                        >
                            New Password
                        </label>

                        <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            required
                            value={newPassword}
                            onChange={(e) =>
                                setNewPassword(
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                rounded-lg
                                border-2
                                border-zinc-700
                                bg-zinc-950
                                px-4
                                py-3
                                text-lg
                                text-white
                                outline-none
                                transition
                                placeholder:text-zinc-500
                                focus:border-zinc-500
                                focus:ring-2
                                focus:ring-zinc-700
                            "
                            placeholder="Enter your new password"
                        />

                        {/* Password Requirements */}
                        <div
                            className="
                                grid
                                grid-cols-1
                                gap-1
                                pt-2
                                text-sm
                                sm:grid-cols-2
                            "
                        >

                            <p
                                className={
                                    passwordRequirements.minimumLength
                                        ? "text-green-400"
                                        : "text-zinc-400"
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
                                        ? "text-green-400"
                                        : "text-zinc-400"
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
                                        ? "text-green-400"
                                        : "text-zinc-400"
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
                                        ? "text-green-400"
                                        : "text-zinc-400"
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
                                        ? "text-green-400"
                                        : "text-zinc-400"
                                }
                            >
                                {passwordRequirements.specialSymbol
                                    ? "✓"
                                    : "○"}{" "}
                                Special character
                            </p>

                        </div>

                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">

                        <label
                            htmlFor="confirmNewPassword"
                            className="
                                block
                                text-lg
                                font-semibold
                            "
                        >
                            Confirm New Password
                        </label>

                        <input
                            id="confirmNewPassword"
                            name="confirmNewPassword"
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(e) =>
                                setConfirmPassword(
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                rounded-lg
                                border-2
                                border-zinc-700
                                bg-zinc-950
                                px-4
                                py-3
                                text-lg
                                text-white
                                outline-none
                                transition
                                placeholder:text-zinc-500
                                focus:border-zinc-500
                                focus:ring-2
                                focus:ring-zinc-700
                            "
                            placeholder="Confirm your new password"
                        />

                        {/* Confirmation feedback */}
                        {confirmPassword.length > 0 && (
                            <p
                                className={
                                    passwordsMatch
                                        ? "text-sm text-green-400"
                                        : "text-sm text-red-400"
                                }
                            >
                                {passwordsMatch
                                    ? "✓ Passwords match"
                                    : "✗ Passwords do not match"}
                            </p>
                        )}

                    </div>

                    {/* Error Message */}
                    {errorMessage && (
                        <div
                            role="alert"
                            className="
                                rounded-lg
                                border
                                border-red-500/50
                                bg-red-950/40
                                px-4
                                py-3
                                text-sm
                                text-red-300
                            "
                        >
                            ⚠️ {errorMessage}
                        </div>
                    )}

                    {/* Buttons */}
                    <div
                        className="
                            flex
                            flex-col
                            gap-3
                            pt-4
                            sm:flex-row
                        "
                    >

                        <button
                            type="button"
                            onClick={onClose}
                            disabled={isSubmitting}
                            className="
                                flex-1
                                rounded-lg
                                border-2
                                border-zinc-700
                                px-6
                                py-3
                                text-lg
                                font-bold
                                transition
                                hover:bg-zinc-800
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={!canSubmit}
                            className="
                                flex-1
                                rounded-lg
                                border-2
                                border-zinc-700
                                px-6
                                py-3
                                text-lg
                                font-bold
                                transition
                                hover:bg-zinc-800
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            {isSubmitting
                                ? "Changing..."
                                : "Change Password"}
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
}