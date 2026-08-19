import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
 const categories = [
  {
    title: "Data Analyst",
    items: [
      "SQL",
      "Microsoft Excel",
      "Tableau",
      "Power BI",
      "Data Cleaning",
      "Data Visualization",
      "Exploratory Data Analysis (EDA)",
      "Business Intelligence (BI)",
      "Statistical Analysis",
      "Dashboard Development",
      "Data Storytelling",
      "KPI Analysis"
    ],
  },

  {
    title: "Data Engineer",
    items: [
      "SQL Server",
      "ETL Pipelines",
      "Data Warehousing",
      "Medallion Architecture",
      "Bronze, Silver & Gold Layers",
      "Star Schema",
      "Snowflake Schema",
      "Dimensional Modeling",
      "Fact & Dimension Tables",
      "Data Modeling",
      "Data Integration",
      "T-SQL"
    ],
  },

  {
    title: "Machine Learning & Deep Learning",
    items: [
      "Python",
      "Matlab",
      "Scikit-Learn",
      "NumPy",
      "Pandas",
      "PyTorch",
      "Supervised Learning",
      "Unsupervised Learning",
      "Linear Regression",
      "Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "K-Nearest Neighbors (KNN)",
      "Support Vector Machine (SVM)",
      "K-Means Clustering",
      "Principal Component Analysis (PCA)",
      "Artificial Neural Networks (ANN)",
      "Convolutional Neural Networks (CNN)",
      "Recurrent Neural Networks (RNN)",
      "Long Short-Term Memory (LSTM)",
      "Transfer Learning",
      "OpenCV",
      "YOLOv8",
      "Image Classification",
      "Object Detection",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Groq API",
      "SerpAPI"
    ],
  },

  {
    title: "Databases",
    items: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Oracle Database"
    ],
  },

  {
    title: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Jupyter Notebook",
      "Google Colab",
      "VS Code"
    ],
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skills" className="py-20 bg-[#F8F4EF]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold text-[#E76F51] mb-12">
          Skills & Expertise
        </h2>

        <div className="space-y-5">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border-l-4 border-[#E76F51] overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex justify-between items-center p-5 hover:bg-[#FDE8E6] transition duration-300"
              >
                <span className="text-xl font-semibold text-gray-800">
                  {cat.title}
                </span>

                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#E76F51] text-xl"
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6"
                  >
                    <div className="flex flex-wrap gap-3">
                      {cat.items.map((item, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.04 }}
                          className="bg-[#FDE8E6] text-[#E76F51] px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}