import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { certifications } from "../constants/constants.js"; // Add certification data
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import icons from lucide-react

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextCertificate();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentIndex]);

  // Function to go to the next certificate
  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  // Function to go to the previous certificate
  const prevCertificate = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + certifications.length) % certifications.length
    );
  };

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-8 md:px-32"
      id="certifications"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-12">
        Certifications
      </h1>

      {/* Carousel */}
      <div
        className={`flex items-center justify-center relative ${
          isMobile ? "overflow-x-auto" : "justify-center"
        }`}
      >
        {/* Left Arrow */}
        <div
          onClick={prevCertificate}
          className="absolute left-0 cursor-pointer p-2 text-2xl md:text-3xl bg-blue-500 rounded-full hover:bg-blue-600 transition"
        >
          <ChevronLeft />
        </div>

        {/* Certification Content */}
        <motion.div
          className={`md:w-full ${
            isMobile
              ? "flex gap-6 items-center justify-center"
              : "flex justify-center"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full p-4 rounded-xl bg-gray-800 shadow-md">
            {/* Lazy load images */}
            <img
              src={certifications[currentIndex].img}
              alt={certifications[currentIndex].title}
              className="w-full h-auto rounded-lg mb-4 object-cover"
              loading="lazy" // Enable lazy loading for the image
            />
            <h2 className="text-lg font-bold text-blue-400">
              {certifications[currentIndex].title}
            </h2>
            <p className="text-gray-300">
              {certifications[currentIndex].description}
            </p>
          </div>
        </motion.div>

        {/* Right Arrow */}
        <div
          onClick={nextCertificate}
          className="absolute right-0 cursor-pointer p-2 text-2xl md:text-3xl bg-blue-500 rounded-full hover:bg-blue-600 transition"
        >
          <ChevronRight />
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;
