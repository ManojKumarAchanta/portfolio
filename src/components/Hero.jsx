import React, { useEffect, useState } from "react";
import {
  MoveLeft,
  MoveRight,
  Github,
  Linkedin,
  Code,
  Instagram,
  Loader,
} from "lucide-react";
import { BlinkBlur } from "react-loading-indicators";
import toast, { Toaster } from "react-hot-toast";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { projects } from "../constants/constants.js";
import CodeChef from "../icons/CodeChef.jsx";
import SocialIcons from "./SocialIcons.jsx";
import ModelViewer from "./ModelViewer.jsx";
const Hero = () => {
  return (
      <motion.div
        className="w-full h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-black to-gray-900 px-8 md:px-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-center">
          Hello, I'm Manoj Kumar
        </h1>
        <div className="text-3xl md:text-4xl font-semibold text-blue-400 mt-4">
          <Typewriter
            options={{
              strings: [
                "Aspiring Full Stack Developer",
                "Web Developer",
                "Tech Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-lg md:text-xl text-gray-300 text-center max-w-3xl mt-6">
          A passionate web developer proficient in React, Node.js, Express,
          MongoDB. Always eager to learn new technologies.
        </p>
        <div className="flex gap-6 mt-6 mb-8">
          <a
            href="#projects"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg shadow-md hover:bg-blue-600"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-blue-400 border border-blue-400 px-6 py-3 rounded-md text-lg hover:bg-blue-600 hover:text-white"
          >
            Get in Touch
          </a>
        </div>
        <SocialIcons />
      </motion.div>
      
  );
};
export default Hero;
