'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from '@/components/header'
import HeroSlider from '@/components/hero-slider'
import PromoBanner from '@/components/promo-banner'
import CategoryShowcase from '@/components/category-showcase'
import FeaturedProducts from '@/components/featured-products'
import CTABanner from '@/components/cta-banner'
import BrandStory from '@/components/brand-story'
import MedSpaSection from '@/components/medspa-section'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Initialize smooth scrolling with GSAP
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh()

    return () => {
      // Cleanup all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Fixed Header */}
      <Header />

      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Promo Banner (appears on scroll/time) */}
      <PromoBanner />

      {/* Category Showcase */}
      <CategoryShowcase />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Interactive CTA Banner */}
      <CTABanner />

      {/* Brand Story / Trust Section */}
      <BrandStory />

      {/* MedSpa Equipment Section */}
      <section id="medspa">
        <MedSpaSection />
      </section>

      {/* Contact / Lead Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </main>
  )
}
