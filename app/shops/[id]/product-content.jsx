"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
import { products } from "@/data/products";

export default function ProductContent({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showZoom, setShowZoom] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-charcoal">Product not found</h1>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % (product.images?.length || 1));
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + (product.images?.length || 1)) % (product.images?.length || 1));
  };

  return (
    <main className="min-h-screen bg-background">

      {/* Breadcrumb */}
      <section className="pt-28 pb-4 bg-linear-to-b from-[#D5CE95]/10 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-[#D5CE95] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link href="/shops" className="text-muted-foreground hover:text-[#D5CE95] transition-colors">
              Shop
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{product.category}</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-charcoal font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <div className="product-gallery">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-linear-to-br from-[#D5CE95]/10 to-transparent mb-4 group">
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
                      src={product.images?.[selectedImage] || "/placeholder.jpg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-[#D5CE95] text-charcoal text-sm px-4 py-1.5">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {product.badge}
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
                {product.images?.map((image, index) => (
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
                      src={image || "/placeholder.jpg"}
                      alt={`${product.name} ${index + 1}`}
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
            <div className="product-info">
              <div className="sticky top-32">
                {/* Brand & Category */}
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className="border-[#D5CE95] text-[#8B8455] bg-[#D5CE95]/10"
                  >
                    {product.brand}
                  </Badge>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-muted-foreground">{product.category}</span>
                </div>

                {/* Title */}
                <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-[#D5CE95] text-[#D5CE95]"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium text-charcoal">{product.rating}</span>
                  <span className="text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {product.features?.map((feature, index) => (
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
                      {product.minOrder} units
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
                    className="flex-1 h-14 bg-linear-to-r from-[#D5CE95] to-[#C4B87A] hover:from-[#C4B87A] hover:to-[#B3A76A] text-charcoal rounded-full text-lg font-medium"
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
      <section className="py-16 bg-linear-to-b from-transparent via-[#D5CE95]/5 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
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
                  {product.specifications?.map((spec, index) => (
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
                        {product.rating} out of 5
                      </span>
                      <span className="text-muted-foreground">
                        ({product.reviews} reviews)
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
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-charcoal">
                            {review.name}
                          </span>
                          <Badge
                            variant="secondary"
                            className="text-xs bg-[#D5CE95]/20 text-[#8B8455]"
                          >
                            {review.role}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating
                                ? "fill-[#D5CE95] text-[#D5CE95]"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="font-serif text-3xl text-charcoal mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <Link href={`/shops/${rel.id}`} key={rel.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#D5CE95]/10 hover:shadow-xl hover:border-[#D5CE95]/30 transition-all duration-500">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={rel.image || "/placeholder.jpg"}
                      alt={rel.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-charcoal mb-1 truncate">
                      {rel.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {rel.brand}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[#8B8455] font-medium text-sm">
                        Min. Order: {rel.minOrder}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
