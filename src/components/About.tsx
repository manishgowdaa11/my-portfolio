import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FeatureCardInfo {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  badge: string;
  badgeColor: string;
  summary: string;
  deepDive: {
    philosophy: string;
    focusAreas: string[];
    currentMilestone: string;
  };
}

export const About: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<FeatureCardInfo | null>(null);

  const featureCards: FeatureCardInfo[] = [
    {
      id: 'curious-learner',
      title: 'Curious Learner',
      icon: 'lightbulb',
      iconColor: 'text-[#7bd0ff]',
      badge: '3rd Semester CS',
      badgeColor: 'text-[#7bd0ff]',
      summary: 'Always exploring new technologies and expanding my knowledge base across algorithmic models and scalable system architectures.',
      deepDive: {
        philosophy: 'Continuous learning through first-principles thinking. I dissect complex systems down to foundational data structures and mathematical concepts.',
        focusAreas: ['Object-Oriented Programming Patterns', 'Discrete Mathematics & Logic', 'Graph Theory Foundations', 'Modern Web Standards'],
        currentMilestone: 'Actively mastering 3rd-semester algorithms while auditing deep learning fundamentals.'
      }
    },
    {
      id: 'creative-builder',
      title: 'Creative Builder',
      icon: 'code',
      iconColor: 'text-[#2fd9f4]',
      badge: 'Builder Mindset',
      badgeColor: 'text-[#2fd9f4]',
      summary: 'Turning raw ideas into functional applications through structured programming, neat interfaces, and dependable software logic.',
      deepDive: {
        philosophy: 'Code is a tool for impact. Beautiful architecture is worthless if it doesn’t solve a real problem for real users.',
        focusAreas: ['Clean DOM & UI State Binding', 'Glassmorphism & Cyber Aesthetic Systems', 'Component Lifecycle Optimization', 'Responsive Layout Precision'],
        currentMilestone: 'Prototyping responsive web apps and interactive tooling for everyday student and business scenarios.'
      }
    },
    {
      id: 'problem-solver',
      title: 'Problem Solver',
      icon: 'target',
      iconColor: 'text-[#d0bcff]',
      badge: 'Fast Learner',
      badgeColor: 'text-[#d0bcff]',
      summary: 'Developing rigorous logical thinking and algorithmic problem-solving abilities to break complex challenges down to core principles.',
      deepDive: {
        philosophy: 'Every bug is a lesson in edge cases. Methodical debugging, tracing variable lifetimes, and profiling time complexity.',
        focusAreas: ['Time & Space Complexity Profiling', 'Algorithmic Optimization', 'Systematic Debugging Trajectories', 'Mathematical Induction'],
        currentMilestone: 'Daily practice solving algorithmic problem sets on Arrays, Hash Maps, Trees, and Recursion.'
      }
    }
  ];

  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 text-left">
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-8">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#272a34] text-[#d0bcff] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider border border-[#d0bcff]/20">
          <span className="material-symbols-outlined text-sm">person_outline</span>
          <span>About Me</span>
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e0e2ef] tracking-tight">
          More Than Just Code
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg text-[#cbc3d7] max-w-3xl leading-relaxed">
          {PERSONAL_INFO.aboutExtended}
        </p>
      </div>

      {/* 3 Modern Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureCards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className="p-6 rounded-2xl bg-[#1c1f29]/85 border border-white/5 hover:border-[#7bd0ff]/30 backdrop-blur-md shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#32343f] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#272a34] transition-all">
                <span className={`material-symbols-outlined text-2xl ${card.iconColor}`}>
                  {card.icon}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-[#e0e2ef] group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="font-['Inter'] text-sm sm:text-base text-[#cbc3d7] leading-relaxed">
                  {card.summary}
                </p>
              </div>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-white/5 mt-4">
              <span className={`font-['Space_Grotesk'] text-xs font-semibold ${card.badgeColor} bg-[#0b0e17] px-2.5 py-1 rounded border border-white/5`}>
                {card.badge}
              </span>
              <span className="inline-flex items-center gap-1 font-['Space_Grotesk'] text-xs text-[#cbc3d7] group-hover:text-[#7bd0ff] transition-colors">
                <span>Explore</span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Scholar Insight Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080b14]/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-[#181b25] border border-[#7bd0ff]/30 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(123,208,255,0.15)] flex flex-col gap-5 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#272a34] flex items-center justify-center">
                  <span className={`material-symbols-outlined text-2xl ${selectedCard.iconColor}`}>
                    {selectedCard.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#e0e2ef]">
                    {selectedCard.title}
                  </h3>
                  <span className="font-['Space_Grotesk'] text-xs text-[#7bd0ff]">
                    Scholar Philosophy &amp; Method
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCard(null)}
                className="p-1.5 rounded-lg text-[#cbc3d7] hover:text-white hover:bg-[#272a34] transition-colors"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-[#0b0e17] border border-white/5 flex flex-col gap-1.5">
              <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-wider text-[#958ea0]">
                Core Mindset
              </span>
              <p className="font-['Inter'] text-sm text-[#e0e2ef] leading-relaxed">
                {selectedCard.deepDive.philosophy}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-['Space_Grotesk'] text-xs font-semibold text-[#cbc3d7] uppercase tracking-wider">
                Key Technical Disciplines
              </span>
              <div className="grid grid-cols-2 gap-2">
                {selectedCard.deepDive.focusAreas.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#1c1f29] border border-white/5 flex items-center gap-2 text-xs font-['Space_Grotesk'] text-[#e0e2ef]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#272a34]/70 border border-[#7bd0ff]/20 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#7bd0ff] text-xl shrink-0">
                flag
              </span>
              <div className="flex flex-col">
                <span className="font-['Space_Grotesk'] text-[11px] font-bold uppercase text-[#7bd0ff]">
                  Current Academic Milestone
                </span>
                <p className="font-['Inter'] text-xs text-[#cbc3d7] mt-0.5">
                  {selectedCard.deepDive.currentMilestone}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedCard(null)}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-sm font-bold shadow-md hover:opacity-95 transition-opacity"
            >
              Done Reading
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
