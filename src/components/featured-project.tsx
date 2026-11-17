'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { featuredProject } from '@/lib/data';

export const FeaturedProject = () => {
  const { ref } = useSectionInView('Projects', 0.4);
  const {
    title,
    tagline,
    image,
    description,
    highlights,
    technologies,
    links,
  } = featuredProject;

  return (
    <section ref={ref} id="projects" className="my-10 w-full scroll-mt-28">
      <SectionHeading
        heading="Featured Project"
        content="A full product I designed and engineered end-to-end."
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-secondary overflow-hidden rounded"
      >
        <Image
          src={image}
          alt={`${title} dashboard`}
          width={1440}
          height={1080}
          className="w-full border-b"
          priority={false}
        />
        <div className="p-6">
          <h3 className="text-2xl font-medium">{title}</h3>
          <p className="text-muted-foreground mt-1 font-medium">{tagline}</p>
          <p className="text-muted-foreground mt-4">{description}</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="text-muted-foreground flex gap-2">
                <Icons.check className="mt-0.5 size-5 shrink-0 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
          <div className="my-5 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                className="bg-muted rounded-full px-3 py-1 text-sm"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
          <Button variant="outline" asChild className="px-5">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} source code on GitHub`}
            >
              <Icons.githubOutline className="mr-2 size-5" />
              View source &amp; screenshots
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
