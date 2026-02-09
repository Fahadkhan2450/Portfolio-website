import { motion } from "framer-motion";

export default function Projects() {
  // Variants for staggered drop-down animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <h2 className="text-center text-4xl font-bold text-cyan-400">Projects</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6 mt-10"
      >

        {/* Project 1 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          className="bg-slate-900 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold">Autism Prediction System</h3>
          <p className="text-gray-400 mt-2">
            Built a machine learning model to predict autism traits using
            Scikit-Learn algorithms including Logistic Regression, Random Forest,
            SVM, and K-Nearest Neighbors. Deployed using FastAPI and Docker.
          </p>
          <p className="text-cyan-400 mt-2">FastAPI • Docker • Scikit-Learn</p>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          className="bg-slate-900 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold">Cat vs Dog Image Classification</h3>
          <p className="text-gray-400 mt-2">
            Developed a CNN-based image classification model using PyTorch.
            Implemented convolutional layers, pooling, and fully connected layers
            to accurately classify cat and dog images.
          </p>
          <p className="text-cyan-400 mt-2">PyTorch • CNN • Neural Networks</p>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          className="bg-slate-900 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold">WorkHive – Project Management Platform</h3>
          <p className="text-gray-400 mt-2">
            A full-stack project management system allowing teams to create,
            assign, and track tasks with authentication and real-time updates.
          </p>
          <p className="text-cyan-400 mt-2">MongoDB • Express • React • Node</p>
        </motion.div>

        {/* Project 4 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          className="bg-slate-900 p-6 rounded-xl"
        >
          <h3 className="text-xl font-semibold">Object Detection using YOLOv8</h3>
          <p className="text-gray-400 mt-2">
            Built an object detection model using YOLOv8 and OpenCV to detect
            real-time objects in images and video streams.
          </p>
          <p className="text-cyan-400 mt-2">YOLOv8 • OpenCV • Computer Vision</p>
        </motion.div>

      </motion.div>
    </section>
  );
}
