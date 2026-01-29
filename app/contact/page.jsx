"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  Globe,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/header";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (888) 555-0123", "+1 (888) 555-0124"],
    action: "tel:+18885550123",
    actionText: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["wholesale@luxebeauty.com", "support@luxebeauty.com"],
    action: "mailto:wholesale@luxebeauty.com",
    actionText: "Send Email",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["123 Beauty Boulevard", "Los Angeles, CA 90001"],
    action: "https://maps.google.com",
    actionText: "Get Directions",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9AM - 6PM PST", "Sat: 10AM - 4PM PST"],
    action: null,
    actionText: null,
  },
];

const officeLocations = [
  {
    city: "Los Angeles",
    country: "USA",
    address: "123 Beauty Boulevard, LA 90001",
    phone: "+1 (888) 555-0123",
    image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=600&q=80",
  },
  {
    city: "London",
    country: "UK",
    address: "45 Mayfair Lane, W1K 2PA",
    phone: "+44 20 7123 4567",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
  },
  {
    city: "Dubai",
    country: "UAE",
    address: "Business Bay Tower, Suite 1200",
    phone: "+971 4 123 4567",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
  },
];

const inquiryTypes = [
  "Wholesale Partnership",
  "Product Inquiry",
  "MedSpa Equipment",
  "Bulk Order Quote",
  "Become a Distributor",
  "General Inquiry",
];

const businessTypes = [
  "Beauty Salon",
  "Day Spa",
  "MedSpa / Clinic",
  "Retail Store",
  "Online Retailer",
  "Distributor",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    inquiryType: "",
    message: "",
    newsletter: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: ".contact-cards",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".form-section", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".office-card", {
        scrollTrigger: {
          trigger: ".offices-section",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(213, 206, 149, 0.15) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(213, 206, 149, 0.1) 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-pattern-dots opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="hero-content text-center max-w-3xl mx-auto">
            <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-6">
              <MessageCircle className="w-3 h-3 mr-1" />
              Get in Touch
            </Badge>
            <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6 text-balance">
              Let's Start Your{" "}
              <span className="text-gradient-gold">Partnership</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to elevate your beauty business? Our team is here to help you access 
              premium wholesale products and grow your business.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-20 w-20 h-20 rounded-full bg-[#D5CE95]/20 hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-32 w-16 h-16 rounded-full bg-rose-200/30 hidden lg:block"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity }}
        />
      </section>

      {/* Contact Cards */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="contact-cards grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-lg border border-[#D5CE95]/20 hover:border-[#D5CE95]/40 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D5CE95] to-[#C4B87A] flex items-center justify-center mb-4">
                    <info.icon className="w-7 h-7 text-charcoal" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action}
                      className="inline-flex items-center text-[#8B8455] hover:text-[#D5CE95] text-sm font-medium transition-colors"
                    >
                      {info.actionText}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-luxury" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-4">
                Wholesale Inquiries
              </Badge>
              <h2 className="font-serif text-4xl text-charcoal mb-6">
                Request a <span className="text-gradient-gold">Quote</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fill out the form and one of our wholesale specialists will contact you 
                within 24 hours to discuss your needs and provide a customized quote.
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  "Competitive wholesale pricing",
                  "Dedicated account manager",
                  "Fast worldwide shipping",
                  "Flexible payment terms",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#D5CE95]/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-[#8B8455]" />
                    </div>
                    <span className="text-charcoal">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-[#D5CE95]/20">
                <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: "#" },
                    { icon: Facebook, href: "#" },
                    { icon: Twitter, href: "#" },
                    { icon: Linkedin, href: "#" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-[#D5CE95]/20 flex items-center justify-center text-[#8B8455] hover:bg-[#D5CE95] hover:text-charcoal transition-all duration-300"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 form-section">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-[#D5CE95]/20">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#D5CE95]/20 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-[#8B8455]" />
                    </div>
                    <h3 className="font-serif text-3xl text-charcoal mb-4">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      Your inquiry has been received. Our wholesale team will contact 
                      you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: "",
                          lastName: "",
                          email: "",
                          phone: "",
                          company: "",
                          businessType: "",
                          inquiryType: "",
                          message: "",
                          newsletter: false,
                        });
                      }}
                      className="bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal rounded-full px-8"
                    >
                      Submit Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          First Name *
                        </label>
                        <Input
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="John"
                          className="h-12 border-[#D5CE95]/30 focus:border-[#D5CE95] rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Last Name *
                        </label>
                        <Input
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Doe"
                          className="h-12 border-[#D5CE95]/30 focus:border-[#D5CE95] rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Contact Row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Email Address *
                        </label>
                        <Input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@company.com"
                          className="h-12 border-[#D5CE95]/30 focus:border-[#D5CE95] rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="h-12 border-[#D5CE95]/30 focus:border-[#D5CE95] rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Business Info */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Company Name *
                        </label>
                        <Input
                          required
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your Business Name"
                          className="h-12 border-[#D5CE95]/30 focus:border-[#D5CE95] rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Business Type *
                        </label>
                        <Select
                          value={formData.businessType}
                          onValueChange={(value) => handleInputChange("businessType", value)}
                        >
                          <SelectTrigger className="h-12 border-[#D5CE95]/30 focus:border-[#D5CE95] rounded-xl">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Inquiry Type *
                      </label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger className="h-12 border-[#D5CE95]/30 focus:border-[#D5CE95] rounded-xl">
                          <SelectValue placeholder="What can we help you with?" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your business needs, product interests, or any questions you have..."
                        rows={5}
                        className="border-[#D5CE95]/30 focus:border-[#D5CE95] rounded-xl resize-none"
                      />
                    </div>

                    {/* Newsletter */}
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) =>
                          handleInputChange("newsletter", checked)
                        }
                        className="border-[#D5CE95] data-[state=checked]:bg-[#D5CE95] data-[state=checked]:border-[#D5CE95] mt-0.5"
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        Subscribe to our newsletter for exclusive deals, new product 
                        announcements, and industry insights.
                      </label>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-to-r from-[#D5CE95] to-[#C4B87A] hover:from-[#C4B87A] hover:to-[#B3A76A] text-charcoal rounded-xl text-lg font-medium disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="offices-section py-20 bg-gradient-to-b from-[#D5CE95]/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-4">
              <Globe className="w-3 h-3 mr-1" />
              Global Presence
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              Our <span className="text-gradient-gold">Offices</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With offices across three continents, we are well-positioned to serve 
              beauty professionals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                className="office-card group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#D5CE95]/10 hover:shadow-xl hover:border-[#D5CE95]/30 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={office.image || "/placeholder.svg"}
                      alt={office.city}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="font-serif text-2xl text-white">{office.city}</h3>
                      <p className="text-white/80 text-sm">{office.country}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-[#D5CE95] shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#D5CE95]" />
                      <p className="text-charcoal font-medium">{office.phone}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80"
              alt="World Map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-serif text-4xl text-white mb-4">
                  Serving <span className="text-[#D5CE95]">50+</span> Countries
                </h3>
                <p className="text-white/80 mb-8 max-w-md mx-auto">
                  Our global logistics network ensures fast and reliable delivery 
                  to beauty professionals worldwide.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal rounded-full px-8"
                >
                  <Link href="/shop">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Browse Products
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-diagonal opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Have More Questions?
              </h2>
              <p className="text-white/70 max-w-lg">
                Check our FAQ section for answers to common questions about wholesale 
                partnerships, shipping, and more.
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal rounded-full px-8"
              >
                <Link href="/about">
                  View FAQ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
              >
                <a href="tel:+18885550123">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
