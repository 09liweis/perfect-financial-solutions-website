'use client';

import React, { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';

export default function FAQSection() {
  const { lang } = useLang();
  const t = content[lang].home;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
          {t.faqTitle}
        </h2>
        <div className="space-y-3">
          {t.faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[var(--color-border)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[var(--color-surface-alt)] transition-colors"
              >
                <span className="text-sm font-medium text-gray-900 pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                    openIdx === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIdx === i && (
                <div className="px-5 pb-4 pt-0">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
