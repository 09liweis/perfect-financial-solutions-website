'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';

export default function ServicesSection() {
  const { lang } = useLang();
  const t = content[lang].home;
  const langPrefix = lang === 'en' ? '/en' : '';

  return (
    <section className="py-16 lg:py-24 bg-[var(--color-surface-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {t.servicesTitle}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((service, i) => (
            <Link
              key={i}
              href={langPrefix + service.href}
              className="group bg-white rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-bg)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] transition-colors">
                <svg className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
              <span className="inline-flex items-center text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)]">
                {service.link}
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
