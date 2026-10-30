import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Terminal', id: 'terminal' },
    { label: 'Education', id: 'education' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <footer className="relative z-10 w-full bg-[#0b0e17]/90 backdrop-blur-xl border-t border-white/5 mt-16 shadow-[0_-1px_12px_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            {/* Brand */}
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#d0bcff]/20 to-[#7bd0ff]/20 border border-[#7bd0ff]/30 flex items-center justify-center">
                  <span className="font-['Space_Grotesk'] text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff]">
                    &lt;MG/&gt;
                  </span>
                </div>
                <span className="font-['Space_Grotesk'] text-lg font-bold text-[#e0e2ef]">
                  {PERSONAL_INFO.name}
                </span>
              </div>
              <p className="font-['Inter'] text-xs text-[#cbc3d7]">
                Designed with curiosity. Built with passion.
              </p>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="font-['Space_Grotesk'] text-xs sm:text-sm text-[#cbc3d7] hover:text-[#7bd0ff] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-2.5">
              <a
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-[#272a34]/60 border border-white/5 flex items-center justify-center text-[#cbc3d7] hover:text-[#7bd0ff] hover:bg-[#32343f] hover:border-[#7bd0ff]/30 transition-all"
                href={PERSONAL_INFO.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">code</span>
              </a>

              <a
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-[#272a34]/60 border border-white/5 flex items-center justify-center text-[#cbc3d7] hover:text-[#d0bcff] hover:bg-[#32343f] hover:border-[#d0bcff]/30 transition-all"
                href={PERSONAL_INFO.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">share</span>
              </a>

              <a
                aria-label="Send Email"
                className="w-10 h-10 rounded-full bg-[#272a34]/60 border border-white/5 flex items-center justify-center text-[#cbc3d7] hover:text-[#2fd9f4] hover:bg-[#32343f] hover:border-[#2fd9f4]/30 transition-all"
                href={`mailto:${PERSONAL_INFO.email}`}
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/5 font-['Inter'] text-xs text-[#958ea0]">
            <p>© 2026 {PERSONAL_INFO.name}. All Rights Reserved.</p>
            <div className="flex items-center gap-2 font-['Space_Grotesk'] text-xs text-[#7bd0ff] uppercase tracking-wider font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-[#2fd9f4] animate-pulse"></span>
              <span>Neural Runtime Active</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top floating button */}
      {showBackToTop && (
        <button
          aria-label="Back to top"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#272a34]/90 text-[#e0e2ef] hover:text-[#d0bcff] hover:bg-[#32343f] border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all hover:scale-110 animate-in fade-in duration-200"
        >
          <span className="material-symbols-outlined text-[22px]">arrow_upward</span>
        </button>
      )}
    </>
  );
};
