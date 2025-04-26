import React from 'react';

const technicalSkills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
  "Node.js", "Firebase", "Flask", "MySQL", "Git", "C", "C++", "Java", "Python"
];

const nonTechnicalSkills = [
  "Problem Solving", 
  "Adaptability", 
  "Effective Communication", 
  "Time Management", 
  "Collaboration", 
  "Attention to Detail"
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Non-Technical Skills */}
          <div data-aos="fade-left">
            <h3 className="text-2xl font-semibold mb-6">Non-Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {nonTechnicalSkills.map((skill, index) => (
                <div
                  key={skill}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
