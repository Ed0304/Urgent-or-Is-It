"use client";

import { useEffect } from "react";
import { useAuth } from "./AuthContext";

export default function FlashMessage() {
    const { flashMessage, setFlashMessage } = useAuth();

    useEffect(() => {
        if (!flashMessage) {
            return;
        }

        const timer = setTimeout(() => {
            setFlashMessage(null);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [flashMessage, setFlashMessage]);

    if (!flashMessage) {
        return null;
    }

    return (
    <div
        className={`
            fixed
            top-4
            left-4
            right-4
            z-[100]
            rounded-xl
            border-2
            border-zinc-700
            bg-zinc-900
            px-5
            py-4
            text-center
            text-white
            shadow-xl

            sm:left-1/2
            sm:right-auto
            sm:w-[90%]
            sm:max-w-lg
            sm:-translate-x-1/2
            ${
                flashMessage.messageType === "success"
                    ? "border-green-500"
                    : flashMessage.messageType === "error"
                    ? "border-red-500"
                    : "border-yellow-500"
            }
        `}
    >
        <p className="font-semibold">
            {flashMessage.messageContent}
        </p>
    </div>
);
}