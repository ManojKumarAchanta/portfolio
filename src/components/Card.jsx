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

const Card = ({ title, description, img, github, url }) => {
  const openPage = (link) => {
    window.location.href = link;
  };
  return (
    <motion.div
      className="bg-gradient-to-br w-full px-8 from-gray-900 to-gray-800 text-white p-6 rounded-xl shadow-2xl m-auto transition-transform transform hover:scale-110"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <img src={img} alt="" className="rounded-lg w-full h-48 object-cover" />
      </div>
      <div className="my-6">
        <h1 className="text-xl font-semibold text-blue-400">{title}</h1>
        <p className="text-md text-gray-300">{description}</p>
      </div>
      <div className="flex gap-4" onClick={() => openPage(url)}>
        <button
          onClick={() => openPage(url)}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg shadow-md hover:bg-blue-600"
        >
          Go live
        </button>
        <button
          onClick={() => openPage(github)}
          className="text-blue-400 border border-blue-400 px-6 py-3 rounded-xl text-lg shadow-md hover:bg-blue-600 hover:text-white"
        >
          Github
        </button>
      </div>
    </motion.div>
  );
};
export default Card;
