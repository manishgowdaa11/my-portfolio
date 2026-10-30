import React, { useState } from 'react';
import { PERSONAL_INFO, ACADEMIC_SUBJECTS } from '../data/portfolioData';

export const Education: React.FC = () => {
  const [showCoursework, setShowCoursework] = useState(false);

  return (
    <section id="education" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 text-left">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-8">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#272a34] text-[#7bd0ff] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider border border-[#7bd0ff]/20">
          <span className="material-symbols-outlined text-sm">school</span>
          <span>Education</span>
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e0e2ef] tracking-tight">
          My Academic Journey
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-[#cbc3d7] max-w-2xl">
          Academic grounding focused on computer science rigor and machine learning engineering principles.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 md:pl-10 space-y-8">
        {/* Glow Line Accent */}
        <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#d0bcff] via-[#7bd0ff] to-transparent shadow-[0_0_8px_#2fd9f4]"></div>

        {/* Node 1 */}
        <div className="relative flex items-start gap-4">
          {/* Glowing Dot / Icon */}
          <div className="absolute -left-6 md:-left-10 w-6 h-6 rounded-full bg-[#0b0e17] border border-[#2fd9f4] flex items-center justify-center shadow-[0_0_12px_#2fd9f4]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2fd9f4]"></span>
          </div>

          {/* Academic Card */}
          <div className="w-full p-6 md:p-8 rounded-2xl bg-[#1c1f29]/90 border border-white/5 backdrop-blur-md shadow-xl flex flex-col gap-5 text-left hover:border-[#7bd0ff]/30 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#272a34] flex items-center justify-center text-[#d0bcff] shadow-inner">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#e0e2ef]">
                    {PERSONAL_INFO.degree}
                  </h3>
                  <p className="font-['Inter'] text-sm sm:text-base text-[#7bd0ff]">
                    {PERSONAL_INFO.major}
                  </p>
                </div>
              </div>
              <span className="self-start sm:self-auto font-['Space_Grotesk'] text-xs font-semibold text-[#2fd9f4] bg-[#0b0e17] px-3.5 py-1.5 rounded-full border border-[#2fd9f4]/30 shadow-sm">
                {PERSONAL_INFO.semester}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#181b25] border border-white/5 flex flex-col gap-1">
              <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-wider text-[#958ea0]">
                Specialization Track
              </span>
              <p className="font-['Space_Grotesk'] text-lg font-bold text-white">
                {PERSONAL_INFO.specialization}
              </p>
            </div>

            {/* Academic Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                'Algorithms & Programming',
                'AI Foundations',
                'Web Engineering',
                'Discrete Mathematical Structures'
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-[#272a34] border border-white/5 text-[#e0e2ef] font-['Space_Grotesk'] text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Coursework Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setShowCoursework(!showCoursework)}
                className="inline-flex items-center gap-2 text-xs font-['Space_Grotesk'] font-semibold text-[#7bd0ff] hover:text-white transition-colors"
              >
                <span>{showCoursework ? 'Hide Coursework Syllabus' : 'View Current Semester Coursework Breakdown'}</span>
                <span className="material-symbols-outlined text-base">
                  {showCoursework ? 'expand_less' : 'expand_more'}
                </span>
              </button>

              {showCoursework && (
                <div className="mt-4 overflow-x-auto rounded-xl border border-white/5 bg-[#10131c] animate-in fade-in duration-200">
                  <table className="w-full text-left text-xs font-['Inter']">
                    <thead className="bg-[#181b25] text-[#958ea0] font-['Space_Grotesk'] uppercase border-b border-white/5">
                      <tr>
                        <th className="py-2.5 px-4">Course Code</th>
                        <th className="py-2.5 px-4">Course Title</th>
                        <th className="py-2.5 px-4">Term</th>
                        <th className="py-2.5 px-4">Credits</th>
                        <th className="py-2.5 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-[#cbc3d7]">
                      {ACADEMIC_SUBJECTS.map((subj) => (
                        <tr key={subj.code} className="hover:bg-[#181b25]/60 transition-colors">
                          <td className="py-2.5 px-4 font-mono text-[#7bd0ff]">{subj.code}</td>
                          <td className="py-2.5 px-4 font-medium text-white">{subj.name}</td>
                          <td className="py-2.5 px-4">{subj.semester}</td>
                          <td className="py-2.5 px-4 font-mono">{subj.credits}</td>
                          <td className="py-2.5 px-4">
                            <span className="px-2 py-0.5 rounded bg-[#272a34] text-[#2fd9f4] text-[10px] font-['Space_Grotesk']">
                              {subj.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
