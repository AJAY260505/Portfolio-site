import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubLink, websiteLink }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-60 duration-300 cursor-pointer group-hover:scale-110"
          src={src}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-6 mt-5 w-full">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base font-normal uppercase text-designColor">
              {title}
            </h3>
            <div className="flex gap-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-10 h-10 text-lg text-gray-400 bg-black rounded-full duration-300 cursor-pointer hover:text-designColor"
              >
                <BsGithub />
              </a>
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center w-10 h-10 text-lg text-gray-400 bg-black rounded-full duration-300 cursor-pointer hover:text-designColor"
              >
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="mt-3 text-sm tracking-wide duration-300 hover:text-gray-100">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
