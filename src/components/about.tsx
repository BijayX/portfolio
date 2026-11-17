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
          I'm Bijay, a full-stack developer from Nepal with 3+ years of building
          and shipping production web and mobile apps, mostly for Australian
          businesses. I've built a multi-vendor rental marketplace with 400+
          partners, subscription apps on the App Store and Google Play, and the
          backends behind social and community platforms.
        </p>
        <p className="mb-4">
          My specialty is the hard, money-related parts: I&apos;ve integrated
          10+ payment and financial systems in production, including Stripe
          Connect payouts, subscriptions, in-app purchases, Plaid and Basiq.
          I&apos;m comfortable owning a feature from the database schema to the
          deployed UI, and I care about clean, maintainable code that the next
          developer can pick up.
        </p>
        <p className="mb-4">
          Outside my day job at Uno Technology, I built FlowPilot, a
          multi-tenant automation SaaS with a visual flow builder, a background
          task engine and 30+ integrations.
        </p>
        <p>
          I&apos;m available for remote contract and freelance work. If you need
          a dependable developer who communicates clearly and ships, let&apos;s
          talk.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
