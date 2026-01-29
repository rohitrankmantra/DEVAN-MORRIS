'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiZap, FiStar, FiShield, FiArrowRight, FiHeart } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const equipment = [
  {
    id: 1,
    name: 'Laser Hair Removal Systems',
    description: 'Professional-grade diode and IPL devices for permanent hair reduction',
    icon: FiZap,
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1169',
  },
  {
    id: 2,
    name: 'Skin Rejuvenation Devices',
    description: 'RF, microneedling, and LED therapy equipment for anti-aging treatments',
    icon: FiStar,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1170',
  },
  {
    id: 3,
    name: 'Premium Skincare Packages',
    description: 'Curated professional-use skincare lines for clinical treatments',
    icon: FiShield,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=735',
  },
]

export default function MedSpaSection() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              delay: index * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-charcoal py-20 md:py-28"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />

      {/* Decorative Elements */}
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full border border-luxe-gold/10" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full border border-luxe-gold/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headingRef} className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-luxe-gold/20 px-4 py-2 font-sans text-xs font-medium uppercase tracking-widest text-luxe-gold">
            <FiHeart className="h-3 w-3" />
            Professional
          </span>
          <h2 className="font-serif text-3xl font-semibold tracking-wide text-ivory md:text-4xl lg:text-5xl">
            MedSpa & Skincare
            <span className="mt-2 block font-[var(--font-great-vibes)] text-4xl text-luxe-gold md:text-5xl">
              Excellence
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-ivory/70">
            Equip your clinic with cutting-edge aesthetic technology and premium skincare products. 
            We supply the industry&apos;s most trusted brands.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {equipment.map((item, index) => (
            <motion.div
              key={item.id}
              ref={el => cardsRef.current[index] = el}
              className="group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full overflow-hidden rounded-3xl border border-luxe-gold/20 bg-ivory/5 backdrop-blur-sm transition-all duration-300 group-hover:border-luxe-gold/40 group-hover:bg-ivory/10">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-luxe-gold px-3 py-1 font-sans text-xs font-semibold text-charcoal">
                      Professional
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-luxe-gold/20">
                    <item.icon className="h-5 w-5 text-luxe-gold" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-ivory transition-colors group-hover:text-luxe-gold">
                    {item.name}
                  </h3>
                  
                  <p className="mt-2 font-sans text-sm text-ivory/70">
                    {item.description}
                  </p>
                  
                  {/* CTA */}
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className="mt-4 inline-flex items-center gap-2 text-luxe-gold"
                  >
                    <span className="font-sans text-sm font-medium">Contact Us</span>
                    <FiArrowRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-luxe-gold/20 bg-gradient-to-r from-luxe-gold/10 via-luxe-gold/5 to-luxe-gold/10 p-8 md:p-12">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-ivory md:text-3xl">
                Ready to Upgrade Your Clinic?
              </h3>
              <p className="mt-2 font-sans text-ivory/70">
                Get exclusive wholesale pricing on professional-grade equipment.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-gold px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-charcoal shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              Request Catalog
              <FiArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
