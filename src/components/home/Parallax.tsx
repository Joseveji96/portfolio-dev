import { motion } from 'framer-motion';
import React from 'react';
import Capabilities from './Capabilities';
import CapabilitiesCard from './Cards/CapabilitiesCard';
import RecentProjects from './RecentProjects';

const Parallax = () => {
  return (
    <motion.div
      className="flex justify-center h-auto mt-0 sm:mt-5 mb-28 sm:px-[50px] px-0"
      initial={{ opacity: 1 }}
      whileInView={{
        opacity: 1,
        padding: 0, 
        transition: {
          duration: 0.5,
        },
      }}
      exit={{
        opacity: 1,
        padding: '0px 50px',
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{
        margin: "-200px 0px -400px 0px",
        once: false,
      }}
    >
      <motion.div
        className="h-full w-full bg-cover bg-center flex flex-col"
        style={{ backgroundColor: "rgba(210, 210, 210, 1)", borderRadius: 14 }}
        initial={{ borderRadius: 14 }}
        whileInView={{
          borderRadius: 0,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          borderRadius: 14,
          transition: {
            duration: 0.3,
          },
        }}
        viewport={{
          margin: "-200px 0px -600px 0px",
          once: false,
        }}
      >
        <Capabilities />
        <CapabilitiesCard />
        <RecentProjects />
      </motion.div>
    </motion.div>
  );
};

export default Parallax;
