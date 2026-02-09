import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";

export default function Hero() {
  const nameVariants = ["Fahad Khan"];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-900 px-6 py-20 gap-12">

      {/* Profile + Glow */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Glow Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-xl opacity-40"
        />

        {/* Floating Profile Image */}
        <motion.img
          src={profile}
          alt="Fahad Khan"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-cyan-400"
        />
      </motion.div>

      {/* Name + Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold text-white">
          Hi, I’m{" "}
          <span className="text-cyan-400">
            <Typewriter
              words={nameVariants}
              loop={0}          // 0 for infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Software Engineer | Web | Machine Learning
        </p>
      </motion.div>

    </section>
  );
}
