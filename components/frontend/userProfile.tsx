//TODO: Make the frontend interface for display profile configuration.
"use client"
import { useState, useEffect } from "react"
import { useAuth } from "./AuthContext"
import Link from "next/link"
import { useRouter } from "next/navigation"
import ChangeEmailModal from "../modals/changeEmail"
import ChangePasswordModal from "../modals/changePassword"
export default function UserProfile(){
    const {user} = useAuth()
    const router = useRouter()
    const [changePasswordModalOpen, setChangePasswordModalOpen] = useState(false)


    return (<>
    <main className="min-h-screen px-6 py-16">
        <h1 className=" text-center text-5xl font-extrabold tracking-tight md:text-6xl ">
            User Settings 
        </h1> 
        <p className=" mx-auto mt-4 max-w-xl text-center text-lg leading-relaxed md:text-xl "> 
            Protip: Rotate your passwords to minimize your chances of getting hacked. 
        </p>
        {/* User Profile Information Box */}
        <div
            className="
                mx-auto
                mt-10
                max-w-xl
                rounded-2xl
                border-2
                p-8
                shadow-xl
                md:p-10
            "
        >
            <div className="space-y-6">

                {/* Username */}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide opacity-60">
                        Username
                    </p>

                    <p className="mt-1 break-words text-xl font-bold md:text-2xl">
                        {user?.username}
                    </p>
                </div>

                {/* Email */}
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide opacity-60">
                        Email
                    </p>

                    <p className="mt-1 break-words text-xl font-bold md:text-2xl">
                        {user?.email}
                    </p>
                </div>

            </div>
        </div>

        {/* Setting Buttons */}
        <div
            className="
                mx-auto
                mt-6
                flex
                max-w-xl
                flex-col
                gap-4
                md:flex-row
            "
        >
            <button
                type="button"
                className="
                    flex-1
                    rounded-xl
                    border-2
                    px-6
                    py-4
                    text-lg
                    font-bold
                    shadow-md
                    transition
                    hover:scale-[1.02]
                    hover:shadow-lg
                "
                onClick={()=>setChangePasswordModalOpen(true)}
            >
                Change Password
            </button>
            

            <button
                type="button"
                disabled
                className="
                    flex-1
                    cursor-not-allowed
                    rounded-xl
                    border-2
                    px-6
                    py-4
                    text-lg
                    font-bold
                    opacity-40
                "
            >
                Change Email
            </button>

            <button onClick={()=>{router.push("/")}}
            className="
                    flex-1
                    rounded-xl
                    border-2
                    px-6
                    py-4
                    text-lg
                    font-bold
                    shadow-md
                    transition
                    hover:scale-[1.02]
                    hover:shadow-lg
                ">
                Return Home
            </button>
        </div>
        {changePasswordModalOpen && <ChangePasswordModal onClose={()=>setChangePasswordModalOpen(false)}/>}
        
    </main>
    
    
    </>)
}