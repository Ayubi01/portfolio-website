// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="h-screen flex flex-col justify-center items-center text-center px-4 
                 bg-gradient-to-br from-blue-100 via-white to-white 
                 dark:from-gray-800 dark:via-gray-900 dark:to-black 
                 text-gray-900 dark:text-white transition-colors duration-500"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Hey, I'm Ayush 👋</h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
        A passionate software developer focused on building impactful solutions with code.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl shadow 
                   hover:bg-blue-700 dark:hover:bg-blue-500 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
