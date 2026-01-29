'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiHeart, FiEye } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    id: 1,
    name: 'Luxe Radiance Serum',
    description: 'Advanced vitamin C formula for luminous, youthful skin',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=687',
    category: 'Skincare',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Velvet Matte Lipstick',
    description: 'Long-lasting, hydrating formula in 24 stunning shades',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=715',
    category: 'Cosmetics',
    badge: 'New Arrival',
  },
  {
    id: 3,
    name: 'Rose Essence Parfum',
    description: 'Exquisite blend of Damascus rose and rare botanicals',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=687',
    category: 'Perfumes',
    badge: 'Exclusive',
  },
]

export default function FeaturedProducts() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0)

  useEffect(() => {
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
            duration: 0.7,
            delay: index * 0.12,
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
  }, [])

  const nextMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev + 1) % products.length)
  }

  const prevMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <section 
      ref={sectionRef}
      id="products"
      className="relative overflow-hidden bg-secondary py-16 md:py-20 lg:py-24"  // slightly less vertical space
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-40" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headingRef} className="mb-12 md:mb-16 text-center">
          <span className="mb-3 inline-block font-(--font-great-vibes) text-xl md:text-2xl text-luxe-gold-dark">
            Featured
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide text-charcoal">
            Our Premium Selection
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-muted-foreground text-sm md:text-base">
            Discover our handpicked collection of luxury beauty products, 
            crafted for professionals who demand excellence.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden gap-6 lg:gap-8 md:grid md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              ref={el => cardsRef.current[index] = el}
              className="group relative"
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="overflow-hidden rounded-2xl bg-card shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:ring-1 group-hover:ring-luxe-gold/30">
                {/* Image Container - less tall */}
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Badge */}
                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full bg-luxe-gold/90 px-3.5 py-1.5 font-sans text-xs font-semibold text-charcoal backdrop-blur-sm">
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute right-4 top-4 flex flex-col gap-2.5 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.92 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/95 text-charcoal shadow-md backdrop-blur-md transition-colors hover:bg-luxe-gold hover:text-charcoal"
                      aria-label="Add to wishlist"
                    >
                      <FiHeart className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.92 }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/95 text-charcoal shadow-md backdrop-blur-md transition-colors hover:bg-luxe-gold hover:text-charcoal"
                      aria-label="Quick view"
                    >
                      <FiEye className="h-4 w-4" />
                    </motion.button>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-charcoal/85 via-charcoal/30 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <div className="w-full p-5 md:p-6">
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold py-3 text-sm font-semibold text-charcoal shadow-md"
                      >
                        Contact Us
                        <FiArrowRight className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                {/* Content - slightly tighter */}
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-soft-pink/80 px-3 py-1 font-sans text-xs font-medium text-rose-accent backdrop-blur-sm">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-charcoal group-hover:text-luxe-gold-dark transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>
                  
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-medium text-luxe-gold-dark hover:text-charcoal transition-colors"
                  >
                    Request Quote
                    <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="relative md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMobileSlide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="group relative"
            >
              <div className="overflow-hidden rounded-2xl bg-card shadow-xl">
                <div className="relative aspect-3/4 overflow-hidden">
                  <img
                    src={products[currentMobileSlide].image || "/placeholder.svg"}
                    alt={products[currentMobileSlide].name}
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                  
                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full bg-luxe-gold/90 px-3.5 py-1.5 font-sans text-xs font-semibold text-charcoal backdrop-blur-sm">
                      {products[currentMobileSlide].badge}
                    </span>
                  </div>
                  
                  <div className="absolute right-4 top-4 flex flex-col gap-2.5">
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/95 text-charcoal shadow-md backdrop-blur-md"
                      aria-label="Add to wishlist"
                    >
                      <FiHeart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-5">
                  <span className="mb-2 inline-block rounded-full bg-soft-pink/80 px-3 py-1 font-sans text-xs font-medium text-rose-accent backdrop-blur-sm">
                    {products[currentMobileSlide].category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    {products[currentMobileSlide].name}
                  </h3>
                  <p className="mt-2 font-sans text-sm text-muted-foreground line-clamp-3">
                    {products[currentMobileSlide].description}
                  </p>
                  
                  <motion.a
                    href="#contact"
                    whileTap={{ scale: 0.97 }}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold py-3 text-sm font-semibold text-charcoal shadow-md"
                  >
                    Contact Us
                    <FiArrowRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Nav */}
          <div className="mt-6 flex items-center justify-center gap-5">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevMobileSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-luxe-gold/30 bg-ivory text-charcoal transition-colors hover:border-luxe-gold hover:bg-luxe-gold/10"
              aria-label="Previous"
            >
              <FiChevronLeft className="h-5 w-5" />
            </motion.button>

            <div className="flex gap-2.5">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMobileSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentMobileSlide 
                      ? 'w-8 bg-luxe-gold' 
                      : 'w-2.5 bg-luxe-gold/40'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextMobileSlide}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-luxe-gold/30 bg-ivory text-charcoal transition-colors hover:border-luxe-gold hover:bg-luxe-gold/10"
              aria-label="Next"
            >
              <FiChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* View All */}
        <div className="mt-10 md:mt-12 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 rounded-full border-2 border-charcoal bg-transparent px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-charcoal transition-all duration-300 hover:bg-charcoal hover:text-ivory"
          >
            Request Full Catalog
            <FiArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}