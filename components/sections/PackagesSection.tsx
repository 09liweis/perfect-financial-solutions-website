'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';

export default function PackagesSection() {
  const { lang } = useLang();
  const t = content[lang].home;
  const langPrefix = lang === 'en' ? '/en' : '';

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {t.packagesTitle}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {t.packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-xl border-2 p-6 transition-all ${
                i === 2
                  ? 'border-[var(--color-primary)] bg-[var(--color-primary-bg)]'
                  : 'border-[var(--color-border)] hover:border-[var(--color-primary)] bg-white'
              }`}
            >
              {i === 2 && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-[var(--color-primary)] text-white text-xs font-medium rounded-full">
                  {lang === 'zh' ? '推荐' : 'Popular'}
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{pkg.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{pkg.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href={langPrefix + '/contact'}
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors shadow-sm"
          >
            {t.packagesBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}
