import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Newsletter from '@/components/newsletter';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Paperweb - The Intelligence Web',
  description: 'AURA Framework: Advanced Unified Reasoning Architecture with intelligent datasets, extensions, and reasoning engines.',
  keywords: 'AI, reasoning, AURA, dataset, intelligence, RAG, chain-of-thought',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Paperweb - The Intelligence Web',
    description: 'AURA Framework for advanced AI reasoning and intelligence',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
