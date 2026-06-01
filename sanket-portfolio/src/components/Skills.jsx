import { skills } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-[96px]">
      <div className="max-w-container mx-auto px-6 flex flex-col gap-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 font-bold"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-primary dark:bg-white/5 rounded-card p-8 border border-border-color dark:border-white/10 shadow-sm flex flex-col gap-5 hover:border-white/20 transition-colors"
            >
              <h3 className="text-card-title text-text-primary dark:text-gray-100 tracking-[0.1em] uppercase text-[13px] font-bold">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map(skill => (
                  <span 
                    key={skill} 
                    className="bg-bg-secondary dark:bg-white/10 border border-border-color dark:border-white/20 text-text-primary dark:text-gray-200 text-[14px] font-medium px-[14px] py-[8px] rounded-full hover:bg-white/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
