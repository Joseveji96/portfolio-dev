'use client'

import React, { useEffect, useState, useRef } from 'react'
import Parallax from './Parallax'
import Hero from './Hero'
import { useScroll, motion, useTransform } from "framer-motion"

const OverlaySection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [viewportHeight, setViewportHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setViewportHeight(window.innerHeight);
            setIsMobile(window.innerWidth < 640); // sm breakpoint

            const handleResize = () => {
                setViewportHeight(window.innerHeight);
                setIsMobile(window.innerWidth < 640);
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Hero animations
    const heroOpacity = useTransform(scrollY, [0, viewportHeight * 0.8], [1, 0]);
    const translateYHero = useTransform(scrollY, [0, viewportHeight * 0.8], [0, 50]);
    
    // Parallax animations
    const parallaxTranslateY = useTransform(
        scrollY,
        [0, viewportHeight],
        [viewportHeight - 400, 0]
    );

    // Convertir el MotionValue de opacidad a un valor numérico para pointerEvents
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    
    useEffect(() => {
        return heroOpacity.onChange((latest) => {
            setIsHeroVisible(latest > 0);
        });
    }, [heroOpacity]);

    return (
        <div ref={containerRef} className="relative min-h-[200vh]">
            {/* Hero Section */}
            <motion.div
                className="fixed inset-0 flex items-center justify-center"
                style={{
                    opacity: heroOpacity,
                    translateY: translateYHero,
                    pointerEvents: isHeroVisible ? "auto" : "none",
                }}
            >
                <Hero opacity={heroOpacity} translateY={translateYHero} />
            </motion.div>

            {/* Parallax Section */}
            <motion.div
                id='capabilities'
                className={`relative w-full ${isMobile ? 'min-h-screen' : ''}`}
                style={{
                    translateY: parallaxTranslateY,
                }}
            >
                <div className={`${isMobile ? 'pt-[32vh]' : 'mt-[calc(30vh)]'}`}>
                    <Parallax />
                </div>
            </motion.div>
        </div>
    )
}

export default OverlaySection;