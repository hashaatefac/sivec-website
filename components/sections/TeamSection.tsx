import Image from 'next/image';

const team = [
  {
    name: 'Eng. Dilshan Rathnayake',
    role: 'CEO & Founder',
    bio: 'Mechanical engineer with 20+ years of international experience in power plant design and industrial engineering. Returned from the UK in 2009 to establish SIVEC.',
    image: '/images/team-1.webp',
  },
  {
    name: 'Eng. Priyantha Wickramasinghe',
    role: 'Director, Structural Engineering',
    bio: 'Structural and civil engineer specialising in steel structures, pressure vessels, and FEA analysis. Leads all structural design projects across the firm.',
    image: '/images/team-2.webp',
  },
  {
    name: 'Eng. Kavindi Alahakoon',
    role: 'Head of Energy Management',
    bio: 'Energy systems specialist and ISO 50001 lead auditor. Pioneered SIVEC\'s energy audit practice and has delivered over 50 energy management projects across Sri Lanka.',
    image: '/images/team-3.webp',
  },
  {
    name: 'Eng. Saman Jayawardena',
    role: 'Project Management Director',
    bio: 'PMP-certified project manager with deep expertise in construction execution, contract management, and multi-disciplinary project coordination.',
    image: '/images/team-4.webp',
  },
];

export function TeamSection() {
  return (
    <section className="bg-[#F5F5F5] py-[6.25rem]">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-20">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
            The People Behind SIVEC
          </p>
          <h2 className="text-[2rem] font-[400] leading-snug tracking-[-0.01em] text-[#171717] lg:text-[2.5rem]">
            Meet our leadership team
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col rounded-xl overflow-hidden bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              <div className="relative aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="text-base font-bold text-[#171717]">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wide text-[#48A9A6]">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-[#62615A] mt-1">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
