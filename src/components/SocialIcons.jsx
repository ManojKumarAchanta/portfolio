import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import LeetcodeIcon from "../icons/LeetcodeIcon.jsx"; // Assuming you have a LeetcodeIcon component

const SocialIcons = () => {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com/ManojKumarAchanta"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
        aria-label="GitHub Profile"
      >
        <Github size={26} /> {/* Consistent icon size */}
      </a>
      <a
        href="https://linkedin.com/in/ManojKumarAchanta"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
        aria-label="LinkedIn Profile"
      >
        <Linkedin size={26} />
      </a>
      <a
        href="https://www.instagram.com/manoj._.kumar07/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
        aria-label="Instagram Profile"
      >
        <Instagram size={26} />
      </a>
      <a
        href="https://www.leetcode.com/ManojKumarAchanta/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
        aria-label="LeetCode Profile"
      >
        <LeetcodeIcon size={26} /> {/* Consistent icon size */}
      </a>
      <a
        href="mailto:manojkumar.achanta9@gmail.com"
        className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
        aria-label="Send Email"
      >
        <Mail size={26} /> {/* Consistent icon size */}
      </a>
    </div>
  );
};

export default SocialIcons;
