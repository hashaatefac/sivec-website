import { Hero } from '@/components/sections/Hero';
import { StatsSection } from '@/components/sections/StatsSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { CTABanner } from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesOverview />
      <CTABanner />
    </>
  );
}
