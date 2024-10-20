import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["AI Engineer.", "Full Stack Developer.", "Software developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col gap-20 w-full lgl:w-1/2">
      <div className="flex flex-col gap-5">
        {/*<h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>*/}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="capitalize text-designColor">Ajay</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base tracking-wide leading-6 font-bodyFont">
        Hey, I'm Ajay, a full-stack dev and AI engineer obsessed with pushing tech boundaries. From building complex web apps with React and Node.js to crafting AI models that deliver real-time insights, I combine innovation with impact. Whether it’s microservices, API design, or machine learning integration, I create scalable ecosystems that elevate user experiences and solve real-world problems. Let’s dive into the next big thing!
        </p>
      </div>
      <div className="flex flex-col gap-6 justify-between xl:flex-row lgl:gap-0">
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/AJAY260505" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://github.com/AJAY260505" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://x.com/AJAY260505/" target="blank">
              <span className="bannerIcon">
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/ajayjaisankar/" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-base uppercase font-titleFont">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
