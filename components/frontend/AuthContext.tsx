"use client";

import {createContext, useContext, useState, useEffect, type ReactNode} from "react";
import { getProfile } from "./login";
import { NullExpression } from "mongoose";
type AuthContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    logout: () => void;
    flashMessage: flashMessage | null
    setFlashMessage: (value:flashMessage | null ) => void
};

type AuthProviderProps = {
    children: ReactNode;
};

//Similar to flash messages to Flask
type flashMessage = {
    messageType: "success" | "error" | "warning" // Union
    messageContent: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: AuthProviderProps) {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [flashMessage, setFlashMessage] = useState<flashMessage | null>(null);
   
   const logout = () => {
        localStorage.removeItem("access_token");
        setIsLoggedIn(false);
    }
   useEffect(() => {
    async function checkAuth() {
        const token = localStorage.getItem("access_token")
        if(!token){
            return
        }
    
        const profile = await getProfile(token);

        if (profile.ok) {
            setIsLoggedIn(true);
        } else {
            localStorage.removeItem("access_token");
            setIsLoggedIn(false);
        }
    }

    checkAuth();
    
   },[])

   
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout, flashMessage, setFlashMessage,}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }

    return context;
}