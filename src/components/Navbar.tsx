import React from 'react';
import { Sparkles, Music2 } from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
  onOpenPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial, onOpenPortal }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#07080C]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="/" 
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-violet-600 to-pink-500 p-1.5 shadow-[0_0_16px_rgba(139,92,246,0.4)]">
            <Music2 className="h-4 w-4 text-white" />
          </span>
          <span className="tracking-tight">Indie Classroom</span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-400 md:flex">
          <a 
            href="#instruments" 
            className="transition-colors hover:text-white"
          >
            Instruments
          </a>
          <a 
            href="#studio-hud" 
            className="transition-colors hover:text-white"
          >
            Live Classroom
          </a>
          <a 
            href="#method" 
            className="transition-colors hover:text-white"
          >
            The Method
          </a>
          <a 
            href="#mentors" 
            className="transition-colors hover:text-white"
          >
            Faculty
          </a>
          <a 
            href="#pricing" 
            className="transition-colors hover:text-white"
          >
            Tuition
          </a>
          <a 
            href="#faqs" 
            className="transition-colors hover:text-white"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPortal}
            className="hidden text-xs font-medium text-neutral-300 transition-colors hover:text-white sm:block px-3 py-2"
          >
            Student Portal
          </button>
          
          <button
            onClick={onOpenTrial}
            className="glow-button inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-lg transition-transform active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="whitespace-nowrap">Book a Free Trial</span>
          </button>
        </div>
      </div>
    </header>
  );
};
