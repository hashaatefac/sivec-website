import { Package } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Pumps',
    description: 'Industrial centrifugal, submersible, and chemical pumps for a wide range of fluid handling applications.',
    image: '/images/product-1.webp',
  },
  {
    id: 2,
    name: 'RTP Tanks',
    description: 'Reinforced thermoplastic pipe tanks designed for chemical and fuel storage with superior corrosion resistance.',
    image: '/images/product-2.webp',
  },
  {
    id: 3,
    name: 'Valves',
    description: 'Gate, ball, butterfly, and check valves for industrial piping systems across all pressure classes.',
    image: '/images/product-3.webp',
  },
  {
    id: 4,
    name: 'Boilers',
    description: 'Steam and hot water boilers for industrial process heating, with capacities to suit small and large facilities.',
    image: '/images/product-4.webp',
  },
  {
    id: 5,
    name: 'Floating Roof',
    description: 'External and internal floating roof systems for fuel storage tanks, compliant with API standards.',
    image: '/images/product-5.webp',
  },
  {
    id: 6,
    name: 'Energy Management Systems',
    description: 'Smart energy monitoring and management systems for real-time tracking, reporting, and optimisation.',
    image: '/images/product-6.webp',
  },
  {
    id: 7,
    name: 'AC Units',
    description: 'Commercial and industrial air conditioning systems including split units, VRF systems, and chillers.',
    image: '/images/product-7.webp',
  },
  {
    id: 8,
    name: 'Generators',
    description: 'Diesel and gas-powered generators for standby, prime, and continuous power applications.',
    image: '/images/product-8.webp',
  },
  {
    id: 9,
    name: 'Fuel Dispensers',
    description: 'Commercial-grade fuel dispensing equipment for forecourts, factories, and fleet depots.',
    image: '/images/product-9.webp',
  },
  {
    id: 10,
    name: 'Flow Meters',
    description: 'Ultrasonic, electromagnetic, and turbine flow meters for precise liquid and gas measurement.',
    image: '/images/product-10.webp',
  },
  {
    id: 11,
    name: 'Domestic RO Plants (Mini RO)',
    description: 'Compact reverse osmosis water purification systems for households and small commercial premises.',
    image: '/images/product-11.webp',
  },
  {
    id: 12,
    name: 'Pre-Fabricated Steel Buildings',
    description: 'Factory-fabricated steel structures for warehouses, workshops, and industrial facilities — fast to erect and cost-effective.',
    image: '/images/product-12.webp',
  },
  {
    id: 13,
    name: 'Fire Equipment & Pumps',
    description: 'Complete fire protection systems including fire pumps, sprinklers, hydrants, and extinguisher supplies.',
    image: '/images/product-13.webp',
  },
  {
    id: 14,
    name: 'Cathodic Protection',
    description: 'Cathodic protection systems for pipelines, tanks, and marine structures to prevent corrosion and extend service life.',
    image: '/images/product-14.webp',
  },
];

export function ProductsGrid() {
  return (
    <section className="bg-[#F5F5F5] py-[6.25rem]">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
            Our Product Range
          </p>
          <h2 className="text-[2rem] font-[400] leading-snug tracking-[-0.01em] text-[#171717]">
            Industrial products for every application
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#62615A] max-w-xl mx-auto">
            We supply and install a comprehensive range of industrial equipment and systems,
            sourced from leading manufacturers worldwide.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col rounded-xl overflow-hidden bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              {/* Image area */}
              <div className="relative h-44 overflow-hidden bg-[#F5F5F5]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {/* Product number badge */}
                <div className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#48A9A6] text-white text-xs font-bold">
                  {product.id.toString().padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 p-5 flex-1">
                <div className="flex items-center gap-2">
                  <Package size={14} strokeWidth={1.5} className="text-[#48A9A6] shrink-0" />
                  <h3 className="text-base font-bold text-[#171717]">{product.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#62615A]">{product.description}</p>
              </div>

              {/* Hover footer */}
              <div className="px-5 pb-5">
                <a
                  href="/contact"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wide text-[#48A9A6] hover:text-[#3A8E8B] transition-colors"
                >
                  Enquire →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
