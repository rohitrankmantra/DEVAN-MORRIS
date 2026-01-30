'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080',
    title: 'Luxury',
    highlight: 'Beauty Collection',
    subtitle: 'Premium Wholesale Cosmetics for Professionals',
    cta: 'Contact Us for Price Quote',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087',
    title: 'Exclusive',
    highlight: 'Fragrances',
    subtitle: 'Exquisite Perfumes & Skincare Collections',
    cta: 'Explore Our Products',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070',
    title: 'Professional',
    highlight: 'MedSpa Equipment',
    subtitle: 'Advanced Equipment for Beauty Clinics',
    cta: 'Request Your Quote',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071',
    title: 'Radiant',
    highlight: 'Skincare Line',
    subtitle: 'Premium Skincare Packages for Wholesale',
    cta: 'Contact Us Today',
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const imageRef = useRef(null)
  const autoPlayRef = useRef(null)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [nextSlide])

  // GSAP parallax and zoom effect
  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.05 },
        { 
          scale: 1.12, 
          duration: 6, 
          ease: 'none',
        }
      )
    }
  }, [currentSlide])

  const slide = slides[currentSlide]

  return (
    <section className="relative h-[85vh] min-h-150 w-full overflow-hidden">
      {/* Background Image with GSAP animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div
            ref={imageRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-linear-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-charcoal/20" />
          
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 bg-pattern-diagonal opacity-30" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute right-8 top-1/4 hidden h-32 w-32 rounded-full border border-luxe-gold/30 lg:block" />
      <div className="absolute right-16 top-1/3 hidden h-20 w-20 rounded-full border border-luxe-gold/20 lg:block" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-luxe-gold/40 bg-luxe-gold/10 px-4 py-2 backdrop-blur-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-luxe-gold" />
                  <span className="font-sans text-xs font-medium uppercase tracking-widest text-luxe-gold">
                    Wholesale Only
                  </span>
                </motion.div>

                {/* Title with highlight */}
                <h1 className="mb-4 font-serif text-4xl font-semibold tracking-wide text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
                  {slide.title}
                  <span className="mt-2 block font-(--font-great-vibes) text-5xl font-normal text-luxe-gold sm:text-6xl md:text-7xl lg:text-8xl">
                    {slide.highlight}
                  </span>
                </h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8 max-w-lg font-sans text-lg tracking-wide text-ivory/90 md:text-xl"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-charcoal shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    Contact Us for Quote
                    <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.a>
                  <motion.a
                    href="#products"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-full border-2 border-luxe-gold/50 bg-transparent px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest text-ivory transition-all duration-300 hover:border-luxe-gold hover:bg-luxe-gold/10"
                  >
                    Explore Products
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 z-20 flex w-full translate-y-1/2 justify-between px-4 md:px-8">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-luxe-gold/40 bg-charcoal/40 text-luxe-gold backdrop-blur-sm transition-all duration-300 hover:border-luxe-gold hover:bg-charcoal/60 md:h-14 md:w-14"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="h-6 w-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-luxe-gold/40 bg-charcoal/40 text-luxe-gold backdrop-blur-sm transition-all duration-300 hover:border-luxe-gold hover:bg-charcoal/60 md:h-14 md:w-14"
          aria-label="Next slide"
        >
          <FiChevronRight className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentSlide(index)
                setTimeout(() => setIsAnimating(false), 800)
              }
            }}
            className={`transition-all duration-300 ${
              index === currentSlide 
                ? 'h-3 w-10 rounded-full bg-luxe-gold' 
                : 'h-3 w-3 rounded-full border border-ivory/50 bg-transparent hover:border-luxe-gold'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 h-32 w-full bg-linear-to-t from-background to-transparent" />
    </section>
  )
}
