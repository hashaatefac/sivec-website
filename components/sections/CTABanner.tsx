import Link from 'next/link';
import { Button } from '@/components/ui/Button';

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CTABanner({
  title = 'Ready to Start Your Project?',
  description = 'Our team of engineers is ready to turn your vision into reality. Reach out and let us discuss how we can help.',
  buttonLabel = 'Get in Touch',
  buttonHref = '/contact',
}: CTABannerProps) {
  return (
    <section className="bg-[#48A9A6] py-20">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-20 text-center">
        <h2 className="mb-4 text-[2rem] font-[400] leading-snug tracking-[-0.01em] text-white lg:text-[2.5rem]">
          {title}
        </h2>
        <p className="mb-8 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link href={buttonHref}>
          <Button
            variant="secondary"
            size="lg"
            withArrow
          >
            {buttonLabel}
          </Button>
        </Link>
      </div>
    </section>
  );
}
