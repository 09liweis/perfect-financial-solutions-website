'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';

export default function PerfectCompaniesSection() {
  const { lang } = useLang();
  const t = content[lang].home;

  return (
    <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {t.perfectTitle}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.perfectBody}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.perfectCompanies.map((company, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-[var(--color-border)] text-center hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[var(--color-primary-bg)] flex items-center justify-center">
                <span className="text-sm font-bold text-[var(--color-primary)]">
                  {company.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
                {company.name}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{company.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
