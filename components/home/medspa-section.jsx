'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiActivity, FiCpu, FiShield, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

const features = [
  'FDA Approved Technology',
  '24/7 Technical Support',
  'Comprehensive Training',
  '2-Year Warranty'
]

const equipment = [
  {
    id: 13,
    name: 'Laser Hair Removal',
    model: 'Lumiere Pro X1',
    description: 'Advanced diode laser technology for painless and effective permanent hair reduction on all skin types.',
    specs: ['808nm Wavelength', 'Cooling System', 'Touch Interface'],
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1169',
  },
  {
    id: 14,
    name: 'Skin Rejuvenation',
    model: 'DermaLift Ultra',
    description: 'Multi-functional platform combining RF microneedling and LED therapy for superior anti-aging results.',
    specs: ['Radio Frequency', 'Microneedling', 'LED Therapy'],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1170',
  },
  {
    id: 12,
    name: 'Body Contouring',
    model: 'SculptBody 360',
    description: 'Non-invasive body sculpting device utilizing cryolipolysis and EMS for fat reduction and muscle toning.',
    specs: ['Cryolipolysis', 'EMS Technology', '4 Applicators'],
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=735',
  },
]

export default function MedSpaSection() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          }
        }
      )

      // Cards Animation
      gsap.fromTo(cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: 'top 85%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-charcoal py-24 md:py-32"
    >
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-linear-to-b from-charcoal via-[#1a1a1a] to-charcoal" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-luxe-gold/30 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header Section */}
        <div ref={headerRef} className="mb-20 grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="mb-4 block font-sans text-sm font-bold uppercase tracking-[0.2em] text-luxe-gold">
              Professional Equipment
            </span>
            <h2 className="font-serif text-4xl font-medium text-ivory md:text-5xl lg:text-6xl">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-luxe-gold to-[#f0e68c]">MedSpa Services</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="mb-8 font-sans text-lg text-ivory/70 leading-relaxed">
              Equip your clinic with industry-leading technology designed for performance, safety, and exceptional patient outcomes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-luxe-gold/90">
                  <FiCheckCircle className="shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, index) => (
            <div
              key={item.id}
              ref={el => cardsRef.current[index] = el}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-luxe-gold/30"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="inline-block rounded-full bg-luxe-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-luxe-gold backdrop-blur-sm border border-luxe-gold/20">
                    {item.model}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-serif text-2xl text-ivory group-hover:text-luxe-gold transition-colors">
                  {item.name}
                </h3>
                <p className="mb-6 flex-1 text-sm text-ivory/60 leading-relaxed">
                  {item.description}
                </p>

                {/* Specs */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {item.specs.map((spec, i) => (
                    <span key={i} className="text-xs text-ivory/40 bg-white/5 px-2 py-1 rounded">
                      {spec}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/shops/${item.id}`}
                  className="group/btn flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-luxe-gold transition-all"
                >
                  View Details
                  <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-luxe-gold px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-charcoal transition-all hover:bg-white hover:scale-105"
          >
            Request Catalog
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  )
}
