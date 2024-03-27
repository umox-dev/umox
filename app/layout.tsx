import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PageAnimation, PageTransitions } from '@/components/transitions';
import Navbar from '@/components/layout/Navbar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Umox',
  description: 'Umox App',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTransitions>
          <Navbar />
          <PageAnimation variants={{ enter: { opacity: 1 }, exit: { opacity: 0 } }}>
            {children}
          </PageAnimation>
        </PageTransitions>
      </body>
    </html>
  );
}
