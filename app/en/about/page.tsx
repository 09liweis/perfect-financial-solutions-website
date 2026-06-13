'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function EnAboutPage() {
  const { lang } = useLang();
  const t = content[lang].about;

  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary-bg)] to-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{t.body}</p>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            {lang === 'zh' ? 'Perfect 系列公司' : 'Perfect Group of Companies'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.perfectCompanies.map((company, i) => (
              <div key={i} className="bg-[var(--color-surface-alt)] rounded-xl p-6 border border-[var(--color-border)] text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-[var(--color-primary-bg)] flex items-center justify-center">
                  <span className="text-sm font-bold text-[var(--color-primary)]">{company.name.charAt(0)}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">{company.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{company.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            {lang === 'zh' ? '我们的使命' : 'Our Mission'}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed italic">"{t.mission}"</p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
