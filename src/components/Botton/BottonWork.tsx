"use client"
import { social } from '@/lib/data'
import React from 'react'

const BottonWork = () => {
  return (
    <button className="hidden relative sm:inline-flex h-8 lg:h-10 overflow-hidden rounded-full p-[3px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#446790_0%,#565364_50%,#2076A1_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-5 py-1 text-xs lg:text-base font-semibold sm:font-bold text-textColor backdrop-blur-3xl">
            <a target='_blank' href={social.linkedin}>Ready to work</a>
        </span>
    </button>
  )
}

export default BottonWork