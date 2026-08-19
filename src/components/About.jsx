import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 bg-[#F8F4EF]">
      <div className="max-w-4xl mx-auto px-6 space-y-8">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#E76F51] text-center"
        >
          ABOUT ME
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 leading-relaxed text-lg"
        >
          - Software Engineering student in final semester, focused on data engineering and data science <br /> 
- Experienced in building end-to-end data pipelines, from ingestion and transformation to model training and deployment<br /> 
- Skilled in modern data engineering and analysis tools for extracting insights from complex datasets<br /> 
Below are some of the projects I've built along the way.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-700 leading-relaxed text-lg"
        >
       My journey began in data analysis, using SQL, Excel, and visualization tools to uncover insights from raw data. This led me into data engineering, building scalable ETL pipelines and data warehouses with Python and SQL Server, alongside applying data science techniques to turn data into predictive insights. I enjoy solving challenging problems and continuously learning across the data stack, with the goal of building reliable, end-to-end systems that transform raw data into actionable results.
        </motion.p>

        {/* Fourth Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-[#E76F51] font-semibold text-lg"
        >
          I’m always excited to take on new challenges and contribute to
          projects that make a difference.
        </motion.p>

        {/* Button */}
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 1 }}
  className="pt-4"
>
  {/* <a
    href="/Fahad_Khan_CV.pdf"
    download="Muhammad_Fahad_Khan_CV.pdf"
  >
    <button className="px-8 py-3 bg-[#F28B82] hover:bg-[#E76F51] text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-semibold">
      Download CV
    </button>
  </a> */}
</motion.div>

      </div>
    </section>
  );
}