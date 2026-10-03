import React, { useState } from 'react';
import { X, Lock, Music2, ArrowRight } from 'lucide-react';

interface StudentPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentPortalModal: React.FC<StudentPortalModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-2xl border border-white/20 bg-gradient-to-b from-[#131726] to-[#0A0D15] p-6 shadow-2xl backdrop-blur-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {!isLoggedIn ? (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-violet-600 to-pink-500 text-white">
                <Music2 className="h-4 w-4" />
              </span>
              <h3 className="font-display text-xl font-bold text-white">Indie Classroom Portal</h3>
            </div>
            
            <p className="text-xs text-neutral-300 mb-6">
              Access your lesson recordings, practice stems, homework chord charts, and upcoming 1-on-1 sessions.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Student Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@indieclassroom.com"
                  className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 hover:bg-violet-500 py-2.5 text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Enter Studio Dashboard</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
              <Music2 className="h-6 w-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-white">Welcome Back!</h4>
            <p className="text-xs text-neutral-300">
              Your practice stems and upcoming lesson with Julian Vance (Oct 6, 6:00 PM EST) are synced.
            </p>
            <button
              onClick={() => { setIsLoggedIn(false); onClose(); }}
              className="rounded-xl bg-white/10 hover:bg-white/15 px-5 py-2 text-xs font-medium text-white transition-colors"
            >
              Close Portal Preview
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
