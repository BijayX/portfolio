'use client';

import { motion } from 'framer-motion';


import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { profesprojects } from '@/lib/data';
import { ProjectPro } from './profesprojects';

type TProps = {
  starsCount: number[];
};

export const ProProjects = ({ starsCount }: TProps) => {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="Professional Projects"
          content="Projects I worked on collobration with Teams."
        />
      </motion.div>
      <div className="flex flex-col gap-8 md:flex-row">
        {profesprojects.map((project, index) => (
          <ProjectPro
            key={project.title}
            project={project}
            index={index}
            starsCount={starsCount}
          />
        ))}
      </div>
    </section>
  );
};
