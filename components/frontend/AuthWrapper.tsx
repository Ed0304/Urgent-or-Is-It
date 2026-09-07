"use client";
import { useState, type ReactNode } from "react";
import Header from "./header";
import AuthProvider from "./AuthContext";
import Footer from "./footer";

type AuthWrapperProps = {
    children: ReactNode;
};


export default function AuthWrapper({children}: AuthWrapperProps){
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    return (
        <>
        <AuthProvider>
            <Header/>
            {children}
            <Footer/>
        </AuthProvider>
        </>
    );


}