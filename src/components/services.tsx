'use client';

import { motion } from 'framer-motion';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { servicesData, workProcess } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export const Services = () => {
  const { ref } = useSectionInView('Services', 0.5);

  return (
    <section ref={ref} id="services" className="my-10 w-full scroll-mt-28">
      <SectionHeading
        heading="What I Can Build For You"
        content="Freelance and contract work for startups, agencies and growing businesses."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {servicesData.map(({ icon, title, description }, index) => (
          <motion.div
            key={title}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="bg-secondary flex gap-4 rounded p-5"
          >
            <div className="bg-muted flex size-12 shrink-0 items-center justify-center rounded-full">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-muted-foreground mt-1">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-secondary mx-auto mt-8 max-w-2xl rounded p-5">
        <h3 className="mb-3 text-center font-medium">How I work</h3>
        <ul className="space-y-2">
          {workProcess.map((item) => (
            <li key={item} className="text-muted-foreground flex gap-2">
              <Icons.check className="mt-0.5 size-5 shrink-0 text-green-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
