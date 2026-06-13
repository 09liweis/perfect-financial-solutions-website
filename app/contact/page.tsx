'use client';

import React, { useState } from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';

export default function ContactPage() {
  const { lang } = useLang();
  const t = content[lang].contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary-bg)] to-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">{t.body}</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {lang === 'zh' ? '提交成功！' : 'Submitted!'}
              </h2>
              <p className="text-gray-600">
                {lang === 'zh'
                  ? '感谢您的咨询，我们会尽快与您联系。'
                  : 'Thank you for your inquiry. We will contact you soon.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.company}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.city}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.phone}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.language} <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow"
                  >
                    {t.languageOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.employees}
                  </label>
                  <select className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow">
                    {t.employeeOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t.serviceNeeded}
                  </label>
                  <select className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm bg-white focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow">
                    {t.serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.message}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2.5 border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none transition-shadow resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors shadow-sm"
              >
                {t.submit}
              </button>

              <p className="text-xs text-gray-400 mt-4">{t.note}</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
