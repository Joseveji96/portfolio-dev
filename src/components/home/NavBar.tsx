"use client"
import { CornerDownRight, Earth, Github, Linkedin, Menu, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { social } from '@/lib/data'
import Link from 'next/link'

const NavBar = () => {
    // const [onDarkTheme, setOnDarkTheme] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrollMenuOpen, setIsScrollMenuOpen] = useState(false);
    const titleRef = useRef<HTMLAnchorElement>(null)
    const { scrollY } = useScroll()
    const isScrolled = useTransform(scrollY, [0, 100], [0, 1])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isHovered && titleRef.current) {
                const rect = titleRef.current.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                const distanceX = e.clientX - centerX
                const distanceY = e.clientY - centerY
                titleRef.current.style.transform = `translate(${distanceX * 0.1}px, ${distanceY * 0.2}px)`
            }
        }

        if (isHovered) {
            window.addEventListener('mousemove', handleMouseMove)
        } else if (titleRef.current) {
            titleRef.current.style.transform = 'translate(0, 0)'
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [isHovered])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const toggleScrollMenu = () => {
        setIsScrollMenuOpen(!isScrollMenuOpen);
    }

    return (
        <>
            <header className="fixed top-0 lg:top-5 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 m-0 w-full h-20 flex items-center font-dm text-textColor font-medium text-sm sm:text-base md:text-lg lg:text-xl z-50" id='hero'>
                <div className="w-full relative">
                    <nav className="relative flex justify-between items-center">
                        <motion.a 
                            ref={titleRef} 
                            href="./" 
                            className="transition-all duration-300 ease-out transform hover:scale-110" 
                            onMouseEnter={() => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Eduardo <span className='text-[#524848]'>(Developer)</span>
                        </motion.a>

                        {/* Mobile menu button (always visible on small screens) */}
                        <button 
                            className="lg:hidden z-50"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>

                        {/* Scroll menu button (visible on scroll for large screens) */}
                        <motion.button 
                            className="hidden lg:block z-50 absolute right-0 bg-stone-400 bg-opacity-90 p-2 rounded-full to-textColor"
                            onClick={toggleScrollMenu}
                            aria-label="Toggle scroll menu"
                            style={{
                                opacity: isScrolled,
                                mixBlendMode: 'difference', // This will make the button text visible over white backgrounds
                            }}
                        >
                            {isScrollMenuOpen ? <X /> : <Menu />}
                        </motion.button>

                        {/* Desktop menu (visible when not scrolled on large screens) */}
                        <motion.div 
                            className='hidden lg:flex lg:items-center lg:space-x-4'
                            style={{
                                opacity: useTransform(isScrolled, [0, 1], [1, 0]),
                                pointerEvents: useTransform(isScrolled, v => v === 0 ? 'auto' : 'none'),
                                userSelect: useTransform(isScrolled, v => v === 0 ? 'auto' : 'none'),
                            }}
                        >
                            <ul className="list-none flex space-x-4">
                                <li><a className="navbar-link" href="#recent-projects">Projects</a></li>
                                <li><a className="navbar-link" href="#capabilities">Capabilities</a></li>
                                <li><a className="navbar-link" href="#articles">Articles</a></li>
                                <li><a className="navbar-link" href="#about">About</a></li>
                            </ul>
                            <a className='navbar-link' target='_blank' href={social.linkedin}>Contact Me</a>
                            {/* <button 
                                className="flex gap-4 justify-center items-center border-2 py-1 px-2 border-black text-sm font-extrabold"
                                style={{ borderRadius: 18 }}
                                onClick={() => setOnDarkTheme(!onDarkTheme)}
                                aria-label="Toggle theme"
                            >
                                {onDarkTheme ? <h1>Dark</h1> : <h1>Light</h1>}
                                <Circle 
                                    width={12} 
                                    height={12} 
                                    style={onDarkTheme ? { backgroundColor: "black", borderRadius: 100 } : {}} 
                                />
                            </button> */}
                        </motion.div>
                    </nav>

                    {/* Mobile menu (for small screens) */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                                    onClick={toggleMobileMenu}
                                />
                                <motion.div 
                                    className="lg:hidden p-2 fixed top-20 right-5 bg-slate-200 shadow-md z-50 rounded-xl overflow-hidden"
                                    initial={{ opacity: 0, y: -20, width: 0, height: 0 }}
                                    animate={{ opacity: 1, y: 0, width: "auto", height: "auto" }}
                                    exit={{ opacity: 0, y: -20, width: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul className="flex flex-col py-4 px-6 space-y-4">
                                        <li><a className="navbar-link" href="#recent-projects">Projects</a></li>
                                        <li><a className="navbar-link" href="#capabilities">Capabilities</a></li>
                                        <li><a className="navbar-link" href="#articles">Articles</a></li>
                                        <li><a className="navbar-link" href="#about">About</a></li>
                                        <a className='navbar-link' target='_blank' href={social.linkedin}>Contact Me</a>
                                        {/* <li>
                                            <button 
                                                className="flex gap-2 justify-center items-center border-2 py-1 px-2 border-black text-sm font-extrabold w-full"
                                                style={{ borderRadius: 18 }}
                                                onClick={() => setOnDarkTheme(!onDarkTheme)}
                                                aria-label="Toggle theme"
                                            >
                                                {onDarkTheme ? <h1>Dark</h1> : <h1>Light</h1>}
                                                <Circle 
                                                    width={12} 
                                                    height={12} 
                                                    style={onDarkTheme ? { backgroundColor: "black", borderRadius: 100 } : {}} 
                                                />
                                            </button>
                                        </li> */}
                                    </ul>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>

                    {/* Scroll menu (for large screens when scrolled) */}
                    <AnimatePresence>
                        {isScrollMenuOpen && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="hidden lg:block fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                                    onClick={toggleScrollMenu}
                                />
                                <motion.div 
                                    className="hidden lg:block p-2 fixed w-80 top-6 right-10 bg-slate-200 shadow-md z-40 rounded-xl overflow-hidden"
                                    initial={{ opacity: 0, height: 0, x: 300 }}
                                    animate={{ opacity: 1, height: 'auto', x:0 }}
                                    exit={{ opacity: 0, height: 0, x:100 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul className="flex flex-col py-8 px-6 space-y-4">
                                        <li><a className="navbar-link text-3xl" href="#recent-projects">Projects</a></li>
                                        <li><a className="navbar-link text-3xl" href="#capabilities">Capabilities</a></li>
                                        <li><a className="navbar-link text-3xl" href="#articles">Articles</a></li>
                                        <li><a className="navbar-link text-3xl" href="#about">About</a></li>
                                        {/* <li><a className='navbar-link text-2xl' target='_blank' href={social.linkedin}>Contact Me</a></li> */}
                                        
                                        {/* <li>
                                            <button 
                                                className="flex gap-2 justify-center items-center border-2 py-1 px-2 border-black text-sm font-extrabold w-full"
                                                style={{ borderRadius: 18 }}
                                                onClick={() => setOnDarkTheme(!onDarkTheme)}
                                                aria-label="Toggle theme"
                                            >
                                                {onDarkTheme ? <h1>Dark</h1> : <h1>Light</h1>}
                                                <Circle 
                                                    width={12} 
                                                    height={12} 
                                                    style={onDarkTheme ? { backgroundColor: "black", borderRadius: 100 } : {}} 
                                                />
                                            </button>
                                        </li> */}
                                    </ul>
                                    <div className='px-6 pb-8 flex flex-col'>
                                        <div className='w-auto h-[1.5px] bg-zinc-500 mb-5' />
                                        <p className='text-slate-700 text-lg mb-2 flex items-center gap-2'>Send me an email <span><Earth width={18}/></span></p> 

                                        <div className='flex items-center gap-2'>
                                            <div className='bg-stone-500 w-fit p-1' style={{ borderRadius: 4 }}>
                                                <CornerDownRight width={32} />
                                            </div>
                                            <li className='list-none'><a className='navbar-link text-3xl' target='_blank' href={social.linkedin}>Contact Me</a></li>
                                        </div>

                                        <div className='flex items-end gap-2 mt-4 text-sm'>
                                            <Link href={'#'} className='flex items-end gap-2 hover:bg-stone-500 p-1' style={{borderRadius:4}}>
                                                <Linkedin width={18} />
                                                <span>LinkedIn</span>
                                            </Link>
                                            <Link href={'#'} className='flex items-end gap-2 hover:bg-stone-500 p-1' style={{borderRadius:4}}>
                                                <Github width={18}/>
                                                <span>GitHub</span>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </header>
            {/* Spacer div to prevent content from going under the navbar */}
            <div className="h-28 lg:h-32"></div>
        </>
    )
}

export default NavBar

