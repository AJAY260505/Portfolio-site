import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col gap-10 w-full lgl:flex-row lgl:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Aug 2023 - Jan 2024</p>
          <h2 className="text-3xl font-bold md:text-4xl">Smart India Hackathon</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Top 20 Teams Selected"
            subTitle="Clean Infinity - Full Stack Development"
            result="Success"
            des="Among 300 teams, our team Clean Infinity was chosen to participate in the second round of SIH 2023. I contributed as a Full-stack developer by writing and reviewing code for our web application using JavaScript and React."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Jun 2024 - Present</p>
          <h2 className="text-3xl font-bold md:text-4xl">Unnat Bharat Abhiyan</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Waste Management Project - Clean Infinity"
            subTitle="Selected for Unnat Bharat Abhiyan"
            result="Ongoing"
            des="Our waste management project, Clean Infinity, was selected for the Unnat Bharat Abhiyan program, and I am currently working on it to enhance its implementation and impact."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
