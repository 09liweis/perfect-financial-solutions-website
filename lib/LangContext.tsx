'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { Lang } from '@/lib/i18n';
import { usePathname, useRouter } from 'next/navigation';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'zh',
  setLang: () => {},
  toggleLang: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const getLangFromCurrentPath = (): Lang => {
    if (pathname.startsWith('/en')) return 'en';
    return 'zh';
  };

  const [lang, setLangState] = useState<Lang>('zh');

  useEffect(() => {
    setLangState(getLangFromCurrentPath());
  }, [pathname]);

  const setLang = useCallback(
    (newLang: Lang) => {
      if (newLang === lang) return;
      let newPath = pathname;
      if (lang === 'zh' && newLang === 'en') {
        newPath = '/en' + (pathname === '/' ? '' : pathname);
      } else if (lang === 'en' && newLang === 'zh') {
        newPath = pathname.replace(/^\/en/, '') || '/';
      }
      router.push(newPath);
    },
    [lang, pathname, router]
  );

  const toggleLang = useCallback(() => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  }, [lang, setLang]);

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
