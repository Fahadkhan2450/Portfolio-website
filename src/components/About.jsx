import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6 space-y-8">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan-400 text-center"
        >
          ABOUT ME
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 leading-relaxed text-lg"
        >
          I am a Software Engineering student passionate about building
          intelligent systems, scalable web applications, and AI-driven solutions
          that create a tangible impact in the real world.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-300 leading-relaxed text-lg"
        >
          My journey started with exploring web development, where I learned
          HTML, CSS, JavaScript, and React. Later, I ventured into AI & Machine
          Learning, gaining hands-on experience with Python, PyTorch, Scikit-Learn,
          and OpenCV to build intelligent systems.
        </motion.p>

        {/* Third Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-300 leading-relaxed text-lg"
        >
          I enjoy tackling challenging problems, collaborating on meaningful
          projects, and continuously learning new technologies. My goal is to
          combine my web development and AI skills to build applications that
          are both **innovative** and **user-friendly**.
        </motion.p>

        {/* Fourth Paragraph / Call to Action */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-cyan-400 font-semibold text-lg"
        >
          I’m always excited to take on new challenges and contribute to projects
          that make a difference.
        </motion.p>

      </div>
    </section>
  );
}
