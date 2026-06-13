import { LangProvider } from '@/lib/LangContext';
import { ThemeProvider } from '@/lib/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          {/* Fixed theme switcher */}
          <div className="fixed bottom-4 right-4 z-40">
            <ThemeSwitcher />
          </div>
        </div>
      </LangProvider>
    </ThemeProvider>
  );
}
