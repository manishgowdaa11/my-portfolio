import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume, onNavigate }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'terminal', 'projects', 'education', 'roadmap', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Terminal', id: 'terminal' },
    { label: 'Education', id: 'education' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#10131c]/85 backdrop-blur-xl border-b border-[#494454]/40 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-[#10131c]/70 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick('hero', e)}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#d0bcff]/20 to-[#7bd0ff]/20 border border-[#7bd0ff]/30 flex items-center justify-center shadow-[0_0_12px_rgba(123,208,255,0.2)] group-hover:border-[#d0bcff] group-hover:shadow-[0_0_18px_rgba(208,188,255,0.35)] transition-all">
            <span className="font-['Space_Grotesk'] text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff]">
              &lt;MG/&gt;
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-['Space_Grotesk'] text-lg font-semibold text-[#e0e2ef] tracking-tight leading-none group-hover:text-white transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-wider text-[#7bd0ff] mt-1">
              {PERSONAL_INFO.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 bg-[#181b25]/70 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`font-['Space_Grotesk'] text-sm tracking-wide transition-all duration-200 relative ${
                  isActive
                    ? 'text-[#d0bcff] font-bold drop-shadow-[0_0_12px_rgba(208,188,255,0.6)]'
                    : 'text-[#cbc3d7] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions & Profile */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex p-[1px] rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] transition-transform duration-200 hover:scale-[1.02] shadow-[0_0_20px_rgba(139,92,246,0.25)] focus:outline-none"
            type="button"
          >
            <span className="px-4 py-2 rounded-[7px] bg-[#0b0e17] font-['Space_Grotesk'] text-sm font-medium text-[#e0e2ef] hover:bg-[#181b25] transition-colors flex items-center gap-1.5">
              <span>View Resume</span>
              <span className="material-symbols-outlined text-sm text-[#7bd0ff]">description</span>
            </span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick('contact', e)}
            className="hidden xl:inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-sm font-semibold hover:shadow-[0_0_18px_rgba(208,188,255,0.5)] transition-all duration-200 hover:scale-[1.02]"
          >
            Let's Connect
          </a>

          <a
            href="#about"
            onClick={(e) => handleNavClick('about', e)}
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#d0bcff] to-[#7bd0ff] p-0.5 flex items-center justify-center shrink-0 cursor-pointer shadow-md hover:scale-105 transition-transform"
            title="About Manish"
          >
            <div className="w-full h-full rounded-full bg-[#10131c] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#d0bcff] text-[18px]">person</span>
            </div>
          </a>

          {/* Mobile hamburger button */}
          <button
            aria-label="Toggle Mobile Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#1c1f29] transition-colors flex items-center justify-center"
            type="button"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#10131c]/95 border-b border-[#494454]/40 backdrop-blur-2xl px-6 py-5 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`px-3 py-2.5 rounded-lg font-['Space_Grotesk'] text-sm text-left transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#1c1f29] text-[#d0bcff] font-semibold border-l-2 border-[#d0bcff]'
                      : 'text-[#cbc3d7] hover:text-white hover:bg-[#181b25]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]"></span>}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg bg-[#1c1f29] border border-[#7bd0ff]/30 text-[#7bd0ff] font-['Space_Grotesk'] text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-base">description</span>
              <span>Open Resume</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick('contact', e)}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-sm font-semibold flex items-center justify-center gap-2 text-center"
            >
              <span>Let's Connect</span>
              <span className="material-symbols-outlined text-base">send</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
