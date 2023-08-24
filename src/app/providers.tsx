import React from "react"
import { AuthUserProvider } from "../firebase/context/FirebaseAuthContext"
import { NextUIProvider } from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <AuthUserProvider>
    <NextUIProvider>
        {children}
    </NextUIProvider>
    </AuthUserProvider>

    
  )
}
