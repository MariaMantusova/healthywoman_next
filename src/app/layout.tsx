import './globals.css';
import type { Metadata } from 'next';
import React from "react";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: 'Healthy Woman',
  description: 'App for women.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body suppressHydrationWarning={true}>
      <Header/>
      <main className="main">
          {children}
      </main>
      <Footer/>
      </body>
      </html>
  )
}
