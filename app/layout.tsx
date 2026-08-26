import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Pura Via — Technical Product Case Study',
  description: 'An evidence-led case study of a validation-stage coordination prototype for shared water transportation.',
  authors: [{ name: 'Steven Finston' }],
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    title: 'Pura Via — Technical Product Case Study',
    description: 'Coordination before operation: an evidence-led logistics product case study.',
    images: [{ url: '/og.png', width: 1733, height: 907, alt: 'Pura Via — Coordination before operation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pura Via — Technical Product Case Study',
    description: 'Coordination before operation: an evidence-led logistics product case study.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
