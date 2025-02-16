import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants/constants.js";
import Card from "./Card.jsx";
const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-8 md:px-32"
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text mb-12">
        Projects
      </h1>

      {isMobile ? (
        <div
          id="mbl"
          className="flex overflow-x-auto gap-6 w-full pb-4 max-h-full"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[98%] sm:min-w-[90%]  p-4 rounded-xl "
            >
              <Card
                title={project.title}
                description={project.description}
                img={project.img}
                github={project.github}
                url={project.url}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="md:grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              img={project.img}
              github={project.github}
              url={project.url}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};
export default Projects;
