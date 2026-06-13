'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

export default function EnServicesPage() {
  const { lang } = useLang();
  const t = content[lang].servicesPage;
  const langPrefix = lang === 'en' ? '/en' : '';

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.services.map((service, i) => (
              <Link
                key={i}
                href={langPrefix + service.href}
                className="group bg-[var(--color-surface-alt)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-bg)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                  <svg className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                <span className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)]">
                  {lang === 'zh' ? '了解更多' : 'Learn More'}
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">{t.cta}</p>
            <Link
              href={langPrefix + '/contact'}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors shadow-sm"
            >
              {lang === 'zh' ? '预约咨询' : 'Book a Consultation'}
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
