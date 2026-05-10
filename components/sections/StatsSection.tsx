const stats = [
  { number: '15+', label: 'Years', description: 'of engineering excellence' },
  { number: '200+', label: 'Projects', description: 'successfully delivered' },
  { number: '5', label: 'Domains', description: 'of specialist expertise' },
  { number: '30+', label: 'Engineers', description: 'across all disciplines' },
];

export function StatsSection() {
  return (
    <section className="bg-[#F5F5F5] py-[6.25rem]">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6] mb-3">
            Our Track Record
          </p>
          <h2 className="text-[2rem] font-[400] leading-snug tracking-[-0.01em] text-[#171717]">
            Numbers that speak for themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px bg-[#E8E8E8] rounded-xl overflow-hidden lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 bg-[#F5F5F5] px-8 py-10">
              <span className="text-[4rem] font-[300] leading-none tracking-[-0.03em] text-[#48A9A6] lg:text-[5rem]">
                {stat.number}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#62615A]">
                {stat.label}
              </span>
              <span className="text-base leading-snug text-[#171717]">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
