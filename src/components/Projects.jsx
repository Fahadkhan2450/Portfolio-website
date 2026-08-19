import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "data-analyst", label: "Data Analyst" },
  { key: "data-engineer", label: "Data Engineer" },
  { key: "data-science", label: "Data Scientist" },
  { key: "web", label: "Web Development" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const internalProjects = [
    "sql",
    "retail-dashboard",
    "car-sales",
    "pizza-sales",
  ];

  return (
    <section id="projects" className="py-20 bg-[#F8F4EF]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-[#E76F51]"
        >
          PROJECTS
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeCategory === cat.key
                  ? "bg-[#E76F51] text-white border-[#E76F51]"
                  : "bg-white text-[#E76F51] border-[#E76F51] hover:bg-[#FDE8E6]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mt-12"
        >
          {filteredProjects.map((project) => {
            const isInternalProject = internalProjects.includes(project.id);

            const Card = (
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-[#E76F51] cursor-pointer h-full flex flex-col">

                {/* Project Image */}
                {project.images && project.images.length > 0 && (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                )}

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">

                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <p className="text-[#E76F51] mt-2 text-sm font-medium">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-gray-600 mt-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies?.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#FDE8E6] text-[#E76F51] px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <span className="text-[#E76F51] font-semibold hover:underline">
                      {isInternalProject
                        ? "View Project →"
                        : "View on GitHub ↗"}
                    </span>
                  </div>

                </div>
              </div>
            );

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {isInternalProject ? (
                  <Link to={`/project/${project.id}`}>
                    {Card}
                  </Link>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Card}
                  </a>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}