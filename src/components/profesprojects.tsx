'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { profesprojects } from '@/lib/data';

type TProject = (typeof profesprojects)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const ProjectPro = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="bg-secondary flex flex-col items-center rounded p-5 text-center"
    >
      <div className="bg-muted flex size-16 items-center justify-center rounded-full p-3">
        <Image
          src={image}
          alt={`${title} logo`}
          width={64}
          height={64}
          className="max-h-full w-auto object-contain"
        />
      </div>
      <h3 className="my-2 text-lg font-medium">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="my-3 flex flex-wrap justify-center gap-2">
        {technologies.map((tech) => (
          <span className="bg-muted rounded-full px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto flex pt-2">
        {(links.preview as string) !== '#' && (
          <Button variant="outline" asChild className="px-5">
            <a
              href={links.preview}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`visit ${title}`}
            >
              <Icons.preview className="mr-2 size-5" />
              Visit site
            </a>
          </Button>
        )}
        {(links.github as string) !== '#' && (
          <Button variant="outline" asChild className="ml-2 px-5">
            <a href={links.github} aria-label="github">
              <Icons.githubOutline className="size-5" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
};
