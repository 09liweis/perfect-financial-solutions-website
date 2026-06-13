'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';

export default function CTASection() {
  const { lang } = useLang();
  const t = content[lang].home;
  const langPrefix = lang === 'en' ? '/en' : '';

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
          {t.ctaTitle}
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto">
          {t.ctaBody}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={langPrefix + '/contact'}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-[var(--color-primary)] bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-sm"
          >
            {t.ctaBtn1}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href={langPrefix + '/contact'}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border-2 border-white/40 hover:border-white/80 rounded-lg transition-colors"
          >
            {t.ctaBtn2}
          </Link>
        </div>
      </div>
    </section>
  );
}
