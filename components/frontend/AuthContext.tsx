"use client";

import {createContext, useContext, useState, useEffect, type ReactNode} from "react";
import { getProfile } from "./login";
import { NullExpression } from "mongoose";
import { useRouter } from "next/navigation";
type AuthContextType = {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    user: User | null;
    setUser: (value: User | null) => void;
    logout: () => void;
    flashMessage: flashMessage | null
    setFlashMessage: (value:flashMessage | null ) => void
};

type User = {
    _id : string;
    username: string;
    email: string;
}

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
   const [user,setUser] = useState<User|null>(null);
   const router = useRouter();
   const logout = () => {
        localStorage.removeItem("access_token");
        setUser(null);
        setIsLoggedIn(false);
        router.push('/')
        setFlashMessage({
            messageType:"success",
            messageContent: "You have logged out. See you next time."
        })
    }
   useEffect(() => {
    async function checkAuth() {
        const token = localStorage.getItem("access_token")
        if(!token){
            return
        }
    
        const profile = await getProfile(token);

        if (profile.ok) {
            setUser(profile.data)
            setIsLoggedIn(true);
            
            
        } else {
            localStorage.removeItem("access_token");
            setIsLoggedIn(false);
            setUser(null);
        }
    }

    checkAuth();
    
   },[])

   
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user,setUser, logout, flashMessage, setFlashMessage,}}>
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