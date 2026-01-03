import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'EcoHeat – Strona firmowa',
  description: 'Nowoczesne rozwiązania grzewcze – EcoHeat.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {/* Sticky header */}
        <div className="sticky top-0 z-50">
          <TopBar />
          <Navbar />
        </div>

        {/* Main bez ograniczenia szerokości (hero może być full width) */}
        <main className="min-h-[80vh]">
          {children}
        </main>

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
