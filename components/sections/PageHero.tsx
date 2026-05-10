interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  backgroundImage = '/images/hero-main.webp',
}: PageHeroProps) {
  return (
    <section
      className="relative flex items-center overflow-hidden pt-[4.5rem] min-h-[40vh] lg:min-h-[50vh]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(13,15,20,0.80) 0%, rgba(13,15,20,0.70) 60%, rgba(13,15,20,0.95) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Teal glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/3 h-[400px] w-[400px] rounded-full bg-[#48A9A6]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1360px] px-5 lg:px-20 py-20 lg:py-28">
        {eyebrow && (
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
            {eyebrow}
          </p>
        )}
        <h1 className="text-[2.5rem] font-[400] leading-[1.15] tracking-[-0.02em] text-white lg:text-[3.5rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/60">
            {description}
          </p>
        )}
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0D0F14] to-transparent"
      />
    </section>
  );
}
