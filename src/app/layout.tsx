import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: 'en_US',
    firstName: 'Bijay',
    lastName: 'Shrestha',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  ...(siteConfig.googleSiteVerificationId && {
    verification: { google: siteConfig.googleSiteVerificationId },
  }),
};

// Structured data so Google can tie this site to the person "Bijay Kumar
// Shrestha" (and the profiles listed in sameAs) for name searches.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: siteConfig.name,
      alternateName: siteConfig.alternateNames,
      givenName: 'Bijay',
      additionalName: 'Kumar',
      familyName: 'Shrestha',
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      jobTitle: siteConfig.jobTitle,
      description: siteConfig.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.location.city,
        addressCountry: siteConfig.location.country,
      },
      knowsAbout: [
        'Laravel',
        'PHP',
        'React',
        'Next.js',
        'Node.js',
        'TypeScript',
        'Payment integrations',
        'Stripe Connect',
        'In-app purchases',
        'Mobile app backends',
      ],
      sameAs: Object.values(siteConfig.links),
    },
    {
      '@type': 'WebSite',
      '@id': `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: 'en',
      publisher: { '@id': `${siteConfig.url}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteConfig.url}/#profilepage`,
      url: siteConfig.url,
      name: siteConfig.title,
      isPartOf: { '@id': `${siteConfig.url}/#website` },
      mainEntity: { '@id': `${siteConfig.url}/#person` },
    },
  ],
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider attribute="class">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
