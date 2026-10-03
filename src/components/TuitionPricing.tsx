import React, { useState } from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';

interface TuitionPricingProps {
  onOpenTrial: () => void;
}

export const TuitionPricing: React.FC<TuitionPricingProps> = ({ onOpenTrial }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <section id="pricing" className="relative py-20 lg:py-28 border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Transparent Tuition</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
            Zero lock-in. Real musical momentum.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Start with your free 45-minute master trial. Continue only if your mentor is the exact right creative match.
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 mt-4">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Monthly Flexibility
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all flex items-center gap-1.5 ${
                billingCycle === 'quarterly'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Quarterly Season</span>
              <span className="rounded bg-pink-500/20 text-pink-300 text-[10px] px-1.5 py-0.2">Save 15%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Free Trial */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E121E]/60 p-8 backdrop-blur-md">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Zero Risk</span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">Introductory Masterclass</h3>
                <p className="text-xs text-neutral-400 mt-1">Experience a full 1-on-1 session before committing.</p>
              </div>

              <div className="pt-2">
                <span className="font-display text-4xl font-extrabold text-white">$0</span>
                <span className="text-xs text-neutral-400 ml-2">/ first 45-min lesson</span>
              </div>

              <ul className="space-y-3 pt-4 border-t border-white/[0.08] text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>45-minute live 1-on-1 video session</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Acoustic diagnostic & technique review</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Custom practice roadmap PDF</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>No credit card required upfront</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenTrial}
              className="mt-8 w-full rounded-xl border border-white/20 bg-white/5 py-3 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Book Free Trial
            </button>
          </div>

          {/* Plan 2: Studio Membership (Featured) */}
          <div className="relative flex flex-col justify-between rounded-2xl border-2 border-violet-500/70 bg-[#121626] p-8 shadow-[0_0_40px_rgba(139,92,246,0.25)] backdrop-blur-xl">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-violet-600 to-pink-500 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider shadow-md">
              Most Popular
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-violet-300">Core Academy</span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">Studio Membership</h3>
                <p className="text-xs text-neutral-400 mt-1">Weekly intensive 1-on-1 mentorship and practice stems.</p>
              </div>

              <div className="pt-2">
                <span className="font-display text-4xl font-extrabold text-white">
                  ${billingCycle === 'monthly' ? '280' : '238'}
                </span>
                <span className="text-xs text-neutral-400 ml-2">/ month (4 lessons)</span>
              </div>

              <ul className="space-y-3 pt-4 border-t border-white/[0.08] text-xs text-neutral-200">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-violet-400 shrink-0" />
                  <span>Four 60-min live 1-on-1 lessons per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-violet-400 shrink-0" />
                  <span>Studio-direct 48kHz audio & 4K camera angles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-violet-400 shrink-0" />
                  <span>Custom practice stems & recorded archives</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-violet-400 shrink-0" />
                  <span>Direct mentor messaging between sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-violet-400 shrink-0" />
                  <span>Flexibility to reschedule with 24h notice</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenTrial}
              className="glow-button mt-8 w-full rounded-xl py-3 text-xs font-semibold text-white shadow-lg"
            >
              Start Free Trial · Unlock Studio
            </button>
          </div>

          {/* Plan 3: Artist Residency */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0E121E]/60 p-8 backdrop-blur-md">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-pink-400">Professional Cohort</span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">Artist Residency</h3>
                <p className="text-xs text-neutral-400 mt-1">For active songwriters, recording artists, and touring players.</p>
              </div>

              <div className="pt-2">
                <span className="font-display text-4xl font-extrabold text-white">
                  ${billingCycle === 'monthly' ? '520' : '442'}
                </span>
                <span className="text-xs text-neutral-400 ml-2">/ month (8 lessons)</span>
              </div>

              <ul className="space-y-3 pt-4 border-t border-white/[0.08] text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-pink-400 shrink-0" />
                  <span>Eight 60-min live 1-on-1 sessions per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-pink-400 shrink-0" />
                  <span>DAW arrangement & track production feedback</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-pink-400 shrink-0" />
                  <span>Priority scheduling with marquee touring mentors</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-pink-400 shrink-0" />
                  <span>Annual studio showcase performance stream</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenTrial}
              className="mt-8 w-full rounded-xl border border-white/20 bg-white/5 py-3 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Apply for Residency
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
