import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaPython,
  FaCode,
} from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact className="h-10 w-10 text-blue-500" />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "Tailwind CSS", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="h-10 w-10 text-green-500" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <FaCode /> },
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "REST APIs", icon: <FaCode /> },
      ],
    },
    {
      title: "Tools & Others",
      icon: <FaGitAlt className="h-10 w-10 text-yellow-500" />,
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Figma", icon: <FaFigma /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Postman", icon: <FaCode /> },
      ],
    },
    {
      title: "Programming",
      icon: <FaCode className="h-10 w-10 text-purple-500" />,
      skills: [
        { name: "C++", icon: <FaCode /> },
        { name: "Python", icon: <FaPython /> },
        { name: "TypeScript", icon: <FaJsSquare /> },
        { name: "Data Structures", icon: <FaCode /> },
        { name: "Algorithms", icon: <FaCode /> },
      ],
    },
  ];

  return (
    <div
    id="mySkills"
    className="bg-[#0B1120] text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl sm:text-6xl mb-20 mt-10 font-bold text-center mb-8">
            My <span className="text-blue-500">Skills</span>
          </h1>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:flex-cols sm:gap-28 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 transform transition duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h2 className="ml-4 text-lg sm:text-xl lg:text-2xl font-semibold">
                  {category.title}
                </h2>
              </div>
              <ul className="ml-4 sm:ml-8 list-disc space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: skillIndex * 0.2,
                      ease: "easeInOut",
                    }}
                    className="text-gray-400 hover:text-white flex items-center gap-2"
                  >
                    {skill.icon} <span>{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
