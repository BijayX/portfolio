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
          I&apos;m Bijay Kumar Shrestha, a passionate software developer from
          Nepal. I have developed a strong affinity for both front-end and
          back-end development. I thrive on the problem-solving aspect of
          programming, relishing the satisfaction that comes with finding
          solutions to complex challenges. I&apos;ve had the opportunity to work
          on several exciting projects during my learning journey, ranging from
          personal projects to collaborative ventures. My technical skills
          encompass a wide range of programming languages and frameworks and
          technologies, including Front-end Technologies: React, Next.js,
          Bootstrap, Tailwind CSS, JavaScript. Back-end Technologies: Node.js,
          PHP, Laravel. Databases: MySQL, NoSQL. Programming Languages: Python I
          am always looking. to learn new technologies.
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
