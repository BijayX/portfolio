import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Bijay Kumar Shrestha | Full Stack Developer',
  description:
    'Full stack developer from Kathmandu, Nepal, specializing in React, Next.js, Laravel, and Node.js. I build fast, scalable web applications — open to job opportunities and freelance projects.',
  keywords: [
    'Bijay Kumar Shrestha',
    'Full stack developer',
    'Software developer Nepal',
    'Kathmandu',
    'React',
    'Next.js',
    'Laravel',
    'Node.js',
    'PHP',
    'Web developer for hire',
    'Freelance developer',
    'Web development',
    'JavaScript',
    'TypeScript',
    'Portfolio',
    'Web applications',
  ],
  url: env.SITE_URL || 'https://bijayastha.com.np',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
