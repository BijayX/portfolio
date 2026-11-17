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

export const projectsData = [
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
      'An Australian rental marketplace where users hire anything from party equipment to tools, with search, instant booking, and supplier portals.',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'MySQL'],
    links: {
      preview: 'https://rentsy.com.au/',
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
      'An attachment-theory learning app for iOS and Android, featuring quizzes, progress tracking, and a growth journal, all powered by a REST API.',
    technologies: ['Laravel', 'PHP', 'REST API', 'MySQL'],
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
      'An Australian outdoor adventure app for hunting, fishing, and camping, with trip planning, cost sharing, real-time messaging, and member subscriptions.',
    technologies: ['Laravel', 'PHP', 'REST API', 'MySQL'],
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
      'Subscription billing, in-app purchase verification and payment gateway integrations, done correctly and securely.',
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
    title: 'Junior Software Developer — Uno Technology',
    location: 'Kathmandu, Nepal',
    description:
      "Develop and maintain production web applications using Laravel, PHP, React, and Node.js. Built a comprehensive admin panel for user management, integrated the Khalti payment gateway for secure transactions, and shipped features for Tribhuvan University's certificate portal and hostel application system used by real students.",
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
