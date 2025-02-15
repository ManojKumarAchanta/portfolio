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
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="navbar bg-gray-900 shadow-lg text-white px-8 py-4 md:px-32 fixed w-full top-0 z-50 flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-blue-400">Manoj Kumar</h1>
      <div className="md:flex gap-6 hidden">
        <SocialIcons />
      </div>
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <MoveLeft /> : <MoveRight />}
      </button>
      {open && (
        <div className="absolute right-8 top-16 bg-gray-800 p-4 rounded-lg shadow-lg md:hidden">
          <SocialIcons />
        </div>
      )}
    </motion.nav>
  );
};
export default Navbar;
