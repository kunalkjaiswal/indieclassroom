import React from 'react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

export const StudentOutcomes: React.FC = () => {
  const stories = [
    {
      student: 'Liam Vance-Keller',
      role: 'Songwriter & Producer, Seattle',
      instrument: 'Contemporary Guitar',
      before: 'Stuck in standard pentatonic boxes for 4 years without melodic phrasing.',
      outcome: 'Wrote and tracked guitar for my band’s debut EP within 5 months of drop-2 harmonic coaching.',
      metric: 'Completed 6-track studio master'
    },
    {
      student: 'Maya Chen',
      role: 'Film Score Arranger, Toronto',
      instrument: 'Grand Piano & Keys',
      before: 'Classic conservatory background with zero confidence in modal jazz improvisation.',
      outcome: 'Mastered Bill Evans rootless voicings and landed my first indie game OST commission.',
      metric: 'First commercial scoring contract'
    },
    {
      student: 'Jonas Dahl',
      role: 'Acoustic Soloist, Oslo',
      instrument: 'Artisanal Violin',
      before: 'Struggled with tension in the bow hand and sterile tone reproduction online.',
      outcome: 'The 48kHz audio fidelity and overhead 4K camera resolved my bow angle in just three lessons.',
      metric: 'Zero audio latency performance'
    }
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-[#080B12]/80 border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-400">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Real Student Progress</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl text-balance">
            From bedroom practice to stage-ready musicianship.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Every lesson builds directly toward your specific musical output. Here is how our students evolve.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.student}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E121E]/60 p-6 backdrop-blur-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">{story.metric}</span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed italic">
                  "{story.outcome}"
                </p>

                <div className="rounded-xl bg-white/[0.02] border border-white/5 p-3 text-[11px] space-y-1">
                  <span className="text-neutral-500 uppercase font-mono block text-[10px]">Starting Point:</span>
                  <p className="text-neutral-400">{story.before}</p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.08]">
                <h4 className="font-display text-sm font-bold text-white">{story.student}</h4>
                <p className="text-xs text-neutral-400">{story.role} · <span className="text-violet-400">{story.instrument}</span></p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
