import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff, 
  Activity, 
  Clock, 
  Sliders, 
  Sparkles, 
  CheckCircle2, 
  Radio, 
  ChevronRight 
} from 'lucide-react';
import { playMetronomeTick, playGuitarChord, playPianoChord } from '../utils/audioEngine';

interface HeroSectionProps {
  onOpenTrial: () => void;
  onSelectInstrument: (instrumentId: 'guitar' | 'piano' | 'violin') => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrial, onSelectInstrument }) => {
  // Live Dashboard State
  const [isPlayingMetronome, setIsPlayingMetronome] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(112);
  const [activeChordIndex, setActiveChordIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(true);
  const [sessionSeconds, setSessionSeconds] = useState<number>(1452); // ~24:12 mins
  const [activeTab, setActiveTab] = useState<'video' | 'sheet' | 'stems'>('video');

  const chordProgression = [
    { name: 'F#m7(add9)', notes: ['F#', 'A', 'C#', 'E', 'G#'], fretboard: '2-4-2-2-2-4' },
    { name: 'Bmaj9', notes: ['B', 'D#', 'F#', 'A#', 'C#'], fretboard: 'x-2-4-3-4-2' },
    { name: 'G#m7', notes: ['G#', 'B', 'D#', 'F#'], fretboard: '4-6-4-4-4-4' },
    { name: 'C#sus4(b9)', notes: ['C#', 'F#', 'G#', 'D'], fretboard: 'x-4-6-6-7-4' }
  ];

  const metronomeTimerRef = useRef<number | null>(null);
  const beatCountRef = useRef<number>(0);

  // Metronome clock
  useEffect(() => {
    if (isPlayingMetronome) {
      const intervalMs = (60 / bpm) * 1000;
      beatCountRef.current = 0;

      const tick = () => {
        const isAccent = beatCountRef.current % 4 === 0;
        playMetronomeTick(isAccent);
        beatCountRef.current += 1;
      };

      tick();
      const interval = window.setInterval(tick, intervalMs);
      metronomeTimerRef.current = interval;

      return () => {
        clearInterval(interval);
      };
    } else {
      if (metronomeTimerRef.current) {
        clearInterval(metronomeTimerRef.current);
      }
    }
  }, [isPlayingMetronome, bpm]);

  // Session clock
  useEffect(() => {
    const timer = setInterval(() => {
      setSessionSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatSessionTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChordClick = (index: number) => {
    setActiveChordIndex(index);
    if (index === 0) playGuitarChord([185.0, 220.0, 277.18, 329.63, 415.3]); // F#m7(add9)
    else if (index === 1) playGuitarChord([246.94, 311.13, 369.99, 466.16, 554.37]); // Bmaj9
    else if (index === 2) playGuitarChord([207.65, 246.94, 311.13, 369.99]); // G#m7
    else playGuitarChord([277.18, 369.99, 415.3, 587.33]); // C#sus4
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient neon flares */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-10 right-10 h-[600px] w-[600px] rounded-full bg-violet-600/18 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* LEFT COLUMN: Hero Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-7">
            {/* Clean unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Next-Gen Music Mentorship</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">Guitar · Piano · Violin</span>
            </div>

            {/* Bold sans-serif headline */}
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance leading-[1.08]">
              Master music from the artists{' '}
              <span className="bg-gradient-to-r from-blue-400 via-violet-300 to-pink-400 bg-clip-text text-transparent">
                defining it.
              </span>
            </h1>

            {/* Sub-headline prose */}
            <p className="max-w-xl text-base text-neutral-300 sm:text-lg leading-relaxed">
              1-on-1 live interactive lessons with active touring musicians, conservatory soloists, and session producers. Experience studio-direct 24-bit lossless audio, multi-angle HD streaming, and custom repertoire built around your unique creative ear.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenTrial}
                className="glow-button group flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-2xl transition-all"
              >
                <Sparkles className="h-4 w-4 text-violet-200 transition-transform group-hover:rotate-12" />
                <span>Book a Free Trial</span>
                <ChevronRight className="h-4 w-4 text-violet-200 transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href="#instruments"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-neutral-200 transition-colors hover:border-violet-500/40 hover:bg-white/[0.08] hover:text-white"
              >
                <span>Explore 3 Disciplines</span>
              </a>
            </div>

            {/* Trust and Technical Evidence Adjacent to CTA */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
              <div>
                <p className="font-display text-2xl font-bold text-white tabular-nums">4.98<span className="text-xs text-neutral-400 font-normal"> / 5.0</span></p>
                <p className="text-xs text-neutral-400">1,400+ Active Students</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-cyan-400 tabular-nums">&lt;12ms</p>
                <p className="text-xs text-neutral-400">Audio Sync Latency</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-pink-400 tabular-nums">100%</p>
                <p className="text-xs text-neutral-400">Free 45-Min Intro</p>
              </div>
            </div>

            {/* Fast Instrument Selector Pills */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
              <span className="font-medium text-neutral-300">Choose instrument:</span>
              <button 
                onClick={() => onSelectInstrument('guitar')} 
                className="rounded-md border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-blue-300 transition-colors hover:bg-blue-500/20"
              >
                Guitar
              </button>
              <button 
                onClick={() => onSelectInstrument('piano')} 
                className="rounded-md border border-pink-500/30 bg-pink-500/10 px-2.5 py-1 text-pink-300 transition-colors hover:bg-pink-500/20"
              >
                Piano
              </button>
              <button 
                onClick={() => onSelectInstrument('violin')} 
                className="rounded-md border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-violet-300 transition-colors hover:bg-violet-500/20"
              >
                Violin
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium Glassmorphism Live 1-on-1 Video Music Lesson Card */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-white/15 bg-gradient-to-b from-[#131726]/90 to-[#0A0D15]/95 p-3.5 shadow-2xl backdrop-blur-xl sm:p-5">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-blue-600/30 via-violet-600/30 to-pink-600/30 blur-xl opacity-60 transition-opacity" />

              {/* Top Dashboard HUD Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 border border-red-500/30 px-2.5 py-0.5 font-medium text-red-400 text-[11px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                    LIVE SESSION
                  </span>
                  <span className="font-mono text-neutral-400 tabular-nums">
                    {formatSessionTime(sessionSeconds)}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {/* Ultra-low latency badge */}
                  <div className="flex items-center gap-1 text-[11px] text-cyan-300 font-mono">
                    <Radio className="h-3 w-3 text-cyan-400" />
                    <span>11.4ms</span>
                    <span className="text-neutral-500">·</span>
                    <span>48kHz / 24-bit</span>
                  </div>
                </div>
              </div>

              {/* Main Video Viewport */}
              <div className="relative mt-3 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-950">
                {/* Photorealistic Instructor Video Frame */}
                <img
                  src="/src/assets/images/hero_live_lesson_music_1791010150075.jpg"
                  alt="Live 1-on-1 music lesson with Julian Vance"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

                {/* Instructor Name Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2 rounded-lg bg-black/60 px-2.5 py-1 text-xs backdrop-blur-md border border-white/10">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-semibold text-white">Julian Vance</span>
                  <span className="text-neutral-400 text-[11px]">· Touring Guitar Mentor</span>
                </div>

                {/* Picture-in-Picture: Student Camera */}
                <div className="absolute bottom-3 right-3 h-24 w-36 rounded-lg border border-white/20 bg-neutral-900/90 shadow-xl overflow-hidden backdrop-blur-md">
                  <div className="relative h-full w-full flex flex-col justify-end p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute inset-0 flex items-center justify-center bg-[#151926]/90">
                      <div className="text-center">
                        <span className="block text-[10px] font-semibold text-neutral-200">You (Student)</span>
                        <span className="block text-[9px] text-violet-400">Audio In: Clean Line 1</span>
                      </div>
                    </div>
                    <div className="relative z-10 flex items-center justify-between text-[9px] text-neutral-300">
                      <span className="truncate max-w-[80px]">Fender Tele</span>
                      <span className="text-emerald-400 font-mono">Good Gain</span>
                    </div>
                  </div>
                </div>

                {/* Real-time Dynamic Audio Waveform Overlay */}
                <div className="absolute bottom-3 left-3 flex items-end gap-1 rounded-lg bg-black/65 px-3 py-1.5 backdrop-blur-md border border-white/10">
                  <Activity className="h-3.5 w-3.5 text-blue-400 mr-1 self-center" />
                  <div className="flex items-end gap-0.5 h-4">
                    <span className="w-1 bg-blue-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
                    <span className="w-1 bg-violet-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-4" />
                    <span className="w-1 bg-pink-400 rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-3" />
                    <span className="w-1 bg-blue-300 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-1.5" />
                    <span className="w-1 bg-violet-500 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-300 ml-1.5">Lossless Stereo</span>
                </div>
              </div>

              {/* Bottom Interactive Music Dashboard Controls */}
              <div className="mt-3.5 space-y-3">
                
                {/* Real-time Chord Progression HUD */}
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                    <span className="font-medium text-neutral-300">Live Chord Track (Click to Hear)</span>
                    <span className="text-[11px] text-violet-400 font-mono">Key: E Major / C# Minor</span>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5">
                    {chordProgression.map((chord, idx) => {
                      const isActive = activeChordIndex === idx;
                      return (
                        <button
                          key={chord.name}
                          onClick={() => handleChordClick(idx)}
                          className={`group relative flex flex-col items-center justify-center rounded-lg border py-2 px-1 text-center transition-all ${
                            isActive
                              ? 'border-violet-500 bg-violet-500/20 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                              : 'border-white/5 bg-white/[0.02] text-neutral-300 hover:border-white/20 hover:bg-white/[0.06]'
                          }`}
                        >
                          <span className="font-mono text-xs font-bold text-white tracking-tight">
                            {chord.name}
                          </span>
                          <span className="text-[9px] text-neutral-400 mt-0.5">
                            {chord.notes.slice(0, 3).join(' ')}
                          </span>
                          {isActive && (
                            <span className="absolute -top-1 -right-1 flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive Tool Ribbon: Metronome & Audio Controls */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                  
                  {/* Metronome Control */}
                  <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    <button
                      onClick={() => setIsPlayingMetronome(!isPlayingMetronome)}
                      className={`flex h-6 w-6 items-center justify-center rounded-md transition-colors ${
                        isPlayingMetronome
                          ? 'bg-pink-500 text-white shadow-[0_0_12px_rgba(236,72,153,0.5)]'
                          : 'bg-white/10 text-neutral-300 hover:bg-white/20'
                      }`}
                      title={isPlayingMetronome ? 'Pause Metronome' : 'Start Metronome'}
                    >
                      {isPlayingMetronome ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    </button>

                    <div className="flex items-center gap-1.5">
                      <span className="font-mono font-bold text-white tabular-nums">{bpm}</span>
                      <span className="text-[10px] text-neutral-400 uppercase">BPM</span>
                    </div>

                    <input
                      type="range"
                      min="60"
                      max="180"
                      value={bpm}
                      onChange={(e) => setBpm(Number(e.target.value))}
                      className="h-1.5 w-16 cursor-pointer accent-pink-500"
                    />
                  </div>

                  {/* Audio Controls (Mic, Cam, Stems) */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                        isMuted 
                          ? 'border-red-500/40 bg-red-500/15 text-red-300' 
                          : 'border-white/10 bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] hover:text-white'
                      }`}
                      title={isMuted ? 'Unmute Mic' : 'Mute Mic'}
                    >
                      {isMuted ? <MicOff className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />}
                    </button>

                    <button
                      onClick={() => setIsCameraActive(!isCameraActive)}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                        !isCameraActive 
                          ? 'border-red-500/40 bg-red-500/15 text-red-300' 
                          : 'border-white/10 bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08] hover:text-white'
                      }`}
                      title={isCameraActive ? 'Turn Off Cam' : 'Turn On Cam'}
                    >
                      {isCameraActive ? <Video className="h-3.5 w-3.5" /> : <VideoOff className="h-3.5 w-3.5" />}
                    </button>

                    <button
                      onClick={() => playGuitarChord()}
                      className="flex items-center gap-1.5 rounded-lg border border-violet-500/30 bg-violet-500/15 px-3 py-1.5 text-xs font-medium text-violet-300 transition-colors hover:bg-violet-500/25"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                      <span>Test Line-In</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
