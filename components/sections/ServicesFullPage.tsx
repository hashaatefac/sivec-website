import Image from 'next/image';
import {
  Cpu,
  BarChart3,
  Zap,
  ClipboardList,
  HardHat,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    id: 'engineering-designs',
    number: '01',
    icon: Cpu,
    title: 'Engineering Designs',
    image: '/images/service-1.webp',
    intro:
      'Our engineering design team delivers technically rigorous solutions across mechanical, structural, and civil disciplines — from initial concept to construction-ready drawings.',
    categories: [
      {
        title: 'Power & Energy Designs',
        items: [
          'Mini hydro power plant design works including turbine, generator, and auxiliaries',
          'Solar power plant design works',
        ],
      },
      {
        title: 'Tank & Vessel Design',
        items: [
          'Fuel storage tank design (according to API 650) and tank foundation design',
          'Pressure vessel design',
          'Design of floating structures on water',
        ],
      },
      {
        title: 'Pipeline & Structural',
        items: [
          'Pressure pipeline design and welding work (WPS, PQR and quality reports)',
          'Design of water control gates',
          'Steel structures design',
        ],
      },
      {
        title: 'Finite Element Analysis (FEA)',
        items: [
          'FEA analysis of structures',
          'Failure analysis of mechanical structures',
        ],
      },
      {
        title: 'Other Design Services',
        items: [
          'Architectural design and drawings',
          'Mechanical and structural drawings 2D & 3D',
          '3D modelling and high-end visualisation',
        ],
      },
    ],
  },
  {
    id: 'project-management',
    number: '02',
    icon: BarChart3,
    title: 'Project Management',
    image: '/images/service-2.webp',
    intro:
      'We manage the full lifecycle of engineering projects — from early feasibility through to completion — ensuring they are delivered on time, within budget, and to specification.',
    categories: [
      {
        title: 'Services Offered',
        items: [
          'Conceptual and feasibility studies',
          'Design and implementation / engineering',
          'Project management and project control systems',
          'Project planning & budgeting',
          'Construction execution and monitoring management',
          'Commercial and contract management',
        ],
      },
    ],
  },
  {
    id: 'energy-management',
    number: '03',
    icon: Zap,
    title: 'Energy Management & Carbon Footprint',
    image: '/images/service-3.webp',
    intro:
      'Our energy audit services maximise profit, sustainability, and operational performance. We improve energy cost optimisation, pollution control, safety, and operating practices.',
    categories: [
      {
        title: 'Audit Types',
        items: [
          'Preliminary energy audit through site walkthrough and spot measurement',
          'Detailed energy audit with full energy balance, costing, safety analysis, and loss identification',
          'Energy measurements through precise equipment',
          'Continuous monitoring via auditing or energy monitoring systems',
        ],
      },
      {
        title: 'Energy Management Systems',
        items: [
          'Measure critical parameters with high accuracy and consistency',
          'Record energy consumption and identify optimisation opportunities',
          'Optimise energy use in an efficient way',
          'Online monitoring and remote control capabilities',
          'Measure efficiency and energy output',
        ],
      },
      {
        title: 'Training & Compliance',
        items: [
          'Energy management training for maintenance and operations staff',
          'ISO 50001:2011 training programme introduction',
          'Continuous improvement in production efficiency',
          'Identifying cost-saving opportunities in energy efficiency',
          'Pollution control through energy-saving programmes',
          'Fast-payback opportunity identification',
        ],
      },
    ],
  },
  {
    id: 'estimation-boqs',
    number: '04',
    icon: ClipboardList,
    title: 'Project Estimation & BOQs',
    image: '/images/service-4.webp',
    intro:
      'Accurate cost estimation and detailed bills of quantities are the foundation of any successful project. Our quantity surveyors and engineers produce reliable estimates that support sound investment decisions.',
    categories: [
      {
        title: 'What We Provide',
        items: [
          'Detailed bills of quantities (BOQs) for civil, mechanical, and electrical works',
          'Preliminary cost estimates at feasibility stage',
          'Trade package breakdowns for tender procurement',
          'Value engineering and cost optimisation advice',
          'Cash flow projections for project planning',
        ],
      },
    ],
  },
  {
    id: 'construction',
    number: '05',
    icon: HardHat,
    title: 'Engineering Construction',
    image: '/images/service-5.webp',
    intro:
      'SIVEC executes engineering construction projects with the same precision that defines our design work. From steel structures to pipeline installations, we build to specification.',
    categories: [
      {
        title: 'Construction Capabilities',
        items: [
          'Pre-fabricated steel building construction and erection',
          'Pipeline installation and pressure testing',
          'Structural steel fabrication and erection',
          'Industrial facility construction and fit-out',
          'Construction monitoring and quality assurance',
          'As-built documentation and handover',
        ],
      },
    ],
  },
];

export function ServicesFullPage() {
  return (
    <div className="bg-white">
      {services.map((service, index) => {
        const Icon = service.icon;
        const isLight = index % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-[6.25rem] ${isLight ? 'bg-white' : 'bg-[#F5F5F5]'}`}
          >
            <div className="mx-auto max-w-[1360px] px-5 lg:px-20">
              <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${!isLight ? 'lg:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#48A9A6] text-white">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center gap-6 ${!isLight ? 'lg:order-1' : ''}`}>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
                      Service {service.number}
                    </p>
                    <h2 className="text-[1.75rem] font-[400] leading-snug tracking-[-0.01em] text-[#171717] lg:text-[2.25rem]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-base leading-relaxed text-[#62615A]">{service.intro}</p>

                  <div className="flex flex-col gap-6">
                    {service.categories.map((cat) => (
                      <div key={cat.title}>
                        {service.categories.length > 1 && (
                          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#171717]">
                            {cat.title}
                          </p>
                        )}
                        <ul className="flex flex-col gap-2">
                          {cat.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-[#62615A]">
                              <ChevronRight
                                size={14}
                                strokeWidth={2}
                                className="mt-0.5 shrink-0 text-[#48A9A6]"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
