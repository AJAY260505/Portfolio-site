import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree, projectFour} from "../../assets/index"; // Update these paths as necessary
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
        <ProjectsCard
          title="Arora Brew - Coffee Shop App"
          des="This project is a coffee shop app built with React and Vite, featuring a landing page, menu, download options for Android and iOS, and a testimonial section."
          src={projectOne} // Replace with the correct image path
          githubLink="https://github.com/AJAY260505/arora-brew"
          websiteLink="https://arorabrew.vercel.app/"
        />
        <ProjectsCard
          title="Ochi Website Clone"
          des="A clone of the Ochi Website, built using Next.js, React.js, TypeScript, and Tailwind CSS, replicating the interactive scrolling experience of the original site."
          src={projectTwo} // Replace with the correct image path
          githubLink="https://github.com/AJAY260505/ochi-website-clone"
          websiteLink="https://ochi-website-green.vercel.app/"
        />
        <ProjectsCard
          title="Real Estate"
          des="An application connecting buyers and sellers, allowing users to register, search listings, and make inquiries, with admin capabilities for managing resources."
          src={projectThree} // Replace with the correct image path
          githubLink="https://github.com/AJAY260505/realestate-react-project"
          websiteLink="https://realestate-react-project.vercel.app/"
        />
        <ProjectsCard
          title="Movie Recommender System"
          des="A web-based movie recommendation system using Streamlit, providing personalized recommendations and dynamically displaying movie posters from TMDb API."
          src={projectFour} // Replace with the correct image path for this project
          githubLink="https://github.com/AJAY260505/movie_recommender_system"
          websiteLink="https://ajaymovierecommendersystem.streamlit.app/"
        />
      </div>
    </section>
  );
}

export default Projects;
