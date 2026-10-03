import React from 'react';
import { Radio, Video, Music, Layers, Sparkles, Sliders } from 'lucide-react';

export const AcademyMethod: React.FC = () => {
  return (
    <section id="method" className="relative py-20 lg:py-28">
      {/* Subtle background ambient glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>Pedagogical Architecture</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Engineered for musicians who care about tone.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            Standard video conferencing apps crush your musical dynamics with aggressive voice filters and high latency. Indie Classroom was built from the ground up for acoustic fidelity and creative nuance.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Studio Direct Audio (Col Span 2) */}
          <div className="group relative md:col-span-2 rounded-2xl border border-white/10 bg-[#0E121E]/70 p-8 backdrop-blur-md transition-all hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  <Radio className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-neutral-500">01 / ACOUSTIC ENGINE</span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                  Studio-Direct 48kHz / 24-Bit Stereo Streaming
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Zoom and Teams use aggressive noise suppression algorithms that treat guitars and violins like background air conditioning. Indie Classroom connects your audio interface directly to your mentor with uncompressed, low-latency stereo feeds.
                </p>
              </div>
            </div>

            {/* Visual Feature Callout */}
            <div className="mt-8 rounded-xl border border-white/10 bg-black/40 p-4">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-white">Opus High-Bitrate Stereo</span>
                </div>
                <div className="text-cyan-400">Buffer Size: 64 samples</div>
                <div className="text-violet-400">Zero Speech Ducking</div>
              </div>
            </div>
          </div>

          {/* Card 2: Dual-Angle 4K Camera Feeds */}
          <div className="group rounded-2xl border border-white/10 bg-[#0E121E]/70 p-8 backdrop-blur-md transition-all hover:border-pink-500/40 hover:shadow-[0_0_35px_rgba(236,72,153,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/15 text-pink-400 border border-pink-500/30">
                  <Video className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-neutral-500">02 / VISION</span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-pink-200 transition-colors">
                  Multi-Angle 4K Hands & Face Feeds
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  See both your mentor's face and their exact fingerings on the fretboard, keys, or violin fingerboard from a pristine overhead angle.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-black/40 p-3.5 text-xs text-neutral-300 flex items-center gap-3">
              <div className="h-7 w-7 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-300 shrink-0 font-mono text-[11px] font-bold">
                4K
              </div>
              <span className="text-[12px]">Simultaneous 60fps overhead macro lens sync</span>
            </div>
          </div>

          {/* Card 3: Song-First Creative Repertoire */}
          <div className="group rounded-2xl border border-white/10 bg-[#0E121E]/70 p-8 backdrop-blur-md transition-all hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400 border border-violet-500/30">
                  <Music className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-neutral-500">03 / CURRICULUM</span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-violet-200 transition-colors">
                  Song-First Creative Repertoire
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Learn through music you actually want to perform. From indie anthems and cinematic ambient soundscapes to modern neo-soul grooves.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-1.5 text-xs">
              <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-300">Khruangbin</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-300">Radiohead</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-300">Bill Evans</span>
              <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-300">Ólafur Arnalds</span>
            </div>
          </div>

          {/* Card 4: Multi-Track Practice Stems (Col Span 2) */}
          <div className="group md:col-span-2 rounded-2xl border border-white/10 bg-[#0E121E]/70 p-8 backdrop-blur-md transition-all hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400 border border-violet-500/30">
                  <Layers className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-neutral-500">04 / PRACTICE ECOSYSTEM</span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-violet-200 transition-colors">
                  Multi-Track Stems & Practice Cloud After Every Lesson
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                  Never forget a chord voicing or lick. Every lesson is archived with high-definition video bookmarks, custom isolated rhythm backing tracks, and notation export directly into your student portal.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                <span className="block font-mono text-sm font-bold text-white">48kHz WAV</span>
                <span className="text-[11px] text-neutral-400">Backing Stems</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                <span className="block font-mono text-sm font-bold text-violet-400">Variable BPM</span>
                <span className="text-[11px] text-neutral-400">Practice Player</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                <span className="block font-mono text-sm font-bold text-cyan-400">HD Voicings</span>
                <span className="text-[11px] text-neutral-400">Chord Diagrams</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                <span className="block font-mono text-sm font-bold text-pink-400">1-on-1 Chat</span>
                <span className="text-[11px] text-neutral-400">Weekly Check-ins</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
