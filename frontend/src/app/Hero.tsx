"use client"
import React from 'react'
import {ArrowRight} from "lucide-react"

const Hero = () => {
  return (
    <div>
        <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-32 text-center">
            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Now in private beta
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
                The voice assistant
                <br />
                <span className="text-gradient-primary">that actually listens.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
                Aria is a real-time AI you can talk to like a friend. Ask, plan, write, decide — all hands-free, in any language.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                    href="#cta"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-smooth hover:scale-[1.02]"
                >
                    Try Aria free
                    <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </a>
                <a
                    href="#how"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm backdrop-blur transition-smooth hover:bg-card"
                >
                    Hear it in action
                </a>
            </div>
        </section>

  
      
    </div>
  )
}

export default Hero
