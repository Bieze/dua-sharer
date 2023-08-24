"use client"
import React from "react";
import LoginPasswordForm from '@/src/components/Forms/LoginForm'


export default function Page() {
    return (
        <div className="grid h-screen place-items-center w-full">
            <div className='w-96'>
                <LoginPasswordForm />
            </div>

        </div>
    )
}
