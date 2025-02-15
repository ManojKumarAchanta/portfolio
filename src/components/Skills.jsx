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

const Skills = () => {
  const skills = [
    { name: "Java", src: "/skills/java.png" },
    { name: "Python", src: "/skills/python.png" },
    { name: "HTML", src: "/skills/html.png" },
    { name: "CSS", src: "/skills/css.png" },
    { name: "Tailwind CSS", src: "/skills/tailwind-css.svg" },
    { name: "JavaScript", src: "/skills/js.png" },
    { name: "React", src: "/skills/react.png" },
    { name: "Node.js", src: "/skills/nodejs.png" },
    { name: "MongoDB", src: "/skills/mongo.png" },
    { name: "Git", src: "/skills/git.png" },
    { name: "GitHub", src: "/skills/github.png", extraClass: "bg-white" },
  ];
  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-8 md:px-32"
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-12">
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-xl shadow-lg transition-transform transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={skill.src}
              alt={skill.name}
              className={`w-16 h-16 object-contain ${skill.extraClass || ""}`}
            />
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default Skills;
