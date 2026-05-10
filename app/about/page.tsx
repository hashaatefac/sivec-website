import { PageHero } from '@/components/sections/PageHero';
import { CompanyStory } from '@/components/sections/CompanyStory';
import { ValuesSection } from '@/components/sections/ValuesSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { CTABanner } from '@/components/sections/CTABanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — SIVEC Engineering',
  description:
    'Learn about SIVEC Engineering — our story, our values, and the expert team behind Sri Lanka\'s trusted engineering firm.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SIVEC Engineering"
        title="Engineering with purpose, built on trust"
        description="A team of passionate engineers, SIVEC has grown into one of Sri Lanka's most respected engineering firms — delivering precision, sustainability, and results."
        backgroundImage="/images/about-hero.webp"
      />
      <CompanyStory />
      <ValuesSection />
      <TeamSection />
      <CTABanner
        title="Work with a team you can trust"
        description="Whether it's a complex engineering design or a full project management engagement, SIVEC brings expertise and integrity to every brief."
      />
    </>
  );
}
