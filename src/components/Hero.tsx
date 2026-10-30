import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-24 flex flex-col justify-center min-h-[calc(100vh-5rem)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col gap-5 text-left z-10">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#272a34]/80 border border-[#7bd0ff]/20 backdrop-blur-md shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2fd9f4] animate-pulse shadow-[0_0_10px_#2fd9f4]"></span>
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#7bd0ff] tracking-widest uppercase">
              HELLO, WORLD! 👋
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#e0e2ef] tracking-tight leading-[1.1]">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0bcff] via-[#a078ff] to-[#7bd0ff] drop-shadow-[0_0_24px_rgba(208,188,255,0.3)]">
              {PERSONAL_INFO.name}
            </span>
            .
          </h1>

          {/* Subtitle */}
          <p className="font-['Space_Grotesk'] text-lg sm:text-xl font-medium text-[#7bd0ff] tracking-normal">
            {PERSONAL_INFO.subRole}
          </p>

          {/* Description */}
          <p className="font-['Inter'] text-base sm:text-lg text-[#cbc3d7] max-w-2xl leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Tagline Banner */}
          <div className="px-4 py-3 rounded-lg bg-[#181b25] border border-white/5 shadow-sm flex items-center gap-3 max-w-xl group hover:border-[#2fd9f4]/30 transition-colors">
            <span className="material-symbols-outlined text-[#2fd9f4] text-xl shrink-0 group-hover:rotate-12 transition-transform">
              terminal
            </span>
            <p className="font-['Space_Grotesk'] text-sm text-[#e0e2ef] font-medium italic">
              “{PERSONAL_INFO.tagline}”
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-sm font-bold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_24px_rgba(208,188,255,0.4)] focus:outline-none"
              type="button"
            >
              <span>Explore My Projects</span>
              <span className="material-symbols-outlined text-lg">arrow_downward</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#272a34]/90 border border-white/10 backdrop-blur-md text-[#e0e2ef] font-['Space_Grotesk'] text-sm font-semibold transition-all duration-200 hover:bg-[#32343f] hover:border-[#7bd0ff]/40 shadow-sm focus:outline-none"
              type="button"
            >
              <span>Download Resume</span>
              <span className="material-symbols-outlined text-lg text-[#7bd0ff]">download</span>
            </button>
          </div>

          {/* Social Bar */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <a
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#272a34]/60 border border-white/5 backdrop-blur-sm text-[#cbc3d7] hover:text-white hover:bg-[#32343f] hover:border-[#7bd0ff]/30 transition-all duration-200 shadow-sm group"
              href={PERSONAL_INFO.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-base text-[#7bd0ff] group-hover:scale-110 transition-transform">
                code
              </span>
              <span className="font-['Space_Grotesk'] text-xs font-medium">
                {PERSONAL_INFO.githubHandle}
              </span>
            </a>

            <a
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#272a34]/60 border border-white/5 backdrop-blur-sm text-[#cbc3d7] hover:text-white hover:bg-[#32343f] hover:border-[#d0bcff]/30 transition-all duration-200 shadow-sm group"
              href={PERSONAL_INFO.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-base text-[#d0bcff] group-hover:scale-110 transition-transform">
                share
              </span>
              <span className="font-['Space_Grotesk'] text-xs font-medium">
                {PERSONAL_INFO.linkedinHandle}
              </span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#272a34]/60 border border-white/5 backdrop-blur-sm text-[#cbc3d7] hover:text-white hover:bg-[#32343f] hover:border-[#2fd9f4]/30 transition-all duration-200 shadow-sm group focus:outline-none"
              type="button"
              title="Copy email address"
            >
              <span className="material-symbols-outlined text-base text-[#2fd9f4] group-hover:scale-110 transition-transform">
                {copiedEmail ? 'check' : 'mail'}
              </span>
              <span className="font-['Space_Grotesk'] text-xs font-medium">
                {copiedEmail ? 'Copied to Clipboard!' : 'Get in touch'}
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Developer Visual Identity */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-8">
          {/* Orbital Rings Background FX */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#d0bcff]/20 via-transparent to-[#7bd0ff]/20 blur-2xl animate-pulse pointer-events-none"></div>
          <div className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full border border-white/5 shadow-inner pointer-events-none animate-[spin_40s_linear_infinite]"></div>
          <div className="absolute w-96 h-96 rounded-full border border-dashed border-[#7bd0ff]/10 pointer-events-none animate-[spin_60s_linear_infinite_reverse]"></div>

          {/* Profile Center Piece */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-b from-[#d0bcff] via-[#272a34] to-[#7bd0ff] shadow-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#0b0e17] overflow-hidden relative flex flex-col items-center justify-center group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Cybernetic developer avatar portrait of Manish Gowda H"
                src={PERSONAL_INFO.avatarUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17]/90 via-transparent to-transparent flex items-end justify-center pb-4">
                <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#7bd0ff] bg-[#32343f]/90 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10 shadow-lg">
                  {PERSONAL_INFO.name}
                </span>
              </div>
            </div>
          </div>

          {/* Floating Tech Pills */}
          <div className="absolute -top-2 left-6 px-3.5 py-1.5 rounded-full bg-[#1c1f29]/90 border border-[#7bd0ff]/30 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex items-center gap-2 transform hover:-translate-y-1 transition-transform cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#7bd0ff] animate-ping"></span>
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#e0e2ef]">Python</span>
          </div>

          <div className="absolute top-1/4 -right-4 px-3.5 py-1.5 rounded-full bg-[#1c1f29]/90 border border-[#d0bcff]/30 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex items-center gap-2 transform hover:-translate-y-1 transition-transform cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#d0bcff]"></span>
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#e0e2ef]">React</span>
          </div>

          <div className="absolute bottom-6 -left-2 px-3.5 py-1.5 rounded-full bg-[#1c1f29]/90 border border-[#2fd9f4]/30 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex items-center gap-2 transform hover:-translate-y-1 transition-transform cursor-default">
            <span className="w-2 h-2 rounded-full bg-[#2fd9f4]"></span>
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#e0e2ef]">AI / ML</span>
          </div>

          <div className="absolute -bottom-4 right-10 px-3.5 py-1.5 rounded-full bg-[#1c1f29]/90 border border-[#7bd0ff]/30 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex items-center gap-1.5 transform hover:-translate-y-1 transition-transform cursor-default">
            <span className="material-symbols-outlined text-sm text-[#7bd0ff]">terminal</span>
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#e0e2ef]">&lt;AIML /&gt;</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="w-full flex flex-col items-center justify-center pt-12 gap-1 opacity-80 hover:opacity-100 transition-opacity">
        <a
          className="flex flex-col items-center text-[#cbc3d7] hover:text-[#7bd0ff] transition-colors"
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="font-['Space_Grotesk'] text-[11px] font-semibold tracking-widest uppercase mb-1.5">
            Scroll down
          </span>
          <div className="w-5 h-9 rounded-full bg-[#272a34] border border-white/10 flex justify-center pt-1.5 shadow-sm">
            <div className="w-1.5 h-2.5 rounded-full bg-[#7bd0ff] animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};
