import { activities, certifications } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-24 md:py-[120px]">
      <div className="max-w-container mx-auto px-6 flex flex-col gap-12">
        
        {/* Activities Section */}
        <div className="flex flex-col gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 mb-2"
          >
            Activities & Leadership
          </motion.h2>
          
          <div className="grid grid-cols-1 gap-6">
            {activities.map((act, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg-primary dark:bg-white/5 rounded-card p-6 border border-border-color dark:border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-card-title text-text-primary dark:text-gray-100">{act.role}</h3>
                  <p className="text-body-text text-accent font-medium mt-1">{act.organization}</p>
                  <p className="text-body-text text-text-secondary dark:text-gray-400 mt-2">{act.description}</p>
                </div>
                <div className="md:text-right flex-shrink-0">
                  <span className="bg-bg-secondary dark:bg-white/10 border border-border-color dark:border-white/20 text-text-secondary dark:text-gray-300 text-[14px] font-medium px-4 py-2 rounded-full inline-block">
                    {act.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="flex flex-col gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 mb-2"
          >
            Certifications
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-bg-primary dark:bg-white/5 rounded-card p-6 border border-border-color dark:border-white/10 shadow-sm flex flex-col gap-2"
              >
                <h3 className="text-[18px] font-semibold text-text-primary dark:text-gray-100">{cert.title}</h3>
                <p className="text-body-text text-text-secondary dark:text-gray-400">{cert.issuer}</p>
                <p className="font-mono text-[14px] text-accent mt-1">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
