import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Active' | 'Learning' | 'Focus'>('All');
  const [activeSkillModal, setActiveSkillModal] = useState<SkillItem | null>(null);

  const getTagStyle = (status: SkillItem['status']) => {
    switch (status) {
      case 'Active':
        return 'text-[#7bd0ff] bg-[#1c1f29] border-[#7bd0ff]/30';
      case 'Learning':
        return 'text-[#d0bcff] bg-[#1c1f29] border-[#d0bcff]/30';
      case 'Focus':
        return 'text-[#2fd9f4] bg-[#1c1f29] border-[#2fd9f4]/30';
      default:
        return 'text-[#cbc3d7] bg-[#1c1f29] border-white/10';
    }
  };

  return (
    <section id="skills" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 text-left">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#272a34] text-[#7bd0ff] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider border border-[#7bd0ff]/20">
            <span className="material-symbols-outlined text-sm">memory</span>
            <span>My Expertise</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e0e2ef] tracking-tight">
            Technologies I Work With
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#cbc3d7] max-w-2xl">
            Authentic representation of my current stack, foundational proficiencies, and technologies actively in study.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-[#181b25] p-1.5 rounded-xl border border-white/5">
          {(['All', 'Active', 'Learning', 'Focus'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-lg font-['Space_Grotesk'] text-xs font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-bold shadow-sm'
                  : 'text-[#cbc3d7] hover:text-white hover:bg-[#272a34]'
              }`}
            >
              {filter === 'All' ? 'All Skills' : `${filter}`}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Categorized Skill Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((category) => {
          // Filter skills based on status
          const filteredSkills = category.skills.filter((s) => {
            if (activeFilter === 'All') return true;
            return s.status === activeFilter;
          });

          return (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#1c1f29]/90 border border-white/5 backdrop-blur-md shadow-xl flex flex-col gap-5 hover:border-[#7bd0ff]/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 pb-2 border-b border-white/5">
                <span className="material-symbols-outlined text-[#7bd0ff] text-2xl">
                  {category.icon}
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#e0e2ef]">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {filteredSkills.length === 0 ? (
                  <div className="p-4 rounded-lg bg-[#181b25] text-xs text-[#cbc3d7] italic text-center">
                    No skills under {activeFilter}
                  </div>
                ) : (
                  filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      onClick={() => setActiveSkillModal(skill)}
                      className="p-3 rounded-xl bg-[#181b25] hover:bg-[#272a34] border border-transparent hover:border-white/10 transition-all cursor-pointer group flex flex-col gap-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-['Space_Grotesk'] text-sm font-semibold text-[#e0e2ef] group-hover:text-[#7bd0ff] transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className={`font-['Space_Grotesk'] text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${getTagStyle(
                            skill.status
                          )}`}
                        >
                          {skill.status}
                        </span>
                      </div>

                      {/* Mini proficiency bar */}
                      <div className="w-full bg-[#0b0e17] h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            skill.status === 'Active'
                              ? 'bg-[#7bd0ff]'
                              : skill.status === 'Focus'
                              ? 'bg-[#2fd9f4]'
                              : 'bg-[#d0bcff]'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Skill Detail Dialog */}
      {activeSkillModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080b14]/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveSkillModal(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-[#181b25] border border-[#7bd0ff]/30 p-6 shadow-2xl flex flex-col gap-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#2fd9f4] animate-pulse"></span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#e0e2ef]">
                  {activeSkillModal.name}
                </h3>
              </div>
              <span
                className={`font-['Space_Grotesk'] text-xs font-bold px-2.5 py-1 rounded border ${getTagStyle(
                  activeSkillModal.status
                )}`}
              >
                {activeSkillModal.status}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b0e17] border border-white/5 flex flex-col gap-1.5">
              <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase text-[#958ea0]">
                Practical Scope
              </span>
              <p className="font-['Inter'] text-sm text-[#e0e2ef]">
                {activeSkillModal.description}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs font-['Space_Grotesk'] text-[#cbc3d7]">
                <span>Self-Assessment &amp; Comfort Level</span>
                <span className="font-bold text-[#7bd0ff]">{activeSkillModal.level}%</span>
              </div>
              <div className="w-full bg-[#0b0e17] h-2.5 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff]"
                  style={{ width: `${activeSkillModal.level}%` }}
                ></div>
              </div>
            </div>

            <button
              onClick={() => setActiveSkillModal(null)}
              className="mt-2 py-2 rounded-lg bg-[#272a34] text-[#e0e2ef] hover:bg-[#32343f] font-['Space_Grotesk'] text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
