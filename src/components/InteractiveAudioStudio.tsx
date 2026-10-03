import React, { useState } from 'react';
import { Volume2, Play, Music, Sparkles, SlidersHorizontal, Radio } from 'lucide-react';
import { playGuitarChord, playPianoChord, playViolinChord, playMetronomeTick } from '../utils/audioEngine';

export const InteractiveAudioStudio: React.FC = () => {
  const [selectedInstrument, setSelectedInstrument] = useState<'guitar' | 'piano' | 'violin'>('piano');
  const [activeChordName, setActiveChordName] = useState<string>('F#m7(add9)');
  const [activeNoteText, setActiveNoteText] = useState<string>('F# · A · C# · E · G#');

  const guitarPresets = [
    { name: 'Neo-Soul Maj9', notes: 'Emaj9 · Extended Voicing', trigger: () => playGuitarChord([164.81, 246.94, 329.63, 392.0, 493.88]) },
    { name: 'Indie Minor 7th', notes: 'F#m7(add9) · 2-4-2-2-2-4', trigger: () => playGuitarChord([185.0, 220.0, 277.18, 329.63, 415.3]) },
    { name: 'Sparkling Open D', notes: 'Dsus2 · Open Resonance', trigger: () => playGuitarChord([146.83, 220.0, 293.66, 440.0, 587.33]) },
    { name: 'Dream Pop 11th', notes: 'Aadd9 · Ambient Chorus', trigger: () => playGuitarChord([220.0, 277.18, 329.63, 440.0, 554.37]) },
  ];

  const pianoPresets = [
    { name: 'Bill Evans Modal', notes: 'Dbmaj9(#11) · Rootless Left Hand', trigger: () => playPianoChord([277.18, 349.23, 415.3, 493.88, 587.33]) },
    { name: 'Neo-Classical Octaves', notes: 'A Minor 9 · Rich Overtones', trigger: () => playPianoChord([220.0, 329.63, 440.0, 523.25, 659.25]) },
    { name: 'Chopin Nocturne Cadence', notes: 'Ebmaj7 · Lush Polyphony', trigger: () => playPianoChord([155.56, 233.08, 311.13, 392.0, 466.16]) },
    { name: 'Cinematic Ambient 4ths', notes: 'Gsus4(add9) · Film Texture', trigger: () => playPianoChord([196.0, 293.66, 392.0, 440.0, 587.33]) },
  ];

  const violinPresets = [
    { name: 'Cinematic Bow Swell', notes: 'D-Modal Pure Fifths', trigger: () => playViolinChord([220.0, 293.66, 440.0, 587.33]) },
    { name: 'Nordic Folk Double-Stop', notes: 'A4 + E5 Shimmering Drone', trigger: () => playViolinChord([440.0, 659.25]) },
    { name: 'Orchestral Warmth', notes: 'G3-D4 Full String Resonance', trigger: () => playViolinChord([196.0, 293.66, 440.0]) },
    { name: 'Expressive Vibrato', notes: 'C# Minor Harmonic Drone', trigger: () => playViolinChord([277.18, 415.3, 554.37]) },
  ];

  const currentPresets = 
    selectedInstrument === 'guitar' 
      ? guitarPresets 
      : selectedInstrument === 'piano' 
        ? pianoPresets 
        : violinPresets;

  const handleTriggerPreset = (preset: { name: string; notes: string; trigger: () => void }) => {
    setActiveChordName(preset.name);
    setActiveNoteText(preset.notes);
    preset.trigger();
  };

  return (
    <section id="studio-hud" className="relative py-20 lg:py-24 border-y border-white/[0.08] bg-[#0A0D15]/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            <Radio className="h-3.5 w-3.5 animate-pulse" />
            <span>Interactive Classroom Audio Engine</span>
          </div>
          
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl text-balance">
            Hear how lessons sound in real-time.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Click any voicing below to trigger our synthesis engine. Our live web classroom delivers this pristine harmonic depth with sub-12ms round-trip latency.
          </p>
        </div>

        {/* Audio Playground Dashboard */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-gradient-to-b from-[#121626]/90 to-[#0A0D16]/95 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
          
          {/* Top Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2 p-1 rounded-lg bg-black/40 border border-white/10">
              <button
                onClick={() => setSelectedInstrument('guitar')}
                className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
                  selectedInstrument === 'guitar'
                    ? 'bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Contemporary Guitar
              </button>
              <button
                onClick={() => setSelectedInstrument('piano')}
                className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
                  selectedInstrument === 'piano'
                    ? 'bg-pink-600 text-white shadow-[0_0_12px_rgba(236,72,153,0.5)]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Grand Piano
              </button>
              <button
                onClick={() => setSelectedInstrument('violin')}
                className={`px-4 py-1.5 rounded-md text-xs font-medium transition-all ${
                  selectedInstrument === 'violin'
                    ? 'bg-violet-600 text-white shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Artisanal Violin
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-neutral-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-white">Lossless WebAudio 48kHz</span>
            </div>
          </div>

          {/* Active Voicing Display */}
          <div className="my-6 rounded-xl border border-white/10 bg-black/50 p-6 text-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-violet-400">
              Currently Selected Voicing
            </span>
            <h3 className="font-display text-3xl font-extrabold text-white mt-1">
              {activeChordName}
            </h3>
            <p className="font-mono text-xs text-neutral-400 mt-1">
              {activeNoteText}
            </p>
          </div>

          {/* Preset Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {currentPresets.map((preset) => {
              const isSelected = activeChordName === preset.name;
              return (
                <button
                  key={preset.name}
                  onClick={() => handleTriggerPreset(preset)}
                  className={`group relative flex flex-col items-start p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-violet-500 bg-violet-600/20 shadow-[0_0_20px_rgba(139,92,246,0.25)]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-xs font-semibold text-white group-hover:text-violet-200">
                      {preset.name}
                    </span>
                    <Volume2 className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white" />
                  </div>
                  <span className="text-[11px] text-neutral-400">
                    {preset.notes}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Metronome Demo in Studio */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-pink-500/20 text-pink-400">
                <Music className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-white">Built-in Acoustic Metronome & Tuner</p>
                <p className="text-neutral-400 text-[11px]">Synced with your mentor during scale work, rhythmic phrasing, and solo takes.</p>
              </div>
            </div>

            <button
              onClick={() => playMetronomeTick(true)}
              className="rounded-lg border border-pink-500/30 bg-pink-500/10 px-4 py-2 font-medium text-pink-300 hover:bg-pink-500/20 transition-colors whitespace-nowrap"
            >
              Test Click Tone
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
