import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);
  const [copiedChannel, setCopiedChannel] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedChannel(label);
    setTimeout(() => setCopiedChannel(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmittedMessage(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 mb-12">
      <div className="relative rounded-3xl p-6 sm:p-8 md:p-12 bg-[#1c1f29]/90 border border-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden">
        {/* Glow Accents */}
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#d0bcff]/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#7bd0ff]/10 blur-[100px] pointer-events-none"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 z-10 items-start">
          {/* Left Side: Overview & Links */}
          <div className="lg:col-span-5 flex flex-col gap-5 text-left">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1 rounded-full bg-[#272a34] text-[#2fd9f4] font-['Space_Grotesk'] text-xs font-semibold uppercase tracking-wider border border-[#2fd9f4]/20">
              <span className="material-symbols-outlined text-sm">alternate_email</span>
              <span>Get in Touch</span>
            </div>

            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#e0e2ef] tracking-tight">
              Have an Idea? Let's Connect!
            </h2>

            <p className="font-['Inter'] text-sm sm:text-base text-[#cbc3d7] leading-relaxed">
              I'm always interested in connecting with developers, students, innovators, and technology enthusiasts. Let's learn, collaborate, and build something meaningful.
            </p>

            {/* Direct Channels */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#181b25] hover:bg-[#272a34] border border-white/5 transition-all group"
                href={PERSONAL_INFO.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#272a34] group-hover:bg-[#181b25] flex items-center justify-center text-[#7bd0ff] transition-colors">
                    <span className="material-symbols-outlined text-xl">code</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase text-[#958ea0]">
                      GitHub
                    </span>
                    <span className="font-['Space_Grotesk'] text-sm font-semibold text-[#e0e2ef]">
                      {PERSONAL_INFO.githubHandle}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-sm text-[#cbc3d7] group-hover:text-[#7bd0ff] group-hover:translate-x-1 transition-all">
                  arrow_outward
                </span>
              </a>

              <a
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#181b25] hover:bg-[#272a34] border border-white/5 transition-all group"
                href={PERSONAL_INFO.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#272a34] group-hover:bg-[#181b25] flex items-center justify-center text-[#d0bcff] transition-colors">
                    <span className="material-symbols-outlined text-xl">share</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase text-[#958ea0]">
                      LinkedIn
                    </span>
                    <span className="font-['Space_Grotesk'] text-sm font-semibold text-[#e0e2ef]">
                      {PERSONAL_INFO.linkedinHandle}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-sm text-[#cbc3d7] group-hover:text-[#d0bcff] group-hover:translate-x-1 transition-all">
                  arrow_outward
                </span>
              </a>

              <div
                onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#181b25] hover:bg-[#272a34] border border-white/5 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#272a34] group-hover:bg-[#181b25] flex items-center justify-center text-[#2fd9f4] transition-colors">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-['Space_Grotesk'] text-[11px] font-semibold uppercase text-[#958ea0]">
                      Direct Email
                    </span>
                    <span className="font-['Space_Grotesk'] text-sm font-semibold text-[#e0e2ef]">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#2fd9f4] font-['Space_Grotesk'] font-medium">
                  {copiedChannel === 'Email' ? 'Copied!' : 'Click to copy'}
                </span>
              </div>
            </div>

            {/* Availability Tag */}
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#181b25] border border-white/5 self-start mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2fd9f4] animate-pulse"></span>
              <span className="font-['Space_Grotesk'] text-xs text-[#7bd0ff] font-medium">
                Active learner • Open to student collaborations
              </span>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#181b25]/95 border border-white/5 shadow-xl flex flex-col gap-4 text-left">
            <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-1">
              Send a Message
            </h3>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Space_Grotesk'] text-xs font-semibold text-[#e0e2ef]" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Turing"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0b0e17] border border-[#494454]/40 text-[#e0e2ef] placeholder:text-[#958ea0] font-['Inter'] text-sm focus:outline-none focus:border-[#7bd0ff] transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-['Space_Grotesk'] text-xs font-semibold text-[#e0e2ef]" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@domain.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0b0e17] border border-[#494454]/40 text-[#e0e2ef] placeholder:text-[#958ea0] font-['Inter'] text-sm focus:outline-none focus:border-[#7bd0ff] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Space_Grotesk'] text-xs font-semibold text-[#e0e2ef]" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Project Collaboration / Student Tech Meetup"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0b0e17] border border-[#494454]/40 text-[#e0e2ef] placeholder:text-[#958ea0] font-['Inter'] text-sm focus:outline-none focus:border-[#7bd0ff] transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Space_Grotesk'] text-xs font-semibold text-[#e0e2ef]" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Manish, I saw your portfolio and would love to talk about..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0b0e17] border border-[#494454]/40 text-[#e0e2ef] placeholder:text-[#958ea0] font-['Inter'] text-sm focus:outline-none focus:border-[#7bd0ff] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="self-start inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#d0bcff] to-[#7bd0ff] text-[#3c0091] font-['Space_Grotesk'] text-sm font-bold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(208,188,255,0.4)] disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </form>

            {/* Toast confirmation element */}
            {submittedMessage && (
              <div className="p-3.5 rounded-lg bg-[#0b0e17] border border-[#7bd0ff]/40 text-[#7bd0ff] flex items-center gap-2 animate-in fade-in">
                <span className="material-symbols-outlined text-lg">check_circle</span>
                <span className="font-['Space_Grotesk'] text-xs font-semibold">
                  Thank you! Your message simulation has been successfully transmitted to Manish.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
