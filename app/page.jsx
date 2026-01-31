'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import HeroSlider from '@/components/home/hero-slider'
import PromoBanner from '@/components/home/promo-banner'
import CategoryShowcase from '@/components/home/category-showcase'
import FeaturedProducts from '@/components/home/featured-products'
import CTABanner from '@/components/home/cta-banner'
import BrandStory from '@/components/home/brand-story'
import MedSpaSection from '@/components/home/medspa-section'
import ContactForm from '@/components/home/contact-form'

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
x
    </main>
  )
}
