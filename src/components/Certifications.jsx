import { useState } from "react";
import { motion } from "framer-motion";
import certifications from "../data/certfications";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "programming", label: "Programming" },
  { key: "data", label: "Data" },
  { key: "machine-learning", label: "Machine Learning" },
  { key: "deep-learning", label: "Deep Learning" },
  { key: "mlops", label: "MLOps" },
  { key: "tools", label: "Tools" },
];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("all");

  // =========================
  // Animation Variants
  // =========================

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: -40,
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

  // =========================
  // Filter Certifications
  // =========================

  const filteredCertifications =
    activeCategory === "all"
      ? certifications
      : certifications.filter(
          (certification) =>
            certification.category === activeCategory
        );

  return (
    <section
      id="certifications"
      className="py-20 bg-[#F8F4EF]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* =========================
            Section Heading
        ========================== */}

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-[#E76F51]"
        >
          CERTIFICATIONS
        </motion.h2>

        {/* =========================
            Category Filters
        ========================== */}

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {CATEGORIES.map((category) => (
            <button
              key={category.key}
              onClick={() =>
                setActiveCategory(category.key)
              }
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border-2 ${
                activeCategory === category.key
                  ? "bg-[#E76F51] text-white border-[#E76F51]"
                  : "bg-white text-[#E76F51] border-[#E76F51] hover:bg-[#FDE8E6]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* =========================
            Certification Cards
        ========================== */}

        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mt-12"
        >
          {filteredCertifications.map((certification) => (
            <motion.div
              key={certification.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="h-full"
            >

              {/* =========================
                  Certification Card
              ========================== */}

              <div
                className="
                  bg-white
                  rounded-2xl
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  overflow-hidden
                  border-l-4
                  border-[#E76F51]
                  h-full
                  flex
                  flex-col
                "
              >

                <div className="p-8 flex flex-col flex-grow">

                  {/* =========================
                      Certification Title
                  ========================== */}

                  <h3 className="text-2xl font-bold text-gray-800">
                    {certification.title}
                  </h3>

                  {/* =========================
                      Issuer
                  ========================== */}

                  <p className="text-[#E76F51] mt-2 font-medium">
                    {certification.issuer}
                  </p>

                  {/* =========================
                      Date
                  ========================== */}

                  {certification.date && (
                    <p className="text-gray-500 text-sm mt-1">
                      {certification.date}
                    </p>
                  )}

                  {/* =========================
                      Description
                  ========================== */}

                  <p className="text-gray-600 mt-4 leading-relaxed flex-grow">
                    {certification.description}
                  </p>

                  {/* =========================
                      Skills
                  ========================== */}

                  {certification.skills &&
                    certification.skills.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-2">

                        {certification.skills.map((skill) => (
                          <span
                            key={skill}
                            className="
                              bg-[#FDE8E6]
                              text-[#E76F51]
                              px-3
                              py-1
                              rounded-full
                              text-sm
                              font-medium
                            "
                          >
                            {skill}
                          </span>
                        ))}

                      </div>
                    )}

                  {/* =========================
                      Credential Button
                  ========================== */}

                  {certification.certificate ? (
                    <div className="mt-6">

                      <a
                        href={certification.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          bg-[#E76F51]
                          text-white
                          px-5
                          py-2.5
                          rounded-lg
                          font-semibold
                          hover:bg-[#d65b3f]
                          transition-all
                          duration-300
                          hover:shadow-md
                        "
                      >
                        Show Credentials ↗
                      </a>

                    </div>
                  ) : (
                    <div className="mt-6">

                      <span
                        className="
                          inline-flex
                          items-center
                          bg-gray-100
                          text-gray-400
                          px-5
                          py-2.5
                          rounded-lg
                          font-semibold
                          cursor-not-allowed
                        "
                      >
                        Credential Unavailable
                      </span>

                    </div>
                  )}

                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* =========================
            Empty State
        ========================== */}

        {filteredCertifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 text-lg">
              No certifications available in this category.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}