import React from "react";
import { motion } from "framer-motion";
import {skills} from "../constants/constants.js";
const Skills = () => {
  return (
    <motion.div
      className="w-full py-20 flex flex-col items-center justify-center bg-gray-900 text-white px-8 md:px-32"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text mb-12">
        {" "}
        {/* Brighter blue */}
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 w-full max-w-5xl">
        {" "}
        {/* Increased gap and added max-w-5xl */}
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105" // Slightly reduced scale on hover
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.5)",
            }} // Added subtle shadow on hover
            transition={{ duration: 0.3 }}
          >
            <img
              src={skill.src}
              alt={skill.name}
              className={`w-14 h-14 object-fill ${skill.extraClass || ""}`} // Slightly smaller icons
            />
            <p className="mt-4 text-lg font-semibold text-gray-300">
              {skill.name}
            </p>{" "}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
