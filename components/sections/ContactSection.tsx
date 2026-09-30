'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FormState {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const serviceOptions = [
  'Engineering Designs',
  'Project Management',
  'Energy Management & Carbon Footprint',
  'Project Estimation & BOQs',
  'Engineering Construction',
  'Products / Equipment Supply',
  'Other / General Enquiry',
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@sivecengineering.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `New website enquiry from ${form.name}`,
          _template: 'table',
        }),
      });
      const data = await res.json().catch(() => null);

      if (res.ok && String(data?.success) === 'true') {
        setStatus('success');
        setForm({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass = [
    'w-full h-12 rounded-lg px-4 bg-white border border-black/[0.12]',
    'text-base text-[#171717] placeholder:text-[#9B9B9B]',
    'outline-none transition-colors duration-200',
    'hover:border-black/[0.20]',
    'focus:border-[#48A9A6] focus:ring-2 focus:ring-[#48A9A6]/20',
  ].join(' ');

  return (
    <section className="bg-white py-[6.25rem]">
      <div className="mx-auto max-w-[1360px] px-5 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — info */}
          <div className="flex flex-col justify-start gap-8">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#48A9A6]">
                Get in Touch
              </p>
              <h2 className="mb-4 text-[2rem] font-[400] leading-snug tracking-[-0.01em] text-[#171717]">
                Let&apos;s talk about your project
              </h2>
              <p className="text-base leading-relaxed text-[#62615A]">
                Whether you have a specific project in mind or simply want to understand how SIVEC
                can help your business, our team is ready to listen and advise.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#48A9A6]/10 text-[#48A9A6]">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#171717]">Address</p>
                  <p className="text-sm text-[#62615A]">536, Bandaranayke Mawatha, Eldeniya, Kadawatha, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#48A9A6]/10 text-[#48A9A6]">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#171717]">Phone</p>
                  <a href="tel:+94756940358" className="text-sm text-[#62615A] hover:text-[#48A9A6] transition-colors">
                    +94 75 694 0358
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#48A9A6]/10 text-[#48A9A6]">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#171717]">Email</p>
                  <a href="mailto:info@sivecengineering.com" className="text-sm text-[#62615A] hover:text-[#48A9A6] transition-colors">
                    info@sivecengineering.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#48A9A6]/10 text-[#48A9A6]">
                  <Clock size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#171717]">Business Hours</p>
                  <p className="text-sm text-[#62615A]">Monday – Friday, 8:00 AM – 5:30 PM</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-black/[0.08] h-48 bg-[#F5F5F5] flex items-center justify-center">
              <p className="text-sm text-[#9B9B9B]">Kadawatha, Sri Lanka</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-[#48A9A6]/30 bg-[#48A9A6]/5 p-12 text-center h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#48A9A6]/10 text-[#48A9A6]">
                  <Mail size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-[400] text-[#171717]">Message Sent!</h3>
                <p className="text-base text-[#62615A] max-w-xs">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-sm font-medium text-[#48A9A6] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#171717]">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={update('name')}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#171717]">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={update('email')}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-[#171717]">
                    Company / Organisation
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your company name (optional)"
                    value={form.company}
                    onChange={update('company')}
                    className={inputClass}
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-[#171717]">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update('service')}
                    className={inputClass + ' cursor-pointer'}
                  >
                    <option value="">Select a service…</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#171717]">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project or enquiry…"
                    value={form.message}
                    onChange={update('message')}
                    className={inputClass.replace('h-12', 'py-3 resize-y min-h-[8rem]')}
                  />
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={status === 'loading'}
                    withArrow
                    className="self-start"
                  >
                    Send Message
                  </Button>

                  {status === 'error' && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}

                  <p className="text-xs text-[#9B9B9B]">
                    We respond to all enquiries within 24 business hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
