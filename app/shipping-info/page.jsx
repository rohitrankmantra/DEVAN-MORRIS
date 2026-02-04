"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Truck, Package, Clock, Globe, ShieldCheck, AlertCircle } from "lucide-react";

export default function ShippingInfoPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".header-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".info-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const shippingFeatures = [
    {
      icon: Truck,
      title: "Domestic Shipping",
      description: "We offer free standard shipping on all domestic wholesale orders over $500. Standard delivery takes 3-5 business days via UPS or FedEx Ground.",
    },
    {
      icon: Globe,
      title: "International Shipping",
      description: "We ship to over 50 countries. International shipping rates are calculated at checkout based on weight and destination. Delivery typically takes 7-14 business days.",
    },
    {
      icon: Clock,
      title: "Processing Time",
      description: "Orders are typically processed and dispatched within 24-48 hours of payment confirmation, excluding weekends and holidays.",
    },
    {
      icon: Package,
      title: "Packaging",
      description: "All products are securely packaged to prevent damage during transit. MedSpa equipment is shipped in reinforced crates for maximum protection.",
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-24 pb-16" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="header-content text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            Shipping & Returns
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our delivery process, shipping policies, and returns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {shippingFeatures.map((feature, index) => (
            <div key={index} className="info-card bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <feature.icon className="w-10 h-10 text-luxe-gold mb-4" />
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="info-card bg-[#F9F9F9] rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-luxe-gold" />
                <h2 className="font-serif text-2xl font-semibold text-charcoal">Return Policy</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We want you to be completely satisfied with your purchase. If you are not satisfied with your order, please review our return guidelines below:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxe-gold mt-2 shrink-0" />
                  <span>Returns must be initiated within 14 days of delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxe-gold mt-2 shrink-0" />
                  <span>Items must be unused, unopened, and in original packaging.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxe-gold mt-2 shrink-0" />
                  <span>Return shipping costs are the responsibility of the customer, unless the item is defective.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxe-gold mt-2 shrink-0" />
                  <span>A 20% restocking fee applies to non-defective returns.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-luxe-gold" />
                <h2 className="font-serif text-2xl font-semibold text-charcoal">Damaged Items</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the rare event that your order arrives damaged or defective, please contact us immediately within 48 hours of delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please provide photos of the damaged packaging and products. We will arrange for a replacement or refund as quickly as possible at no additional cost to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
