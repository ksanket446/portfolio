import { activities, certifications } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 md:py-[96px]">
      <div className="max-w-container mx-auto px-6 flex flex-col gap-16">
        
        {/* Activities Section */}
        <div className="flex flex-col gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 font-bold"
          >
            Activities & Leadership
          </motion.h2>
          
          <div className="relative border-l border-white/10 ml-3 md:ml-6 flex flex-col gap-8">
            {activities.map((act, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute left-[-5px] top-[8px] w-[9px] h-[9px] rounded-full bg-gray-600"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-2">
                  <h3 className="text-[20px] font-semibold text-white">{act.role}</h3>
                  <span className="font-mono text-[13px] text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit">
                    {act.date}
                  </span>
                </div>
                
                <p className="text-[16px] text-gray-300 font-medium mb-3">{act.organization}</p>
                <p className="text-[15px] text-gray-400 leading-relaxed max-w-3xl">{act.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="flex flex-col gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 font-bold"
          >
            Certifications
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const isRHCSA = cert.title.includes("Red Hat") || cert.title.includes("RHCSA");
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-bg-primary dark:bg-white/5 rounded-card p-6 border shadow-sm flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 ${
                    isRHCSA 
                      ? 'border-emerald-500/30 dark:border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.05)]' 
                      : 'border-border-color dark:border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className={`text-[18px] font-semibold ${isRHCSA ? 'text-emerald-400' : 'text-text-primary dark:text-gray-100'}`}>
                      {cert.title}
                    </h3>
                    {isRHCSA && (
                      <span className="material-symbols-outlined text-emerald-500 text-[20px]">
                        verified
                      </span>
                    )}
                  </div>
                  <p className="text-body-text text-text-secondary dark:text-gray-400">{cert.issuer}</p>
                  <p className="font-mono text-[13px] text-gray-500 mt-1">{cert.date}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
