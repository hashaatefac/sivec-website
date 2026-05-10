import Link from 'next/link';
import { Cpu, BarChart3, Zap, HardHat, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    eyebrow: '01',
    title: 'Engineering Designs',
    description:
      'From mini-hydro turbines to pressure vessels and finite element analysis — precision design for every engineering challenge.',
    href: '/services#engineering-designs',
    image: '/images/service-overview-1.webp',
  },
  {
    icon: BarChart3,
    eyebrow: '02',
    title: 'Project Management',
    description:
      'End-to-end project delivery covering feasibility studies, planning, budgeting, and commercial contract management.',
    href: '/services#project-management',
    image: '/images/service-2.webp',
  },
  {
    icon: Zap,
    eyebrow: '03',
    title: 'Energy Management',
    description:
      'Detailed energy audits, ISO 50001 compliance, and monitoring systems that optimise energy use and reduce costs.',
    href: '/services#energy-management',
    image: '/images/service-overview-3.webp',
  },
  {
    icon: HardHat,
    eyebrow: '05',
    title: 'Engineering Construction',
    description:
      'From design to build — construction execution and monitoring management for industrial and civil projects.',
    href: '/services#construction',
    image: '/images/service-5.webp',
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-[#0D0F14] py-[6.25rem]">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#48A9A6]/5 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1360px] px-5 lg:px-20">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
              What We Do
            </p>
            <h2 className="text-[2rem] font-[400] leading-snug tracking-[-0.01em] text-white lg:text-[2.5rem]">
              Comprehensive engineering services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#48A9A6] hover:text-[#8DCFCD] transition-colors"
          >
            View all services <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col gap-5 rounded-xl p-7 bg-[#1A1E28] border border-white/[0.08] transition-all duration-300 hover:border-[#48A9A6]/40 hover:shadow-[0_8px_32px_rgba(72,169,166,0.12)] hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#48A9A6]/10 flex items-center justify-center text-[#48A9A6]">
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                {/* Eyebrow */}
                <p className="text-xs font-bold tracking-widest uppercase text-[#48A9A6]">
                  {service.eyebrow}
                </p>

                {/* Title */}
                <h3 className="text-xl font-[400] text-white leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-sm font-medium text-[#48A9A6] group-hover:gap-3 transition-all duration-200">
                  Learn more <ArrowRight size={14} strokeWidth={1.5} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
