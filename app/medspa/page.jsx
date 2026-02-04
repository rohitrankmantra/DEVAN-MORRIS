'use client'

import MedSpaSection from '@/components/home/medspa-section'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Wrench, CreditCard } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

export default function MedSpaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Minor responsive tweaks for consistency */}
      <section className="relative pt-24 md:pt-28 pb-16 md:pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600"
            alt="MedSpa Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-white" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-luxe-gold">
                Professional MedSpa
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal">
                Premium Equipment For Modern Clinics
              </h1>
              <p className="mt-4 max-w-xl text-muted-foreground text-base sm:text-lg">
                Deliver outstanding results with FDA-approved technology, comprehensive training, and reliable support.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="rounded-full bg-linear-gold px-6 py-3 text-center font-semibold text-charcoal hover:shadow-lg transition-shadow">
                  Request Catalog
                </Link>
                <Link href="/shops?category=MedSpa%20Equipment" className="rounded-full border border-luxe-gold px-6 py-3 text-center text-charcoal hover:bg-luxe-gold/10 transition-colors">
                  Browse Equipment
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-2xl border border-luxe-gold/30 bg-white/60 p-5 sm:p-6 text-center backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-serif text-charcoal">2K+</div>
                <div className="mt-1 text-sm text-muted-foreground">Clinics Served</div>
              </div>
              <div className="rounded-2xl border border-luxe-gold/30 bg-white/60 p-5 sm:p-6 text-center backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-serif text-charcoal">24/7</div>
                <div className="mt-1 text-sm text-muted-foreground">Tech Support</div>
              </div>
              <div className="rounded-2xl border border-luxe-gold/30 bg-white/60 p-5 sm:p-6 text-center backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-serif text-charcoal">FDA</div>
                <div className="mt-1 text-sm text-muted-foreground">Approved</div>
              </div>
              <div className="rounded-2xl border border-luxe-gold/30 bg-white/60 p-5 sm:p-6 text-center backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-serif text-charcoal">2 Years</div>
                <div className="mt-1 text-sm text-muted-foreground">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MedSpaSection />

      {/* Third Cards Section - Improved layout */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group rounded-3xl border border-luxe-gold/20 bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-luxe-gold/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-luxe-gold/10 text-luxe-gold group-hover:bg-luxe-gold group-hover:text-charcoal transition-colors">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal">Training & Onboarding</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Comprehensive training programs to ensure your staff is confident and efficient with every device.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl border border-luxe-gold/20 bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-luxe-gold/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-luxe-gold/10 text-luxe-gold group-hover:bg-luxe-gold group-hover:text-charcoal transition-colors">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal">Maintenance & Service</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Reliable maintenance plans, on-site repairs, and rapid response times to minimize downtime.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl border border-luxe-gold/20 bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-luxe-gold/40 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-luxe-gold/10 text-luxe-gold group-hover:bg-luxe-gold group-hover:text-charcoal transition-colors">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal">Financing Options</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Flexible financing solutions and payment plans to help you scale your MedSpa operations without strain.
              </p>
            </div>
          </div>

          {/* CTA - Centered & Responsive */}
          <div className="mt-12 md:mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-linear-gold px-6 sm:px-8 md:px-10 py-3 md:py-4 font-semibold text-charcoal shadow-md hover:shadow-xl transition-all duration-300"
            >
              Get Personalized Recommendations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
