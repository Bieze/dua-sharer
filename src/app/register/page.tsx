"use client"
import React from "react";
import PasswordForm from "@/src/components/Forms/SignUpForm";

export default function Page() {

  return (
    <div className="grid h-screen place-items-center w-full">
      <div className='w-96'>
        <PasswordForm />
      </div>

    </div>
  )


}