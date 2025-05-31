'use client';

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import MobileImage from "../common/MobileImage";
import WideDMSansO from "../common/WideDMSansO";

export default function AboutSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const oRef = useRef<HTMLDivElement>(null);
  const [oVisible, setOVisible] = useState(false);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (oVisible && oRef.current) {
        const rect = oRef.current.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, 1 - (rect.top - 150) / window.innerHeight));
        setScrollProgress(progress);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => setOVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const currentRef = oRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [oVisible]);

  // const baseWidth = 49;
  const minStretchWidth = 95;
  const maxStretchWidth = 350;
  const currentWidth = Math.max(
    minStretchWidth,
    maxStretchWidth - scrollProgress * (maxStretchWidth - minStretchWidth)
  );
  const height = 95;

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-4 md:p-8 lg:p-12"
      id="about"
    >
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 md:mb-0"
      >
        <div className="text-4xl md:text-6xl lg:text-9xl uppercase font-bold mb-4 md:mb-0">
          <h1 className="leading-tight">
            Bey
			<span className="lg:hidden">o</span>
            <motion.span
              ref={oRef}
              className="hidden lg:inline-block"
              style={{ height: `${height}px` }}
              aria-label={scrollProgress > 0.9 ? "o" : "extended o"}
              initial={{ width: maxStretchWidth }}
              animate={{ width: currentWidth }}
              transition={{
                duration: 0.01,
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              <WideDMSansO width={currentWidth} height={height} style={"extra"} />
            </motion.span>
            nd
          </h1>
          <h1 className="leading-tight">The code</h1>
        </div>
        <h3 className="text-xl md:text-2xl text-[#153647]">[About Me]</h3>
      </motion.div>

      <MobileImage />

      {/* Content */}
      <div className="flex flex-col h-fit lg:flex-row justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 lg:mt-10 w-full lg:w-3/5"
        >
          <p className="text-base md:text-lg lg:text-xl w-full lg:w-5/6 mb-6 lg:mb-10">
            I am a software developer, specialising in web and mobile development with a focus on building innovative technology solutions. I am passionate about solving complex problems. I am always looking for ways to streamline development and improve the user experience.
          </p>
          <h3 className="text-xl md:text-2xl mb-4 text-[#153647]">[ Another Experience ]</h3>
          <Accordion>
            <AccordionItem key="winner" aria-label="Anchor" indicator={<Image src={"images/more.svg"} width={32} height={32} alt="More" />} startContent={"2023"} title={<h1 className='text-lg md:text-xl lg:text-2xl'>Winner of the Jalisco regional stage, InnovatecNM</h1>}>
              I competed and won in the Jalisco regional stage of the InnovaTecNM competition with the Tlaltec project. This was the first step after 1 year of research and a little more than 5 months of team development.
            </AccordionItem>
            <AccordionItem key="agile" aria-label="Anchor" indicator={<Image src={"images/more.svg"} width={32} height={32} alt="More" />} startContent={"2023"} title={<h1 className='text-lg md:text-xl lg:text-2xl'>I completed the Certification for the Scrum Methodology</h1>}>
              After seeing the complications of managing a project, I decided to become certified in the Scrum methodology, which has allowed me to develop projects efficiently and meet deadlines as a team.
            </AccordionItem>
            <AccordionItem key="winnerAgain" aria-label="Anchor" indicator={<Image src={"images/more.svg"} width={32} height={32} alt="More" />} startContent={"2024"} title={<h1 className='text-lg md:text-xl lg:text-2xl'>Once again winner of the Jalisco regional stage, InnovatecNM</h1>}>
              Once again I competed and won in the Jalisco InnovaTecNM Regional stage with the Tlaltec project, including improvements such as climate prediction, mapped orchard registers, etc.I co-led the team, was the leader and responsible for the integration of the different modules as well as the UX/UI design and development area.
            </AccordionItem>
            <AccordionItem key="article" aria-label="Anchor" indicator={<Image src={"images/more.svg"} width={32} height={32} alt="More" />} startContent={"2024"} title={<h1 className='text-lg md:text-xl lg:text-2xl'>Co-Wrote an article about Machine Vision</h1>}>
              I co-wrote together with teachers of the ITCG institution, a scientific paper about a training technique of an artificial vision model for detasets of less than 100 images.
            </AccordionItem>
            <AccordionItem key="graduate" aria-label="Anchor" indicator={<Image src={"images/more.svg"} width={32} height={32} alt="More" />} startContent={"2024"} title={<h1 className='text-lg md:text-xl lg:text-2xl'>Graduate of ING. Computer Systems (On hold)</h1>}>
              I am currently in the last semester of my degree, i.e. my residencies, where I am carrying out the creation of a CRM for the management of vegetable gardens.
            </AccordionItem>
          </Accordion>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full lg:w-2/6 mt-8 lg:mt-0 lg:pl-10 lg:pt-12 hidden md:block"
        >
          <Image src={"images/e.png"} width={400} height={400} className="w-full object-cover rounded-2xl shadow-lg" alt="I" />
        </motion.div>
      </div>
    </motion.section>
  );
}