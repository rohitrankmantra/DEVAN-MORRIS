"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function PrivacyPolicyPage() {
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

      gsap.from(".policy-section", {
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
        <div className="header-content text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Last Updated: February 4, 2026
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-border/50 p-8 md:p-12 space-y-8">
          <section className="policy-section">
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Devan Morris, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact our support team. This may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Name, email address, and phone number</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely by third-party providers)</li>
              <li>Business information for wholesale accounts</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your account and orders</li>
              <li>Send you marketing communications (if you have opted in)</li>
              <li>Improve our website and customer service</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption for sensitive data transmission.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-charcoal font-medium mt-2">contact@devanmorris.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
