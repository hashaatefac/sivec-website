import { Shield, Leaf, Award } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Engineering Integrity',
    description:
      'We hold ourselves to the highest technical standards. Every calculation is verified, every design is validated. Our clients rely on us to get it right — and we take that seriously.',
  },
  {
    icon: Leaf,
    title: 'Sustainability First',
    description:
      'Our slogan is not just words. We actively design for energy efficiency, carbon reduction, and long-term environmental responsibility in every project we take on.',
  },
  {
    icon: Award,
    title: 'Client Partnership',
    description:
      "We see ourselves as an extension of our clients' teams. We are transparent, communicative, and focused on outcomes — not just deliverables.",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-[#0D0F14] py-[6.25rem]">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-20">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
            What We Stand For
          </p>
          <h2 className="text-[2rem] font-[400] leading-snug tracking-[-0.01em] text-white lg:text-[2.5rem]">
            Our core values
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="flex flex-col gap-5 rounded-xl p-8 bg-[#1A1E28] border border-white/[0.08] transition-all duration-300 hover:border-[#48A9A6]/30"
              >
                <div className="w-12 h-12 rounded-lg bg-[#48A9A6]/10 flex items-center justify-center text-[#48A9A6]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-[400] text-white">{value.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
