import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import profile from "../assets/profile.jpg";

export default function Hero() {
  const nameVariants = ["Fahad Khan"];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F8F4EF] px-6 py-20 gap-12">

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Rotating Glow */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F28B82] via-[#E76F51] to-[#D94841] blur-2xl opacity-30"
        />

        {/* Floating Image */}
        <motion.img
          src={profile}
          alt="Fahad Khan"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover border-4 border-[#E76F51] shadow-2xl"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Hi, I'm{" "}
          <span className="text-[#E76F51]">
            <Typewriter
              words={nameVariants}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="mt-5 text-xl text-gray-600 font-medium">
          Data Scientist • Data Engineer
        </p>Data Scientist & Data Engineer — Bridging data pipelines and machine learning to turn raw data into reliable, actionable insights.

        

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-5">

          {/* View Projects */}
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
          >
            <button className="px-8 py-3 rounded-xl bg-[#F28B82] text-white font-semibold shadow-lg hover:bg-[#E76F51] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              View Projects
            </button>
          </Link>

         

        </div>
      </motion.div>

    </section>
  );
}