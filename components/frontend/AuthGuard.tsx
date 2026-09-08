"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";

interface AuthGuardProps {
    children: React.ReactNode;
}

export default function AuthGuard({
    children,
}: AuthGuardProps) {

    const {
        isLoggedIn,
        authLoading,
    } = useAuth();

    const router = useRouter();

    useEffect(() => {

        if (!authLoading && !isLoggedIn) {
            router.push("/");
        }

    }, [authLoading, isLoggedIn, router]);


    if (authLoading) {
        return null;
    }

    if (!isLoggedIn) {
        return null;
    }

    return <>{children}</>;
}