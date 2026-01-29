'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight, FiStar } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

export default function CTABanner() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)
  const productsRef = useRef([])

  useEffect(() => {
    // Parallax effect on image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }

    // Animate content
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    // Animate floating products
    productsRef.current.forEach((product, index) => {
      if (product) {
        gsap.fromTo(
          product,
          { y: 30, opacity: 0, rotation: -5 },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 0.6,
            delay: 0.2 + index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )

        // Floating animation
        gsap.to(product, {
          y: -10 + index * 5,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-charcoal py-16 md:py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-luxury opacity-50" />
      <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/95 to-charcoal/80" />

      {/* Decorative Circles */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-luxe-gold/10" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full border border-luxe-gold/10" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Content Side */}
          <div ref={contentRef} className="text-center lg:text-left">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-luxe-gold/20 px-4 py-2 font-sans text-xs font-medium uppercase tracking-widest text-luxe-gold">
              <FiStar className="h-3 w-3" />
              Exclusive Wholesale
            </span>
            
            <h2 className="mb-4 font-serif text-3xl font-semibold tracking-wide text-ivory md:text-4xl lg:text-5xl">
              Elevate Your
              <span className="mt-2 block font-(--font-great-vibes) text-4xl text-luxe-gold md:text-5xl lg:text-6xl">
                Beauty Business
              </span>
            </h2>
            
            <p className="mb-8 max-w-md font-sans text-base text-ivory/70 md:text-lg">
              Partner with us for premium cosmetics, fragrances, and MedSpa equipment. 
              Exclusive wholesale pricing for qualified professionals.
            </p>

            {/* Features */}
            <div className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              {['Premium Brands', 'Wholesale Prices', 'Fast Shipping'].map((feature, i) => (
                <div 
                  key={feature}
                  className="flex items-center gap-2 rounded-full border border-luxe-gold/30 bg-luxe-gold/5 px-4 py-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-luxe-gold" />
                  <span className="font-sans text-xs font-medium text-ivory/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-charcoal shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Request Quote
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="tel:+18005550199"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full border-2 border-luxe-gold/50 px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest text-luxe-gold transition-all duration-300 hover:border-luxe-gold hover:bg-luxe-gold/10"
              >
                Call Us Now
              </motion.a>
            </div>
          </div>

          {/* Image Side with Floating Products */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Model Image */}
            <div ref={imageRef} className="relative">
              <div className="relative h-100 w-75 overflow-hidden rounded-3xl shadow-2xl md:h-125 md:w-95">
                <img
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800"
                  alt="Beauty model"
                  className="h-full w-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent" />
              </div>

              {/* Decorative frame */}
              <div className="absolute -bottom-4 -left-4 -right-4 -top-4 -z-10 rounded-3xl border-2 border-luxe-gold/20" />
              <div className="absolute -bottom-8 -left-8 -right-8 -top-8 -z-20 rounded-3xl border border-luxe-gold/10" />
            </div>

            {/* Floating Product Cards */}
            <motion.div
              ref={el => productsRef.current[0] = el}
              className="absolute -left-4 top-8 z-10 rounded-2xl border border-luxe-gold/20 bg-ivory/95 p-3 shadow-xl backdrop-blur-sm md:-left-12"
            >
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=150"
                alt="Serum"
                className="h-16 w-16 rounded-lg object-cover md:h-20 md:w-20"
              />
              <p className="mt-2 font-serif text-xs font-medium text-charcoal">Luxury Serum</p>
              <p className="font-sans text-[10px] text-muted-foreground">Wholesale</p>
            </motion.div>

            <motion.div
              ref={el => productsRef.current[1] = el}
              className="absolute -right-4 bottom-24 z-10 rounded-2xl border border-luxe-gold/20 bg-ivory/95 p-3 shadow-xl backdrop-blur-sm md:-right-16"
            >
              <img
                src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=150"
                alt="Lipstick"
                className="h-16 w-16 rounded-lg object-cover md:h-20 md:w-20"
              />
              <p className="mt-2 font-serif text-xs font-medium text-charcoal">Premium Lipstick</p>
              <p className="font-sans text-[10px] text-muted-foreground">Wholesale</p>
            </motion.div>

            <motion.div
              ref={el => productsRef.current[2] = el}
              className="absolute -right-2 top-20 z-10 rounded-2xl border border-luxe-gold/20 bg-ivory/95 p-3 shadow-xl backdrop-blur-sm md:right-0"
            >
              <img
                src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=150"
                alt="Perfume"
                className="h-14 w-14 rounded-lg object-cover md:h-16 md:w-16"
              />
              <p className="mt-2 font-serif text-xs font-medium text-charcoal">Rose Parfum</p>
              <p className="font-sans text-[10px] text-muted-foreground">Wholesale</p>
            </motion.div>

            {/* Rating Badge */}
            <motion.div
              ref={el => productsRef.current[3] = el}
              className="absolute -left-2 bottom-8 z-10 flex items-center gap-2 rounded-full border border-luxe-gold/30 bg-charcoal/90 px-4 py-2 shadow-lg backdrop-blur-sm md:-left-8"
            >
              <div className="flex text-luxe-gold">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span className="font-sans text-xs font-medium text-ivory">500+ Partners</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
