'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';

export default function PainPointsSection() {
  const { lang } = useLang();
  const t = content[lang].home;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 leading-tight">
              {t.painTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-0">
              {t.painBody}
            </p>
          </div>
          <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 sm:p-8 border border-[var(--color-border)]">
            <ul className="space-y-4">
              {t.painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
