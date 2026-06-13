'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { themes, type ThemeId, getThemeCSS } from '@/lib/theme';

interface ThemeContextType {
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeId: 'blue',
  setThemeId: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeIdState] = useState<ThemeId>('blue');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') as ThemeId | null;
    if (saved && themes[saved]) {
      setThemeIdState(saved);
    }
  }, []);

  const setThemeId = useCallback((id: ThemeId) => {
    setThemeIdState(id);
    localStorage.setItem('theme', id);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const theme = themes[themeId];
    const css = getThemeCSS(theme);
    const root = document.documentElement;
    css.split(';').forEach((rule) => {
      const trimmed = rule.trim();
      if (!trimmed) return;
      const [key, value] = trimmed.split(':').map((s) => s.trim());
      if (key && value) {
        root.style.setProperty(key, value);
      }
    });
  }, [themeId, mounted]);

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}
