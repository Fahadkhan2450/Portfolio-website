import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-cyan-400"
        >
          Education
        </motion.h2>

        <div className="mt-10 space-y-6">

          {/* UET */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 p-6 rounded-xl border-l-4 border-cyan-400"
          >
            <h3 className="text-xl font-semibold">
              UET Taxila
            </h3>
            <p className="text-gray-300">
              Bachelor of Software Engineering
            </p>
            <p className="text-gray-400 text-sm">
              Taxila, Pakistan | Aug 2023 – Present
            </p>
          </motion.div>

          {/* FSC */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-6 rounded-xl border-l-4 border-cyan-400"
          >
            <h3 className="text-xl font-semibold">
              Fauji Foundation College
            </h3>
            <p className="text-gray-300">
              FSc Pre-Engineering
            </p>
            <p className="text-gray-400 text-sm">
              Rawalpindi, Pakistan | Aug 2021 – Jun 2023
            </p>
          </motion.div>

          {/* Matric */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-slate-900 p-6 rounded-xl border-l-4 border-cyan-400"
          >
            <h3 className="text-xl font-semibold">
              Fazaia Model Inter College
            </h3>
            <p className="text-gray-300">
              Matriculation
            </p>
            <p className="text-gray-400 text-sm">
              Sargodha, Pakistan | May 2019 – Jun 2021
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
