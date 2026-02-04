"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "Our minimum order quantity varies by product category. Generally, the MOQ is 12 units per SKU for cosmetics and skincare products. For MedSpa equipment, there is no minimum order quantity. Please check individual product pages for specific details.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary depending on the destination. We work with trusted logistics partners to ensure your products arrive safely and on time.",
  },
  {
    question: "How can I become a wholesale partner?",
    answer: "To become a wholesale partner, please fill out the form on our Contact page or create an account. Our team will review your application within 24-48 hours. Once approved, you'll gain access to wholesale pricing and bulk ordering options.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank wire transfers for large orders. Net-30 terms may be available for qualified long-term partners.",
  },
  {
    question: "Can I request samples before placing a large order?",
    answer: "Yes, sample kits are available for most of our skincare and cosmetic lines. You can order a sample kit directly through our website or contact our sales team for a custom sample request.",
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns for defective or damaged items within 14 days of delivery. For non-defective items, returns are subject to a 20% restocking fee and must be in unopened, original packaging. Please visit our Shipping & Returns page for more details.",
  },
  {
    question: "Do you offer private labeling?",
    answer: "Yes, we offer private labeling services for select skincare and cosmetic products. Minimum order quantities for private labeling start at 500 units per SKU. Contact us for a custom quote.",
  },
  {
    question: "How long does shipping take?",
    answer: "Domestic orders typically arrive within 3-5 business days. International orders generally take 7-14 business days, depending on customs clearance. Expedited shipping options are available at checkout.",
  },
];

export default function FAQPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".faq-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-background pt-24 pb-16" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="faq-header text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our products, shipping, and wholesale partnership program.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="faq-item border-b-border/50">
                <AccordionTrigger className="text-left font-medium text-charcoal hover:text-luxe-gold transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}
