import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  // Project not found
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#F8F4EF] px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500">
          Project Not Found
        </h1>

        <p className="mt-4 text-gray-600">
          The project you're looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-6 bg-[#E76F51] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#d65b3f] transition"
        >
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F4EF]">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="bg-gradient-to-r from-[#FDE8E6] to-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">

          <Link
            to="/"
            className="inline-flex items-center text-[#E76F51] font-semibold hover:underline"
          >
            ← Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mt-8 text-gray-800 leading-tight">
              {project.title}
            </h1>

            <p className="mt-5 text-xl md:text-2xl text-gray-600">
              {project.subtitle}
            </p>

            <p className="mt-6 max-w-4xl text-base md:text-lg text-gray-700 leading-relaxed">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E76F51] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#d65b3f] transition shadow-md"
                >
                  View GitHub Repository
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[#E76F51] text-[#E76F51] px-6 py-3 rounded-xl font-semibold hover:bg-[#E76F51] hover:text-white transition"
                >
                  Live Demo
                </a>
              )}

            </div>
          </motion.div>

        </div>
      </section>


      {/* =========================
          PROJECT OVERVIEW
      ========================== */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-[#E76F51] mb-8">
            Project Overview
          </h2>

          <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">

            <div className="text-gray-700 text-base md:text-lg leading-8 whitespace-pre-line">
              {project.overview}
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          TECHNOLOGIES
      ========================== */}
      {project.technologies?.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-[#E76F51] mb-8">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-3">

              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#FDE8E6] text-[#E76F51] px-5 py-2.5 rounded-full font-semibold shadow-sm"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>
        </section>
      )}


      {/* =========================
          FEATURES
      ========================== */}
      {project.features?.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-[#E76F51] mb-10">
              Key Features
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {project.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[#E76F51] text-lg">
                      ✓
                    </span>

                    <span className="text-gray-700 font-medium">
                      {feature}
                    </span>
                  </div>
                </motion.div>
              ))}

            </div>

          </div>
        </section>
      )}


      {/* =========================
          PROJECT GALLERY
      ========================== */}
      {project.images?.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-[#E76F51] mb-10">
              Project Gallery
            </h2>

            <div
              className={`grid gap-8 ${
                project.images.length === 1
                  ? "grid-cols-1"
                  : "md:grid-cols-2"
              }`}
            >

              {project.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 bg-gray-50"
                >
                  <motion.img
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}

            </div>

          </div>
        </section>
      )}


      {/* =========================
          CODE SNIPPETS
      ========================== */}
      {project.codes?.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-[#E76F51] mb-10">
              Important Code Snippets
            </h2>

            <div className="space-y-8">

              {project.codes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-xl bg-gray-900"
                >

                  {/* Code Header */}
                  <div className="bg-[#E76F51] text-white px-6 py-4 font-semibold">
                    {item.title}
                  </div>

                  {/* Code */}
                  <pre className="overflow-x-auto p-6 text-sm md:text-base leading-7 text-green-400">
                    <code>{item.code}</code>
                  </pre>

                </motion.div>
              ))}

            </div>

          </div>
        </section>
      )}


      {/* =========================
          KEY LEARNINGS
      ========================== */}
      {project.learnings && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-[#E76F51] mb-8">
              Key Learnings
            </h2>

            <div className="bg-[#FDE8E6] rounded-2xl p-6 md:p-10 border border-[#f6d0ca]">

              <p className="text-base md:text-lg leading-8 text-gray-700">
                {project.learnings}
              </p>

            </div>

          </div>
        </section>
      )}


      {/* =========================
          BOTTOM NAVIGATION
      ========================== */}
      <section className="py-16 text-center">

        <Link
          to="/"
          className="inline-flex items-center bg-[#E76F51] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#d45a3e] transition shadow-md"
        >
          ← Back to Portfolio
        </Link>

      </section>

    </div>
  );
}