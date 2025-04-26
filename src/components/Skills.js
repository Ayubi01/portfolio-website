import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaPython, FaJava
} from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiFlask, SiC, SiCplusplus, SiMysql } from 'react-icons/si';

const technicalSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Flask", icon: <SiFlask className="text-gray-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "C", icon: <SiC className="text-blue-600" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-blue-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> }
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
        <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Skills
        </h2>

        <div className="relative">
          {/* Headings*/}
          <div className="hidden lg:flex justify-between mb-10">
            <h3 className="text-2xl font-semibold" style={{ marginLeft: '18%' }}>
              Technical Skills
            </h3>
            <h3 className="text-2xl font-semibold" style={{ marginRight: '18%' }}>
              Non-Technical Skills
            </h3>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:flex lg:justify-between lg:gap-20 items-start">
            {/* Technical Skills */}
            <div data-aos="fade-right" className="flex-1">
              <h3 className="text-2xl font-semibold mb-6 text-center lg:hidden">Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technicalSkills.map((skill, index) => {
                  const floatClass = `float-h${(index % 5) + 1}`;
                  return (
                    <div
                      key={skill.name}
                      data-aos="fade-up"
                      data-aos-delay={index * 60}
                      className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 hover:scale-105 hover:shadow-lg hover:shadow-sky-400/50 dark:hover:shadow-cyan-400/40 transition-all duration-300 group"
                    >
                      <div
                        className={`text-3xl mb-2 transition-all duration-300 animate-float group-hover:rotate-6 ${floatClass}`}
                        style={{
                          animationDelay: `${index * 0.3}s`
                        }}
                      >
                        {skill.icon}
                      </div>
                      <div className="text-sm">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Non-Technical Skills */}
            <div data-aos="fade-left" className="flex-1 mt-12 md:mt-0">
              <h3 className="text-2xl font-semibold mb-6 text-center lg:hidden">Non-Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {nonTechnicalSkills.map((skill, index) => (
                  <div
                    key={skill}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 text-center hover:scale-105 hover:shadow-lg hover:shadow-purple-400/40 dark:hover:shadow-purple-500/30 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
