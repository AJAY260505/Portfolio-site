import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col gap-10 w-full lgl:flex-row lgl:gap-20"
    >
      {/* Design Skills Section */}
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Design Skills</h2>
        </div>
        <div className="flex flex-col gap-6 mt-2 w-full"> {/* Reduced margin-top */}
          {['Photoshop', 'Figma', 'Adobe XD', 'Adobe Illustrator', 'Design'].map((skill, index) => {
            const percentages = [90, 90, 60, 70, 95];
            return (
              <div className="overflow-x-hidden" key={index}>
                <p className="text-sm font-medium uppercase">{skill}</p>
                <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`w-[${percentages[index]}%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                  >
                    <span className="absolute right-0 -top-7">{percentages[index]}%</span>
                  </motion.span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Development Skills Section */}
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Development Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {['React', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'JavaScript'].map((skill, index) => {
            const percentages = [90, 90, 85, 95, 80, 75];
            return (
              <div className="overflow-x-hidden" key={index}>
                <p className="text-sm font-medium uppercase">{skill}</p>
                <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`w-[${percentages[index]}%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                  >
                    <span className="absolute right-0 -top-7">{percentages[index]}%</span>
                  </motion.span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Skills Section */}
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">AI Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Data Analysis', 'TensorFlow'].map((skill, index) => {
            const percentages = [85, 75, 70, 90, 80];
            return (
              <div className="overflow-x-hidden" key={index}>
                <p className="text-sm font-medium uppercase">{skill}</p>
                <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`w-[${percentages[index]}%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                  >
                    <span className="absolute right-0 -top-7">{percentages[index]}%</span>
                  </motion.span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
