import { education, highSchool, secondarySchool } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Education() {
  const eduItems = [education, highSchool, secondarySchool];

  return (
    <section id="education" className="w-full py-20 md:py-[96px]">
      <div className="max-w-container mx-auto px-6 flex flex-col gap-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 font-bold"
        >
          Education
        </motion.h2>
        
        <div className="relative border-l border-white/10 ml-3 md:ml-6 flex flex-col gap-10">
          {eduItems.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-[-5px] top-[6px] w-[9px] h-[9px] rounded-full ${index === 0 ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-gray-600'}`}></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <div className="flex items-center gap-4">
                  {edu.logo && (
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white/10 flex-shrink-0 border border-white/20 flex items-center justify-center p-1.5 bg-white shadow-sm">
                      <img 
                        src={edu.logo} 
                        alt="logo" 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<span class="text-[10px] text-gray-500 font-medium tracking-wider text-black">LOGO</span>';
                        }}
                      />
                    </div>
                  )}
                  <h3 className={`text-[20px] md:text-[22px] font-semibold ${index === 0 ? 'text-white' : 'text-gray-200'}`}>
                    {edu.degree}
                  </h3>
                </div>
                <span className="font-mono text-[13px] text-gray-500 bg-white/5 px-3 py-1 rounded-full w-fit mt-1 md:mt-0">
                  {edu.duration}
                </span>
              </div>
              
              <p className={`text-[16px] md:text-[18px] mb-3 ${index === 0 ? 'text-gray-300 font-medium' : 'text-gray-400'}`}>
                {edu.institution}
              </p>
              
              <p className="text-[15px] text-gray-400 leading-relaxed max-w-3xl">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
