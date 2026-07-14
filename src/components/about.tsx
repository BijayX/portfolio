'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I'm Bijay Kumar Shrestha, a full stack developer from Kathmandu,
          Nepal, with a Bachelor's degree in Information Technology. I work
          across the entire stack &mdash; building responsive front-ends,
          designing RESTful APIs, and modeling databases &mdash; with a strong
          focus on writing clean, maintainable code.
        </p>
        <p className="mb-4">
          I currently work as a software developer at Uno Technology, where I
          build and maintain production web applications. My core stack includes
          React, Next.js, Node.js, Laravel, and PHP, backed by MySQL and
          PostgreSQL.
        </p>
        <p>
          Whether you're a company looking for a dependable developer or a
          client with a product idea, I bring end-to-end execution &mdash; from
          first mockup to deployed application. Let's build something together.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
