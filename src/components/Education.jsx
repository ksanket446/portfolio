import { education, highSchool } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Education() {
  const eduItems = [education, highSchool];

  return (
    <section id="education" className="w-full py-24 md:py-[120px]">
      <div className="max-w-container mx-auto px-6 flex flex-col gap-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 mb-6"
        >
          Education
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eduItems.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-bg-primary dark:bg-white/5 rounded-card p-8 border border-border-color dark:border-white/10 shadow-sm flex flex-col gap-2"
            >
              <h3 className="text-card-title text-text-primary dark:text-gray-100">{edu.degree}</h3>
              <p className="text-body-text text-text-secondary dark:text-gray-400">{edu.institution}</p>
              <p className="font-mono text-[14px] text-text-secondary dark:text-gray-500 mt-2">{edu.duration}</p>
              <p className="text-body-text text-text-primary dark:text-gray-300 mt-2 font-medium">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
