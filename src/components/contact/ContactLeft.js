import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="object-cover mb-2 w-full h-64 rounded-lg"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Ajay</h3>
        <p className="text-lg font-normal text-gray-400">
          AI MERN Stack Developer
        </p>
        <p className="text-base tracking-wide text-gray-400">
        I’m always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <p className="flex gap-2 items-center text-base text-gray-400">
          Phone: <span className="text-lightText">+91 6385119260</span>
        </p>
        <p className="flex gap-2 items-center text-base text-gray-400">
          Email: <span className="text-lightText">ajayjofficial@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
  <h2 className="mb-4 text-base uppercase font-titleFont">Find me in</h2>
  <div className="flex gap-4">
    <a href="https://github.com/AJAY260505" target="_blank" rel="noopener noreferrer">
      <span className="bannerIcon">
        <FaFacebookF />
      </span>
    </a>
    <a href="https://x.com/AJAY260505/" target="_blank" rel="noopener noreferrer">
      <span className="bannerIcon">
        <FaTwitter />
      </span>
    </a>
    <a href="https://www.linkedin.com/in/ajayjaisankar/" target="_blank" rel="noopener noreferrer">
      <span className="bannerIcon">
        <FaLinkedinIn />
      </span>
    </a>
  </div>
</div>

    </div>
  );
}
export default ContactLeft