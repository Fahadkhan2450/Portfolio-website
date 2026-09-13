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

          {/* Experience 1 - Rohde & Schwarz */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-l-4 border-[#E76F51]"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  AI & Robotics Intern
                </h3>
                <p className="text-[#E76F51] font-semibold mt-1">
                  <a
                    href="https://www.rohde-schwarz.com/home_48230.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Rohde & Schwarz
                  </a>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Islamabad, Pakistan
                </p>
              </div>

              <span className="mt-3 md:mt-0 bg-[#FDE8E6] text-[#E76F51] px-4 py-2 rounded-full font-medium">
                Sep 2026 – Oct 2026
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-600 list-disc pl-6">
              <li>
                Applying core <strong>machine learning and robotics</strong>{" "}
                principles to real-world engineering problems.
              </li>
              <li>
                Working alongside experienced engineers to translate{" "}
                <strong>theoretical models</strong> into deployable systems
                while maintaining confidentiality.
              </li>
            </ul>
          </motion.div>

          {/* Experience 2 - Enlight Systems */}
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
                  <a
                    href="https://www.linkedin.com/company/enlightsystems-com/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Enlight Systems
                  </a>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Remote
                </p>
              </div>

              <span className="mt-3 md:mt-0 bg-[#FDE8E6] text-[#E76F51] px-4 py-2 rounded-full font-medium">
                Mar 2026 – May 2026
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-600 list-disc pl-6">
              <li>
                Contributed to an <strong>AI-driven job portal</strong> by
                developing smart job recommendations, an interactive chatbot,
                and automated resume screening to streamline the hiring
                process.
              </li>
              <li>
                Leveraged <strong>Python, LangChain, and LangGraph</strong> to
                design intelligent AI workflows, alongside{" "}
                <strong>React</strong> to build a smooth and intuitive user
                interface.
              </li>
            </ul>
          </motion.div>

          {/* Experience 3 - BlackByt3 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-l-4 border-[#E76F51]"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  ML Research Intern
                </h3>
                <p className="text-[#E76F51] font-semibold mt-1">
                  <a
                    href="https://www.blackbyt3.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    BlackByt3
                  </a>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Islamabad, Pakistan
                </p>
              </div>

              <span className="mt-3 md:mt-0 bg-[#FDE8E6] text-[#E76F51] px-4 py-2 rounded-full font-medium">
                Aug 2025 – Nov 2025
              </span>
            </div>

            <p className="mt-5 font-semibold text-gray-700">
              Machine Learning, MLOps & Deep Learning
            </p>

            <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-6">
              <li>
                Designed and deployed a{" "}
                <strong>machine learning classification</strong> system
                achieving <strong>94% accuracy</strong> through systematic
                hyperparameter tuning.
              </li>
              <li>
                Built a <strong>PyTorch-based chatbot</strong> that classifies
                user intent and handles ambiguous queries through confidence
                thresholding and fallback logic, now running as part of the
                organization's production system.
              </li>
            </ul>
          </motion.div>

          {/* Experience 4 - Soplex Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-l-4 border-[#E76F51]"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  AI Intern
                </h3>
                <p className="text-[#E76F51] font-semibold mt-1">
                  <a
                    href="https://www.linkedin.com/company/soplexai/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Soplex Technologies
                  </a>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Islamabad, Pakistan
                </p>
              </div>

              <span className="mt-3 md:mt-0 bg-[#FDE8E6] text-[#E76F51] px-4 py-2 rounded-full font-medium">
                Jul 2025 – Aug 2025
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-600 list-disc pl-6">
              <li>
                Contributed to healthcare AI initiatives, applying{" "}
                <strong>HL7 FHIR</strong> standards to support interoperable
                and secure clinical data exchange.
              </li>
              <li>
                Trained <strong>TensorFlow-based deep learning models</strong>{" "}
                for medical detection, gaining practical experience in
                regulated healthcare AI development.
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}