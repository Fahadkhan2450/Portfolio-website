import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#F8F4EF]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#E76F51] text-center mb-12"
        >
          EXPERIENCE
        </motion.h2>

        <div className="space-y-8">

          {/* Experience 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-l-4 border-[#E76F51]"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  AI/ML Intern
                </h3>
                <p className="text-[#E76F51] font-semibold mt-1">
                  BlackByt3
                </p>
              </div>

              <span className="mt-3 md:mt-0 bg-[#FDE8E6] text-[#E76F51] px-4 py-2 rounded-full font-medium">
                3 Months
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-600 list-disc pl-6">
              <li>Developed RESTful APIs and backend services using Node.js and FastAPI.</li>
              <li>Built machine learning models with Scikit-Learn using Logistic Regression, Random Forest, SVM, and KNN.</li>
              <li>Designed and trained deep learning models using PyTorch (ANN & CNN).</li>
              <li>Collaborated on real-world AI-powered web applications and backend systems.</li>
            </ul>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-l-4 border-[#E76F51]"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Full Stack & AI Intern
                </h3>
                <p className="text-[#E76F51] font-semibold mt-1">
                  Enlight Systems
                </p>
              </div>

              <span className="mt-3 md:mt-0 bg-[#FDE8E6] text-[#E76F51] px-4 py-2 rounded-full font-medium">
                1 Month
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-600 list-disc pl-6">
              <li>Developed responsive user interfaces using React.js.</li>
              <li>Built REST APIs and backend services with Node.js and Express.js.</li>
              <li>Worked with SQL databases for data storage, retrieval, and query optimization.</li>
              <li>Implemented machine learning solutions using Scikit-Learn and PyTorch.</li>
              <li>Collaborated with developers to integrate frontend, backend, and AI components into web applications.</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}