import React, { useState, useEffect } from "react";
import Card from "./Card";
import { MoveLeft, MoveRight } from "lucide-react";
import { projects } from "../constants/constants.js";
import { BlinkBlur } from "react-loading-indicators";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);


  const handlePrev = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : projects.length - 1
      );
    }, 500);
  };

  const handleNext = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentIndex((prevIndex) =>
        prevIndex < projects.length - 1 ? prevIndex + 1 : 0
      );
    }, 500);
  };

  return (
    <div className="m-auto pt-24 pb-24 shrink-0 grid w-full justify-center" id="projects">
      <h1 className="text-white m-auto text-4xl mb-8 font-semibold">Projects</h1>
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div
          className={`${
            window.innerWidth < 768
              ? "flex transition-transform duration-500 ease-in-out"
              : "grid grid-cols-2 md:grid-cols-3 gap-2"
          }`}
          style={
            window.innerWidth < 768
              ? { transform: `translateX(-${currentIndex * 100}%)` }
              : {}
          }
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full flex justify-center items-center">
              <Card
                title={project.title}
                img={project.img}
                description={project.description}
              />
            </div>
          ))}
        </div>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
            <BlinkBlur color="#FFFFFF" size="medium" text="Loading..." textColor="#FFFFFF" />
          </div>
        )}

        {window.innerWidth < 768 && (
          <div className="flex items-center justify-center gap-20 my-12">
            <button
              onClick={handlePrev}
              className="text-black rounded-lg bg-white p-2 disabled:opacity-50"
              disabled={isLoading}
            >
              <MoveLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="text-black rounded-lg bg-white p-2 disabled:opacity-50"
              disabled={isLoading}
            >
              <MoveRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
