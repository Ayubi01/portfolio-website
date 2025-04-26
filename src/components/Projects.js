
import React from 'react';

const projects = [
  {
    title: "Spam Email Detector",
    description: "A Chrome extension that classifies emails as spam using a Flask backend and ML model.",
    link: "https://github.com/Ayubi01/Spam-Email-Classifier"
  },
  {
    title: "Big News Post",
    description: "A web app which provides you with instant news conttent and templates for post creation.",
    link: "https://github.com/Ayubi01/Big-News-Post"
  },
  {
    title: "Price The Car",
    description: "ML model that predicts used car prices with an interactive UI.",
    link: "https://github.com/Ayubi01/Price-The-Car"
  },
  {
    title: "Game Mania",
    description: "Console-based gaming platform featuring multiple games built from scratch.",
    link: "https://github.com/Ayubi01/Game-_Mania"
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10" data-aos="fade-up">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
