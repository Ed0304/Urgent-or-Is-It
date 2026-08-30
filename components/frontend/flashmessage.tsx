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
        <div>
            {flashMessage.messageContent}
        </div>
    );
}