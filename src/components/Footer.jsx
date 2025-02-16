import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import LeetcodeIcon from "../icons/LeetcodeIcon.jsx"; // Assuming you have a LeetcodeIcon component

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 text-center py-8">
      {" "}
      {/* Increased padding */}
      <div className="flex justify-center space-x-6 mb-3">
        {" "}
        {/* Increased space between icons */}
        <a
          href="https://github.com/ManojKumarAchanta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition-colors duration-300" // Brighter blue and transition
          aria-label="GitHub Profile"
        >
          <Github size={28} /> {/* Slightly larger icons */}
        </a>
        <a
          href="https://linkedin.com/in/ManojKumarAchanta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://www.instagram.com/manoj._.kumar07/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
          aria-label="Instagram Profile"
        >
          <Instagram size={28} />
        </a>
        <a
          href="https://www.leetcode.com/ManojKumarAchanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
          aria-label="LeetCode Profile"
        >
          <LeetcodeIcon size={28} /> {/* Using your LeetcodeIcon component */}
        </a>
      </div>
      <div className="text-sm">
        © {new Date().getFullYear()} Manoj Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
