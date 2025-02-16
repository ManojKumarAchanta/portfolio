import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../constants/constants.js";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextCertificate();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextCertificate = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevCertificate = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + certifications.length) % certifications.length
    );
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (dir) => ({
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  return (
    <motion.div
      className="w-full py-20 flex flex-col items-center justify-center bg-gray-900 text-white px-8 md:px-32"
      id="certifications"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text mb-12">
        Certifications
      </h2>

      <div className="relative w-full max-w-6xl">
        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mb-6">
          <motion.button
            onClick={prevCertificate}
            className="p-4 text-2xl bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
            aria-label="Previous Certificate"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronLeft size={32} />
          </motion.button>

          <motion.button
            onClick={nextCertificate}
            className="p-4 text-2xl bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none"
            aria-label="Next Certificate"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight size={32} />
          </motion.button>
        </div>

        {/* Certification Slider */}
        <div className="overflow-hidden relative h-[500px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute w-full flex justify-center"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
            >
              <div className="p-6 rounded-xl bg-gray-800 shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 text-center">
                <img
                  src={certifications[currentIndex].img}
                  alt={certifications[currentIndex].title}
                  className="w-full h-60 md:h-72 rounded-lg mb-6 object-fill object-center" 
                  loading="lazy"
                />
                <h3 className="text-2xl font-bold text-blue-400 mb-4">
                  {certifications[currentIndex].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {certifications[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
