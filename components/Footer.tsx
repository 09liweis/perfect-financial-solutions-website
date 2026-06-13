'use client';

import React from 'react';
import { useLang } from '@/lib/LangContext';
import { content } from '@/lib/i18n';
import Link from 'next/link';

export default function Footer() {
  const { lang } = useLang();
  const t = content[lang];
  const langPrefix = lang === 'en' ? '/en' : '';

  const serviceLinks = [
    { label: t.nav.canadaHR, href: '/services/canada-hr-payroll' },
    { label: t.nav.usPayroll, href: '/services/us-payroll-tax' },
    { label: t.nav.adminOutsource, href: '/services/admin-outsourcing' },
    { label: t.nav.bookkeeping, href: '/services/bookkeeping' },
    { label: t.nav.businessMarketing, href: '/services/business-marketing' },
  ];

  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-lg">Perfect Employer Solutions Ltd</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-3">
              {t.footer.tagline}
            </p>
            <p className="text-white/50 text-xs">{t.footer.partOf}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href={langPrefix + '/'} className="text-white/70 hover:text-white text-sm transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href={langPrefix + '/services'} className="text-white/70 hover:text-white text-sm transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href={langPrefix + '/about'} className="text-white/70 hover:text-white text-sm transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={langPrefix + '/contact'} className="text-white/70 hover:text-white text-sm transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">
              {t.footer.services}
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={langPrefix + link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-white/20">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
            {t.footer.disclaimer}
          </h4>
          <p className="text-white/40 text-xs leading-relaxed">
            {t.footer.disclaimerText}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Perfect Employer Solutions Ltd. {t.footer.copyright}.
          </p>
          <div className="flex items-center gap-6 text-white/50 text-xs">
            <span>{t.footer.phone}: +1 (XXX) XXX-XXXX</span>
            <span>{t.footer.email}: info@perfectemployersolutions.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
