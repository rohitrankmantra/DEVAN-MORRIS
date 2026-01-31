// app/shop/[id]/page.jsx
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
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
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


import { products } from "@/data/products";

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-charcoal">Product not found</h1>
      </div>
    );
  }

  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showZoom, setShowZoom] = useState(false);

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
      <section className="pt-28 pb-6 bg-linear-to-b from-[#D5CE95]/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-[#D5CE95] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/shops" className="hover:text-[#D5CE95] transition-colors">
              Shop
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>{product.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-charcoal font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16">
            {/* Gallery */}
            <div className="product-gallery">
              <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-linear-to-br from-[#D5CE95]/5 to-transparent mb-4 sm:mb-6 group shadow-sm">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.images?.[selectedImage] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {product.badge && (
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
                    <Badge className="bg-[#D5CE95] text-charcoal text-sm sm:text-base px-3 sm:px-4 py-1.5 rounded-full">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
                      {product.badge}
                    </Badge>
                  </div>
                )}

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D5CE95] hover:text-white"
                >
                  <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D5CE95] hover:text-white"
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Zoom Button */}
                <button
                  onClick={() => setShowZoom(true)}
                  className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D5CE95] hover:text-white"
                >
                  <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#D5CE95]/30 scrollbar-track-transparent">
                {product.images?.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-[#D5CE95] shadow-md ring-1 ring-[#D5CE95]/40 scale-[1.03]"
                        : "border-transparent hover:border-[#D5CE95]/60"
                    }`}
                  >
                    <Image src={image} alt={`${product.name} ${index + 1}`} fill className="object-cover" />
                    {selectedImage === index && <div className="absolute inset-0 bg-[#D5CE95]/15" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info lg:sticky lg:top-28 lg:self-start">
              {/* Brand & Category */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <Badge
                  variant="outline"
                  className="border-[#D5CE95] text-[#8B8455] bg-[#D5CE95]/10 px-3 py-1 text-sm"
                >
                  {product.brand}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground text-sm">{product.category}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-5 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-[#D5CE95] text-[#D5CE95]"
                          : "fill-muted text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium text-charcoal">{product.rating.toFixed(1)}</span>
                <span className="text-muted-foreground text-sm">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                {product.description}
              </p>

              {/* Features */}
              {product.features?.length > 0 && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-sm sm:text-base">
                      <div className="w-6 h-6 rounded-full bg-[#D5CE95]/15 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-[#8B8455]" />
                      </div>
                      <span className="text-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Min Order */}
              <div className="bg-[#D5CE95]/8 rounded-2xl p-6 mb-8 border border-[#D5CE95]/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-charcoal font-medium text-lg">Minimum Order Quantity</span>
                  <span className="text-2xl font-serif text-[#8B8455]">{product.minOrder} units</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Contact us for tiered wholesale pricing, bulk discounts & custom quotes.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 h-12 sm:h-14 bg-linear-to-r from-[#D5CE95] to-[#C4B87A] hover:from-[#C4B87A] hover:to-[#B3A76A] text-charcoal rounded-full text-base sm:text-lg font-medium shadow-md"
                >
                  <Link href="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Wholesale Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 h-12 sm:h-14 border-[#D5CE95] text-charcoal hover:bg-[#D5CE95]/10 rounded-full text-base sm:text-lg"
                >
                  <Link href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Inquiry
                  </Link>
                </Button>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-6 pb-8 border-b border-[#D5CE95]/15">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-[#D5CE95] transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${isWishlisted ? "fill-rose-500 text-rose-500" : ""}`}
                  />
                  <span className="text-sm font-medium">Wishlist</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-[#D5CE95] transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: Truck, label: "Fast Worldwide Shipping" },
                  { icon: Shield, label: "100% Authentic Guarantee" },
                  { icon: Award, label: "Premium Quality" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full bg-[#D5CE95]/15 flex items-center justify-center">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#8B8455]" />
                    </div>
                    <span className="text-xs sm:text-sm text-muted-foreground leading-tight">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Related Products */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center mb-12 lg:mb-16">
            <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-4 px-4 py-1.5 text-base">
              You May Also Like
            </Badge>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal">
              Related Products
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <motion.div
                key={rel.id}
                className="group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/shops/${rel.id}`}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#D5CE95]/10 hover:shadow-xl hover:border-[#D5CE95]/30 transition-all duration-500 h-full flex flex-col">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={rel.image || "/placeholder.svg"}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button className="w-full bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal rounded-full text-sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col grow">
                      <p className="text-xs uppercase tracking-wider text-[#D5CE95] font-medium mb-1.5">
                        {rel.brand}
                      </p>
                      <h3 className="font-serif text-lg text-charcoal mb-2 group-hover:text-[#8B8455] transition-colors line-clamp-2">
                        {rel.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-auto">
                        <Star className="w-4 h-4 fill-[#D5CE95] text-[#D5CE95]" />
                        <span className="text-sm text-charcoal">{rel.rating}</span>
                        <span className="text-xs text-muted-foreground">({rel.reviews})</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zoom Modal */}
      <AnimatePresence>
        {showZoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setShowZoom(false)}
          >
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              className="relative max-w-5xl w-full aspect-square"
            >
              <Image
                src={product.images?.[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <ArrowLeft className="w-7 h-7 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 transition-colors"
              >
                <ArrowRight className="w-7 h-7 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}