import { motion } from 'framer-motion';
import Image from 'next/image';

const MobileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full mt-6 md:hidden"
    >
      <Image
        src={"images/e.png"}
        width={300}
        height={300}
        className="w-full h-auto object-cover rounded-lg shadow-lg"
        alt="I"
      />
    </motion.div>
  );
};

export default MobileImage;
