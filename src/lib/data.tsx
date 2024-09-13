import { Icons } from '@/components/icons';

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
    title: 'AI-Driven Personal Finance Advisor',
    description:
      'Next-generation Personal Finance Tracker & Advisor.',
    technologies: ['Next.js', 'JavaScript', 'TypeScript', 'Gemini API', 'Shadcn/ui', 'Tailwind', 'Neon', 'Clerk'],
    links: {
      preview: 'https://fin-smarts.vercel.app/',
      github: 'https://github.com/BijayX/FinSmarts',
      githubApi: 'https://api.github.com/',
    },
  },
  {
    image: '/projects/foodapp.svg',
    title: 'Digital Food app',
    description: 'Online Food Ordering, with useful features.',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'Tailwind',
      'Node js ',
      'Express Js',
      'Jwt Auth',
      'Khati Payment'
    ],
    links: {
      preview: 'https://digital-food-livid.vercel.app/',
      github: 'https://github.com/BijayX/DigitalFoodsFrontend',
      githubApi: 'https://api.github.com/',
    },
  },
  {
    image: '/projects/T.svg',
    title: 'TaskTrack Pro',
    description: 'Designed to streamline task tracking and enhance productivity for teams and individuals.',
    technologies: [
      'Laravel',
      'Boostrap',
      'JavaScript',
      'HTML',
      'PHP',
      'CSS'
    ],
    links: {
      preview: 'https://github.com/BijayX/client-management-system-development',
      github: 'https://github.com/BijayX/client-management-system-development',
      githubApi: 'https://api.github.com/',
    },
  },
] as const;

export const  profesprojects = [
  {
    image: '/projects/T.svg',
    title: 'Medi-Market',
    description:
      'Market Store to Sell Medcine',
    technologies: ['Laravel', 'JavaScript', 'JQuery', 'Boostrap', 'HTML', 'CSS'],
    links: {
      preview: 'https://medi-market.com.au/',
      github: '#',
      githubApi: 'https://api.github.com/',
    },
  },
  {
    image: '/projects/T.svg',
    title: 'TU Hostel Form',
    description: 'Hostel Form for students with payment',
    technologies: [
      'Core PHP',
      'HTML',
      'JavaScript',
      'Boostrap',
      'JQuery',
      'Khati Payment'
    ],
    links: {
      preview: 'https://uch.edu.np/',
      github: '#',
      githubApi: 'https://api.github.com/',
    },
  },
  {
    image: '/projects/T.svg',
    title: 'GFM',
    description: 'Global Food Metrics',
    technologies: [
      'Laravel 11',
      'Boostrap',
      'JavaScript',
      'HTML',
      'PHP',
      'CSS',
      'Vite'
    ],
    links: {
      preview: '#',
      github: '#',
      githubApi: 'https://api.github.com/',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Freelancing',
    location: 'Remote',
    description:
      'As a freelancer, I specialized in graphic design using Figma.',
    date: '2022',
  },
  {
    title: 'Internship at Uno Tech',
    location: 'OnSite',
    description:
      'As an intern at Uno Tech, I collaborate with cross-functional teams on various projects, enhancing my software development and project management skills. My role includes designing innovative solutions, participating in code reviews, and assisting in creating user-friendly applications, providing valuable hands-on experience in a dynamic environment.',
    date: '2023',
  },
  {
    title: 'Junior Developer at Uno Tech',
    location: 'OnSite',
    description:
      'As a Junior Developer at Uno Tech, I assist in developing and maintaining web applications using modern technologies. I collaborate with senior developers to implement features, troubleshoot issues, and improve user experience while participating in code reviews and team meetings to enhance my skills in React,Laravel, PHP ,and Node.js.',
    date: 'Present',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.bootstrap className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.laravel className="size-12" /> },
  { icon: <Icons.php className="size-12" /> },
  { icon: <Icons.nodejs className="size-12" /> },
  { icon: <Icons.expressjs className="size-12" /> },
] as const;
