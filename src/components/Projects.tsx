import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';

interface ProjectsProps {
  onOpenProjectModal: (projectId: string) => void;
  onLaunchDemo: (projectId: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenProjectModal, onLaunchDemo }) => {
  const p1 = PROJECTS_DATA['project-01'];
  const p2 = PROJECTS_DATA['project-02'];

  return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 text-left">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-10 text-left">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#272a34] text-[#d0bcff] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider border border-[#d0bcff]/20">
          <span className="material-symbols-outlined text-sm">folder_open</span>
          <span>My Work</span>
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e0e2ef] tracking-tight">
          Projects That Bring Ideas to Life
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-[#cbc3d7] max-w-2xl">
          Practical real-world implementations demonstrating UI engineering, interaction logic, and structured software foundations.
        </p>
      </div>

      {/* 2 Large Premium Project Cards */}
      <div className="flex flex-col gap-10">
        {/* Project 01: Portfolio Website */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 md:p-8 lg:p-10 rounded-2xl bg-[#1c1f29]/85 backdrop-blur-md shadow-2xl items-center border border-white/5 hover:border-[#d0bcff]/30 transition-all duration-300">
          {/* Visual Mockup Preview */}
          <div
            className="lg:col-span-6 overflow-hidden rounded-xl bg-[#0b0e17] relative group shadow-inner cursor-pointer"
            onClick={() => onOpenProjectModal(p1.id)}
          >
            <img
              className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Personal Portfolio Website interface preview"
              src={p1.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17]/85 via-transparent to-transparent flex items-end justify-between p-4">
              <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#7bd0ff] bg-[#32343f]/90 px-3 py-1 rounded backdrop-blur-md border border-white/5">
                PROJECT 01 • WEB APPLICATION
              </span>
              <span className="inline-flex items-center gap-1 font-['Space_Grotesk'] text-xs text-[#d0bcff] bg-[#32343f]/90 px-3 py-1 rounded backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-sm">zoom_in</span> Quick View
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-left">
            <div className="flex flex-wrap items-center gap-1.5">
              {p1.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full bg-[#272a34] text-[#7bd0ff] font-['Space_Grotesk'] text-xs font-semibold border border-[#7bd0ff]/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#e0e2ef]">
              {p1.title}
            </h3>

            <p className="font-['Inter'] text-sm sm:text-base text-[#cbc3d7] leading-relaxed">
              {p1.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-sm font-bold shadow-[0_0_16px_rgba(208,188,255,0.3)] hover:scale-105 transition-transform"
                onClick={() => onOpenProjectModal(p1.id)}
                type="button"
              >
                <span>View Project</span>
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </button>

              <a
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#272a34] text-[#e0e2ef] font-['Space_Grotesk'] text-sm font-semibold hover:bg-[#32343f] border border-white/5 transition-colors"
                href={p1.githubLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base text-[#7bd0ff]">code</span>
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project 02: Restaurant Management System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-6 md:p-8 lg:p-10 rounded-2xl bg-[#1c1f29]/85 backdrop-blur-md shadow-2xl items-center border border-white/5 hover:border-[#7bd0ff]/30 transition-all duration-300">
          {/* Visual Mockup Preview */}
          <div
            className="lg:col-span-6 lg:order-2 overflow-hidden rounded-xl bg-[#0b0e17] relative group shadow-inner cursor-pointer"
            onClick={() => onOpenProjectModal(p2.id)}
          >
            <img
              className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Restaurant Management System interface preview"
              src={p2.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e17]/85 via-transparent to-transparent flex items-end justify-between p-4">
              <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#2fd9f4] bg-[#32343f]/90 px-3 py-1 rounded backdrop-blur-md border border-white/5">
                PROJECT 02 • SYSTEM UTILITY
              </span>
              <span className="inline-flex items-center gap-1 font-['Space_Grotesk'] text-xs text-[#2fd9f4] bg-[#32343f]/90 px-3 py-1 rounded backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-sm">zoom_in</span> Quick View
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-6 lg:order-1 flex flex-col gap-4 text-left">
            <div className="flex flex-wrap items-center gap-1.5">
              {p2.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full bg-[#272a34] text-[#2fd9f4] font-['Space_Grotesk'] text-xs font-semibold border border-[#2fd9f4]/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#e0e2ef]">
              {p2.title}
            </h3>

            <p className="font-['Inter'] text-sm sm:text-base text-[#cbc3d7] leading-relaxed">
              {p2.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-sm font-bold shadow-[0_0_16px_rgba(208,188,255,0.3)] hover:scale-105 transition-transform"
                onClick={() => onOpenProjectModal(p2.id)}
                type="button"
              >
                <span>View Project</span>
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </button>

              <button
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#272a34] hover:bg-[#32343f] text-[#2fd9f4] font-['Space_Grotesk'] text-sm font-semibold border border-[#2fd9f4]/30 transition-all hover:scale-[1.02]"
                onClick={() => onLaunchDemo(p2.id)}
                type="button"
              >
                <span className="material-symbols-outlined text-base">restaurant</span>
                <span>Try Live POS Demo</span>
              </button>

              <a
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#181b25] text-[#cbc3d7] hover:text-white hover:bg-[#272a34] font-['Space_Grotesk'] text-sm font-medium border border-white/5 transition-colors"
                href={p2.githubLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-base text-[#7bd0ff]">code</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
