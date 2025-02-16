import React, { useState } from "react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcons.jsx";
import { MoveLeft, MoveRight } from "lucide-react";
import { ExternalLink } from "lucide-react"; // Download icon for Navbar resume button

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const resumeURL = "/ManojKumarAchanta_Resume.pdf"; // Replace with your actual resume URL or path

  return (
    <motion.nav
      className="navbar bg-gray-900 shadow-lg text-white px-8 py-4 md:px-32 fixed w-full top-0 z-50 flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <h1 className="text-2xl font-bold text-blue-500">Manoj Kumar</h1>{" "} */}
      <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
        Manoj Kumar
      </h1>
      <div className="hidden md:flex gap-8 items-center">
        {" "}
        {/* Increased gap, aligned items */}
        <SocialIcons />
        
      </div>
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Mobile Menu"
      >
        {" "}
        {/* Added focus outline removal and aria-label */}
        {open ? <MoveLeft size={24} /> : <MoveRight size={24} />}{" "}
        {/* Slightly larger icons */}
      </button>
      {open && (
        <motion.div
          className="absolute right-8 top-16 bg-gray-800 p-6 rounded-lg shadow-lg md:hidden flex flex-col gap-6 items-center" // Flex column for mobile menu
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <SocialIcons />
          <motion.a
            href={resumeURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md hover:bg-blue-600 transition-colors duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            aria-label="Download Resume from Mobile Menu"
          >
            Resume <ExternalLink className="ml-2 h-4 w-4" />
          </motion.a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
