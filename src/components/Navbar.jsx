import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["About", "Projects", "Skills", "Education", "Experience"];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-bg-primary/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-border-color dark:border-slate-800 shadow-sm' : 'bg-transparent py-2'}`}
    >
      <div className="max-w-container mx-auto px-6 flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[22px] text-text-primary dark:text-gray-100 tracking-tight">Portfolio.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link} to={link.toLowerCase()} smooth={true} duration={500} offset={-100} className="text-[15px] font-medium text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white cursor-pointer transition-colors">
              {link}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 text-text-secondary hover:text-text-primary dark:text-gray-400 dark:hover:text-white transition-colors" title="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu" className="md:hidden p-2 text-text-secondary hover:text-text-primary dark:text-gray-400 dark:hover:text-white transition-colors">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-primary dark:bg-[#121212] border-b border-border-color dark:border-slate-800 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link} 
              to={link.toLowerCase()} 
              smooth={true} 
              duration={500} 
              offset={-100} 
              className="text-[16px] font-medium text-text-secondary dark:text-gray-400 hover:text-text-primary dark:hover:text-white cursor-pointer transition-colors py-2 border-b border-border-color dark:border-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
}
