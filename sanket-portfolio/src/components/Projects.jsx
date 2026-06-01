import { projects } from "../data/portfolio";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-[96px]">
      <div className="max-w-container mx-auto px-6 flex flex-col gap-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-section-title text-text-primary dark:text-gray-100 font-bold"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-bg-primary dark:bg-white/5 rounded-card p-8 border border-border-color dark:border-white/10 shadow-sm flex flex-col gap-5 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-[22px] font-semibold text-text-primary dark:text-gray-100 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <span className="material-symbols-outlined text-white/30 group-hover:text-white/70 transition-all">
                  folder_open
                </span>
              </div>
              
              <p className="text-body-text text-text-secondary dark:text-gray-400 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="bg-bg-secondary dark:bg-white/10 border border-border-color dark:border-white/20 text-text-primary dark:text-gray-300 text-[13px] font-medium px-[12px] py-[6px] rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {((project.repoUrl && project.repoUrl !== '#') || (project.liveUrl && project.liveUrl !== '#')) ? (
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                  {project.repoUrl && project.repoUrl !== '#' && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] font-semibold text-gray-400 hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">code</span>
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[14px] font-semibold text-gray-400 hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                      Live Demo
                    </a>
                  )}
                </div>
              ) : (
                <div className="flex items-center mt-4 pt-4 border-t border-white/10">
                  <span className="flex items-center gap-2 text-[13px] font-semibold text-amber-500/80 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full tracking-wide">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    Development in Progress
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
