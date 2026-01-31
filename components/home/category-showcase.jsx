'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowRight, FiPackage, FiStar, FiShield, FiTruck } from 'react-icons/fi'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    id: 1,
    name: 'Cosmetics',
    description: 'Premium makeup collections for beauty professionals',
    image: 'https://images.pexels.com/photos/3735618/pexels-photo-3735618.jpeg',
    count: '200+ Products',
  },
  {
    id: 2,
    name: 'Beauty Supplies',
    description: 'Essential tools and accessories for salons',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=735',
    count: '150+ Products',
  },
  {
    id: 3,
    name: 'Perfumes',
    description: 'Luxury fragrances from world-renowned brands',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=808',
    count: '80+ Fragrances',
  },
  {
    id: 4,
    name: 'MedSpa Equipment',
    description: 'Professional-grade aesthetic devices',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=768',
    count: '50+ Devices',
  },
  {
    id: 5,
    name: 'Skincare',
    description: 'Curated skincare collections wholesale',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=687',
    count: '300+ Products',
  },
]

export default function CategoryShowcase() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])
  const ctaBannerRef = useRef(null)

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
            duration: 0.6,
            delay: index * 0.1,
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

    if (ctaBannerRef.current) {
      gsap.to(ctaBannerRef.current.querySelector('.cta-bg'), {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: ctaBannerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="categories"
      className="relative overflow-hidden pt-24"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0  ">
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1920"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ivory/95 via-champagne/90 to-ivory/95" />
        <div className="absolute inset-0 bg-pattern-luxury opacity-30" />
      </div>
      
      <div className="relative ">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section Header */}
          <div ref={headingRef} className="mb-16 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-luxe-gold/30 bg-luxe-gold/10 px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-widest text-luxe-gold-dark backdrop-blur-sm">
              <FiPackage className="h-3.5 w-3.5" />
              Exclusive Collections
            </span>
            <h2 className="font-serif text-4xl font-semibold tracking-wide text-charcoal md:text-5xl lg:text-6xl">
              Shop by Category
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-gold" />
            <p className="mx-auto mt-6 max-w-2xl font-sans text-lg text-muted-foreground">
              Explore our curated selection of premium beauty products and professional equipment, 
              available exclusively for wholesale partners.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                ref={el => cardsRef.current[index] = el}
                className={`group relative overflow-hidden rounded-3xl shadow-xl ${
                  index === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                }`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <a href="#contact" className="block h-full">
                  <div className={`relative overflow-hidden h-full ${
                    index === 0 ? 'min-h-125 lg:min-h-170' : 'aspect-4/3'
                  }`}>
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                    
                    {/* linear Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90" />
                    
                    {/* Gold Border Glow */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-luxe-gold/0 transition-all duration-500 group-hover:border-luxe-gold/50 group-hover:shadow-[inset_0_0_30px_rgba(213,206,149,0.3)]" />
                    
                    {/* Corner Decorations */}
                    <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-luxe-gold/40 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-luxe-gold/40 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                    
                    {/* Content - description always visible */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                      {/* Product Count Badge */}
                      <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-luxe-gold/30 bg-luxe-gold/20 px-4 py-1.5 backdrop-blur-md">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-luxe-gold" />
                        <span className="font-sans text-xs font-semibold tracking-wide text-white">{category.count}</span>
                      </div>
                      
                  
                      <h3 className="font-serif text-2xl font-semibold text-ivory md:text-3xl">
                        {category.name}
                      </h3>
                      {/* Description now always shown */}
                      <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-ivory/80">
                        {category.description}
                      </p>
                      
                      {/* CTA Button */}
                      <motion.div 
                        className="mt-5 flex items-center gap-3"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="inline-flex items-center gap-2 rounded-full bg-luxe-gold px-5 py-2.5 font-sans text-sm font-semibold text-charcoal shadow-lg transition-all duration-300 group-hover:bg-ivory group-hover:shadow-xl">
                          Contact for Details
                          <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full Width CTA Banner with Background Image */}
        <div ref={ctaBannerRef} className="relative  mt-20 overflow-hidden ">
          {/* Background Image with Parallax */}
          <div className="cta-bg absolute inset-0 scale-110">
            <img 
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1920"
              alt=""
              className="h-full w-full object-cover object-top"
            />
          </div>
          
          {/* Overlays */}
          <div className="absolute inset-0 bg-linear-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
          <div className="absolute inset-0 bg-pattern-dots opacity-20" />
          
          {/* Gold Accent Lines */}
          <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-transparent via-luxe-gold to-transparent" />
          <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-luxe-gold to-transparent" />
          
          <div className="relative px-6 py-20 md:py-28 lg:px-12">
            <div className="mx-auto max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-luxe-gold/40 bg-luxe-gold/20 px-4 py-2 font-sans text-xs font-medium uppercase tracking-widest text-luxe-gold backdrop-blur-sm">
                    <FiStar className="h-3.5 w-3.5" />
                    Wholesale Partners
                  </span>
                  
                  <h3 className="font-serif text-4xl font-semibold leading-tight text-ivory md:text-5xl lg:text-6xl">
                    Build Your
                    <span className="mt-2 block text-luxe-gold">Custom Catalog</span>
                  </h3>
                  
                  <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-ivory/80">
                    Partner with us to create a personalized wholesale catalog tailored to your 
                    business needs. Access premium beauty brands at exclusive wholesale pricing.
                  </p>
                  
                  {/* Features */}
                  <div className="mt-8 flex flex-wrap gap-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-luxe-gold/20 backdrop-blur-sm">
                        <FiShield className="h-5 w-5 text-luxe-gold" />
                      </div>
                      <div>
                        <p className="font-sans text-sm font-semibold text-ivory">100% Authentic</p>
                        <p className="font-sans text-xs text-ivory/60">Verified Products</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-luxe-gold/20 backdrop-blur-sm">
                        <FiTruck className="h-5 w-5 text-luxe-gold" />
                      </div>
                      <div>
                        <p className="font-sans text-sm font-semibold text-ivory">Fast Shipping</p>
                        <p className="font-sans text-xs text-ivory/60">Worldwide Delivery</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(213,206,149,0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 rounded-full bg-linear-gold px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-charcoal shadow-xl transition-all duration-300"
                    >
                      Contact Our Team
                      <FiArrowRight className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="#products"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-luxe-gold/50 bg-transparent px-8 py-4 font-sans text-sm font-bold uppercase tracking-widest text-luxe-gold transition-all duration-300 hover:border-luxe-gold hover:bg-luxe-gold/10"
                    >
                      View Catalog
                    </motion.a>
                  </div>
                </motion.div>
                
                {/* Right Side - Floating Product Cards */}
                <motion.div 
                  className="relative hidden lg:block"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Large Image Card */}
                  <motion.div 
                    className="relative z-10 overflow-hidden rounded-3xl border border-luxe-gold/30 shadow-2xl"
                    whileHover={{ y: -10, rotate: -1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600"
                      alt="Premium beauty products"
                      className="aspect-4/5 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="mb-2 inline-block rounded-full bg-luxe-gold/30 px-3 py-1 font-sans text-xs font-medium text-luxe-gold backdrop-blur-sm">
                        Featured
                      </span>
                      <h4 className="font-serif text-xl font-semibold text-ivory">Premium Collection</h4>
                      <p className="mt-1 font-sans text-sm text-ivory/70">500+ Products Available</p>
                    </div>
                  </motion.div>
                  
                  {/* Floating Badge */}
                  <motion.div 
                    className="absolute -right-4 -top-4 z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-luxe-gold bg-charcoal shadow-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="font-serif text-2xl font-bold text-luxe-gold">50%</span>
                    <span className="font-sans text-[10px] font-medium uppercase tracking-wide text-ivory">Off Retail</span>
                  </motion.div>
                  
                  {/* Small Floating Card */}
                  <motion.div 
                    className="absolute -bottom-8 -left-8 z-20 overflow-hidden rounded-2xl border border-luxe-gold/30 bg-ivory/95 p-4 shadow-xl backdrop-blur-sm"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-14 w-14 overflow-hidden rounded-xl">
                        <img 
                          src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=200"
                          alt="Skincare"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-serif text-sm font-semibold text-charcoal">Luxury Skincare</p>
                        <p className="font-sans text-xs text-muted-foreground">300+ Items</p>
                        <div className="mt-1 flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className="h-3 w-3 fill-luxe-gold text-luxe-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}