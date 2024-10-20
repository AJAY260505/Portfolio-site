import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col gap-10 w-full lgl:flex-row lgl:gap-20"
    >
      {/* Job Experience Section */}
      <div className="flex-1">
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Sep 2024 - Present</p>
          <h2 className="text-3xl font-bold md:text-4xl">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="AIOPS Engineer"
            subTitle="ThoughtData (Sep 2024 - Oct 2024)"
            result="Boston, Massachusetts, United States · Remote"
            des="Worked as an AIOPS Engineer, contributing to various projects and enhancing operational efficiency."
          />
          <ResumeCard
            title="Full Stack Dev"
            subTitle="Unnat Bharat Abhiyan (Jun 2024 - Present)"
            result="Clean Infinity Project"
            des="Our waste management project, Clean Infinity, was selected for the Unnat Bharat Abhiyan program, and I am currently working on it to make it successful."
          />
        </div>
      </div>

      {/* Other Experience Section */}
      <div className="flex-1">
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Aug 2023 - Present</p>
          <h2 className="text-3xl font-bold md:text-4xl">Other Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Team Member"
            subTitle="Smart India Hackathon (Aug 2023 - Jan 2024)"
            result="Top 20 out of 300 teams"
            des="Wrote and reviewed code for our web application using JS and React, contributing to the success of our team Clean Infinity."
          />
          <ResumeCard
            title="Research Collaborator"
            subTitle="Gesture Control Robot Project (Jan 2024 - Apr 2024)"
            result="Collaboration with Bhuvan Chandra and Shaikumar"
            des="Developed a gesture control robot to operate a cobot arm using hand movements."
          />
          <ResumeCard
            title="Participant"
            subTitle="Pragyan'24 Hackathon (Jan 2024)"
            result="Hosted by NIT Trichy and Virtusa Navalur"
            des="Participated in the hackathon, learning about AI concepts like NLTK and RAG."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
