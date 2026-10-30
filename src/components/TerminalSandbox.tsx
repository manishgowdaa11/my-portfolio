import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TerminalLine {
  type: 'input' | 'output' | 'system' | 'accent' | 'cyan';
  text: string;
}

export const TerminalSandbox: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'system', text: 'Initializing ManishOS [v2.4.0-AIML-Specialist]' },
    { type: 'system', text: 'Connected to local runtime: node_btech_3rd_sem' },
    { type: 'accent', text: 'Type "help" to view available developer commands, or click the quick pills below.' }
  ]);
  const [command, setCommand] = useState('');
  const [isRunningInference, setIsRunningInference] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'input' as const, text: `$ ${cmd}` }];

    switch (trimmed) {
      case 'help':
        newHistory.push(
          { type: 'accent', text: 'Available commands:' },
          { type: 'output', text: '  about      - Display background, specialization & bio' },
          { type: 'output', text: '  skills     - Inspect active tech stack & competencies' },
          { type: 'output', text: '  projects   - Output featured engineering deliverables' },
          { type: 'output', text: '  education  - Academic credentials & current semester' },
          { type: 'cyan',   text: '  ai-infer   - Run simulated deep learning inference test' },
          { type: 'output', text: '  contact    - Channels for student collaborations & inquiries' },
          { type: 'output', text: '  quote      - Display scholar engineering motto' },
          { type: 'output', text: '  clear      - Clear terminal screen' }
        );
        break;

      case 'about':
        newHistory.push(
          { type: 'accent', text: `Name: ${PERSONAL_INFO.name}` },
          { type: 'output', text: `Role: ${PERSONAL_INFO.role}` },
          { type: 'output', text: `Context: ${PERSONAL_INFO.subRole}` },
          { type: 'output', text: `Focus: ${PERSONAL_INFO.bio}` }
        );
        break;

      case 'skills':
        newHistory.push(
          { type: 'cyan', text: '--- ACTIVE STACK ---' },
          { type: 'output', text: '• Programming : Python, C Language, Java (Learning)' },
          { type: 'output', text: '• Web Core    : HTML5, CSS3 (Tailwind), JavaScript ES6+' },
          { type: 'output', text: '• Tools       : Git, GitHub, React.js, SQL / DBMS' },
          { type: 'output', text: '• Research    : Artificial Intelligence, Machine Learning, DSA' }
        );
        break;

      case 'projects':
        newHistory.push(
          { type: 'cyan', text: '1. Personal Portfolio Website' },
          { type: 'output', text: '   Glassmorphic responsive interface with high-performance CSS and modals.' },
          { type: 'cyan', text: '2. Restaurant Management System' },
          { type: 'output', text: '   Web-based POS order ledger, dynamic catalog calculation, and table manager.' }
        );
        break;

      case 'education':
        newHistory.push(
          { type: 'accent', text: `${PERSONAL_INFO.degree} in ${PERSONAL_INFO.major}` },
          { type: 'output', text: `Specialization : ${PERSONAL_INFO.specialization}` },
          { type: 'output', text: `Status         : ${PERSONAL_INFO.semester}` }
        );
        break;

      case 'ai-infer':
        setIsRunningInference(true);
        newHistory.push(
          { type: 'system', text: '[INFO] Initializing weights: ResNet-AIML-v1...' },
          { type: 'system', text: '[EPOCH 01/03] Loss: 0.4281 | Accuracy: 84.2%' },
          { type: 'system', text: '[EPOCH 02/03] Loss: 0.1894 | Accuracy: 93.6%' },
          { type: 'cyan',   text: '[EPOCH 03/03] Loss: 0.0412 | Accuracy: 98.9% [CONVERGED]' },
          { type: 'accent', text: '>> Inference Result: PASS. Algorithmic pipeline verified.' }
        );
        setTimeout(() => setIsRunningInference(false), 800);
        break;

      case 'contact':
        newHistory.push(
          { type: 'output', text: `Email    : ${PERSONAL_INFO.email}` },
          { type: 'output', text: `GitHub   : ${PERSONAL_INFO.github}` },
          { type: 'output', text: `LinkedIn : ${PERSONAL_INFO.linkedin}` }
        );
        break;

      case 'quote':
        newHistory.push({
          type: 'accent',
          text: `“${PERSONAL_INFO.tagline}”`
        });
        break;

      case 'clear':
        setHistory([]);
        setCommand('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not recognized: "${cmd}". Type "help" to see available options.`
        });
    }

    setHistory(newHistory);
    setCommand('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(command);
  };

  return (
    <section id="terminal" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 text-left">
      <div className="flex flex-col gap-2 mb-6">
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#272a34] text-[#2fd9f4] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider border border-[#2fd9f4]/20">
          <span className="material-symbols-outlined text-sm">terminal</span>
          <span>Interactive Sandbox</span>
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e0e2ef] tracking-tight">
          Developer CLI Console
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-[#cbc3d7] max-w-2xl">
          Interact directly with my background and runtime system using standard commands.
        </p>
      </div>

      {/* Terminal Window Box */}
      <div className="rounded-2xl bg-[#080B14] border border-[#494454]/60 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.12)] overflow-hidden">
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-[#0D1322] border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            <span className="ml-2 font-mono text-xs text-[#958ea0]">manish@neural-box:~/workspace</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-['Space_Grotesk'] text-[#7bd0ff]">
            <span className="w-2 h-2 rounded-full bg-[#2fd9f4] animate-pulse"></span>
            <span>CLI Live</span>
          </div>
        </div>

        {/* Quick Command Action Chips */}
        <div className="px-4 py-2 bg-[#0D1322]/60 border-b border-white/5 flex flex-wrap items-center gap-2 text-xs">
          <span className="font-['Space_Grotesk'] text-[#958ea0] text-[11px] uppercase mr-1">
            Quick Runs:
          </span>
          {['help', 'about', 'skills', 'projects', 'ai-infer', 'education', 'quote', 'clear'].map((c) => (
            <button
              key={c}
              onClick={() => executeCommand(c)}
              className="px-2.5 py-1 rounded bg-[#181b25] hover:bg-[#272a34] text-[#7bd0ff] font-mono text-[11px] border border-white/5 transition-colors"
            >
              {c}
            </button>
          ))}
        </div>

        {/* Console Body */}
        <div className="p-5 font-mono text-xs sm:text-sm h-72 sm:h-80 overflow-y-auto custom-scrollbar flex flex-col gap-1.5 text-left select-text">
          {history.map((line, idx) => {
            let color = 'text-[#cbc3d7]';
            if (line.type === 'input') color = 'text-[#7bd0ff] font-semibold';
            if (line.type === 'accent') color = 'text-[#d0bcff] font-semibold';
            if (line.type === 'cyan') color = 'text-[#2fd9f4] font-semibold';
            if (line.type === 'system') color = 'text-[#958ea0]';

            return (
              <div key={idx} className={`${color} leading-relaxed whitespace-pre-wrap break-words`}>
                {line.text}
              </div>
            );
          })}
          {isRunningInference && (
            <div className="text-[#2fd9f4] animate-pulse">
              Computing tensor matrices...
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="px-4 py-3 bg-[#0D1322] border-t border-white/5 flex items-center gap-2"
        >
          <span className="text-[#7bd0ff] font-mono font-bold">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Type 'help', 'about', 'skills', 'projects', 'ai-infer'..."
            className="w-full bg-transparent text-[#e0e2ef] font-mono text-xs sm:text-sm focus:outline-none placeholder:text-[#494454]"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-[#181b25] text-[#7bd0ff] hover:bg-[#272a34] font-['Space_Grotesk'] text-xs font-semibold shrink-0"
          >
            Execute
          </button>
        </form>
      </div>
    </section>
  );
};
