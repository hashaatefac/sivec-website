import Image from 'next/image';
import { presenceCompanies } from '@/lib/presence';

export function CompanyStory() {
  return (
    <section className="bg-white py-[6.25rem]">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-20">
        {/* Intro */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 mb-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
              Our Story
            </p>
            <h2 className="mb-6 text-[2rem] font-[400] leading-snug tracking-[-0.01em] text-[#171717] lg:text-[2.5rem]">
              Built on a passion for engineering that makes a difference
            </h2>
            <p className="text-base leading-relaxed text-[#62615A] mb-4">
              SIVEC Engineering was founded with a simple but powerful belief: that Sri Lanka deserves
              engineering services of the same calibre found anywhere in the world. Our founders had
              each spent years working on international projects across Europe and the Middle East,
              determined to raise the bar.
            </p>
            <p className="text-base leading-relaxed text-[#62615A]">
              Today, from our base in Kadawatha, we serve clients across Sri Lanka and the region,
              delivering engineering solutions that are technically rigorous, commercially practical,
              and always aligned with a sustainable future.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto">
            <Image
              src="/images/company-story.webp"
              alt="SIVEC Engineering team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Our Presence */}
        <div>
          <p className="mb-10 text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
            Our Presence
          </p>
          <div className="grid gap-px bg-[#E8E8E8] rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
            {presenceCompanies.map((company, i) => {
              const [name, country] = company.split(' - ');
              return (
                <div key={company} className="flex flex-col gap-4 bg-white px-8 py-10">
                  <span className="text-[3rem] font-[300] leading-none tracking-[-0.03em] text-[#48A9A6]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-base font-bold text-[#171717]">{name}</h3>
                  {country && <p className="text-sm leading-relaxed text-[#62615A]">{country}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
