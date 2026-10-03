export type InstrumentId = 'guitar' | 'piano' | 'violin' | 'production';

export interface Instrument {
  id: InstrumentId;
  name: string;
  tagline: string;
  subgenres: string[];
  mentorsCount: number;
  featuredMentor: string;
  mentorRole: string;
  image: string;
  accentColor: 'blue' | 'magenta' | 'violet';
  glowClass: string;
  sampleChords: string[];
  syllabusHighlight: string[];
  soundDescription: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  specialty: string[];
  instruments: InstrumentId[];
  experience: string;
  notableWork: string;
  image: string;
  availableNext: string;
  bio: string;
}

export interface TrialBookingFormData {
  instrument: InstrumentId;
  experienceLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro Artist';
  goal: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  notes: string;
}
