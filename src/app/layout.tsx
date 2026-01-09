import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'EcoHeat Technic – nowoczesne instalacje grzewcze',
  description:
    'EcoHeat Technic – projektowanie i montaż pomp ciepła, ogrzewania podłogowego, rekuperacji, klimatyzacji oraz instalacji sanitarnych.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="sticky top-0 z-50">
          <TopBar />
          <Navbar />
        </div>

        <main className="min-h-[80vh]">{children}</main>

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
