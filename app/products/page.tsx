import { PageHero } from '@/components/sections/PageHero';
import { ProductsGrid } from '@/components/sections/ProductsGrid';
import { CTABanner } from '@/components/sections/CTABanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products — SIVEC Engineering',
  description:
    'Browse SIVEC Engineering\'s comprehensive product range — pumps, tanks, valves, boilers, generators, energy management systems, and more.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Industrial equipment for every application"
        description="SIVEC supplies and installs a comprehensive range of industrial products sourced from trusted manufacturers, backed by our expert engineering team."
        backgroundImage="/images/products-hero.webp"
      />
      <ProductsGrid />
      <CTABanner
        title="Looking for a specific product?"
        description="Our team can source, specify, and install the right equipment for your application. Get in touch and we'll find the solution."
        buttonLabel="Request a Quote"
      />
    </>
  );
}
