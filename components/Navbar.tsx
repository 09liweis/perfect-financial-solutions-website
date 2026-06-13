'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const t = content[lang];
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const langPrefix = lang === 'en' ? '/en' : '';

  const isActive = (href: string) => {
    const fullPath = langPrefix + href;
    if (href === '/') return pathname === langPrefix || pathname === langPrefix + '/';
    return pathname.startsWith(fullPath);
  };

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.canadaHR, href: '/services/canada-hr-payroll' },
    { label: t.nav.usPayroll, href: '/services/us-payroll-tax' },
    { label: t.nav.about, href: '/about' },
  ];

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      isActive(href)
        ? 'text-[var(--color-primary)]'
        : 'text-gray-600 hover:text-[var(--color-primary)]'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--color-border)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={langPrefix + '/'} className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-[var(--color-primary)] leading-tight">
                Perfect Employer
              </div>
              <div className="text-[10px] text-gray-500 leading-tight">Solutions Ltd</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={langPrefix + item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors px-2 py-1 rounded-md border border-gray-200 hover:border-[var(--color-primary)]"
              aria-label="Switch language"
            >
              {lang === 'zh' ? 'EN' : '中文'}
            </button>
            <Link
              href={langPrefix + '/contact'}
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors"
            >
              {t.nav.bookConsultation}
            </Link>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[var(--color-primary)]"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--color-border)]">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={langPrefix + item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-[var(--color-primary-bg)] text-[var(--color-primary)]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={langPrefix + '/contact'}
                onClick={() => setMobileOpen(false)}
                className="mx-3 mt-2 text-center px-4 py-2.5 text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-lg transition-colors"
              >
                {t.nav.bookConsultation}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
