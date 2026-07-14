'use client';

import { motion } from 'framer-motion';

import { ProjectPro } from './profesprojects';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { profesprojects } from '@/lib/data';

export const ProProjects = () => {
  const { ref } = useSectionInView('Projects');

  return (
    <section ref={ref} className="my-10 scroll-mt-28">
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
          content="Production applications I've built and shipped for real clients as part of a team."
        />
      </motion.div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {profesprojects.map((project, index) => (
          <ProjectPro key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
