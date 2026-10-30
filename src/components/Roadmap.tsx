import React, { useState } from 'react';
import { ROADMAP_MILESTONES } from '../data/portfolioData';
import { RoadmapMilestone } from '../types';

export const Roadmap: React.FC = () => {
  const [expandedMilestone, setExpandedMilestone] = useState<string | null>(null);

  const getStatusBadge = (status: RoadmapMilestone['status']) => {
    switch (status) {
      case 'Practicing':
        return 'text-[#7bd0ff] bg-[#0b0e17] border-[#7bd0ff]/20';
      case 'Coursework':
        return 'text-[#2fd9f4] bg-[#0b0e17] border-[#2fd9f4]/20';
      case 'Exploring':
        return 'text-[#d0bcff] bg-[#0b0e17] border-[#d0bcff]/20';
      case 'Daily Habit':
        return 'text-[#7bd0ff] bg-[#0b0e17] border-[#7bd0ff]/30 shadow-[0_0_8px_rgba(123,208,255,0.2)]';
      default:
        return 'text-[#cbc3d7] bg-[#0b0e17] border-white/10';
    }
  };

  const toggleMilestone = (num: string) => {
    setExpandedMilestone(expandedMilestone === num ? null : num);
  };

  return (
    <section id="roadmap" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 text-left">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-8 text-left">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#272a34] text-[#2fd9f4] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider border border-[#2fd9f4]/20">
          <span className="material-symbols-outlined text-sm">explore</span>
          <span>Roadmap</span>
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e0e2ef] tracking-tight">
          Currently Learning &amp; Exploring
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-[#cbc3d7] max-w-2xl leading-relaxed">
          My goal is to build a strong foundation in computer science while exploring emerging technologies through practical projects and continuous learning.
        </p>
      </div>

      {/* 7 Structured Milestones Bento/Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {ROADMAP_MILESTONES.map((item) => {
          const isExpanded = expandedMilestone === item.number;
          const isWide = item.number === '07';

          return (
            <div
              key={item.number}
              onClick={() => toggleMilestone(item.number)}
              className={`p-5 rounded-2xl bg-[#1c1f29]/85 border border-white/5 hover:border-[#7bd0ff]/30 backdrop-blur-md shadow-md flex flex-col justify-between gap-4 hover:bg-[#272a34] transition-all cursor-pointer group ${
                isWide ? 'sm:col-span-2 xl:col-span-2' : ''
              } ${isExpanded ? 'border-[#7bd0ff]/50 bg-[#272a34]' : ''}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-['Space_Grotesk'] text-sm font-bold text-[#d0bcff] group-hover:text-white transition-colors">
                  {item.number}
                </span>
                <span
                  className={`font-['Space_Grotesk'] text-[11px] font-semibold uppercase px-2.5 py-0.5 rounded border ${getStatusBadge(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="font-['Space_Grotesk'] text-lg font-semibold text-[#e0e2ef] group-hover:text-[#7bd0ff] transition-colors">
                  {item.title}
                </h4>
                <p className="font-['Inter'] text-xs sm:text-sm text-[#cbc3d7] leading-relaxed">
                  {item.description}
                </p>

                {isExpanded && (
                  <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-1.5 animate-in fade-in duration-200">
                    <span className="font-['Space_Grotesk'] text-[10px] uppercase font-bold text-[#958ea0]">
                      Key Study Modules:
                    </span>
                    <ul className="flex flex-col gap-1 text-xs text-[#7bd0ff] font-['Space_Grotesk']">
                      {item.detailedTopics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#958ea0] group-hover:text-[#cbc3d7]">
                <span>{isExpanded ? 'Click to collapse' : 'Click to inspect topics'}</span>
                <span className="material-symbols-outlined text-sm">
                  {isExpanded ? 'expand_less' : 'expand_more'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
