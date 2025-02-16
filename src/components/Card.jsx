import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, img, github, url }) => {
  const openPage = (link) => {
    window.open(link, "_blank");
  };

  return (
    <motion.div
      className="bg-gradient-to-br w-full max-w-md md:max-w-lg lg:max-w-xl px-4 from-gray-900 to-gray-800 text-white p-6 rounded-xl shadow-2xl py-4 m-auto transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <img
          src={img}
          alt=""
          className="rounded-lg w-full h-48 min-h-48 object-cover"
        />
      </div>
      <div className="my-6">
        <h1 className="text-xl font-semibold text-blue-400">{title}</h1>
        <p className="text-md text-gray-300">{description}</p>
      </div>
      <div className="flex gap-4">
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
