import React from 'react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080b14]/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0D1322] border border-[#d0bcff]/30 shadow-2xl flex flex-col text-[#e0e2ef] custom-scrollbar">
        {/* Top Header Controls */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#101827]/95 backdrop-blur-md border-b border-[#494454]/40">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#7bd0ff]">description</span>
            <span className="font-['Space_Grotesk'] text-sm font-bold text-white">
              Curriculum Vitae Preview • {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-xs font-bold flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform"
              title="Print or Save PDF"
            >
              <span className="material-symbols-outlined text-sm">print</span>
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#1c1f29] transition-colors"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 flex flex-col gap-6 text-left bg-[#0B0E17]/95">
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <h1 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-['Space_Grotesk'] text-sm font-semibold text-[#7bd0ff] mt-0.5">
                {PERSONAL_INFO.subRole}
              </p>
              <p className="text-xs text-[#cbc3d7] mt-1 max-w-md">
                B.Tech Computer Science Scholar specializing in Artificial Intelligence and Machine Learning.
              </p>
            </div>

            <div className="flex flex-col text-xs font-mono text-[#cbc3d7] gap-1 sm:text-right">
              <span>{PERSONAL_INFO.email}</span>
              <span>{PERSONAL_INFO.github}</span>
              <span>{PERSONAL_INFO.linkedin}</span>
              <span className="text-[#2fd9f4]">Bengaluru, Karnataka, India</span>
            </div>
          </div>

          {/* Education */}
          <div className="flex flex-col gap-2">
            <h2 className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider text-[#d0bcff] border-b border-[#d0bcff]/20 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row justify-between pt-1">
              <div>
                <h3 className="font-['Space_Grotesk'] text-base font-bold text-white">
                  {PERSONAL_INFO.degree} in {PERSONAL_INFO.major}
                </h3>
                <p className="text-xs text-[#7bd0ff]">
                  Specialization: {PERSONAL_INFO.specialization}
                </p>
              </div>
              <div className="text-xs text-[#cbc3d7] font-mono sm:text-right mt-1 sm:mt-0">
                <span>{PERSONAL_INFO.semester}</span>
                <p className="text-[#958ea0]">Expected Graduation: 2028</p>
              </div>
            </div>
            <p className="text-xs text-[#cbc3d7] mt-1">
              <strong className="text-white">Relevant Coursework:</strong> Data Structures &amp; Algorithms, Object Oriented Programming with Java, Discrete Mathematical Structures, Computer Architecture, AI Foundations.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="flex flex-col gap-2">
            <h2 className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider text-[#d0bcff] border-b border-[#d0bcff]/20 pb-1">
              Technical Stack &amp; Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-[#cbc3d7]">
              <div>
                <strong className="text-white block font-['Space_Grotesk']">Languages:</strong>
                <span>C Language, Python, JavaScript (ES6+), Java (Foundations)</span>
              </div>
              <div>
                <strong className="text-white block font-['Space_Grotesk']">Web Technologies:</strong>
                <span>HTML5, CSS3, Tailwind CSS, Responsive Web Design, DOM Manipulation, React.js (Learning)</span>
              </div>
              <div>
                <strong className="text-white block font-['Space_Grotesk']">Tools &amp; Databases:</strong>
                <span>Git, GitHub, VS Code, Linux Terminal, SQL / Relational DBMS</span>
              </div>
              <div>
                <strong className="text-white block font-['Space_Grotesk']">Core Focus Disciplines:</strong>
                <span>Data Structures &amp; Algorithms, Heuristic AI Search, Machine Learning Foundations</span>
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="flex flex-col gap-3">
            <h2 className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider text-[#d0bcff] border-b border-[#d0bcff]/20 pb-1">
              Featured Projects
            </h2>

            {/* Project 1 */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-['Space_Grotesk'] text-sm font-bold text-white">
                  {PROJECTS_DATA['project-01'].title}
                </h3>
                <span className="text-xs font-mono text-[#7bd0ff]">HTML5, CSS3, JavaScript</span>
              </div>
              <p className="text-xs text-[#cbc3d7]">
                {PROJECTS_DATA['project-01'].description}
              </p>
              <ul className="list-disc list-inside text-xs text-[#958ea0] space-y-0.5">
                <li>Engineered high-performance glassmorphic UI using Tailwind CSS design tokens.</li>
                <li>Created custom responsive modal drawer architecture without third-party heavy dependencies.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-baseline">
                <h3 className="font-['Space_Grotesk'] text-sm font-bold text-white">
                  {PROJECTS_DATA['project-02'].title}
                </h3>
                <span className="text-xs font-mono text-[#7bd0ff]">HTML5, CSS3, DOM Logic</span>
              </div>
              <p className="text-xs text-[#cbc3d7]">
                {PROJECTS_DATA['project-02'].description}
              </p>
              <ul className="list-disc list-inside text-xs text-[#958ea0] space-y-0.5">
                <li>Built real-time dynamic total, tax, and service charge billing ledger using DOM event delegation.</li>
                <li>Implemented food catalog categories filtering and live table occupancy management.</li>
              </ul>
            </div>
          </div>

          {/* Mindset & Aspirations */}
          <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
            <h2 className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-wider text-[#d0bcff]">
              Professional Philosophy
            </h2>
            <p className="text-xs text-[#cbc3d7] italic leading-relaxed">
              “{PERSONAL_INFO.tagline}” Passionate about building reliable digital products, collaborating in developer open-source communities, and applying AI models to real-world problems.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#101827] border-t border-[#494454]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#1c1f29] text-[#cbc3d7] hover:text-white font-['Space_Grotesk'] text-xs font-semibold"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
