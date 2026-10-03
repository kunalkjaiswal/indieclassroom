import React from 'react';
import { Sparkles, Calendar, Award, Music, ArrowUpRight } from 'lucide-react';
import { MENTORS_DATA } from '../data/mockData';
import { InstrumentId } from '../types';

interface MentorsSectionProps {
  onSelectMentor: (instrument: InstrumentId) => void;
}

export const MentorsSection: React.FC<MentorsSectionProps> = ({ onSelectMentor }) => {
  return (
    <section id="mentors" className="relative py-20 lg:py-28 border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
              <span>04</span>
              <span aria-hidden="true">·</span>
              <span>Touring & Conservatory Faculty</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Mentored by artists who live on stage and in the studio.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300">
              Our instructors are active indie touring musicians, acclaimed film composers, and conservatory scholars who treat teaching as a vital craft.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Currently Accepting New Students</span>
          </div>
        </div>

        {/* Mentors Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENTORS_DATA.map((mentor) => (
            <div
              key={mentor.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E121E]/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.2)]"
            >
              <div className="space-y-5">
                {/* Portrait & Role */}
                <div className="flex items-start gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/15 bg-neutral-900 shrink-0">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-violet-200 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-medium">
                      {mentor.role}
                    </p>
                    <div className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                      <Calendar className="h-3 w-3" />
                      <span>{mentor.availableNext}</span>
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {mentor.specialty.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-md border border-white/5 bg-white/[0.04] px-2.5 py-1 text-neutral-300"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Bio & Notable Work */}
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {mentor.bio}
                </p>

                <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-[11px] text-neutral-400 space-y-1">
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    <Award className="h-3.5 w-3.5 text-violet-400" />
                    <span>{mentor.experience}</span>
                  </div>
                  <p className="italic text-neutral-400 truncate">
                    {mentor.notableWork}
                  </p>
                </div>
              </div>

              {/* Book Trial Action */}
              <div className="pt-5 mt-5 border-t border-white/[0.08]">
                <button
                  onClick={() => onSelectMentor(mentor.instruments[0])}
                  className="flex items-center justify-between w-full rounded-xl border border-white/10 bg-white/[0.03] hover:border-violet-500/40 hover:bg-violet-600/10 px-4 py-2.5 text-xs font-semibold text-white transition-all"
                >
                  <span>Book Trial with {mentor.name.split(' ')[0]}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-violet-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
