import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const vercelOrigin =
  process.env.VERCEL_ENV === 'production'
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL
    : process.env.VERCEL_URL;
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL
  ?? (vercelOrigin ? `https://${vercelOrigin}` : 'http://localhost:3000');
const isPublicProduction = process.env.VERCEL_ENV === 'production'
  || Boolean(process.env.NEXT_PUBLIC_SITE_URL);

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'Pura Via — Technical Product Case Study',
  description: 'An evidence-led case study of a validation-stage coordination prototype for shared water transportation.',
  authors: [{ name: 'Steven Finston' }],
  alternates: isPublicProduction ? { canonical: '/' } : undefined,
  robots: isPublicProduction
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: 'website',
    url: '/',
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
