import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray">
            Hi, I'm Fidelys.
            <br className="hidden lg:inline-block" /> A junior développeur Web .
          </h1>
          <p className="mb-8 leading-relaxed">
          I am a Junior Web Developer coming from a training program at BeCode, the Belgian counterpart of Simplon.
          Currently enrolled in the first year of a Bachelor's degree in Alternance at ESGI, I am actively seeking a company to apply my skills.
          I have a solid command of tools such as Git, GitHub, HTML, CSS, Sass, JavaScript, PHP, MySQL, Figma, Trello, Canva, and React.
          In addition to my technical skills, I am also known for being curious, sociable, pragmatic, organized, and capable of working effectively in a team.
          </p> 
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/fidelysnadison/"
              className="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg">
              Linkedin
            </a>
            <a
              href="https://github.com/FidelysNadison?tab=repositories"
              className="ml-4 inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 hover:text-white rounded text-lg">
              GitHub
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Avatar.svg"
          />
        </div>
      </div>
    </section>
  );
}
