"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { showSubscribeToast } from "@/components/subscribe-toast";
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiSend,
} from 'react-icons/fi'

const footerLinks = {
  products: [
    { name: 'Cosmetics', href: '/shop?category=Makeup' },
    { name: 'Beauty Supplies', href: '/shop?category=Tools%20%26%20Accessories' },
    { name: 'Perfumes', href: '/shop?category=Fragrances' },
    { name: 'MedSpa Equipment', href: '/medspa' },
    { name: 'Skincare Packages', href: '/shop?category=Skincare' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about' },
    { name: 'Wholesale Partners', href: '/contact' },
   
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Request Quote', href: '/contact' },
    { name: 'Shipping Info', href: '/about' },
    { name: 'Returns Policy', href: '/about' },
    { name: 'FAQ', href: '/about' },
    { name: 'Privacy Policy', href: '/about' },
  ],
}

const socialLinks = [
  { name: 'Instagram', icon: FiInstagram, href: '#' },
  { name: 'Facebook', icon: FiFacebook, href: '#' },
  { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
  { name: 'Email', icon: FiMail, href: 'mailto:wholesale@lumierebeauty.com' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)
  const validateEmail = (value) => {
    const v = value.trim()
    if (v.length < 6 || v.length > 254) return false
    if (v.includes('..')) return false
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!regex.test(v)) return false
    const parts = v.split('@')
    if (parts.length !== 2) return false
    const [local, domain] = parts
    if (!local || !domain) return false
    if (local.length > 64) return false
    if (domain.startsWith('-') || domain.endsWith('-')) return false
    return true
  }
  const isValid = validateEmail(email)
  const onSubscribe = () => {
    if (isValid) {
      showSubscribeToast('success', email)
      setEmail('')
      setTouched(false)
    } else {
      showSubscribeToast('error', email)
    }
  }

  return (
    <footer className="bg-charcoal">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Devan Morris"
                width={180}
                height={60}
                className="h-35 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="mt-6 max-w-sm font-sans text-sm leading-relaxed text-ivory/70">
              Your trusted wholesale partner for premium beauty products and
              professional MedSpa equipment. Serving beauty professionals
              worldwide with excellence.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ivory/20 text-ivory/70 transition-all duration-300 hover:border-luxe-gold hover:bg-luxe-gold hover:text-charcoal"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-luxe-gold">
              Products
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ivory/70 transition-colors hover:text-luxe-gold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-luxe-gold">
              Company
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ivory/70 transition-colors hover:text-luxe-gold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-luxe-gold">
              Support
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-ivory/70 transition-colors hover:text-luxe-gold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-luxe-gold/20 bg-gradient-to-r from-luxe-gold/10 via-luxe-gold/5 to-luxe-gold/10 p-8 lg:p-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <h3 className="font-serif text-xl font-semibold text-ivory">
                Stay Updated with
                <span className="ml-2 font-[var(--font-great-vibes)] text-2xl text-luxe-gold">
                  DEVAN MORRIS
                </span>
              </h3>
              <p className="mt-2 font-sans text-sm text-ivory/70">
                Subscribe to receive exclusive wholesale offers and new product
                announcements.
              </p>
            </div>
            <div className="flex w-full gap-3 lg:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                placeholder="Enter your email"
                className={`w-full rounded-xl border-2 bg-charcoal/50 px-5 py-3 font-sans text-sm text-ivory placeholder:text-ivory/50 focus:outline-none lg:w-64 ${
                  email.length === 0 && !touched
                    ? 'border-ivory/30 focus:border-luxe-gold'
                    : isValid
                    ? 'border-luxe-gold/50 focus:border-luxe-gold'
                    : 'border-red-400/50 focus:border-red-500'
                }`}
                aria-invalid={touched && !isValid}
              />
              {touched && email && !isValid && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute mt-12 text-xs text-red-300"
                >
                  Enter a valid email like name@example.com
                </motion.div>
              )}
              <motion.button
                onClick={onSubscribe}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex shrink-0 items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 font-sans text-sm font-semibold text-charcoal transition-all duration-300 hover:shadow-lg disabled:opacity-60"
                disabled={!isValid}
              >
                <FiSend className="h-4 w-4" />
                <span className="hidden sm:inline">Subscribe</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Wholesale Partner Program */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-luxe-gold/20 bg-gradient-to-r from-luxe-gold/10 via-luxe-gold/5 to-luxe-gold/10 p-8 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-3 inline-block font-sans text-xs font-semibold uppercase tracking-widest text-luxe-gold">
              Wholesale Partner Program
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-ivory">
              Become a Wholesale Partner
            </h3>
            <p className="mt-3 font-sans text-sm text-ivory/70">
              Join our exclusive network of beauty professionals and access premium products at wholesale prices.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact" className="rounded-full bg-gradient-gold px-6 py-3 font-sans text-sm font-semibold text-charcoal">
                Apply Now
              </Link>
              <Link href="/about" className="rounded-full border border-luxe-gold px-6 py-3 font-sans text-sm text-ivory">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-12">
          <p className="font-sans text-sm text-ivory/50">
            © {new Date().getFullYear()} Lumière Beauty. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 rounded-full border border-luxe-gold/30 px-4 py-2 font-sans text-sm text-ivory/50 transition-all duration-300 hover:border-luxe-gold hover:text-luxe-gold"
          >
            <span>Back to top</span>
            <FiArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
