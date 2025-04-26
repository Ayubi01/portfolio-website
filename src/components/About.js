// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-black text-gray-800 dark:text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Profile Image with Animation */}
        <img
          src="https://avatars.githubusercontent.com/u/93473928?v=4"
          alt="Ayush Bisht"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
          data-aos="fade-right"
        />

        {/* About Text with Animation */}
        <div className="md:w-2/3" data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            I'm Ayush Bisht, a final-year B.Tech student passionate about software development, AI, and building meaningful tech solutions. From spam email detection tools to deepfake detection models, I love exploring projects that blend creativity and code. I’m always up for learning new tools and contributing to impactful tech communities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

