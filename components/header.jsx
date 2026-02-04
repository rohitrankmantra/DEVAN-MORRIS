'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shops', href: '/shops' },
  { name: 'MedSpa', href: '/medspa' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100) // adjust threshold as needed
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* 1. Top Info Bar - always relative, scrolls away */}
      <div className="relative z-50 bg-charcoal">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
          {/* Contact Info */}
          <div className="flex items-center gap-4 text-xs text-ivory/80 md:gap-6">
            <a href="tel:+18005550199" className="flex items-center gap-1.5 transition-colors hover:text-luxe-gold">
              <FiPhone className="h-3 w-3" />
              <span className="hidden sm:inline">470 549 7613</span>
            </a>
            <a href="mailto:contact@devanmorris.com" className="flex items-center gap-1.5 transition-colors hover:text-luxe-gold">
              <FiMail className="h-3 w-3" />
              <span className="hidden md:inline">contact@devanmorris.com</span>
            </a>
            <div className="hidden items-center gap-1.5 lg:flex">
              <FiMapPin className="h-3 w-3" />
              <span>Lebanon, IN 46052</span>
            </div>
          </div>

          {/* Promo Text */}
          <div className="hidden text-xs text-luxe-gold md:block">
            Wholesale Prices for Professionals
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-ivory/70 transition-colors hover:text-luxe-gold" aria-label="Instagram">
              <FiInstagram className="h-3.5 w-3.5" />
            </a>
            <a href="#" className="text-ivory/70 transition-colors hover:text-luxe-gold" aria-label="Facebook">
              <FiFacebook className="h-3.5 w-3.5" />
            </a>
            <a href="#" className="text-ivory/70 transition-colors hover:text-luxe-gold" aria-label="Twitter">
              <FiTwitter className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar - now includes logo on left */}
      <motion.nav
        className={`sticky top-0 z-50 bg-ivory/95 shadow-lg backdrop-blur-md transition-all duration-500`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-4 ">
          <div className="flex h-auto items-center justify-between">
            <Link href="/" className="shrink-0">
              <Image
                src="/logo-new.png"
                alt="Devan Morris"
                width={200}
                height={60}
                className="h-20 lg:h-28 w-full object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation - centered */}
            <div className="hidden flex-1 items-center justify-center lg:flex">
              <div className="flex items-center gap-1">
                {navLinks.map((link, index) => (
                  <div key={link.name} className="flex items-center">
                    <Link
                      href={link.href}
                      className="group relative px-5 py-2 font-sans text-sm font-medium tracking-wide text-charcoal transition-colors hover:text-luxe-gold-dark"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-luxe-gold transition-all duration-300 group-hover:w-full" />
                    </Link>
                    {index < navLinks.length - 1 && (
                      <span className="mx-1 text-luxe-gold/30">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: CTA on desktop, Hamburger on mobile */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className="hidden rounded-full bg-linear-gold px-6 py-2.5 font-sans text-sm font-semibold text-charcoal shadow-md transition-all duration-300 hover:shadow-lg lg:block"
              >
                Get Quote
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-luxe-gold/10 text-charcoal transition-colors hover:bg-luxe-gold/20 lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-charcoal/98 backdrop-blur-md lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex h-full flex-col items-center justify-center gap-6 pt-20"
            >
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl font-medium tracking-wide text-ivory transition-colors hover:text-luxe-gold uppercase"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.05 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 rounded-full bg-linear-gold px-10 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-charcoal"
              >
                Get Quote
              </Link>

              {/* Mobile Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-col items-center gap-3 text-ivory/70"
              >
                <a href="tel:+18005550199" className="flex items-center gap-2 text-sm hover:text-luxe-gold">
                  <FiPhone className="h-4 w-4" />
                  470 549 7613
                </a>
                <a href="mailto:contact@devanmorris.com" className="flex items-center gap-2 text-sm hover:text-luxe-gold">
                  <FiMail className="h-4 w-4" />
                  contact@devanmorris.com
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}