import React, { useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  onLaunchDemo?: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onLaunchDemo
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const nextId = project.id === 'project-01' ? 'project-02' : 'project-01';
        onSelectProject(nextId);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (project) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose, onSelectProject]);

  if (!project) return null;

  const nextProjectId = project.id === 'project-01' ? 'project-02' : 'project-01';
  const nextProject = PROJECTS_DATA[nextProjectId];

  return (
    <div
      aria-hidden={!project}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 animate-in fade-in duration-200"
      role="dialog"
    >
      {/* Glassmorphic Backdrop Overlay */}
      <div
        className="absolute inset-0 bg-[#080b14]/85 backdrop-blur-[12px] transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Glowing Orb FX Behind Modal */}
      <div className="absolute w-[500px] h-[500px] bg-[#d0bcff]/15 rounded-full blur-[120px] pointer-events-none -top-12 -left-12"></div>
      <div className="absolute w-[450px] h-[450px] bg-[#2fd9f4]/15 rounded-full blur-[120px] pointer-events-none -bottom-12 -right-12"></div>

      {/* Floating Dialog Box */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0D1322]/95 border border-[#d0bcff]/20 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(160,120,255,0.15)] flex flex-col text-[#e0e2ef] custom-scrollbar z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 md:px-7 py-4 bg-[#0D1322]/95 backdrop-blur-md border-b border-[#494454]/40">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-0.5 rounded-full text-[#7bd0ff] font-['Space_Grotesk'] text-xs font-semibold bg-[#272a34] border border-[#7bd0ff]/20">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[#2fd9f4] font-['Space_Grotesk'] text-xs font-semibold bg-[#0b0e17] border border-[#2fd9f4]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4] animate-pulse"></span>
              <span>{project.status}</span>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              aria-label="Switch Project"
              onClick={() => onSelectProject(nextProjectId)}
              className="p-2 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#1c1f29] transition-colors"
              title="Previous / Next Project"
              type="button"
            >
              <span className="material-symbols-outlined text-xl">swap_horiz</span>
            </button>
            <button
              aria-label="Close Project Modal"
              className="p-2 ml-1 rounded-lg text-[#cbc3d7] hover:text-[#ffb4ab] hover:bg-[#1c1f29] transition-colors group"
              onClick={onClose}
              type="button"
            >
              <span className="material-symbols-outlined text-2xl group-hover:rotate-90 transition-transform duration-200">
                close
              </span>
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-5 md:p-8 flex flex-col gap-6 text-left">
          {/* Title & Subheading */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#7bd0ff]">
                {project.projectNumber}
              </span>
              <span className="text-[#958ea0]">•</span>
              <span className="font-['Space_Grotesk'] text-xs text-[#cbc3d7]">
                {project.academicContext}
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-[#e0e2ef] tracking-tight">
              {project.title}
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base text-[#7bd0ff]">
              {project.tagline}
            </p>
          </div>

          {/* Preview Hero Image with Overlay Badges */}
          <div className="relative w-full rounded-xl overflow-hidden bg-[#0b0e17] border border-[#494454]/30 group shadow-2xl">
            <img
              alt={`${project.title} preview`}
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              src={project.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-transparent to-transparent opacity-85"></div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-[#0D1322]/80 backdrop-blur-md border border-white/10 text-[#7bd0ff] font-['Space_Grotesk'] text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0D1322]/80 backdrop-blur-md border border-white/10 font-['Space_Grotesk'] text-xs text-[#cbc3d7]">
                <span className="material-symbols-outlined text-sm text-[#7bd0ff]">verified</span>
                <span>Production Verified</span>
              </div>
            </div>
          </div>

          {/* Two Column Project Brief: Overview & Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Overview & Problem Solved */}
            <div className="md:col-span-7 flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-[#181b25] border border-[#494454]/30 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#d0bcff] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-base">info</span>
                  <span>Overview &amp; Problem Solved</span>
                </div>
                <p className="font-['Inter'] text-sm sm:text-base text-[#cbc3d7] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Learning Takeaways & Student Insights */}
              <div className="p-4 rounded-xl bg-[#181b25] border border-[#494454]/30 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[#2fd9f4] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-base">psychology</span>
                  <span>AIML Scholar Reflections &amp; Engineering Lessons</span>
                </div>
                <p className="font-['Inter'] text-sm text-[#cbc3d7] leading-relaxed">
                  {project.learnings}
                </p>
              </div>
            </div>

            {/* Key Highlights & Architectural Features */}
            <div className="md:col-span-5 flex flex-col gap-3 p-4 rounded-xl bg-[#181b25] border border-[#494454]/30">
              <div className="flex items-center gap-2 text-[#7bd0ff] font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-base">checklist</span>
                <span>Core Capabilities</span>
              </div>
              <ul className="flex flex-col gap-2.5 pt-1">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 font-['Inter'] text-xs sm:text-sm text-[#cbc3d7]"
                  >
                    <span className="material-symbols-outlined text-[#7bd0ff] text-base shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Architecture & Tech Stack Matrix */}
          <div className="flex flex-col gap-2">
            <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#958ea0] uppercase tracking-wider">
              System Architecture Stack
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.stack.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#0b0e17] border border-[#494454]/20 flex flex-col gap-0.5"
                >
                  <span className="font-['Space_Grotesk'] text-[10px] uppercase text-[#958ea0]">
                    {item.label}
                  </span>
                  <span className="font-['Space_Grotesk'] text-sm font-semibold text-[#e0e2ef]">
                    {item.value}
                  </span>
                  <span className="font-['Inter'] text-[11px] text-[#cbc3d7]/80 truncate">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Footer Actions */}
        <div className="sticky bottom-0 z-20 flex flex-wrap items-center justify-between gap-4 px-5 md:px-7 py-4 bg-[#0D1322]/95 backdrop-blur-md border-t border-[#494454]/40">
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 rounded-lg bg-[#1c1f29] text-[#cbc3d7] hover:text-white hover:bg-[#272a34] transition-colors font-['Space_Grotesk'] text-sm font-medium"
              onClick={onClose}
              type="button"
            >
              Close Details
            </button>
            <button
              className="px-4 py-2 rounded-lg text-[#7bd0ff] hover:bg-[#1c1f29] transition-colors font-['Space_Grotesk'] text-sm font-medium flex items-center gap-1.5"
              onClick={() => onSelectProject(nextProjectId)}
              type="button"
            >
              <span>Next: {nextProject.title.split(' ')[0]}...</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#272a34] hover:bg-[#32343f] text-[#e0e2ef] font-['Space_Grotesk'] text-sm font-medium transition-colors"
              href={project.githubLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-base text-[#7bd0ff]">code</span>
              <span>View Code</span>
            </a>

            {project.hasInteractiveDemo && onLaunchDemo ? (
              <button
                onClick={() => {
                  onClose();
                  onLaunchDemo(project.id);
                }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-sm font-bold shadow-[0_0_16px_rgba(208,188,255,0.4)] hover:scale-105 transition-transform"
                type="button"
              >
                <span>Launch Interactive POS</span>
                <span className="material-symbols-outlined text-base">restaurant</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  onClose();
                }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-sm font-bold shadow-[0_0_16px_rgba(208,188,255,0.4)] hover:scale-105 transition-transform"
                type="button"
              >
                <span>Live Preview</span>
                <span className="material-symbols-outlined text-base">rocket_launch</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
