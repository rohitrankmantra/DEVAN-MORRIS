 'use client'
 
import Header from '@/components/header'
import MedSpaSection from '@/components/medspa-section'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Wrench, CreditCard } from 'lucide-react'
 
 export default function MedSpaPage() {
   return (
     <main className="min-h-screen overflow-x-hidden">
       <Header />
      <section className="relative pt-28 pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600"
            alt="MedSpa Hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-white" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-luxe-gold">
                Professional MedSpa
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal">
                Premium Equipment For Modern Clinics
              </h1>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Deliver outstanding results with FDA-approved technology, comprehensive training, and reliable support.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/contact" className="rounded-full bg-gradient-gold px-6 py-3 font-semibold text-charcoal">
                  Request Catalog
                </Link>
                <Link href="/shop?category=MedSpa%20Equipment" className="rounded-full border border-luxe-gold px-6 py-3 text-charcoal">
                  Browse Equipment
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-luxe-gold/30 bg-white/60 p-6 text-center">
                <div className="text-3xl font-serif text-charcoal">2K+</div>
                <div className="mt-1 text-sm text-muted-foreground">Clinics Served</div>
              </div>
              <div className="rounded-2xl border border-luxe-gold/30 bg-white/60 p-6 text-center">
                <div className="text-3xl font-serif text-charcoal">24/7</div>
                <div className="mt-1 text-sm text-muted-foreground">Tech Support</div>
              </div>
              <div className="rounded-2xl border border-luxe-gold/30 bg-white/60 p-6 text-center">
                <div className="text-3xl font-serif text-charcoal">FDA</div>
                <div className="mt-1 text-sm text-muted-foreground">Approved</div>
              </div>
              <div className="rounded-2xl border border-luxe-gold/30 bg-white/60 p-6 text-center">
                <div className="text-3xl font-serif text-charcoal">2 Years</div>
                <div className="mt-1 text-sm text-muted-foreground">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MedSpaSection />
      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-luxe-gold/20 bg-white p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-luxe-gold" />
                <h3 className="font-serif text-xl text-charcoal">Training & Onboarding</h3>
              </div>
              <p className="mt-2 text-muted-foreground">Comprehensive training programs to ensure your staff is confident and efficient.</p>
            </div>
            <div className="rounded-2xl border border-luxe-gold/20 bg-white p-8">
              <div className="flex items-center gap-3">
                <Wrench className="w-6 h-6 text-luxe-gold" />
                <h3 className="font-serif text-xl text-charcoal">Maintenance & Service</h3>
              </div>
              <p className="mt-2 text-muted-foreground">Reliable maintenance plans and rapid service response times.</p>
            </div>
            <div className="rounded-2xl border border-luxe-gold/20 bg-white p-8">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-luxe-gold" />
                <h3 className="font-serif text-xl text-charcoal">Financing Options</h3>
              </div>
              <p className="mt-2 text-muted-foreground">Flexible financing to help you scale your MedSpa operations.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="rounded-full bg-gradient-gold px-8 py-4 font-semibold text-charcoal">
              Get Personalized Recommendations
            </Link>
          </div>
        </div>
      </section>
       <Footer />
     </main>
   )
 }
