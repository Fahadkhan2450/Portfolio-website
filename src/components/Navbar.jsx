import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#F8F4EF]/90 backdrop-blur-md shadow-md z-50 border-b border-[#E8DDD2]">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Name + Subtitle + Bouncing Ball */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[#E76F51]">
              Muhammad Fahad Khan
            </h1>

            {/* Bouncing Ball */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="w-3 h-3 rounded-full bg-[#E76F51]"
            />
          </div>

          <h2 className="text-xl font-bold text-gray-700">
  Data Scientist
</h2>
        </div>

        {/* Navbar Links */}
        <div className="flex items-center space-x-8 font-medium">

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-[#E76F51] transition duration-300 relative group"
          >
            Projects
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#E76F51] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-[#E76F51] transition duration-300 relative group"
          >
            Experience
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#E76F51] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer text-gray-700 hover:text-[#E76F51] transition duration-300 relative group"
          >
            Skills
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#E76F51] transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>
      </div>
    </nav>
  );
}