'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiCheck, FiArrowRight, FiAward, FiTruck, FiUsers, FiShield } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const trustPoints = [
  { text: 'Over 3 years of wholesale expertise', icon: FiAward },
  { text: 'Premium quality assurance guaranteed', icon: FiShield },
  { text: 'Trusted by 500+ beauty professionals', icon: FiUsers },
  { text: 'Fast worldwide shipping available', icon: FiTruck },
]

const stats = [
  { value: '15+', label: 'Years' },
  { value: '500+', label: 'Partners' },
  { value: '10K+', label: 'Products' },
]

export default function BrandStory() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-luxury" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1287"
                alt="Luxury beauty products arrangement"
                className="aspect-4/5 w-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/30 via-transparent to-transparent" />
              
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-luxe-gold/30" />
              <div className="absolute -bottom-8 -right-8 -z-20 h-full w-full rounded-3xl border border-luxe-gold/15" />
            </div>
            
            {/* Stats Badges */}
            <div className="absolute -bottom-8 left-4 right-4 flex justify-center gap-4 md:bottom-8 md:left-auto md:right-8 md:flex-col">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="rounded-xl border border-luxe-gold/30 bg-ivory/95 px-4 py-3 text-center shadow-lg backdrop-blur-sm"
                >
                  <p className="font-serif text-2xl font-bold text-charcoal md:text-3xl">{stat.value}</p>
                  <p className="font-sans text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-luxe-gold/10 px-4 py-2 font-sans text-xs font-medium uppercase tracking-widest text-luxe-gold-dark">
              <FiAward className="h-3 w-3" />
              Our Story
            </span>
            
            <h2 className="font-serif text-3xl font-semibold tracking-wide text-charcoal md:text-4xl lg:text-5xl">
              Trusted Partner in
              <span className="mt-2 block font-(--font-great-vibes) text-4xl text-luxe-gold-dark md:text-5xl">
                Luxury Beauty
              </span>
            </h2>
            
            <p className="mt-6 font-sans text-lg leading-relaxed text-muted-foreground">
              For over 3 Years, we have been the premier wholesale destination for beauty professionals 
              and MedSpa clinics worldwide. Our commitment to quality, authenticity, and exceptional 
              service has made us the trusted choice for discerning buyers.
            </p>
            
            <p className="mt-4 font-sans leading-relaxed text-muted-foreground">
              From luxury cosmetics to advanced aesthetic equipment, we curate only the finest products 
              from renowned brands. Our dedicated team ensures every order meets the highest standards 
              of excellence.
            </p>
            
            {/* Trust Points */}
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 rounded-xl border border-luxe-gold/20 bg-ivory/50 p-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-luxe-gold/20">
                    <point.icon className="h-4 w-4 text-luxe-gold-dark" />
                  </div>
                  <span className="font-sans text-sm text-charcoal">{point.text}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-gold px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-charcoal shadow-md transition-all duration-300 hover:shadow-lg"
              >
                Partner With Us
                <FiArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="tel:+18005550199"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-ivory"
              >
                Call Us Today
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
