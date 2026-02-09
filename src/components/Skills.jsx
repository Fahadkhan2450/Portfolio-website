import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const categories = [
    { title: "Languages", items: ["Python", "JavaScript"] },
    { title: "Databases", items: ["MongoDB", "PostgreSQL", "Oracle Database", "MySQL"] },
    { title: "Backend Frameworks", items: ["Express", "Node.js", "JWT"] },
    { title: "APIs", items: ["RESTful APIs", "FastAPI"] },
    { title: "Data Analysis & Manipulation", items: ["NumPy", "Pandas", "Scikit-Learn"] },
    { title: "Machine Learning Algorithms", items: ["Linear Regression", "Logistic Regression", "SVM", "Random Forest", "KNN"] },
    { title: "Deep Learning", items: ["PyTorch (ANN, CNN)"] },
    { title: "AI & Computer Vision", items: ["OpenCV", "YOLOv8"] },
    { title: "LLMs", items: ["LangChain"] },
    { title: "Tools & Platforms", items: ["Git", "GitHub", "Postman", "Docker"] },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-10">
        Skills & Expertise
      </h2>

      <div className="max-w-4xl mx-auto px-6 space-y-4">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-cyan-900/50 via-blue-900/40 to-purple-900/50
                       rounded-xl shadow-lg shadow-cyan-900/30 backdrop-blur-md border border-cyan-400/20 overflow-hidden"
          >
            {/* Dropdown Header */}
            <button
              onClick={() => toggleOpen(index)}
              className="w-full flex justify-between items-center p-4 cursor-pointer hover:bg-cyan-900/20 transition-colors duration-300"
            >
              <span className="text-lg font-semibold text-cyan-400">{cat.title}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-300 text-xl"
              >
                ▼
              </motion.span>
            </button>

            {/* Dropdown Content */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="px-6 pb-4"
                >
                  <ul className="list-disc list-inside space-y-2">
                    {cat.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="text-gray-200 hover:text-cyan-400 transition-colors cursor-default"
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
