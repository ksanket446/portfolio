import { motion } from "framer-motion";

export default function Learning() {
  const learningItems = [
    "Spring Security",
    "Docker",
    "System Design",
    "Microservices"
  ];

  return (
    <section id="learning" className="w-full py-20 md:py-[96px] border-t border-white/5">
      <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <h2 className="text-[24px] md:text-[28px] text-text-primary dark:text-gray-100 font-bold">
            Currently Learning
          </h2>
          <p className="text-[15px] text-gray-500 mt-2">Expanding my technical horizon</p>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {learningItems.map((item, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/5 border border-white/10 text-gray-300 text-[14px] font-medium px-5 py-2.5 rounded-full hover:bg-white/10 hover:text-white hover:border-white/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default shadow-sm"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
