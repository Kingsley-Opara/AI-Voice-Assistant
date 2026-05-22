"use client"
import Image from "next/image";
import Navbar from "./navbar";
import Hero from "./Hero";
import VoiceAgent from "./VoiceAgent";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero/>
      <VoiceAgent/>
    </div>
  );
}
