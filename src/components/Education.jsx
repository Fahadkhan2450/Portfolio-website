import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      institute: "University of Engineering & Technology (UET), Taxila",
      degree: "Bachelor of Software Engineering",
      duration: "Aug 2023 – July 2027",
      location: "Taxila, Pakistan",
      achievement: "CGPA: 3.40 / 4.00",
      description:
        "Relevant coursework includes Data Structures & Algorithms, Database Systems, Software Engineering, Machine Learning, Artificial Intelligence, Computer Vision, Data Warehousing, Web Development, and Database Management Systems.",
    },
    {
      institute: "Fauji Foundation College",
      degree: "FSc Pre-Engineering",
      duration: "Aug 2021 – Jun 2023",
      location: "Rawalpindi, Pakistan",
      achievement: "Marks: 900 / 1100 (81%)",
      description:
        "Completed Pre-Engineering with a strong foundation in Mathematics, Physics, and Chemistry, developing analytical and problem-solving skills.",
    },
    {
      institute: "Fazaia Model Inter College",
      degree: "Matriculation (Science)",
      duration: "May 2019 – Jun 2021",
      location: "Sargodha, Pakistan",
      achievement: "Marks: 1040 / 1100 (94%)",
      description:
        "Completed Matriculation in Science, building a solid foundation in Mathematics, Computer Science, and core scientific concepts.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-[#F8F4EF]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold text-[#E76F51] mb-12"
        >
          Education
        </motion.h2>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className="bg-white rounded-2xl shadow-lg border-l-4 border-[#E76F51] p-8"
            >
              {/* Institute */}
              <h3 className="text-2xl font-bold text-gray-800">
                {edu.institute}
              </h3>

              {/* Degree */}
              <p className="text-lg font-semibold text-[#E76F51] mt-2">
                {edu.degree}
              </p>

              {/* Location & Duration */}
              <div className="flex flex-col md:flex-row md:justify-between mt-3 text-gray-600">
                <span>📍 {edu.location}</span>
                <span>📅 {edu.duration}</span>
              </div>

              {/* GPA / Marks */}
              <p className="mt-3 inline-block bg-[#FDE8E6] text-[#E76F51] px-4 py-2 rounded-full font-semibold">
                {edu.achievement}
              </p>

              {/* Description */}
              <p className="text-gray-600 mt-5 leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}