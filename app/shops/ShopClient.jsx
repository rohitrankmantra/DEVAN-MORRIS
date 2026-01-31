// app/shop/ShopClient.jsx (Full Updated Client Component)
"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Filter,
  Grid3X3,
  LayoutGrid,
  Heart,
  Eye,
  Phone,
  ChevronDown,
  X,
  Sparkles,
  Star,
  ArrowRight,
  SlidersHorizontal,
  ShieldCheck,
  Truck,
  Users,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

import { products, categories, brands } from "@/data/products"; // Import all data

export default function ShopClient() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [gridView, setGridView] = useState("large");
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams?.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
    const brandParam = searchParams?.get("brand");
    if (brandParam && brands.includes(brandParam)) {
      setSelectedBrands([brandParam]);
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Products" || product.category === selectedCategory;
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesBrand && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.id - a.id;
      case "rating":
        return b.rating - a.rating;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(213, 206, 149, 0.15) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(213, 206, 149, 0.1) 100%)`,
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-pattern-dots opacity-50" />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to left, black, transparent)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent)",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="hero-content max-w-3xl">
            <Badge className="bg-[#D5CE95]/20 text-[#8B8455] border-[#D5CE95] mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Wholesale Beauty Collection
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-6 text-balance">
              Discover Our <span className="text-gradient-gold">Premium</span> Products
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Explore our curated collection of luxury beauty products, professional skincare, 
              and MedSpa equipment for your business.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-10 right-20 w-20 h-20 rounded-full bg-[#D5CE95]/20 hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-40 w-12 h-12 rounded-full bg-rose-200/30 hidden lg:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-32 space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D5CE95]/20">
                  <h3 className="font-serif text-lg text-charcoal mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-[#D5CE95]" />
                    Categories
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 ${
                            selectedCategory === category
                              ? "bg-[#D5CE95]/20 text-charcoal font-medium border-l-2 border-[#D5CE95]"
                              : "text-muted-foreground hover:bg-[#D5CE95]/10 hover:text-charcoal"
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brands */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#D5CE95]/20">
                  <h3 className="font-serif text-lg text-charcoal mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-[#D5CE95]" />
                    Brands
                  </h3>
                  <div className="space-y-3">
                    {brands.map((brand) => (
                      <label
                        key={brand}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <Checkbox
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                          className="border-[#D5CE95] data-[state=checked]:bg-[#D5CE95] data-[state=checked]:border-[#D5CE95]"
                        />
                        <span className="text-muted-foreground group-hover:text-charcoal transition-colors">
                          {brand}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div
                  className="relative overflow-hidden rounded-2xl p-6"
                  style={{
                    background: "linear-gradient(135deg, #D5CE95 0%, #C4B87A 100%)",
                  }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <h4 className="font-serif text-lg text-charcoal mb-2">
                    Need Help?
                  </h4>
                  <p className="text-sm text-charcoal/80 mb-4">
                    Our team is ready to assist with your wholesale inquiries.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-charcoal hover:bg-charcoal/90 text-white"
                  >
                    <Link href="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                  onClick={() => setShowFilters(false)}
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", damping: 25 }}
                    className="absolute left-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-serif text-xl text-charcoal">Filters</h3>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="p-2 hover:bg-muted rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Categories */}
                    <div className="mb-8">
                      <h4 className="font-medium text-charcoal mb-3">Categories</h4>
                      <ul className="space-y-2">
                        {categories.map((category) => (
                          <li key={category}>
                            <button
                              onClick={() => {
                                setSelectedCategory(category);
                                setShowFilters(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${
                                selectedCategory === category
                                  ? "bg-[#D5CE95]/20 text-charcoal font-medium"
                                  : "text-muted-foreground hover:bg-muted"
                              }`}
                            >
                              {category}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Brands */}
                    <div>
                      <h4 className="font-medium text-charcoal mb-3">Brands</h4>
                      <div className="space-y-3">
                        {brands.map((brand) => (
                          <label
                            key={brand}
                            className="flex items-center gap-3 cursor-pointer"
                          >
                            <Checkbox
                              checked={selectedBrands.includes(brand)}
                              onCheckedChange={() => toggleBrand(brand)}
                              className="border-[#D5CE95] data-[state=checked]:bg-[#D5CE95]"
                            />
                            <span className="text-muted-foreground">{brand}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white rounded-xl p-4 shadow-sm border border-[#D5CE95]/20">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">
                    Showing{" "}
                    <span className="text-charcoal font-medium">
                      {sortedProducts.length}
                    </span>{" "}
                    products
                  </span>
                  {selectedBrands.length > 0 && (
                    <div className="flex gap-2">
                      {selectedBrands.map((brand) => (
                        <Badge
                          key={brand}
                          variant="secondary"
                          className="bg-[#D5CE95]/20 text-charcoal cursor-pointer hover:bg-[#D5CE95]/30"
                          onClick={() => toggleBrand(brand)}
                        >
                          {brand}
                          <X className="w-3 h-3 ml-1" />
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-44 border-[#D5CE95]/30 focus:border-[#D5CE95]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="name-asc">Name: A-Z</SelectItem>
                      <SelectItem value="name-desc">Name: Z-A</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="hidden sm:flex items-center gap-1 bg-muted rounded-lg p-1">
                    <button
                      onClick={() => setGridView("large")}
                      className={`p-2 rounded-md transition-colors ${
                        gridView === "large"
                          ? "bg-white shadow-sm text-charcoal"
                          : "text-muted-foreground hover:text-charcoal"
                      }`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setGridView("small")}
                      className={`p-2 rounded-md transition-colors ${
                        gridView === "small"
                          ? "bg-white shadow-sm text-charcoal"
                          : "text-muted-foreground hover:text-charcoal"
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div
                className={`grid gap-6 ${
                  gridView === "large"
                    ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {sortedProducts.map((product) => (
                  <Link href={`/shops/${product.id}`} key={product.id} className="block">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#D5CE95]/10 hover:shadow-xl hover:border-[#D5CE95]/30 transition-all duration-500">
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden bg-linear-to-br from-[#D5CE95]/5 to-transparent">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Badge */}
                        {product.badge && (
                          <div className="absolute top-4 left-4">
                            <Badge
                              className={`${
                                product.badge === "Best Seller"
                                  ? "bg-[#D5CE95] text-charcoal"
                                  : product.badge === "New"
                                  ? "bg-emerald-500 text-white"
                                  : product.badge === "Pro"
                                  ? "bg-charcoal text-white"
                                  : "bg-rose-400 text-white"
                              }`}
                            >
                              {product.badge}
                            </Badge>
                          </div>
                        )}

                        {/* Hover Actions */}
                        <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                            <Button
                              asChild
                              className="flex-1 bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal"
                            >
                              <span>
                                <Phone className="w-4 h-4 mr-2" />
                                Contact Us
                              </span>
                            </Button>
                            <Button
                              size="icon"
                              variant="secondary"
                              className="bg-white/90 hover:bg-white"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleWishlist(product.id);
                              }}
                            >
                              <Heart
                                className={`w-4 h-4 ${
                                  wishlist.includes(product.id)
                                    ? "fill-rose-500 text-rose-500"
                                    : "text-charcoal"
                                }`}
                              />
                            </Button>
                            <Button
                              size="icon"
                              variant="secondary"
                              className="bg-white/90 hover:bg-white"
                            >
                              <Eye className="w-4 h-4 text-charcoal" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-xs text-[#D5CE95] font-medium uppercase tracking-wider mb-1">
                          {product.brand}
                        </p>
                        <h3 className="font-serif text-lg text-charcoal mb-2 group-hover:text-[#8B8455] transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {product.category}
                        </p>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-[#D5CE95] text-[#D5CE95]" />
                            <span className="text-sm font-medium text-charcoal">
                              {product.rating}
                            </span>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            ({product.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Empty State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#D5CE95]/20 flex items-center justify-center">
                    <Search className="w-8 h-8 text-[#D5CE95]" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">
                    No products found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or search query
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("All Products");
                      setSelectedBrands([]);
                      setSearchQuery("");
                    }}
                    className="bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}

              {/* Load More */}
              {filteredProducts.length > 0 && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#D5CE95] text-charcoal hover:bg-[#D5CE95]/10 hover:text-black rounded-full px-8 bg-transparent"
                  >
                    Load More Products
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

 {/* CTA Banner - Premium & Improved Version */}
<section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
  {/* Background Layer */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />
  {/* Dark Overlay + Gradient */}
  <div className="absolute inset-0 bg-linear-to-r from-charcoal/95 via-charcoal/85 to-charcoal/70" />
  {/* Subtle Pattern */}
  <div className="absolute inset-0 bg-pattern-diagonal opacity-5" />

  {/* Decorative Animated Elements */}
  <motion.div
    className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-[#D5CE95]/20 opacity-30 hidden lg:block"
    animate={{ rotate: 360 }}
    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
  />
  <motion.div
    className="absolute -right-40 bottom-10 h-96 w-96 rounded-full border border-[#D5CE95]/10 opacity-20 hidden lg:block"
    animate={{ scale: [1, 1.08, 1] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left - Main Message & Benefits */}
      <div className="text-center lg:text-left">
        <Badge className="inline-flex items-center gap-2 bg-[#D5CE95]/20 text-[#D5CE95] border-[#D5CE95]/30 mb-6 px-5 py-2.5 backdrop-blur-sm text-base font-medium">
          <Sparkles className="w-5 h-5" />
          Wholesale Partner Program
        </Badge>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-5xl text-white mb-6 md:mb-8 leading-tight tracking-tight">
          Unlock <span className="text-[#D5CE95] block">Exclusive</span> Wholesale Access
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Join thousands of beauty professionals who trust us for authentic products, 
          competitive pricing, dedicated support, and fast global delivery.
        </p>

        {/* Key Benefits */}
        <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {[
            { icon: ShieldCheck, text: "100% Authentic & Certified" },
            { icon: Truck, text: "Fast Worldwide Shipping" },
            { icon: Users, text: "Personal Account Manager" },
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start">
              <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-[#D5CE95]/20 text-[#D5CE95] shrink-0">
                <benefit.icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <span className="text-white/90 font-medium text-base md:text-lg">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right - CTA Card (Glassmorphism) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 lg:p-12 border border-[#D5CE95]/30 shadow-2xl"
      >
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 text-center lg:text-left leading-tight">
          Ready to Elevate Your Business?
        </h3>

        <p className="text-white/90 text-base md:text-lg mb-8 text-center lg:text-left">
          Apply today for instant access to our full wholesale catalog, 
          special pricing, and priority support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
          <Button
            asChild
            size="lg"
            className="bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal rounded-full px-8 md:px-10 py-6 md:py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link href="/contact">
              Apply Now
              <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-[#D5CE95]/60 text-[#D5CE95] hover:bg-[#D5CE95]/10 hover:text-white rounded-full px-8 md:px-10 py-6 md:py-7 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
          >
            <Link href="/about">
              Learn More About Benefits
            </Link>
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10">
          <div className="flex items-center gap-2 text-white/90">
            <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-[#D5CE95]" />
            <span className="text-sm md:text-base">Secure & Confidential</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Clock className="h-5 w-5 md:h-6 md:w-6 text-[#D5CE95]" />
            <span className="text-sm md:text-base">Response in 24 Hours</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Users className="h-5 w-5 md:h-6 md:w-6 text-[#D5CE95]" />
            <span className="text-sm md:text-base">5000+ Partners</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

    </main>
  );
}
