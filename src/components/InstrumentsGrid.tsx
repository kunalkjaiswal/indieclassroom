import React, { useState } from 'react';
import { Volume2, ChevronRight, Check, Sparkles, BookOpen, Music } from 'lucide-react';
import { INSTRUMENTS_DATA } from '../data/mockData';
import { InstrumentId } from '../types';
import { playGuitarChord, playPianoChord, playViolinChord } from '../utils/audioEngine';

interface InstrumentsGridProps {
  onSelectInstrumentForTrial: (instrumentId: InstrumentId) => void;
}

export const InstrumentsGrid: React.FC<InstrumentsGridProps> = ({ onSelectInstrumentForTrial }) => {
  const [playingInstrumentId, setPlayingInstrumentId] = useState<InstrumentId | null>(null);
  const [expandedSyllabusId, setExpandedSyllabusId] = useState<InstrumentId | null>(null);

  const handlePlaySample = (instrumentId: InstrumentId) => {
    setPlayingInstrumentId(instrumentId);
    if (instrumentId === 'guitar') {
      playGuitarChord();
    } else if (instrumentId === 'piano') {
      playPianoChord();
    } else if (instrumentId === 'violin') {
      playViolinChord();
    }

    setTimeout(() => {
      setPlayingInstrumentId(null);
    }, 2000);
  };

  const toggleSyllabus = (instrumentId: InstrumentId) => {
    setExpandedSyllabusId(expandedSyllabusId === instrumentId ? null : instrumentId);
  };

  return (
    <section id="instruments" className="relative py-20 lg:py-28">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/3 left-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-96 w-96 rounded-full bg-pink-600/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            {/* Clean unboxed section kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>Curated Disciplines</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Three instruments.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-violet-300 to-pink-400 bg-clip-text text-transparent">
                Infinite voices.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Designed from the ground up for musicians who want to move past repetitive finger exercises into deep musicality, authentic tone, and creative improvisation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400">Audio playback powered by Web Audio</span>
          </div>
        </div>

        {/* Minimalist Instrument Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {INSTRUMENTS_DATA.map((instrument) => {
            const isPlaying = playingInstrumentId === instrument.id;
            const isSyllabusOpen = expandedSyllabusId === instrument.id;

            // Border & Glow Accents based on instrument
            const borderColors = {
              blue: 'hover:border-blue-500/50 hover:shadow-[0_0_40px_-5px_rgba(59,130,246,0.3)]',
              magenta: 'hover:border-pink-500/50 hover:shadow-[0_0_40px_-5px_rgba(236,72,153,0.3)]',
              violet: 'hover:border-violet-500/50 hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.3)]'
            };

            const accentBadgeStyles = {
              blue: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
              magenta: 'text-pink-300 bg-pink-500/10 border-pink-500/20',
              violet: 'text-violet-300 bg-violet-500/10 border-violet-500/20'
            };

            return (
              <div
                key={instrument.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0E121D]/80 backdrop-blur-md transition-all duration-300 ${borderColors[instrument.accentColor]}`}
              >
                {/* Visual Asset Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  <img
                    src={instrument.image}
                    alt={instrument.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Scrim overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E121D] via-[#0E121D]/30 to-transparent" />

                  {/* Audio Sample Play Trigger Button */}
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => handlePlaySample(instrument.id)}
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur-md transition-all ${
                        isPlaying
                          ? 'bg-white text-black shadow-lg shadow-white/20'
                          : 'bg-black/60 text-white border border-white/15 hover:bg-black/80'
                      }`}
                    >
                      <Volume2 className={`h-3.5 w-3.5 ${isPlaying ? 'animate-pulse text-violet-600' : 'text-neutral-300'}`} />
                      <span>{isPlaying ? 'Auditioning...' : 'Sample Tone'}</span>
                    </button>
                  </div>

                  {/* Featured Mentor Credit */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                      Led by {instrument.featuredMentor}
                    </p>
                    <p className="text-xs text-neutral-300 font-medium truncate">
                      {instrument.mentorRole}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-6 space-y-4">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-violet-200 transition-colors">
                      {instrument.name}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      {instrument.tagline}
                    </p>
                  </div>

                  {/* Clean unboxed subgenres metadata */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-400">
                    {instrument.subgenres.map((genre, idx) => (
                      <React.Fragment key={genre}>
                        <span className="text-neutral-300">{genre}</span>
                        {idx < instrument.subgenres.length - 1 && (
                          <span aria-hidden="true" className="text-neutral-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Sound Description */}
                  <div className="rounded-lg bg-white/[0.03] border border-white/5 p-3 text-xs text-neutral-300">
                    <span className="font-medium text-white block mb-0.5">Acoustic Signature:</span>
                    <span>{instrument.soundDescription}</span>
                  </div>

                  {/* Expandable Syllabus Overview */}
                  <div className="pt-1">
                    <button
                      onClick={() => toggleSyllabus(instrument.id)}
                      className="flex items-center justify-between w-full text-xs font-semibold text-neutral-300 hover:text-white transition-colors py-1"
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5 text-violet-400" />
                        <span>Curriculum Highlights</span>
                      </span>
                      <ChevronRight className={`h-3.5 w-3.5 transition-transform duration-200 ${isSyllabusOpen ? 'rotate-90' : ''}`} />
                    </button>

                    {isSyllabusOpen && (
                      <ul className="mt-2.5 space-y-2 text-xs text-neutral-300 border-l border-white/10 pl-3">
                        {instrument.syllabusHighlight.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <Check className="h-3 w-3 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3">
                    <div className="text-xs text-neutral-400">
                      <span className="font-mono font-bold text-white tabular-nums">{instrument.mentorsCount}</span> touring mentors
                    </div>

                    <button
                      onClick={() => onSelectInstrumentForTrial(instrument.id)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-violet-600 hover:text-white px-4 py-2 text-xs font-semibold text-white transition-all shadow-sm"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                      <span>Book Free Trial</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Classroom Guarantee Banner */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 via-violet-900/25 to-pink-900/20 p-6 md:p-8 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center lg:text-left">
              <h4 className="font-display text-lg font-bold text-white">
                Not sure which instrument or mentor matches your musical style?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300">
                Book a 15-minute diagnostic matching call with our curriculum director. We'll assess your current goals and pair you with the ideal touring artist.
              </p>
            </div>
            
            <button
              onClick={() => onSelectInstrumentForTrial('guitar')}
              className="glow-button shrink-0 rounded-full px-6 py-2.5 text-xs font-semibold text-white"
            >
              Get Matched with a Mentor
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
