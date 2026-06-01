import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen md:min-h-[90vh] bg-[#0a0a0a] overflow-hidden flex flex-col md:block font-sans">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-0 pointer-events-none"></div>
      
      {/* Desktop Main Container */}
      <div className="relative z-10 w-full max-w-container mx-auto px-6 flex flex-col md:flex-row md:items-center min-h-screen md:min-h-[90vh] pt-32 md:pt-32 pb-20 md:pb-20">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center flex-grow md:pr-8 z-20 md:w-[65%] -mt-8 md:-mt-16">
          

          {/* Subtle Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pl-6 mt-4 md:mt-6 mb-4 md:mb-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] uppercase tracking-wider font-semibold text-gray-400 w-fit hover:bg-white/10 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Opportunities</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pl-6 border-l-2 border-white/20"
          >

            {/* Heading & Bio */}
            <h1 className="text-[52px] md:text-[86px] font-bold text-white leading-[1.05] tracking-tight">
              Sanket
            </h1>
            <p className="text-[20px] md:text-[24px] text-white mt-3 font-semibold tracking-wide">
              Java Full-Stack Developer
            </p>
            <p className="text-[15px] md:text-[17px] text-gray-400 mt-4 leading-relaxed max-w-lg font-light">
              Building scalable web applications using Spring Boot, React, PostgreSQL, and REST APIs.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pl-6 mt-8 flex flex-col gap-4 w-full sm:w-fit"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Link 
                to="projects" 
                smooth={true} 
                duration={500}
                className="flex-1 flex items-center justify-center text-center bg-white text-black border border-white rounded-full px-8 py-3 md:py-3.5 text-[14px] font-semibold tracking-wider hover:bg-transparent hover:text-white transition-all duration-300 cursor-pointer uppercase shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-none"
              >
                View Projects
              </Link>
              <a 
                href="#" 
                className="flex-1 flex items-center justify-center text-center border border-white/20 text-gray-300 rounded-full px-8 py-3 md:py-3.5 text-[14px] font-semibold tracking-wider hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer uppercase"
              >
                Resume
              </a>
            </div>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              className="w-full flex items-center justify-center text-center border border-white/20 text-gray-300 rounded-full px-8 py-3 md:py-3.5 text-[14px] font-semibold tracking-wider hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer uppercase"
            >
              Contact
            </Link>
          </motion.div>
        </div>

        {/* Mobile Portrait (Flows below text on mobile) */}
        <div className="relative md:hidden w-full h-[35vh] mt-6 z-10 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10"></div>
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            src="/image/profile.png" 
            alt="Profile" 
            className="w-full max-w-sm h-full object-cover object-top grayscale opacity-20 mix-blend-lighten"
          />
        </div>
      </div>

      {/* Desktop Right Side Portrait */}
      <div className="hidden md:block absolute right-0 top-0 w-[30%] h-full z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
        <motion.img 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="/image/profile.png" 
          alt="Profile" 
          className="w-full h-full object-cover object-center grayscale opacity-20 mix-blend-lighten"
        />
      </div>

    </section>
  );
}

