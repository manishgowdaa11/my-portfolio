import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { TerminalSandbox } from './components/TerminalSandbox';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Roadmap } from './components/Roadmap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { RestaurantDemoModal } from './components/RestaurantDemoModal';
import { ResumeModal } from './components/ResumeModal';
import { PROJECTS_DATA } from './data/portfolioData';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isRestaurantDemoOpen, setIsRestaurantDemoOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProjectModal = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleLaunchDemo = (projectId: string) => {
    if (projectId === 'project-02') {
      setIsRestaurantDemoOpen(true);
    }
  };

  const currentProject = selectedProjectId ? PROJECTS_DATA[selectedProjectId] : null;

  return (
    <div className="relative min-h-screen bg-[#10131c] text-[#e0e2ef] selection:bg-[#a078ff] selection:text-[#340080]">
      {/* Cybernetic Ambient Glow & Dot-Grid Matrix Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-[#d0bcff]/10 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#7bd0ff]/10 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-[#2fd9f4]/10 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Main App Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Header */}
        <Header
          onOpenResume={() => setIsResumeModalOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* Main Sections */}
        <main className="flex-1 w-full pt-20">
          <Hero
            onOpenResume={() => setIsResumeModalOpen(true)}
            onExploreProjects={() => handleNavigate('projects')}
          />
          <About />
          <Skills />
          <TerminalSandbox />
          <Projects
            onOpenProjectModal={handleOpenProjectModal}
            onLaunchDemo={handleLaunchDemo}
          />
          <Education />
          <Roadmap />
          <Contact />
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={currentProject}
        onClose={() => setSelectedProjectId(null)}
        onSelectProject={(id) => setSelectedProjectId(id)}
        onLaunchDemo={handleLaunchDemo}
      />

      {/* Interactive Restaurant POS Simulator Demo */}
      <RestaurantDemoModal
        isOpen={isRestaurantDemoOpen}
        onClose={() => setIsRestaurantDemoOpen(false)}
      />

      {/* Resume Viewer & Print Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
