'use client'

import React, { useEffect } from 'react'
import Image from "next/image"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaJs, FaPython, FaJava } from 'react-icons/fa'
import { TbBrandCpp, TbBrandCSharp } from "react-icons/tb"

export const lenguajesStack = [
    {
        name: "Typescript",
        icon: <FaReact />
    },
    {
        name: "JavaScript",
        icon: <FaJs />
    },
    {
        name: "Python",
        icon: <FaPython />
    },
    {
        name: "Java",
        icon: <FaJava />
    },
    {
        name: "C++",
        icon: <TbBrandCpp />
    },
    {
        name: "C#",
        icon: <TbBrandCSharp />
    }
]

const Capabilities = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    }

    return (
        <motion.div 
            ref={ref}
            className='font-dm p-4 sm:p-6 md:p-8 lg:p-12 w-full flex flex-col pb-10 border-b-2 border-[#a2a2a2d6]'
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.div 
                className='w-fit'
                variants={itemVariants}
            >
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl uppercase font-bold'>Capabilities</h1>
                <motion.div 
                    className='mt-3 sm:mt-4 md:mt-5 h-[1.5px] bg-[#555050]'
                    variants={{
                        hidden: { width: 0 },
                        visible: { width: '100%', transition: { duration: 0.8, delay: 0.5 } }
                    }}
                />
            </motion.div>

            <motion.div 
                className='flex flex-col justify-between mt-4 sm:mt-5 md:mt-7'
                variants={itemVariants}
            >
                <div className='flex flex-col lg:flex-row justify-between'>
                    <motion.p 
                        className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold lg:w-4/5 mb-4 lg:mb-0'
                        variants={itemVariants}
                    >
                        In search to design & develop software that works efficiently, improves the
                        user experience and provides real value to companies.
                    </motion.p>
                    <motion.h2 
                        className='text-base sm:text-lg md:text-xl lg:text-2xl text-[#153647]'
                        variants={itemVariants}
                    >
                        [Areas of Approach]
                    </motion.h2>
                </div>
            </motion.div>

            <motion.div 
                className='flex flex-col lg:flex-row justify-between mt-8 sm:mt-12 md:mt-16 lg:mt-32'
                variants={itemVariants}
            >
                <div>
                    <motion.h2 
                        className='text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5 md:mb-7'
                        variants={itemVariants}
                    >
                        {"<Tech Lenguajes>"}
                    </motion.h2>
                    <div className='flex flex-wrap gap-3'>
                        {lenguajesStack.map((lenguaje, index) => (
                            <motion.div 
                                key={index} 
                                title={lenguaje.name} 
                                className='h-8 sm:h-9 md:h-10 flex items-center gap-2 sm:gap-3 border-2 border-btnStackColor p-1 sm:p-2 rounded-xl text-xs sm:text-sm md:text-base'
                                variants={itemVariants}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            >
                                {lenguaje.icon} {lenguaje.name}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div
                    className="mt-8 lg:mt-0"
                    variants={{
                        hidden: { rotate: -180, opacity: 0 },
                        visible: { rotate: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } }
                    }}
                >
                    <Image src={"images/flor.svg"} alt={'Flor'} width={64} height={64} className="block w-12 sm:w-16 md:w-20 lg:w-16 xl:w-20 sticky top-[600px]" />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Capabilities