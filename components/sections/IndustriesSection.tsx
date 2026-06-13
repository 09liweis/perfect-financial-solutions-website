'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';

export default function IndustriesSection() {
  const { lang } = useLang();
  const t = content[lang].home;

  return (
    <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {t.industriesTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.industriesBody}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {t.industries.map((industry, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-sm transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
              <span className="text-sm text-gray-700">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
