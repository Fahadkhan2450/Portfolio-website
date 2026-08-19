import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#E76F51] text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-6">
          Get In Touch
        </h2>

        <div className="flex flex-wrap justify-center gap-8 text-lg">

          {/* Email */}
          <a
            href="malikfahadkhan2450@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            <FaEnvelope size={22} />
            malikfahadkhan2450@gmail.com
          </a>

          {/* WhatsApp */}
          <a
  href="https://wa.me/923216033079"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-gray-200 transition"
>
            <FaWhatsapp size={22} />
            +92 321 60330 79
          </a>

          {/* LinkedIn */}
          <a
            href="
                www.linkedin.com/in/fahad-khan0124252"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Fahadkhan2450"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            <FaGithub size={22} />
            GitHub
          </a>

        </div>

      

  
      </div>
    </footer>
  );
}