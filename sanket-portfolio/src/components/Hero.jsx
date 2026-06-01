import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full md:min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col md:block font-sans">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-0 pointer-events-none"></div>
      
      {/* Desktop Main Container */}
      <div className="relative z-10 w-full max-w-container mx-auto px-6 flex flex-col md:grid md:grid-cols-2 md:h-screen md:min-h-screen pt-32 md:pt-0">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full pb-12 md:py-24 md:pr-8 z-20">
          
          {/* Subtle Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400 mb-8 md:mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="tracking-wide">Available for Software Engineering Opportunities</span>
          </motion.div>

          {/* Heading & Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pl-6 border-l-2 border-white mb-10 md:mb-8"
          >
            <h1 className="text-[50px] md:text-[80px] font-bold text-white leading-[1.1] tracking-tight">
              Sanket
            </h1>
            <p className="text-[18px] md:text-[22px] text-gray-400 mt-4 md:mt-3 font-light tracking-wide">
              Java Full-Stack Developer
            </p>
            <p className="text-[15px] md:text-[16px] text-gray-500 mt-4 md:mt-3 leading-relaxed max-w-md font-light">
              Building scalable web applications using Spring Boot, React, PostgreSQL, and REST APIs.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pl-6 flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <Link 
              to="projects" 
              smooth={true} 
              duration={500}
              className="inline-block text-center bg-white text-black border border-white rounded-full px-8 py-3.5 md:py-3 text-sm font-semibold tracking-wider hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer uppercase"
            >
              View Projects
            </Link>
            <a 
              href="#" 
              className="inline-block text-center border border-white/30 text-white rounded-full px-8 py-3.5 md:py-3 text-sm font-semibold tracking-wider hover:border-white hover:bg-white/5 transition-all duration-300 cursor-pointer uppercase"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* Mobile Portrait (Flows below text on mobile) */}
        <div className="relative md:hidden w-full h-[45vh] mt-4 z-10 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10"></div>
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            src="/image/profile.png" 
            alt="Profile" 
            className="w-full max-w-sm h-full object-cover object-top grayscale opacity-30 mix-blend-lighten"
          />
        </div>
      </div>

      {/* Desktop Right Side Portrait */}
      <div className="hidden md:block absolute right-0 top-0 w-[35%] h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
        <motion.img 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/image/profile.png" 
          alt="Profile" 
          className="w-full h-full object-cover object-center grayscale opacity-35 mix-blend-lighten"
        />
      </div>

      {/* Social / Info Bottom Bar (Slimmer) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative md:absolute md:bottom-0 md:left-0 w-full md:w-auto md:max-w-[65%] z-20 bg-[#0a0a0a]/90 md:bg-[#0a0a0a]/80 backdrop-blur-md border-t md:border-r border-white/5 px-6 py-5 md:px-8 md:py-4 flex flex-col md:flex-row gap-5 md:gap-8 items-start md:items-center mt-auto md:mt-0"
      >
         <div className="flex items-center gap-5 text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">
            <span className="text-gray-600 hidden sm:block">Social</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Resume</a>
         </div>
         
         <div className="w-full md:w-[1px] h-[1px] md:h-8 bg-white/10 hidden md:block"></div>
         
         <div className="flex-1 text-sm text-gray-400 max-w-sm">
           <p className="font-semibold text-white mb-1 tracking-wide text-[11px] uppercase">@SANKET • CURRENT</p>
           <p className="text-[12px] leading-relaxed">
             Final-year Computer Science student specializing in Java, Spring Boot, React, PostgreSQL, REST APIs, and backend development.
           </p>
         </div>
      </motion.div>
      
    </section>
  );
}

