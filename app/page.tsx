"use client"
import React from 'react';
import { frank, inter, dm } from "@/lib/fonts";
import NavBar from "@/src/components/home/NavBar";
import OverlaySection from "@/src/components/home/OverlaySection";
import AboutSection from "@/src/components/home/About";
import Articles from '@/src/components/home/Articles';
import Footer from '@/src/components/home/Footer';


export default function Home() {
  
  return (
    <main className={`${inter.variable} ${frank.variable} ${dm.variable}`}>
      <svg className="grainy-filter">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.5" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div className="w-full h-screen relative">
        <NavBar/>
        <OverlaySection />
        <Articles/>
        <AboutSection/>
        <Footer/>
      </div>
    </main>
  );
}
