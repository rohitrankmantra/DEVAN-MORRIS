"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import {
  Heart,
  Share2,
  Phone,
  Mail,
  Check,
  ChevronRight,
  Star,
  Truck,
  Shield,
  Award,
  Package,
  ArrowLeft,
  ArrowRight,
  ZoomIn,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/header";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

// Mock product data
const productData = {
  id: 1,
  name: "Luxury Hydrating Serum",
  brand: "LuxeGlow",
  category: "Skincare",
  description:
    "A luxurious, deeply hydrating serum formulated with hyaluronic acid and botanical extracts. This professional-grade formula delivers intense moisture while improving skin texture and radiance. Perfect for salons and spas seeking premium skincare solutions.",
  features: [
    "Advanced Hyaluronic Acid Complex",
    "Botanical Extract Blend",
    "Paraben-Free Formula",
    "Suitable for All Skin Types",
    "Professional Grade Quality",
    "Dermatologically Tested",
  ],
  specifications: [
    { label: "Volume", value: "50ml / 1.7 fl oz" },
    { label: "Skin Type", value: "All Skin Types" },
    { label: "Key Ingredients", value: "Hyaluronic Acid, Vitamin E, Aloe Vera" },
    { label: "Application", value: "Morning & Evening" },
    { label: "Shelf Life", value: "24 Months" },
    { label: "Origin", value: "Made in France" },
  ],
  images: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80",
    "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=800&q=80",
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80",
  ],
  badge: "Best Seller",
  rating: 4.9,
  reviews: 128,
  minOrder: 12,
};

const relatedProducts = [
  {
    id: 2,
    name: "Anti-Aging Night Cream",
    brand: "Derma Elite",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600&q=80",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Vitamin C Brightening Serum",
    brand: "Pure Radiance",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&q=80",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Hydrating Face Mask Set",
    brand: "LuxeGlow",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&q=80",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Collagen Boost Essence",
    brand: "Silk & Satin",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=80",
    rating: 4.8,
  },
];

export default function ProductDetailPage({ params }) {
  const { id } = use(params);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const galleryRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".product-gallery", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".product-info > *", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".related-product", {
        scrollTrigger: {
          trigger: ".related-products",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productData.images.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + productData.images.length) % productData.images.length
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-28 pb-4 bg-gradient-to-b from-[#D5CE95]/10 to-transparent">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-[#D5CE95] transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link
              href="/shop"
              className="text-muted-foreground hover:text-[#D5CE95] transition-colors"
            >
              Shop
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link
              href="/categories"
              className="text-muted-foreground hover:text-[#D5CE95] transition-colors"
            >
              {productData.category}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-charcoal font-medium">{productData.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div className="product-gallery" ref={galleryRef}>
              {/* Main Image */}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#D5CE95]/10 to-transparent mb-4 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={productData.images[selectedImage] || "/placeholder.svg"}
                      alt={productData.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Badge */}
                {productData.badge && (
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-[#D5CE95] text-charcoal text-sm px-4 py-1.5">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {productData.badge}
                    </Badge>
                  </div>
                )}

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D5CE95]"
                >
                  <ArrowLeft className="w-5 h-5 text-charcoal" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D5CE95]"
                >
                  <ArrowRight className="w-5 h-5 text-charcoal" />
                </button>

                {/* Zoom Button */}
                <button
                  onClick={() => setShowZoom(true)}
                  className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D5CE95]"
                >
                  <ZoomIn className="w-5 h-5 text-charcoal" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-[#D5CE95] shadow-lg"
                        : "border-transparent hover:border-[#D5CE95]/50"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${productData.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    {selectedImage === index && (
                      <div className="absolute inset-0 bg-[#D5CE95]/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info" ref={contentRef}>
              <div className="sticky top-32">
                {/* Brand & Category */}
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className="border-[#D5CE95] text-[#8B8455] bg-[#D5CE95]/10"
                  >
                    {productData.brand}
                  </Badge>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-muted-foreground">{productData.category}</span>
                </div>

                {/* Title */}
                <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                  {productData.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(productData.rating)
                            ? "fill-[#D5CE95] text-[#D5CE95]"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium text-charcoal">{productData.rating}</span>
                  <span className="text-muted-foreground">
                    ({productData.reviews} reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {productData.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {productData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-charcoal"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#D5CE95]/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#8B8455]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Min Order */}
                <div className="bg-[#D5CE95]/10 rounded-2xl p-6 mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-charcoal font-medium">Minimum Order</span>
                    <span className="text-2xl font-serif text-[#8B8455]">
                      {productData.minOrder} units
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Contact us for wholesale pricing and bulk order discounts.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="flex-1 h-14 bg-gradient-to-r from-[#D5CE95] to-[#C4B87A] hover:from-[#C4B87A] hover:to-[#B3A76A] text-charcoal rounded-full text-lg font-medium"
                  >
                    <Link href="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Request Quote
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="flex-1 h-14 border-[#D5CE95] text-charcoal hover:bg-[#D5CE95]/10 rounded-full text-lg bg-transparent"
                  >
                    <Link href="/contact">
                      <Mail className="w-5 h-5 mr-2" />
                      Inquire
                    </Link>
                  </Button>
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-4 pb-8 border-b border-[#D5CE95]/20">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="flex items-center gap-2 text-muted-foreground hover:text-[#D5CE95] transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isWishlisted ? "fill-rose-500 text-rose-500" : ""
                      }`}
                    />
                    <span className="text-sm">Add to Wishlist</span>
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-[#D5CE95] transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#D5CE95]/20 flex items-center justify-center">
                      <Truck className="w-6 h-6 text-[#8B8455]" />
                    </div>
                    <span className="text-xs text-muted-foreground">Fast Shipping</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#D5CE95]/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-[#8B8455]" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      100% Authentic
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#D5CE95]/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#8B8455]" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      Premium Quality
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-gradient-to-b from-transparent via-[#D5CE95]/5 to-transparent">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full max-w-xl mx-auto grid grid-cols-3 bg-white rounded-full p-1 shadow-sm border border-[#D5CE95]/20 mb-12">
              <TabsTrigger
                value="specifications"
                className="rounded-full data-[state=active]:bg-[#D5CE95] data-[state=active]:text-charcoal"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="rounded-full data-[state=active]:bg-[#D5CE95] data-[state=active]:text-charcoal"
              >
                Shipping
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-full data-[state=active]:bg-[#D5CE95] data-[state=active]:text-charcoal"
              >
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#D5CE95]/20">
                <h3 className="font-serif text-2xl text-charcoal mb-6">
                  Product Specifications
                </h3>
                <div className="space-y-4">
                  {productData.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-4 border-b border-[#D5CE95]/10 last:border-0"
                    >
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="text-charcoal font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#D5CE95]/20">
                <h3 className="font-serif text-2xl text-charcoal mb-6">
                  Shipping Information
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D5CE95]/20 flex items-center justify-center shrink-0">
                      <Package className="w-6 h-6 text-[#8B8455]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">
                        Wholesale Shipping
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        We ship wholesale orders worldwide. Delivery times vary based on
                        location and order size. Contact us for specific shipping quotes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D5CE95]/20 flex items-center justify-center shrink-0">
                      <Truck className="w-6 h-6 text-[#8B8455]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">
                        Express Delivery Available
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Need your order urgently? We offer express shipping options for
                        time-sensitive orders. Additional fees apply.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#D5CE95]/20 flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-[#8B8455]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal mb-1">
                        Insured Shipping
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        All wholesale orders are fully insured during transit. We ensure
                        your products arrive in perfect condition.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#D5CE95]/20">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal mb-2">
                      Customer Reviews
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-[#D5CE95] text-[#D5CE95]"
                          />
                        ))}
                      </div>
                      <span className="text-charcoal font-medium">
                        {productData.rating} out of 5
                      </span>
                      <span className="text-muted-foreground">
                        ({productData.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <Button className="bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal rounded-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Write a Review
                  </Button>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-6">
                  {[
                    {
                      name: "Sarah M.",
                      role: "Spa Owner",
                      rating: 5,
                      date: "2 weeks ago",
                      comment:
                        "Exceptional quality! My clients absolutely love this serum. The results are visible from the first application.",
                    },
                    {
                      name: "Emily R.",
                      role: "Beauty Salon",
                      rating: 5,
                      date: "1 month ago",
                      comment:
                        "Been ordering wholesale for our salon for 6 months now. Consistent quality and fast shipping every time.",
                    },
                    {
                      name: "Jessica L.",
                      role: "MedSpa Director",
                      rating: 4,
                      date: "1 month ago",
                      comment:
                        "Great product for our treatment protocols. Professional grade quality that our clients appreciate.",
                    },
                  ].map((review, index) => (
                    <div
                      key={index}
                      className="pb-6 border-b border-[#D5CE95]/10 last:border-0"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D5CE95] to-[#C4B87A] flex items-center justify-center text-charcoal font-medium">
                            {review.name[0]}
                          </div>
                          <div>
                            <h4 className="font-medium text-charcoal">{review.name}</h4>
                            <p className="text-xs text-muted-foreground">
                              {review.role}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-[#D5CE95] text-[#D5CE95]"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="related-products py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-4">
              You May Also Like
            </Badge>
            <h2 className="font-serif text-4xl text-charcoal">Related Products</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <motion.div
                key={product.id}
                className="related-product group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/shop/${product.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#D5CE95]/10 hover:shadow-xl hover:border-[#D5CE95]/30 transition-all duration-500">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4">
                          <Button className="w-full bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact Us
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-[#D5CE95] font-medium uppercase tracking-wider mb-1">
                        {product.brand}
                      </p>
                      <h3 className="font-serif text-lg text-charcoal group-hover:text-[#8B8455] transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="w-4 h-4 fill-[#D5CE95] text-[#D5CE95]" />
                        <span className="text-sm text-charcoal">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {showZoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowZoom(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-square"
            >
              <Image
                src={productData.images[selectedImage] || "/placeholder.svg"}
                alt={productData.name}
                fill
                className="object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
