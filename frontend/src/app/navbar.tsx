"use client"
import React from 'react'
import {Mic} from "lucide-react"

const Navbar = () => {
  return (
    <div>
        <main className="text-white" >
        
            <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                    <Mic className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold tracking-tight">Aria</span>
                </div>
                <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
                    <a href="#features" className="transition-smooth hover:text-foreground">Features</a>
                    <a href="#how" className="transition-smooth hover:text-foreground">How it works</a>
                    <a href="#pricing" className="transition-smooth hover:text-foreground">Pricing</a>
                </nav>
            </header>


         </main>
      
    </div>
  )
}

export default Navbar;
