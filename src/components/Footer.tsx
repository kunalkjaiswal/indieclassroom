import React from 'react';
import { Music2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050609] py-14 text-xs text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-violet-600 to-pink-500 text-white">
                <Music2 className="h-4 w-4" />
              </span>
              <span className="font-display text-base font-bold text-white tracking-tight">
                Indie Classroom
              </span>
            </div>
            
            <p className="max-w-sm text-xs text-neutral-400 leading-relaxed">
              The modern online music academy connecting dedicated musicians with touring artists and conservatory scholars for high-fidelity 1-on-1 mentorship.
            </p>

            <div className="flex items-center gap-3 text-[11px] text-neutral-500">
              <span>Lossless 48kHz Audio</span>
              <span>·</span>
              <span>Dual-Angle 4K</span>
              <span>·</span>
              <span>Global Studio</span>
            </div>
          </div>

          {/* Links Column 1: Disciplines */}
          <div className="space-y-3">
            <h5 className="font-semibold text-white uppercase text-[11px] tracking-wider font-mono">
              Disciplines
            </h5>
            <ul className="space-y-2">
              <li><a href="#instruments" className="hover:text-white transition-colors">Contemporary Guitar</a></li>
              <li><a href="#instruments" className="hover:text-white transition-colors">Grand Piano & Keys</a></li>
              <li><a href="#instruments" className="hover:text-white transition-colors">Artisanal Violin</a></li>
              <li><a href="#instruments" className="hover:text-white transition-colors">Bass & Audio Production</a></li>
            </ul>
          </div>

          {/* Links Column 2: Academy */}
          <div className="space-y-3">
            <h5 className="font-semibold text-white uppercase text-[11px] tracking-wider font-mono">
              Academy
            </h5>
            <ul className="space-y-2">
              <li><a href="#method" className="hover:text-white transition-colors">The Classroom Method</a></li>
              <li><a href="#mentors" className="hover:text-white transition-colors">Touring Faculty</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Tuition & Pricing</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors">Equipment Guide</a></li>
            </ul>
          </div>

          {/* Links Column 3: Campuses */}
          <div className="space-y-3">
            <h5 className="font-semibold text-white uppercase text-[11px] tracking-wider font-mono">
              Studios & Hubs
            </h5>
            <ul className="space-y-2 text-neutral-400">
              <li>Brooklyn, New York</li>
              <li>London, Shoreditch</li>
              <li>Berlin, Kreuzberg</li>
              <li>Online Worldwide (24/7)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} Indie Classroom Inc. All rights reserved. indieclassroom.com</p>
          <div className="flex items-center gap-6">
            <a href="#pricing" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#pricing" className="hover:text-neutral-300 transition-colors">Terms of Mentorship</a>
            <a href="#pricing" className="hover:text-neutral-300 transition-colors">Student Honor Code</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
