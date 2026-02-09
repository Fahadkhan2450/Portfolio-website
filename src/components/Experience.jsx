import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-cyan-400">Experience</h2>

        <div className="mt-6 bg-slate-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">AI/ML Intern</h3>
          <p className="text-cyan-400">BlackByt3</p>
          <p className="text-gray-400">3 Months</p>
          <ul className="list-disc ml-6 mt-3 text-gray-300 space-y-2">
  <li>Developed RESTful APIs and backend services with Node.js and FastAPI</li>
  <li>Implemented machine learning models using Scikit-Learn and various ML algorithms (Logistic Regression, Random Forest, SVM, KNN)</li>
  <li>Built and trained neural networks using PyTorch (ANN & CNN)</li>
  <li>Collaborated on real-world production systems integrating AI & Web</li>
</ul>

        </div>
      </motion.div>
    </section>
  );
}
