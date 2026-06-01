import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0a0a0a] text-white w-full border-t border-white/10 pt-24 pb-12 font-sans relative overflow-hidden">
      {/* Subtle Background Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-container mx-auto px-6 flex flex-col items-center">
        
        {/* Call to Action */}
        <h2 className="text-[32px] md:text-[56px] font-bold tracking-tight text-white mb-6 text-center">
          Let's build something together.
        </h2>
        
        <p className="text-gray-400 text-[16px] md:text-[18px] text-center max-w-lg mb-12 font-light">
          Feel free to reach out for collaborations, software engineering opportunities, or just a friendly hello.
        </p>

        {/* Email Button */}
        <a 
          href={`mailto:${personalInfo.email}`} 
          className="inline-block bg-white text-black font-semibold px-10 py-4 rounded-full text-sm md:text-base tracking-wide hover:bg-gray-200 hover:scale-105 transition-all duration-300 mb-24 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          {personalInfo.email}
        </a>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[13px] tracking-wider text-gray-500 uppercase font-medium">
            © {currentYear} {personalInfo.name}
          </div>
          
          <div className="flex items-center gap-8 text-[13px] uppercase tracking-wider font-semibold">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Resume
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
