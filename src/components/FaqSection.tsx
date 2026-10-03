import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="relative py-20 lg:py-24 border-t border-white/[0.08]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 pb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400">
            <span>07</span>
            <span aria-hidden="true">·</span>
            <span>Clarity</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-300">
            Everything you need to know about the Indie Classroom experience.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#0E121E]/60 backdrop-blur-md transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-white transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-violet-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-neutral-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
