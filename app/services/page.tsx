import { PageHero } from '@/components/sections/PageHero';
import { ServicesFullPage } from '@/components/sections/ServicesFullPage';
import { CTABanner } from '@/components/sections/CTABanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — SIVEC Engineering',
  description:
    'Explore SIVEC Engineering\'s full range of services: engineering design, project management, energy management, estimation, and construction.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Engineering services across the full project lifecycle"
        description="From initial feasibility studies and design through to construction and energy management — SIVEC provides the complete engineering service your project needs."
        backgroundImage="/images/services-hero.webp"
      />
      <ServicesFullPage />
      <CTABanner
        title="Have a project in mind?"
        description="Talk to our engineers today and find out how SIVEC can help you deliver it on time and on budget."
        buttonLabel="Start a Conversation"
      />
    </>
  );
}
