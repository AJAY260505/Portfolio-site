import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-20">
        <Card
          title="AI Engineer"
          des="Developing intelligent systems that leverage machine learning to solve complex problems."
          icon={<AiFillAppstore />} // You can choose an appropriate icon
        />
        <Card
          title="Full-Stack Development"
          des="Building responsive web applications using modern frameworks and technologies."
          icon={<FaMobile />} // You can choose an appropriate icon
        />
        <Card
          title="Software Development"
          des="Creating robust software solutions tailored to meet user needs and enhance productivity."
          icon={<SiProgress />} // You can choose an appropriate icon
        />
      </div>
    </section>
  );
}

export default Features;
