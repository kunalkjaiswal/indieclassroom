/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InstrumentsGrid } from './components/InstrumentsGrid';
import { InteractiveAudioStudio } from './components/InteractiveAudioStudio';
import { AcademyMethod } from './components/AcademyMethod';
import { MentorsSection } from './components/MentorsSection';
import { StudentOutcomes } from './components/StudentOutcomes';
import { TuitionPricing } from './components/TuitionPricing';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { StudentPortalModal } from './components/StudentPortalModal';
import { InstrumentId } from './types';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState<boolean>(false);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState<boolean>(false);
  const [selectedInstrument, setSelectedInstrument] = useState<InstrumentId>('guitar');

  const handleOpenTrialWithInstrument = (instrumentId: InstrumentId) => {
    setSelectedInstrument(instrumentId);
    setIsTrialModalOpen(true);
  };

  const handleOpenGeneralTrial = () => {
    setIsTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07080C] text-[#F3F4F6] selection:bg-violet-600/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar 
        onOpenTrial={handleOpenGeneralTrial} 
        onOpenPortal={() => setIsPortalModalOpen(true)} 
      />

      <main>
        {/* Hero Section: Split Screen with Glowing CTA & Glassmorphism Live 1-on-1 Lesson HUD */}
        <HeroSection 
          onOpenTrial={handleOpenGeneralTrial} 
          onSelectInstrument={handleOpenTrialWithInstrument}
        />

        {/* Instruments Grid: Minimalist Cards with Subtle Ambient Glows (Guitar, Piano, Violin) */}
        <InstrumentsGrid 
          onSelectInstrumentForTrial={handleOpenTrialWithInstrument}
        />

        {/* Live Audio Studio & Tone Engine Playground */}
        <InteractiveAudioStudio />

        {/* The Indie Classroom Method (Bento Grid Architecture) */}
        <AcademyMethod />

        {/* Touring Artists & Conservatory Faculty */}
        <MentorsSection 
          onSelectMentor={handleOpenTrialWithInstrument}
        />

        {/* Real Student Proof & Attributable Progress */}
        <StudentOutcomes />

        {/* Transparent Tuition & Memberships */}
        <TuitionPricing 
          onOpenTrial={handleOpenGeneralTrial} 
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Quiet Apple-Inspired Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <TrialModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)}
        initialInstrument={selectedInstrument}
      />

      {/* Student Portal Modal */}
      <StudentPortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
      />
    </div>
  );
}
