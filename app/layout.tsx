import type { Metadata, Viewport } from 'next';
import './globals.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: 'Ember - Discord moderation & utility', template: '%s | Ember' },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Ember',
    title: 'Ember - Discord moderation & utility',
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: 'summary',
    title: 'Ember - Discord moderation & utility',
    description: siteConfig.description,
  },
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
};

export const viewport: Viewport = { themeColor: '#0b0908' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
