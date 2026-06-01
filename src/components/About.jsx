import { personalInfo } from "../data/portfolio";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-24 md:py-[120px]">
      <div className="max-w-container mx-auto px-6 flex flex-col gap-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 mb-6"
        >
          About
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-bg-primary dark:bg-white/5 rounded-card p-8 border border-border-color dark:border-white/10 shadow-sm flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex-1">
            <p className="text-body-text text-text-secondary dark:text-gray-300 leading-relaxed">
              {personalInfo.shortBio}
            </p>
          </div>
          <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-lg">
            <img 
              src="/image/profile.png" 
              alt={personalInfo.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image is not uploaded yet
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('bg-gray-200', 'dark:bg-slate-600', 'flex', 'items-center', 'justify-center');
                e.target.parentElement.innerHTML = '<span class="text-gray-400 text-4xl material-symbols-outlined">person</span>';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
