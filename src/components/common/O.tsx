import { motion } from 'framer-motion';

interface OProps {
  showVideo: boolean;
}

export const O = ({ showVideo }: OProps) => {
  return (
    <span className="relative inline-block">
      {/* Video */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: showVideo ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative inline-block text-transparent"
        style={{ WebkitTextFillColor: 'transparent' }}
      >
        {/* Contenedor para la "o" con el video */}
        o
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ borderRadius: 50 }}
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      </motion.span>

      {/* Imagen */}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: showVideo ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative inline-block text-transparent bg-clip-text"
        style={{
          backgroundImage: 'url("images/o.png")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        o
      </motion.span>
    </span>
  );
};
