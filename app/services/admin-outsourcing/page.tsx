'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';

function ServiceDetailPage({ pageKey }: { pageKey: 'canadaHR' | 'usPayroll' | 'adminOutsource' | 'bookkeeping' | 'businessMarketing' }) {
  const { lang } = useLang();
  const t = content[lang][pageKey];
  const langPrefix = lang === 'en' ? '/en' : '';

  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-primary-bg)] to-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href={langPrefix + '/services'}
              className="inline-flex items-center text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] mb-4 transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {lang === 'zh' ? '返回服务列表' : 'Back to Services'}
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
            <p className="text-lg text-gray-600">{t.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <p className="text-gray-600 leading-relaxed mb-10">{t.body}</p>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {lang === 'zh' ? '我们可以协助：' : 'We can assist with:'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 mb-12">
                {t.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[var(--color-accent)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[var(--color-surface-alt)] rounded-2xl p-6 lg:p-8 border border-[var(--color-border)] sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {lang === 'zh' ? '适合：' : 'Suitable for:'}
                </h3>
                <ul className="space-y-3 mb-8">
                  {t.suitable.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[var(--color-primary-bg)] flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={langPrefix + '/contact'}
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors"
                >
                  {t.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export default function AdminOutsourcePage() {
  return <ServiceDetailPage pageKey="adminOutsource" />;
}
