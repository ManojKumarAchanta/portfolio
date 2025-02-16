import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CalendarClock } from "lucide-react";
import { studyEvents } from "../constants/constants.js";
const TimeLine = () => {


  return (
    <motion.div
      id="timeline"
      className="w-full py-20 md:py-24 flex flex-col items-center justify-center text-white bg-gray-900  px-6 md:px-16 lg:px-32 min-h-screen"
    >
      <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text text-center mb-12 md:mb-16">
        My Study Timeline
      </h2>

      <div className="relative w-full max-w-4xl">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>

        {studyEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-center w-full mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full border-4 border-gray-900 shadow-lg"></div>

            {/* Timeline Card */}
            <div
              className={`bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "ml-auto" : "mr-auto"
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-400 flex items-center mb-2">
                <GraduationCap className="mr-2 h-6 w-6 text-blue-300" />{" "}
                {event.degree}
              </h3>
              <h4 className="text-lg text-gray-300 font-medium mb-1">
                {event.institution}
              </h4>
              <p className="text-gray-400 text-sm mb-3">{event.description}</p>
              <div className="text-gray-400 text-xs flex items-center">
                <CalendarClock className="mr-2 h-5 w-5 text-cyan-400" />
                {event.startDate} - {event.endDate}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimeLine;
