"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Download, MoveDown } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { motion, MotionValue, Variants } from 'framer-motion';
import { convertO, slideUp, slideUp2 } from "../hero/animation"
import BottonWork from '../Botton/BottonWork';

interface HeroProps {
	opacity: MotionValue<number>;
	translateY: MotionValue<number>;
}

const Hero: React.FC<HeroProps> = ({ opacity, translateY }) => {
	const imageRef = useRef(null);
	const [showVideo, setShowVideo] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowVideo(false);
		}, 5200);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		gsap.to(imageRef.current, {
			rotation: 360,
			repeat: -1,
			duration: 20,
			ease: 'linear',
		});
	}, []);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 10,
			},
		},
	};

	const fadeInVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.8,
			},
		},
	};

	return (
		<motion.section
			className='w-screen text-textColor'
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			<motion.div
				style={{ opacity, translateY, transform: translateY }}
				className='flex flex-col justify-center items-center gap-2'
				variants={itemVariants}
			>
				<motion.div variants={slideUp2} initial="initial" animate="enter" className='font-dm font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-9xl 3xl:text-[10rem] uppercase tracking-wide px-4 sm:px-5 md:px-6 xl:px-24 3xl:px-36'>
					<motion.h1 variants={itemVariants} className='pl-0 text-center sm:text-left'>EVERY PROJECT</motion.h1>
					<div className='flex flex-row justify-center items-center sm:pl-6 xl:pl-28'>
						<motion.h1 variants={itemVariants} className='text-center sm:text-left'>Can be</motion.h1>
						<motion.div variants={slideUp} initial="initial" animate="enter" className="mx-4 sm:mx-6 xl:mx-10 my-4 sm:my-0">
							<Image
								ref={imageRef}
								src={"images/flor.svg"}
								alt={'Flor'}
								width={100}
								height={100}
								className="block w-14 md:w-24 lg:w-32 3xl:w-48"
							/>
						</motion.div>
						<motion.h1 variants={itemVariants} className='text-center sm:text-left'>a new</motion.h1>
					</div>
				</motion.div>
				{/* Description On Desktop */}
				<motion.div variants={fadeInVariants} className='px-4 md:px-18 xl:px-36 font-dm flex flex-col sm:flex-row gap-4 xl:gap-20 3xl:gap-32'>
					<motion.div variants={itemVariants} className='hidden sm:flex flex-col gap-1 pt-3 xl:pl-28 text-center sm:text-right font-normal text-lg sm:text-base md:text-xl lg:text-2xl 3xl:text-3xl'>
						<h2 className='font-bold text-base md:text-lg lg:text-xl 3xl:text-2xl bg-clip-text text-transparent sm:pl-5' style={{
							backgroundImage: 'linear-gradient(to right, #1D1D1D, #003659)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}>Hi! i´m Eduardo, A Web & Mobil developer</h2>
						<h2 className='sm:-translate-x-10 md:-translate-x-16 xl:-translate-x-44'>Let´s Transform <span className='font-extrabold text-[#524848]'>constraints</span> </h2>
						<div>
							<h2>into {"<"}code{"/>"} <span className="font-frank italic text-slate-50 px-3" style={{ backgroundImage: "url('images/o.png')", backgroundSize: "cover", display: "inline-block", width: "auto", height: "100%", borderRadius: 10 }}>Mastepieces</span></h2>
						</div>
					</motion.div>
					{/* History */}
					<motion.h1 variants={itemVariants} className='sm:pr-5 sm:pt-2 font-light text-6xl sm:text-7xl lg:text-8xl 2xl:text-9xl 3xl:text-9xl uppercase text-center sm:text-left whitespace-nowrap'>Hist
						<span className="relative inline-block">
							{showVideo ? (
								<motion.span
									variants={slideUp} initial="initial" animate="enter"
									className="relative w-full h-full flex justify-center items-center text-transparent transition-transform duration-1000 ease-in-out"
									style={{ WebkitTextFillColor: 'transparent' }}
								>
									o
									<motion.video
										variants={convertO} initial="initial" animate="enter"
										autoPlay
										loop
										muted
										className="absolute top-0 left-0 object-cover transition-transform transform duration-500 ease-in-out"
										style={{
											borderRadius: 60,
											opacity: showVideo ? 1 : 0,
											top: '50%',
											left: '50%',
											transform: 'translate(-50%, -50%)',
										}}
									>
										<source src="videos/VidO.mp4" type="video/mp4" />
									</motion.video>
								</motion.span>
							) : (
								<span
									className="relative inline-block text-transparent bg-clip-text transition-all duration-500 ease-in-out"
									style={{
										backgroundImage: 'url("images/o.png")',
										backgroundPosition: 'center',
										backgroundSize: 'cover',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
										opacity: showVideo ? 0 : 1,
									}}
								>
									o
								</span>
							)}
						</span>
						ry
					</motion.h1>
					{/* Description On Mobile */}
					<motion.div variants={itemVariants} className='flex sm:hidden flex-col gap-1 text-center font-normal text-xl'>
						<h2 className='font-bold text-base bg-clip-text text-transparent' style={{
							backgroundImage: 'linear-gradient(to right, #1D1D1D, #003659)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
						}}>Hi! i´m Eduardo, A Web & Mobil developer</h2>
						<h2>Let´s Transform <span className='font-extrabold text-[#524848]'>constraints</span> </h2>
						<div>
							<h2>into {"<"}code{"/>"} <span className="font-frank italic text-slate-50 px-3" style={{ backgroundImage: "url('images/o.png')", backgroundSize: "cover", display: "inline-block", width: "auto", height: "100%", borderRadius: 10 }}>Mastepieces</span></h2>
						</div>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Descargas */}
			<motion.div
				variants={fadeInVariants}
				className="h-auto sm:h-10 flex flex-row justify-center md:justify-between sm:gap-6 md:gap-4 items-center px-4 md:px-28 mt-10"
			>
				<motion.div variants={itemVariants} className="flex flex-row gap-4 sm:gap-6 xl:gap-16 items-center">
					<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="font-inter text-xs md:text-sm xl:text-[18px] font-extrabold flex gap-1 items-center">
						<a className="navbar-link">Download CV</a>
						<Download className="w-4 h-4 sm:w-6 sm:h-6" />
					</motion.button>
					<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="font-inter text-xs md:text-sm xl:text-[18px] font-extrabold flex gap-1 items-center">
						<a className="navbar-link">Descargar CV</a>
						<Download className="w-4 h-4 sm:w-6 sm:h-6" />
					</motion.button>
				</motion.div>
				<motion.div variants={itemVariants} className='flex flex-row gap-8 md:gap-2 lg:gap-10 items-center'>
					<BottonWork />
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.5 }}
						className="-mt-3 hidden md:flex justify-center"
					>
						<motion.span
							animate={{ y: [0, 10, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							className="text-lg text-textColor md:text-xl"
						>
							<MoveDown strokeWidth={2} size={36} className="md:w-8 md:h-8" />
						</motion.span>
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default Hero;

