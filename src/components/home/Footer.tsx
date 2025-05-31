'use client'

import { social } from '@/lib/data'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const Footer = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <footer ref={ref} className='p-4 md:p-8 lg:p-12 bg-[#161616]'>
      {/* Header Footer */}
      <motion.div 
        className='flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-24'
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className='w-full md:w-fit mb-6 md:mb-0'>
          <h1 className='font-bold text-4xl md:text-6xl lg:text-8xl mt-2 text-white uppercase'>i´m ready to work</h1>
          <div className='bg-white w-auto h-[0.5px]'/>
        </div>
        <div className='flex flex-row md:flex-col text-white border border-white w-full md:w-fit text-base text-center uppercase' style={{borderRadius: "5px"}}>
          <a
            className="block w-full h-full px-4 md:px-10 py-2 text-center hover:bg-slate-50 hover:text-black transition-colors"
          >
            DOWNLOAD CV
          </a>
          <div className="max-lg:w-px lg:h-px bg-white" />
          <Link
            target='_blank'
            href={social.linkedin}
            className="block w-full h-full px-4 md:px-10 py-2 text-center hover:bg-slate-50 hover:text-black transition-colors"
          >
            Go to Linkdin
          </Link>
        </div>
      </motion.div>
      
      <motion.div 
        className='text-white flex flex-col md:flex-row justify-between'
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full md:w-[50%] flex flex-col md:flex-row justify-between font-light text-base md:text-xl items-start uppercase mb-8 md:mb-0'>
          <div className='mb-6 md:mb-0'>
            <div>
              <h1>Social</h1>
              <div className="h-px bg-white mb-3 mt-1" />
            </div>
            <ul className='space-y-1'>
              <li><a className="navbar-link-white" href={social.github} target='_blank'>Github</a></li>
              <li><a className="navbar-link-white" href={social.linkedin}>Linkedin</a></li>
            </ul>
          </div>
          
          <div className='mb-6 md:mb-0'>
            <div>
              <h1>Menu</h1>
              <div className="h-px bg-white mb-3 mt-1" />
            </div>
            <ul className='space-y-1'>
              <li><a className="navbar-link-white" href="">Home</a></li>
              <li><a className="navbar-link-white" href="#recent-projects">Projects</a></li>
              <li><a className="navbar-link-white" href="#capabilities">Capabilities</a></li>
              <li><a className="navbar-link-white" href="#articles">Articles</a></li>
              <li><a className="navbar-link-white" href="#about">About</a></li>
            </ul>
          </div>
          
          <div>
            <div>
              <h1>Open to talk</h1>
              <div className="h-px bg-white mb-3 mt-1" />
            </div>
            <ul>
              <li><a className="navbar-link-white" href={`mailto:${social.email}`}>{social.email}</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-left md:text-right text-xl md:text-3xl text-gray-400 z-50 flex flex-col md:items-end">
          <p>&copy; 2024 EDUARDO VELAZCO</p>
          <p>All Rights reserved</p>
          <Link href="#hero" className='px-5 w-20 py-4 border rounded-xl border-white mt-6 md:mt-10 flex justify-center hover:bg-zinc-800 transition-colors'>
            <Image src={"images/up.svg"} width={22} height={22} alt='up'/>
          </Link>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer

