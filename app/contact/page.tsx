import { PageHero } from '@/components/sections/PageHero';
import { ContactSection } from '@/components/sections/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — SIVEC Engineering',
  description:
    'Get in touch with SIVEC Engineering in Kadawatha, Sri Lanka. We\'re ready to discuss your project and provide expert engineering guidance.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's talk about your engineering challenge"
        description="Our team is ready to listen, advise, and help you move your project forward. Reach out today."
        backgroundImage="/images/contact-hero.webp"
      />
      <ContactSection />
    </>
  );
}
