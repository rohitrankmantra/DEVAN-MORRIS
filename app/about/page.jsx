"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Users,
  Globe,
  Heart,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Quote,
  Star,
  Building2,
  Truck,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "5000+", label: "Happy Partners", icon: Users },
  { number: "50+", label: "Countries Served", icon: Globe },
  { number: "10K+", label: "Products", icon: Heart },
];

const values = [
  {
    title: "Quality First",
    description:
      "We source only the finest products from trusted manufacturers worldwide, ensuring every item meets our rigorous quality standards.",
    icon: Award,
  },
  {
    title: "Partner Success",
    description:
      "Your success is our success. We provide dedicated support, training, and resources to help your business thrive.",
    icon: Users,
  },
  {
    title: "Innovation",
    description:
      "Stay ahead with the latest beauty trends and cutting-edge MedSpa equipment. We continuously expand our collection.",
    icon: Sparkles,
  },
  {
    title: "Integrity",
    description:
      "Transparent pricing, authentic products, and honest partnerships form the foundation of everything we do.",
    icon: Shield,
  },
];

const team = [
  {
    name: "Isabella Romano",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    quote: "Beauty is about enhancing what you have. Let yourself shine through!",
  },
  {
    name: "Sophia Chen",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    quote: "Excellence in every detail, from sourcing to delivery.",
  },
  {
    name: "Olivia Williams",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    quote: "Curating the best products for discerning beauty professionals.",
  },
  {
    name: "Emma Martinez",
    role: "Client Relations",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80",
    quote: "Building lasting partnerships through exceptional service.",
  },
];

const milestones = [
  { year: "2008", title: "Founded", description: "Started with a vision to transform beauty wholesale" },
  { year: "2012", title: "Global Expansion", description: "Expanded operations to serve international markets" },
  { year: "2016", title: "MedSpa Division", description: "Launched professional MedSpa equipment line" },
  { year: "2020", title: "Digital Innovation", description: "Introduced online ordering platform for partners" },
  { year: "2024", title: "5000+ Partners", description: "Reached milestone of 5000+ wholesale partners" },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const storyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Stats counter animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Story section
      gsap.from(".story-image", {
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%",
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".story-content > *", {
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 70%",
        },
        x: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Values animation
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: ".values-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Team animation
      gsap.from(".team-card", {
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Timeline animation
      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline-section",
          start: "top 80%",
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(213, 206, 149, 0.2) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(213, 206, 149, 0.15) 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-pattern-dots opacity-40" />
        
        {/* Decorative Image */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-30 hidden lg:block"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="hero-content max-w-3xl">
            <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-6">
              <Sparkles className="w-3 h-3 mr-1" />
              Our Story
            </Badge>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 text-balance">
              Empowering Beauty{" "}
              <span className="text-gradient-gold">Professionals</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              For over 15 years, we have been the trusted partner for beauty salons, 
              spas, and MedSpa clinics worldwide, providing premium wholesale beauty 
              products and professional equipment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-[#D5CE95] to-[#C4B87A] hover:from-[#C4B87A] hover:to-[#B3A76A] text-charcoal rounded-full px-6 sm:px-8 h-12 sm:h-14"
              >
                <Link href="/contact">
                  Become a Partner
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#D5CE95] text-charcoal hover:bg-[#D5CE95]/10 rounded-full px-6 sm:px-8 h-12 sm:h-14 bg-transparent"
              >
                <Link href="/shops">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute bottom-16 sm:bottom-20 right-10 sm:right-32 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-[#D5CE95]/20 hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-32 sm:top-40 right-40 sm:right-60 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-rose-200/30 hidden lg:block"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 md:py-16 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-diagonal opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-[#D5CE95]/20 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#D5CE95]" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#D5CE95] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-luxury" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="story-image relative">
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-charcoal/30 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-[#D5CE95]/20 max-w-60 sm:max-w-xs hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D5CE95]/20 flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B8455]" />
                  </div>
                  <div>
                    <div className="font-serif text-base sm:text-lg text-charcoal">Certified</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Quality Supplier</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#D5CE95] text-[#D5CE95]" />
                  ))}
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[#D5CE95]/30 hidden lg:block" />
            </div>

            {/* Content */}
            <div className="story-content">
              <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-4">
                Est. 2008
              </Badge>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mb-6">
                A Legacy of <span className="text-gradient-gold">Excellence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Founded in 2008 by Isabella Romano, LuxeBeauty Wholesale began with a 
                  simple mission: to provide beauty professionals with access to premium 
                  products at competitive wholesale prices.
                </p>
                <p>
                  What started as a small operation serving local salons has grown into 
                  a global wholesale network, serving over 5,000 partners across 50+ 
                  countries. Our commitment to quality, authenticity, and exceptional 
                  service has made us the trusted choice for beauty businesses worldwide.
                </p>
                <p>
                  Today, we continue to expand our collection, bringing you the latest 
                  in skincare, cosmetics, hair care, and professional MedSpa equipment. 
                  Our dedicated team works tirelessly to ensure every partner receives 
                  the support they need to succeed.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden"
                    >
                      <Image src={src || "/placeholder.svg"} alt="Team" width={48} height={48} className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-charcoal font-medium text-sm sm:text-base">Led by Experts</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Industry veterans with 50+ years combined experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section py-16 md:py-24 bg-linear-to-b from-[#D5CE95]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-4">
              What Drives Us
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
              Our Core <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              These principles guide everything we do, from product selection to partner relationships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl p-6 sm:p-8 h-full shadow-sm border border-[#D5CE95]/10 hover:shadow-xl hover:border-[#D5CE95]/30 transition-all duration-500">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-br from-[#D5CE95]/20 to-[#D5CE95]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#8B8455]" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-charcoal mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-4">
              Our Journey
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal">
              Key <span className="text-gradient-gold">Milestones</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#D5CE95] via-[#D5CE95]/50 to-[#D5CE95]/20 transform md:-translate-x-0.5" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`timeline-item relative flex items-center gap-6 md:gap-8 mb-10 md:mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[#D5CE95] border-4 border-white shadow-lg transform -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? "md:pr-12 lg:pr-16 md:text-right" : "md:pl-12 lg:pl-16"}`}>
                    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[#D5CE95]/20 inline-block">
                      <div className="text-[#D5CE95] font-serif text-xl sm:text-2xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl text-charcoal mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-16 md:py-24 bg-linear-to-b from-transparent via-[#D5CE95]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-4">
              Meet the Team
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
              The People Behind <span className="text-gradient-gold">Our Success</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Our dedicated team of beauty industry experts is here to support your business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#D5CE95]/10 hover:shadow-xl hover:border-[#D5CE95]/30 transition-all duration-500">
                  <div className="relative aspect-3/4 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#D5CE95] mb-2 opacity-70" />
                        <p className="text-white text-xs sm:text-sm italic">{member.quote}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 text-center">
                    <h3 className="font-serif text-lg sm:text-xl text-charcoal mb-1">{member.name}</h3>
                    <p className="text-[#D5CE95] text-xs sm:text-sm font-medium">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced CTA Section */}
      <section className="py-16 md:py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-diagonal opacity-10" />
        
        {/* Enhanced Full Background Image */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1600&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-charcoal/70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <Badge className="bg-[#D5CE95]/20 text-[#D5CE95] border-[#D5CE95]/30 mb-6">
                Why Partner With Us
              </Badge>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
                The LuxeBeauty <span className="text-[#D5CE95]">Advantage</span>
              </h2>
              <p className="text-white/80 mb-8 text-base sm:text-lg max-w-xl">
                Join thousands of beauty professionals who trust us for premium products, 
                exceptional service, and real business growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: CheckCircle, text: "100% Authentic Products Guaranteed" },
                  { icon: Truck, text: "Fast Worldwide Shipping" },
                  { icon: Clock, text: "Dedicated Account Manager" },
                  { icon: Building2, text: "Competitive Wholesale Pricing" },
                  { icon: Shield, text: "Secure Payment Options" },
                  { icon: Award, text: "Industry-Leading Support" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10  sm:w-12 h-12 rounded-xl bg-[#D5CE95]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5  sm:w-6 h-6 text-[#D5CE95]" />
                    </div>
                    <span className="text-white/90 text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right CTA */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-[#D5CE95]/20 shadow-2xl">
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-6">
                Ready to Elevate Your Business?
              </h3>
              <p className="text-white/80 mb-8 text-sm sm:text-base">
                Get exclusive wholesale access, personalized quotes, and dedicated support today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal rounded-full px-6 sm:px-8 h-12 sm:h-14"
                >
                  <Link href="/contact">
                    Start Partnership
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#D5CE95] text-[#D5CE95] hover:bg-[#D5CE95]/10 rounded-full px-6 sm:px-8 h-12 sm:h-14"
                >
                  <Link href="/shops">
                    Browse Catalog
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
