import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col gap-10 w-full lgl:flex-row lgl:gap-10"
    >
      {/* School Education Section */}
      <div className="flex flex-col p-4 w-full lgl:w-1/3">
        <div className="flex flex-col gap-2 py-6 font-titleFont">
          <h2 className="text-2xl font-bold md:text-3xl">School Education</h2>
        </div>
        <div className="mt-4 w-full h-auto border-l-[4px] border-l-black border-opacity-30 flex flex-col gap-6 flex-grow">
          <ResumeCard
            title="Senior Secondary School"
            subTitle="G.K. Shetty Vivekananda Vidyalaya"
            result="Completed"
            des="Completed high school education with a strong academic record."
          />
        </div>
      </div>

      {/* College Education Section */}
      <div className="flex flex-col p-4 w-full lgl:w-1/3">
        <div className="flex flex-col gap-2 py-6 font-titleFont">
          <h2 className="text-2xl font-bold md:text-3xl">College Education</h2>
        </div>
        <div className="mt-4 w-full h-auto border-l-[4px] border-l-black border-opacity-30 flex flex-col gap-6 flex-grow">
          <ResumeCard
            title="B.Tech in Information Technology"
            subTitle="R.M.K Engineering College"
            result="Ongoing"
            des="Currently pursuing a Bachelor's degree in Information Technology, focusing on software development and programming."
          />
        </div>
      </div>

      {/* Specialization Section */}
      <div className="flex flex-col p-4 w-full lgl:w-1/3">
        <div className="flex flex-col gap-2 py-6 font-titleFont">
          <h2 className="text-2xl font-bold md:text-3xl">Specialization</h2>
        </div>
        <div className="mt-4 w-full h-auto border-l-[4px] border-l-black border-opacity-30 flex flex-col gap-6 flex-grow">
          <ResumeCard
            title="Fullstack Development"
            subTitle="NxtWave"
            result="Ongoing"
            des="Enrolled in a Fullstack development course to enhance my skills in web development, focusing on both front-end and back-end technologies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
