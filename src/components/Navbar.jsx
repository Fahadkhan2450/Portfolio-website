import { motion } from "framer-motion";
import { Link } from "react-scroll"; 

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Name + Subtitle + Bouncing Ball */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-cyan-400">Muhamad Fahad Khan</h1>

            {/* Bouncing Ball */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
              className="w-3 h-3 rounded-full bg-cyan-400"
            />
          </div>
          <span className="text-gray-300 text-sm">ML & Web Developer</span>
        </div>

        {/* Navbar Links */}
        <div className="space-x-6 text-gray-300 flex items-center">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-cyan-400 cursor-pointer transition-colors"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="hover:text-cyan-400 cursor-pointer transition-colors"
          >
            Experience
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-cyan-400 cursor-pointer transition-colors"
          >
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
}
