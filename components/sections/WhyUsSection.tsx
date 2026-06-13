'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';

export default function WhyUsSection() {
  const { lang } = useLang();
  const t = content[lang].home;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {t.whyTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t.whyBody}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.whyPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-surface-alt)] border border-[var(--color-border)]">
              <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm text-gray-700">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
