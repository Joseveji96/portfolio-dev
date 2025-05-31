import React from 'react'
import BtnTitle from '../common/BtnTitle'
import Image from 'next/image'
import ButtonStroke from '../Botton/ButtonStroke'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Articles = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const titleAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }

  const cardAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const linkHoverAnimation = {
    initial: {
      backgroundSize: "0% 2px",
      backgroundPosition: "0% 100%",
      backgroundRepeat: "no-repeat",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: {
      backgroundSize: "100% 2px",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className='p-4 sm:p-8 md:p-16 w-auto m-auto' ref={ref}>
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleAnimation}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className='mb-8 md:mb-14'
        id='articles'
      >
        <h1 className='font-medium text-4xl sm:text-5xl md:text-6xl uppercase'>
          Written{' '}
          <span className='font-bold text-6xl sm:text-8xl md:text-9xl block sm:inline'>
            Articles
          </span>
        </h1>
      </motion.div>
      
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardAnimation}
        className='bg-blue-200 p-6 sm:p-8 md:p-12 relative' 
        style={{
          backgroundImage: 'url(images/fondo-VA.jpg)', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          borderRadius: "10px"
        }}
      > 
        <div className='absolute inset-0 bg-black/30 backdrop-blur-sm md:hidden rounded-lg'></div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerAnimation}
          className='flex max-md:justify-between gap-5 mb-8 md:mb-12 relative'
        >
            <motion.div
            variants={itemAnimation}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
            <Image
              src={"images/flor.svg"}
              alt={'Flor'}
              width={32}
              height={32}
              className="block 3xl:w-48"
              style={{ filter: "invert(1)" }}
            />
            </motion.div>
          <motion.div variants={itemAnimation}>
            <BtnTitle title='VISION ARTIFICIAL'/>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerAnimation}
          className='flex flex-col md:flex-row justify-between mb-6 sm:mb-8 md:mb-12 relative'
        >
          <motion.div 
            variants={itemAnimation}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='w-full sm:w-4/5 md:w-2/5 mb-6 md:mb-0'
          >
            <p className='font-normal text-xl sm:text-2xl md:text-3xl text-white uppercase'>
              Is it possible to create computer vision with more than 
              <span className='font-bold'> 70% accuracy </span>
              with datasets 
              <span className='font-bold'>less than 100 images</span>?
            </p>
          </motion.div>
      
          <motion.div 
            variants={containerAnimation}
            className='flex flex-wrap justify-center md:flex-col gap-2'
          >
            {[
              { title: 'Field detection', className: 'md:-translate-x-14' },
              { title: 'Auto Labeling', className: '' },
              { title: 'Small Dataset', className: 'md:-translate-x-20' }
            ].map((button) => (
              <motion.div
                key={button.title}
                variants={itemAnimation}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ButtonStroke 
                  title={button.title} 
                  className={button.className}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerAnimation}
          className='text-center md:text-right font-dm text-white relative'
        >
          <motion.h2 
            variants={itemAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className='italic text-2xl sm:text-3xl uppercase'
          >
            Quick Answer, Yes.
          </motion.h2>
          <motion.div
            variants={itemAnimation}
            className="relative inline-block"
          >
            <motion.a 
              href="#"
              initial="initial"
              whileHover="hover"
              animate="initial"
              variants={linkHoverAnimation}
              className="text-lg sm:text-xl inline-block relative text-white"
              style={{
                backgroundImage: "linear-gradient(90deg, #fff, #fff)",
                backgroundSize: "0% 2px",
                backgroundPosition: "0% 100%",
                backgroundRepeat: "no-repeat",
                padding: "2px 0"
              }}
            >
              Find out more here <span className='text-xs text-stone-200'>(Publication on hold)</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Articles