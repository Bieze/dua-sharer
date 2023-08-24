"use client";

import React from 'react';
import './globals.css'
import { Providers } from './providers';
import MenuBar from '../components/navbar';
import Main from '../components/Main';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

            <head />
            <body>
                <Providers>
                    
                    <MenuBar/>
                    <Main className='ml-14 mr-14 mb-6 h-full'>
                    {children} 
                    </Main>
                </Providers>
                    

 

            </body>

        </html>
    )
}
