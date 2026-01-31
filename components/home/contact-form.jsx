'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiSend, FiMail, FiPhone, FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const productInterests = [
  'Cosmetics',
  'Beauty Supplies',
  'Perfumes',
  'MedSpa Equipment',
  'Skincare Packages',
  'Full Catalog',
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    productInterest: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }

      if (infoRef.current) {
        gsap.fromTo(
          infoRef.current,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: '',
      businessName: '',
      email: '',
      productInterest: '',
      message: '',
    })
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-cream py-20 md:py-28"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-diagonal" />
      <div className="absolute inset-0 bg-linear-warm" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-luxe-gold/10 px-4 py-2 font-sans text-xs font-medium uppercase tracking-widest text-luxe-gold-dark">
            <FiMessageCircle className="h-3 w-3" />
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl font-semibold tracking-wide text-charcoal md:text-4xl lg:text-5xl">
            Request Your
            <span className="mt-2 block font-(--font-great-vibes) text-4xl text-luxe-gold-dark md:text-5xl">
              Wholesale Quote
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-muted-foreground">
            Ready to elevate your beauty business? Fill out the form below and our 
            dedicated team will provide you with a personalized wholesale quote.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="lg:col-span-3">
            <div className="rounded-3xl border border-luxe-gold/20 bg-ivory p-8 shadow-xl lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div className="group">
                    <label htmlFor="name" className="mb-2 block font-sans text-sm font-medium text-charcoal">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-2 border-luxe-gold/20 bg-ivory px-4 py-3.5 font-sans text-charcoal placeholder:text-muted-foreground/60 transition-all duration-300 focus:border-luxe-gold focus:outline-none focus:ring-2 focus:ring-luxe-gold/20"
                      placeholder="Jane Smith"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="group">
                    <label htmlFor="businessName" className="mb-2 block font-sans text-sm font-medium text-charcoal">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border-2 border-luxe-gold/20 bg-ivory px-4 py-3.5 font-sans text-charcoal placeholder:text-muted-foreground/60 transition-all duration-300 focus:border-luxe-gold focus:outline-none focus:ring-2 focus:ring-luxe-gold/20"
                      placeholder="Beauty Clinic Co."
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="group">
                  <label htmlFor="email" className="mb-2 block font-sans text-sm font-medium text-charcoal">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-2 border-luxe-gold/20 bg-ivory px-4 py-3.5 font-sans text-charcoal placeholder:text-muted-foreground/60 transition-all duration-300 focus:border-luxe-gold focus:outline-none focus:ring-2 focus:ring-luxe-gold/20"
                    placeholder="jane@beautyclinic.com"
                  />
                </div>

                {/* Product Interest */}
                <div className="group">
                  <label htmlFor="productInterest" className="mb-2 block font-sans text-sm font-medium text-charcoal">
                    Product Interest *
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-xl border-2 border-luxe-gold/20 bg-ivory px-4 py-3.5 font-sans text-charcoal transition-all duration-300 focus:border-luxe-gold focus:outline-none focus:ring-2 focus:ring-luxe-gold/20"
                  >
                    <option value="">Select a category</option>
                    {productInterests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label htmlFor="message" className="mb-2 block font-sans text-sm font-medium text-charcoal">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-xl border-2 border-luxe-gold/20 bg-ivory px-4 py-3.5 font-sans text-charcoal placeholder:text-muted-foreground/60 transition-all duration-300 focus:border-luxe-gold focus:outline-none focus:ring-2 focus:ring-luxe-gold/20"
                    placeholder="Tell us about your business needs..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-gold px-8 py-4 font-sans text-sm font-semibold uppercase tracking-widest text-charcoal shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-charcoal border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="h-4 w-4" />
                      Request Quote
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-green-200 bg-green-50 p-4 text-center"
                  >
                    <p className="font-sans text-sm font-medium text-green-800">
                      Thank you! We&apos;ll be in touch within 24 hours.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="lg:col-span-2">
            <div className="rounded-3xl border border-luxe-gold/20 bg-charcoal p-8 lg:p-10">
              <h3 className="font-serif text-xl font-semibold text-ivory">
                Contact Information
              </h3>
              <p className="mt-2 font-sans text-sm text-ivory/70">
                Reach out to our team for personalized wholesale pricing.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-luxe-gold/20">
                    <FiMail className="h-5 w-5 text-luxe-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-ivory">Email Us</p>
                    <a href="mailto:wholesale@lumierebeauty.com" className="font-sans text-sm text-ivory/70 hover:text-luxe-gold">
                      wholesale@lumierebeauty.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-luxe-gold/20">
                    <FiPhone className="h-5 w-5 text-luxe-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-ivory">Call Us</p>
                    <a href="tel:+1-800-555-0199" className="font-sans text-sm text-ivory/70 hover:text-luxe-gold">
                      +1 +1 (800) 555-0199
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-luxe-gold/20">
                    <FiMapPin className="h-5 w-5 text-luxe-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-ivory">Visit Us</p>
                    <p className="font-sans text-sm text-ivory/70">
                      123 Beauty Boulevard<br />
                      Los Angeles, CA 90001
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 rounded-xl border border-luxe-gold/20 bg-luxe-gold/5 p-4">
                <div className="flex items-center gap-3">
                  <FiClock className="h-5 w-5 text-luxe-gold" />
                  <p className="font-sans text-sm font-medium text-ivory">Business Hours</p>
                </div>
                <div className="mt-3 space-y-1">
                  <p className="font-sans text-sm text-ivory/70">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="font-sans text-sm text-ivory/70">
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>

              {/* Quick CTA */}
              <motion.a
                href="tel:+18005550199"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-luxe-gold bg-transparent py-3 font-sans text-sm font-medium text-luxe-gold transition-all duration-300 hover:bg-luxe-gold hover:text-charcoal"
              >
                <FiPhone className="h-4 w-4" />
                Call Now
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
