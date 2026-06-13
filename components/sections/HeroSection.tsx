'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';

export default function HeroSection() {
  const { lang } = useLang();
  const t = content[lang].home;
  const langPrefix = lang === 'en' ? '/en' : '';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--color-primary-bg)] via-white to-[var(--color-surface-alt)]">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)] opacity-[0.06] rounded-full translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href={langPrefix + '/contact'}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors shadow-sm"
            >
              {t.btnConsultation}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={langPrefix + '/services'}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[var(--color-primary)] bg-white border border-[var(--color-primary)] hover:bg-[var(--color-primary-bg)] rounded-lg transition-colors"
            >
              {t.btnServices}
            </Link>
          </div>
          {/* Trust tags */}
          <div className="flex flex-wrap gap-2">
            {t.trustTags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/80 border border-[var(--color-border)] text-gray-600"
              >
                <svg className="w-3.5 h-3.5 mr-1.5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
