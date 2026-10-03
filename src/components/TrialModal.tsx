import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Calendar, Clock, Music, ArrowRight, ShieldCheck } from 'lucide-react';
import { InstrumentId, TrialBookingFormData } from '../types';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInstrument?: InstrumentId;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose, initialInstrument = 'guitar' }) => {
  const [formData, setFormData] = useState<TrialBookingFormData>({
    instrument: initialInstrument,
    experienceLevel: 'Intermediate',
    goal: 'Learn neo-soul chords and improve improvisation',
    date: '2026-10-06',
    timeSlot: '6:00 PM EST',
    fullName: '',
    email: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(1);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setActiveStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-gradient-to-b from-[#131726] to-[#0A0D15] p-6 shadow-2xl backdrop-blur-2xl sm:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="space-y-1 pb-5 border-b border-white/[0.08]">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-violet-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zero Commitment · 100% Free</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Book Your 45-Minute Free Trial
              </h3>
              <p className="text-xs text-neutral-300">
                Meet 1-on-1 with a touring artist. Test our lossless audio classroom and get a personalized musical roadmap.
              </p>
            </div>

            {/* Stepper indicators */}
            <div className="flex items-center justify-between py-4 text-xs font-mono text-neutral-400 border-b border-white/[0.08]">
              <span className={activeStep === 1 ? 'text-white font-bold' : 'text-neutral-500'}>
                1. Instrument & Level
              </span>
              <span>·</span>
              <span className={activeStep === 2 ? 'text-white font-bold' : 'text-neutral-500'}>
                2. Date & Time
              </span>
              <span>·</span>
              <span className={activeStep === 3 ? 'text-white font-bold' : 'text-neutral-500'}>
                3. Your Info
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              
              {/* STEP 1: Instrument & Experience */}
              {activeStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-2">
                      Select Your Discipline
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['guitar', 'piano', 'violin'] as InstrumentId[]).map((inst) => (
                        <button
                          key={inst}
                          type="button"
                          onClick={() => setFormData({ ...formData, instrument: inst })}
                          className={`rounded-xl border p-3 text-center capitalize transition-all ${
                            formData.instrument === inst
                              ? 'border-violet-500 bg-violet-600/20 text-white shadow-sm'
                              : 'border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20'
                          }`}
                        >
                          <span className="block text-xs font-semibold">{inst}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-2">
                      Current Playing Level
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {(['Beginner', 'Intermediate', 'Advanced', 'Pro Artist'] as const).map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setFormData({ ...formData, experienceLevel: lvl })}
                          className={`rounded-lg border px-3 py-2 text-xs transition-all text-left ${
                            formData.experienceLevel === lvl
                              ? 'border-violet-500 bg-violet-600/20 text-white'
                              : 'border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Primary Musical Focus or Goal
                    </label>
                    <input
                      type="text"
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      placeholder="e.g. Master jazz chords, write better solos, fingerstyle..."
                      className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveStep(2)}
                      className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 py-2.5 text-xs font-semibold text-white transition-colors"
                    >
                      Continue to Date & Time
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Date & Slot */}
              {activeStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Preferred Date
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Tomorrow (Oct 3)', 'Saturday (Oct 4)', 'Monday (Oct 6)'].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setFormData({ ...formData, date: d })}
                          className={`rounded-lg border p-2 text-left text-xs transition-all ${
                            formData.date === d
                              ? 'border-violet-500 bg-violet-600/20 text-white'
                              : 'border-white/10 bg-white/[0.02] text-neutral-400'
                          }`}
                        >
                          <span className="font-semibold block">{d.split(' ')[0]}</span>
                          <span className="text-[10px] text-neutral-400">{d.split(' ')[1]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Available Lesson Slots (EST)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['11:00 AM EST', '2:30 PM EST', '5:00 PM EST', '7:30 PM EST'].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`rounded-lg border p-2 text-center text-xs transition-all ${
                            formData.timeSlot === slot
                              ? 'border-violet-500 bg-violet-600/20 text-white'
                              : 'border-white/10 bg-white/[0.02] text-neutral-400'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveStep(1)}
                      className="rounded-xl border border-white/15 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveStep(3)}
                      className="flex-1 rounded-xl bg-violet-600 hover:bg-violet-500 py-2.5 text-xs font-semibold text-white transition-colors"
                    >
                      Continue to Contact Info
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Student Contact Details */}
              {activeStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Julian Carter"
                      className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="julian@example.com"
                      className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-neutral-400 pt-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>No credit card required. Instant calendar invite with private audio room link.</span>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveStep(2)}
                      className="rounded-xl border border-white/15 px-4 py-2.5 text-xs font-medium text-neutral-300 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="glow-button flex-1 rounded-xl py-2.5 text-xs font-semibold text-white shadow-lg"
                    >
                      Confirm Free Trial Reservation
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-6 space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="font-display text-2xl font-bold text-white">
              Trial Confirmed!
            </h3>
            
            <p className="text-xs text-neutral-300 max-w-sm mx-auto">
              We've dispatched your calendar invitation and private studio room link to <span className="font-semibold text-white">{formData.email || 'your email'}</span>.
            </p>

            <div className="rounded-xl border border-white/10 bg-black/50 p-4 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex items-center justify-between text-neutral-400">
                <span>Discipline:</span>
                <span className="font-semibold text-white capitalize">{formData.instrument}</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Slot:</span>
                <span className="font-semibold text-violet-400">{formData.timeSlot} ({formData.date})</span>
              </div>
              <div className="flex items-center justify-between text-neutral-400">
                <span>Studio Audio:</span>
                <span className="font-semibold text-cyan-400">Lossless 48kHz Direct</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="mt-4 rounded-xl bg-white/10 hover:bg-white/15 px-6 py-2.5 text-xs font-semibold text-white transition-colors"
            >
              Return to Indie Classroom
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
