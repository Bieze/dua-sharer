import React from "react";

export default function Main({ className, children } : { children: React.ReactNode , className : string | undefined }) {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    )
}