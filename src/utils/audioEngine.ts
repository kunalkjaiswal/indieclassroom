// Web Audio synthesizer for metronome clicks, chord previews, and instrument audio

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a precise metronome tick
 */
export function playMetronomeTick(isAccent: boolean = false) {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(isAccent ? 1200 : 800, ctx.currentTime);

    gain.gain.setValueAtTime(isAccent ? 0.35 : 0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    console.error('Audio playback error', e);
  }
}

/**
 * Play guitar-like warm plucked chord arpeggio
 */
export function playGuitarChord(frequencies: number[] = [164.81, 220.0, 293.66, 369.99, 440.0, 554.37]) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    frequencies.forEach((freq, idx) => {
      const delay = idx * 0.045; // subtle strum arpeggio
      const osc = ctx.createOscillator();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + delay);

      // Lowpass filter simulating acoustic guitar string body resonance
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2400, now + delay);
      filter.frequency.exponentialRampToValueAtTime(400, now + delay + 1.2);

      gain.gain.setValueAtTime(0, now + delay);
      gain.gain.linearRampToValueAtTime(0.18, now + delay + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.6);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + delay);
      osc.stop(now + delay + 1.6);
    });
  } catch (e) {
    console.error('Guitar playback error', e);
  }
}

/**
 * Play piano-like rich harmonic chord
 */
export function playPianoChord(frequencies: number[] = [261.63, 329.63, 392.0, 493.88, 587.33]) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const oscHarmonic = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      oscHarmonic.type = 'sine';
      oscHarmonic.frequency.setValueAtTime(freq * 2, now);

      const velocity = 0.14 - (idx * 0.015);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(velocity, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);

      osc.connect(gain);
      oscHarmonic.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      oscHarmonic.start(now);
      osc.stop(now + 2.0);
      oscHarmonic.stop(now + 2.0);
    });
  } catch (e) {
    console.error('Piano playback error', e);
  }
}

/**
 * Play violin bowing warm drone and harmonic fifths
 */
export function playViolinChord(frequencies: number[] = [220.0, 329.63, 440.0, 659.25]) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    frequencies.forEach((freq) => {
      const osc = ctx.createOscillator();
      const vibrato = ctx.createOscillator();
      const vibratoGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      const gain = ctx.createGain();

      // Vibrato LFO
      vibrato.frequency.setValueAtTime(5.5, now); // 5.5 Hz natural string vibrato
      vibratoGain.gain.setValueAtTime(4.0, now);
      vibrato.connect(osc.frequency);

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1100, now);
      filter.Q.setValueAtTime(1.8, now);

      // Bowing envelope (gentle swell in and sustained release)
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      vibrato.start(now);
      osc.start(now);
      vibrato.stop(now + 2.2);
      osc.stop(now + 2.2);
    });
  } catch (e) {
    console.error('Violin playback error', e);
  }
}
