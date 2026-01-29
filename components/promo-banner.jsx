'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { FiX, FiArrowRight, FiGift } from 'react-icons/fi'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const bannerRef = useRef(null)

  useEffect(() => {
    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [isDismissed])

  useEffect(() => {
    if (bannerRef.current && isVisible) {
      gsap.fromTo(
        bannerRef.current,
        { y: 100, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' }
      )
    }
  }, [isVisible])

  const handleDismiss = () => {
    if (bannerRef.current) {
      gsap.to(bannerRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => {
          setIsVisible(false)
          setIsDismissed(true)
        }
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          ref={bannerRef}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-luxe-gold/30 bg-ivory shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800"
                alt=""
                className="h-full w-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-linear-to-r from-ivory via-ivory/95 to-ivory/80" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-luxe-gold/20" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-luxe-gold/10" />
            
            {/* Content */}
            <div className="relative flex items-center gap-4 p-5 md:p-6">
              {/* Icon/Image */}
              <div className="hidden shrink-0 sm:block">
                <div className="relative h-20 w-20 overflow-hidden rounded-xl border-2 border-luxe-gold/30 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=200"
                    alt="Beauty products"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-charcoal/40">
                    <FiGift className="h-8 w-8 text-luxe-gold" />
                  </div>
                </div>
              </div>
              
              {/* Text */}
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="font-(--font-great-vibes) text-xl text-luxe-gold-dark">
                    Special Offer
                  </span>
                  <span className="rounded-full bg-luxe-gold/20 px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-luxe-gold-dark">
                    Limited Time
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-wide text-charcoal">
                  Wholesale Beauty Collection
                </h3>
                <p className="mt-1 font-sans text-sm text-muted-foreground">
                  Premium products for professionals — Request your quote today
                </p>
              </div>
              
              {/* CTA */}
              <div className="shrink-0">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 font-sans text-sm font-semibold text-charcoal shadow-md transition-all duration-300 hover:shadow-lg"
                  onClick={handleDismiss}
                >
                  <span className="hidden sm:inline">Get Quote</span>
                  <FiArrowRight className="h-4 w-4" />
                </motion.a>
              </div>
              
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-charcoal/50 transition-colors hover:bg-charcoal/10 hover:text-charcoal"
                aria-label="Dismiss banner"
              >
                <FiX className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
