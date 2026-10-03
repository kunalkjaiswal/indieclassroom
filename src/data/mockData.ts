import { Instrument, Mentor } from '../types';

export const INSTRUMENTS_DATA: Instrument[] = [
  {
    id: 'guitar',
    name: 'Contemporary Guitar',
    tagline: 'Electric, Acoustic & Neo-Soul Mastery',
    subgenres: ['Fingerstyle', 'Neo-Soul', 'Indie Rock', 'Math Rock'],
    mentorsCount: 9,
    featuredMentor: 'Julian Vance',
    mentorRole: 'Touring Guitarist & Session Arranger',
    image: '/src/assets/images/instrument_guitar_card_1791010166994.jpg',
    accentColor: 'blue',
    glowClass: 'hover:shadow-[0_0_35px_rgba(59,130,246,0.35)] hover:border-blue-500/40',
    sampleChords: ['F#m7(add9)', 'Bmaj9', 'Emaj7', 'G#m7'],
    syllabusHighlight: [
      'Extended chord shapes, CAGED & drop-2 voicings',
      'Rhythmic pocket playing & syncopated strumming',
      'Analog tone sculpting, pedals, and DAW amp modeling',
      'Fretboard navigation without rigid scale lock-in'
    ],
    soundDescription: 'Lush neo-soul voicings & warm tube clean warmth'
  },
  {
    id: 'piano',
    name: 'Grand Piano & Keys',
    tagline: 'Modern Jazz, Neo-Classical & Contemporary Touch',
    subgenres: ['Neo-Classical', 'Modern Jazz', 'Film Scoring', 'Indie Pop Keys'],
    mentorsCount: 7,
    featuredMentor: 'Elena Rostova',
    mentorRole: 'Concert Pianist & Film Composer',
    image: '/src/assets/images/instrument_piano_card_1791010181012.jpg',
    accentColor: 'magenta',
    glowClass: 'hover:shadow-[0_0_35px_rgba(236,72,153,0.35)] hover:border-pink-500/40',
    sampleChords: ['Dbmaj9(#11)', 'Bbm7', 'Gbmaj7', 'Ab13'],
    syllabusHighlight: [
      'Weight transfer, velocity dynamics & pedal nuance',
      'Modern rootless voicings & upper structure triads',
      'Improvising melodic counterpoint over harmonic loops',
      'Synthesizer sound design & Rhodes stage performance'
    ],
    soundDescription: 'Resonant harmonic overtones with cinematic dynamic range'
  },
  {
    id: 'violin',
    name: 'Artisanal Violin',
    tagline: 'Orchestral Expression, Cinematic & Indie Folk',
    subgenres: ['Cinematic Strings', 'Indie Chamber', 'Nordic Folk', 'Experimental'],
    mentorsCount: 6,
    featuredMentor: 'Marcus Lind',
    mentorRole: 'Chamber Soloist & Scoring Arranger',
    image: '/src/assets/images/instrument_violin_card_1791010199136.jpg',
    accentColor: 'violet',
    glowClass: 'hover:shadow-[0_0_35px_rgba(139,92,246,0.35)] hover:border-violet-500/40',
    sampleChords: ['G3-D4-A4-E5', 'D-modal fifths', 'Vibrato swell'],
    syllabusHighlight: [
      'Ergonomic bow distribution & flawless string crossings',
      'Continuous expressive vibrato & microtonal intonation',
      'Layering string stems for modern record production',
      'Sight-reading complex scores and playing by ear'
    ],
    soundDescription: 'Intimate acoustic warmth with shimmering harmonic bow depth'
  }
];

export const MENTORS_DATA: Mentor[] = [
  {
    id: 'julian-vance',
    name: 'Julian Vance',
    role: 'Lead Guitarist · Tour Faculty',
    specialty: ['Neo-Soul', 'Pedal Electronics', 'Improvisation'],
    instruments: ['guitar'],
    experience: '12 years touring internationally',
    notableWork: 'Recorded guitar tracks for Grammy-nominated indie records',
    image: '/src/assets/images/instructor_mentor_portrait_1791010212436.jpg',
    availableNext: 'Tomorrow, 2:00 PM EST',
    bio: 'Specializing in breaking students out of mechanical scale patterns into fluid, expressive musical conversation.'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Concert Pianist & Composer',
    specialty: ['Neo-Classical', 'Harmonic Reharmonization', 'Ear Training'],
    instruments: ['piano'],
    experience: 'Master of Music, Conservatory Scholar',
    notableWork: 'Original scores for festival features & ambient releases',
    image: '/src/assets/images/instructor_mentor_portrait_1791010212436.jpg',
    availableNext: 'Thursday, 4:30 PM EST',
    bio: 'Focuses on touch sensitivity, polyphonic voicing, and helping songwriters create unforgettable chord movements.'
  },
  {
    id: 'marcus-lind',
    name: 'Marcus Lind',
    role: 'Principal Violinist & Arranger',
    specialty: ['Cinematic Bowing', 'Folk Fiddling', 'DAW Multi-tracking'],
    instruments: ['violin'],
    experience: 'Royal Academy of Music',
    notableWork: 'Session soloist for orchestral soundtracks & film scores',
    image: '/src/assets/images/instructor_mentor_portrait_1791010212436.jpg',
    availableNext: 'Friday, 11:00 AM EST',
    bio: 'Pioneering contemporary violin pedagogies combining classical discipline with modern recording workflows.'
  }
];

export const FAQS_DATA = [
  {
    question: 'How do 1-on-1 online music lessons work on Indie Classroom?',
    answer: 'Our proprietary classroom browser app connects you directly to your mentor with 48kHz / 24-bit lossless stereo audio and dual 4K camera views (face-to-face and high-definition instrument top-down angle). You hear every nuance of tone without compression artifacts or delay.'
  },
  {
    question: 'What gear do I need for my first free trial lesson?',
    answer: 'Just your instrument, a computer with a webcam, and headphones. If you have an audio interface or microphone, you can plug in directly for broadcast audio, but our acoustic cancellation engine also works seamlessly with built-in laptop mics.'
  },
  {
    question: 'Can I choose my mentor and change instruments?',
    answer: 'Yes! After your free 45-minute trial, your student dashboard lets you book recurring or flexible drop-in sessions with any mentor on the roster across Guitar, Piano, and Violin.'
  },
  {
    question: 'Is the trial lesson truly 100% free?',
    answer: 'Yes. No credit card is required to reserve your 45-minute trial. You will meet 1-on-1 with an instructor, evaluate your goals, learn real technique, and receive a personalized practice roadmap.'
  }
];
