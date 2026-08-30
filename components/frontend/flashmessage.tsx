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
            right-6
            top-24
            z-50
            max-w-sm
            rounded-xl
            border-2
            bg-white
            px-5
            py-4
            shadow-xl
            dark:bg-zinc-900
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