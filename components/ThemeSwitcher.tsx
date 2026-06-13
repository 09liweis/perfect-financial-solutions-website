'use client';

import React from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { themes } from '@/lib/theme';

export default function ThemeSwitcher() {
  const { themeId, setThemeId } = useTheme();

  return (
    <div className="flex items-center gap-1.5 bg-gray-100 rounded-lg p-1">
      {(Object.keys(themes) as Array<keyof typeof themes>).map((id) => {
        const theme = themes[id];
        const isActive = themeId === id;
        return (
          <button
            key={id}
            onClick={() => setThemeId(id)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
              isActive
                ? 'bg-white text-[var(--color-primary)] shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            title={theme.name}
          >
            <span
              className="w-3 h-3 rounded-full border border-gray-300"
              style={{ backgroundColor: theme.colors.primary }}
            />
            <span className="hidden sm:inline">{theme.label}</span>
          </button>
        );
      })}
    </div>
  );
}
