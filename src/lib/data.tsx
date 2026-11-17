import { Icons } from '@/components/icons';

// Single source of truth for the contact address (mailto link + contact form).
// Lives here, not in site-config, because site-config reads server-only env vars
// and would crash client components that import it.
export const contactEmail = 'sthabeejay2060@gmail.com';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Services',
    hash: '#services',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const featuredProject = {
  title: 'FlowPilot',
  tagline: 'Business automation platform for small businesses',
  image: '/projects/flowpilot.png',
  description:
    'An automation platform that welcomes new leads, chases unpaid invoices and keeps orders organised by connecting the apps a business already uses, with no technical skills needed. Owners pick a goal in plain English and FlowPilot builds the automation.',
  highlights: [
    'Visual flow builder with filters, branches, delays and approvals',
    '30+ integrations: Xero, Stripe, Shopify, HubSpot, Slack and more',
    'Background task engine with webhooks, scheduling and automatic retries',
    'Multi-tenant workspaces, roles, magic-link auth and an admin portal',
    'Encrypted credentials, daily limits and quiet hours built in',
    'Tested with Vitest and Playwright, with CI on GitHub Actions',
  ],
  technologies: [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'PostgreSQL',
    'Drizzle ORM',
    'Better Auth',
    'Turborepo',
    'Playwright',
  ],
  links: {
    // Repo is private; send visitors to the contact form instead
    contact: '#contact',
  },
} as const;

export const projectsData = [
  {
    image: '/projects/urja.svg',
    title: 'Urja — EV Charging & Booking for Nepal',
    description:
      'An EV charging platform where drivers find chargers and book slots. I built the REST API and a full admin dashboard for stations, chargers, bookings, NPR pricing and staff roles with enforced 2FA. In development.',
    technologies: [
      'Next.js 16',
      'TypeScript',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'shadcn/ui',
    ],
    links: {
      // Private repo, not launched yet
      preview: '#',
      github: '#',
      githubApi: 'https://api.github.com/repos/BijayX/urja',
    },
  },
  {
    image: '/projects/chart-donut.svg',
    title: 'FinSmarts — AI Personal Finance Advisor',
    description:
      'An AI-powered finance platform that tracks spending and delivers personalized financial advice using the Gemini API, with secure auth via Clerk.',
    technologies: [
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Gemini API',
      'Shadcn/ui',
      'Tailwind',
      'Neon',
      'Clerk',
    ],
    links: {
      preview: 'https://fin-smarts.vercel.app/',
      github: 'https://github.com/BijayX/FinSmarts',
      githubApi: 'https://api.github.com/repos/BijayX/FinSmarts',
    },
  },
  {
    image: '/projects/foodapp.svg',
    title: 'DigitalFood — Online Food Ordering',
    description:
      'A full-stack food ordering app with JWT authentication, order management, an admin dashboard, and Khalti payment integration.',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'Tailwind',
      'Node.js',
      'Express.js',
      'JWT Auth',
      'Khalti Payment',
    ],
    links: {
      preview: 'https://digital-food-livid.vercel.app/',
      github: 'https://github.com/BijayX/DigitalFoodsFrontend',
      githubApi: 'https://api.github.com/repos/BijayX/DigitalFoodsFrontend',
    },
  },
  {
    image: '/projects/T.svg',
    title: 'TaskTrack Pro — Client & Task Management',
    description:
      'A Laravel-based management system that streamlines task tracking and client workflows for teams and individuals.',
    technologies: ['Laravel', 'Bootstrap', 'JavaScript', 'HTML', 'PHP', 'CSS'],
    links: {
      preview: '#',
      github: 'https://github.com/BijayX/client-management-system-development',
      githubApi:
        'https://api.github.com/repos/BijayX/client-management-system-development',
    },
  },
] as const;

export const profesprojects = [
  {
    image: '/projects/rentsy.png',
    title: 'Rentsy',
    description:
      'A multi-vendor rental marketplace with 4,500+ items and 400+ rental partners. I built the frontend and backend: location-based search, date-based booking, checkout and automated vendor payouts via Stripe Connect.',
    technologies: ['Laravel', 'React', 'MySQL', 'Stripe Connect', 'AWS S3'],
    links: {
      preview: 'https://rentsy.com.au/',
      github: '#',
      githubApi: 'https://api.github.com/',
    },
  },
  {
    image: '/projects/widi.png',
    title: 'WIDI (When I Die Initiate)',
    description:
      'A digital legacy platform that securely stores documents and memories and releases them to loved ones after a verified death. I built Stripe subscription plans, a future-dated message scheduler and encrypted vault storage.',
    technologies: ['Laravel', 'Next.js', 'MySQL', 'Stripe', 'AWS S3'],
    links: {
      preview: 'https://widiapp.com.au/',
      github: '#',
      githubApi: 'https://api.github.com/',
    },
  },
  {
    image: '/projects/goodsam.png',
    title: 'Good Sam',
    description:
      'A community kindness app that connects people in need with nearby helpers. Built the admin panel and backend APIs for users, subscriptions, and notifications.',
    technologies: ['Laravel', 'PHP', 'REST API', 'MySQL'],
    links: {
      preview: 'https://goodsamact.com/',
      github: '#',
      githubApi: 'https://api.github.com/',
    },
  },
  {
    image: '/projects/becomesecure.png',
    title: 'Become Secure',
    description:
      'An attachment-theory app for iOS and Android. I led the backend and mobile refactor, shipped 20+ releases, and integrated In-App Purchases for weekly, monthly, yearly and lifetime plans.',
    technologies: [
      'Laravel API',
      'React Native',
      'In-App Purchases',
      'Firebase',
    ],
    links: {
      preview: 'https://www.becomesecure.com.au/',
      github: '#',
      githubApi: 'https://api.github.com/',
    },
  },
  {
    image: '/projects/hookedup.png',
    title: 'Hooked Up',
    description:
      'A social platform for hunting, fishing and camping enthusiasts. I built the complete Laravel backend: matching, events, forums, real-time chat, social feed and IAP premium unlocks.',
    technologies: ['Laravel', 'JWT', 'Firebase', 'In-App Purchases', 'MySQL'],
    links: {
      preview: 'https://hookedupapp.com/',
      github: '#',
      githubApi: 'https://api.github.com/',
    },
  },
] as const;

export const servicesData = [
  {
    icon: <Icons.code className="size-6" />,
    title: 'Web Applications',
    description:
      'Custom web apps with Laravel, React and Next.js, from MVP to production: marketplaces, booking systems and SaaS dashboards.',
  },
  {
    icon: <Icons.smartphone className="size-6" />,
    title: 'Mobile App Backends & APIs',
    description:
      'Secure REST APIs that power iOS and Android apps, covering auth, user data, real-time messaging and push notifications.',
  },
  {
    icon: <Icons.creditCard className="size-6" />,
    title: 'Payments & Subscriptions',
    description:
      'Stripe Connect marketplaces and payouts, subscription billing, App Store and Google Play in-app purchases, and Plaid/Basiq banking data. I have integrated 10+ payment systems in production.',
  },
  {
    icon: <Icons.layoutDashboard className="size-6" />,
    title: 'Admin Panels & Internal Tools',
    description:
      'Admin dashboards for managing users, content, orders and subscriptions, so your team can run the business without a developer.',
  },
] as const;

export const workProcess = [
  'Clear scope and estimate before any work starts',
  'Regular written progress updates and demo videos',
  'Clean, documented code in your repository, so you own everything',
  'Async-friendly, with overlap for Australian and European working hours',
] as const;

export const experiencesData = [
  {
    title: 'Freelance Web & UI Designer',
    location: 'Remote',
    description:
      'Designed user interfaces and brand assets in Figma for small business clients, translating requirements into clean, modern designs and building a foundation in user-centered thinking.',
    date: '2022',
  },
  {
    title: 'Software Developer Intern — Uno Technology',
    location: 'Kathmandu, Nepal',
    description:
      'Collaborated with cross-functional teams to build web applications that improved internal workflows. Designed and implemented RESTful APIs for system interoperability and mobile app support, participated in code reviews, and delivered features on schedule in an agile environment.',
    date: '2023',
  },
  {
    title: 'Full Stack Developer — Uno Technology',
    location: 'Kathmandu, Nepal · Clients in Australia & Nepal',
    description:
      'Own end-to-end delivery of web and mobile platforms (Laravel/Node back ends, React/Next.js front ends) for apps with thousands of active users. Integrated 10+ payment systems including Stripe Connect, In-App Purchases, Plaid and Basiq; built real-time chat, push notifications and video calling; led refactoring and shipped 20+ app releases; deployed and maintained production apps on AWS.',
    date: 'Oct 2023 - Present',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.bootstrap className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.laravel className="size-12" /> },
  { icon: <Icons.php className="size-12" /> },
  { icon: <Icons.nodejs className="size-12" /> },
  { icon: <Icons.expressjs className="size-12" /> },
  { icon: <Icons.git className="size-12" /> },
  { icon: <Icons.github className="size-12" /> },
  { icon: <Icons.githubActions className="size-12" /> },
] as const;
