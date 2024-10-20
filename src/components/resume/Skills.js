import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col gap-10 w-full lgl:flex-row lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
      <div className="flex flex-col gap-4 py-12 font-titleFont">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          Features
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">Design Skills</h2>
      </div>
      <div className="flex flex-col gap-6 mt-14 w-full">
        <div className="overflow-x-hidden">
          <p className="text-sm font-medium uppercase">Photoshop</p>
          <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
            >
              <span className="absolute right-0 -top-7">100%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm font-medium uppercase">Figma</p>
          <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute right-0 -top-7">90%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm font-medium uppercase">Adobe XD</p>
          <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute right-0 -top-7">60%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm font-medium uppercase">Adobe Illustrator</p>
          <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute right-0 -top-7">70%</span>
            </motion.span>
          </span>
        </div>
        <div className="overflow-x-hidden">
          <p className="text-sm font-medium uppercase">Design</p>
          <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
            <motion.span
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
            >
              <span className="absolute right-0 -top-7">95%</span>
            </motion.span>
          </span>
        </div>
      </div>
    </div>

      {/* Development Skills Section */}
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-4 py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Development Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">React</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md"
              >
                <span className="absolute right-0 -top-7">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Node.js</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Express.js</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">85%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">HTML5</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">CSS3</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">JavaScript</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">75%</span>
              </motion.span>
            </span>
          </div>
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
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Machine Learning</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">85%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Deep Learning</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">75%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Natural Language Processing</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Data Analysis</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">TensorFlow</p>
            <span className="inline-flex mt-2 w-full h-2 rounded-md bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute right-0 -top-7">80%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
