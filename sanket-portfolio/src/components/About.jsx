import { personalInfo } from "../data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "Current Status", value: "Final-Year CSE Student" },
    { label: "Portfolio", value: "4 Featured Projects" },
    { label: "Specialization", value: "Java Full-Stack Developer" },
    { label: "Additional Expertise", value: "Machine Learning Experience" }
  ];

  return (
    <section id="about" className="w-full py-20 md:py-[96px]">
      <div className="max-w-container mx-auto px-6 flex flex-col gap-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 font-bold"
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bio & Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="flex items-center gap-6 mb-2">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/20 shadow-lg cursor-pointer"
              >
                <img 
                  src="/image/profile.png" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-white">{personalInfo.name}</h3>
                <p className="text-gray-400 text-sm">{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="bg-bg-primary dark:bg-white/5 rounded-card p-8 border border-border-color dark:border-white/10 shadow-sm leading-relaxed text-[16px] text-text-secondary dark:text-gray-300">
              {personalInfo.shortBio}
            </div>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="bg-bg-primary dark:bg-white/5 rounded-card p-6 border border-border-color dark:border-white/10 shadow-sm flex flex-col justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <span className="text-[12px] uppercase tracking-wider text-gray-500 font-semibold">{stat.label}</span>
                <span className="text-[15px] font-medium text-white">{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
