import { projects } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 md:py-[120px]">
      <div className="max-w-container mx-auto px-6 flex flex-col gap-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 mb-4"
        >
          Selected Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              href={project.liveUrl !== '#' ? project.liveUrl : project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-bg-primary dark:bg-white/5 rounded-card p-8 border border-border-color dark:border-white/10 shadow-sm flex flex-col gap-4"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-card-title text-text-primary dark:text-gray-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <span className="material-symbols-outlined text-white/50 group-hover:text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                  arrow_outward
                </span>
              </div>
              
              <p className="text-body-text text-text-secondary dark:text-gray-400">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="bg-bg-secondary dark:bg-white/10 border border-border-color dark:border-white/20 text-text-primary dark:text-gray-200 text-[14px] font-medium px-[12px] py-[6px] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
