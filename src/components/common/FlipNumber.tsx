import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
const FlipNumber = ({ number }: { number: number }) => {
    return (
        <div className="relative text-4xl lg:text-[200px] font-semibold leading-none mb-20 flex justify-end">
            <div>0</div>
            <div className="relative h-[200px] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={number}
                        initial={{ y: 100, opacity: 0, rotateX: -80 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -100, opacity: 0, rotateX: 80 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                            mass: 1,
                        }}
                        style={{
                            transformOrigin: "50% 50%",
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {number}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div>
                .
            </div>
        </div>
    );
};
export default FlipNumber