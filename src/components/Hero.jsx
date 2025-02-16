import React from "react";
import Typewriter from "typewriter-effect";
import SocialIcons from "./SocialIcons.jsx";
import { ExternalLink } from "lucide-react";

const Hero = () => {
  const resumeURL = "/ManojKumarAchanta_Resume.pdf";

  return (
    <div // Removed motion.div - no more framer-motion transitions here
      className="w-full  flex flex-col items-center justify-center text-white bg-gradient-to-b from-black to-gray-900 px-8 md:px-32 text-center min-h-screen"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 md:mb-4 leading-tight">
        Hello, I'm <span className="text-blue-400">Manoj Kumar</span>
      </h1>
      <div className="text-4xl md:text-5xl  tracking-wide lg:text-4xl font-semibold text-white mb-5 md:mb-6">
        <Typewriter
          options={{
            strings: [
              "Aspiring Full-Stack Developer 🚀",
              "MERN Stack Enthusiast 💻",
              "Tech Explorer 🔍",
              "Lifelong Learner 📚",
              "Problem Solver 🧠",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 500,
          }}
        />
      </div>

      <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mb-6 md:mb-8">
        A passionate web developer proficient in React, Node.js, and more. Eager
        to build innovative and user-friendly web applications. Always learning
        and exploring new technologies.
      </p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 mt-4 md:mt-6 mb-6 md:mb-8 items-center justify-center w-full max-w-lg">
        <a // Removed motion.a - using standard <a> tag
          href="#projects"
          className="px-5 py-2 md:px-6 md:py-4 rounded-lg text-base font-semibold shadow-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 w-full text-center" // Direct Tailwind classes - button style
        >
          View Projects
        </a>
        <a // Removed motion.a - using standard <a> tag
          href="#contact"
          className="px-5 py-2 md:px-6 md:py-4 rounded-lg text-base font-semibold shadow-md text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 w-full text-center" // Direct Tailwind classes - button style
        >
          Get in Touch
        </a>
        <a // Removed motion.a - using standard <a> tag
          href={resumeURL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 md:px-6 md:py-4 rounded-lg text-base font-semibold shadow-md bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center w-full" // Direct Tailwind classes - button style
          aria-label="Download Resume"
        >
          Resume <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
      <div className="mt-2 md:mt-4">
        <SocialIcons />
      </div>
    </div> // Removed motion.div
  );
};

export default Hero;
