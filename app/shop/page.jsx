"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import Header from "@/components/header";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  "All Products",
  "Skincare",
  "Makeup",
  "Hair Care",
  "Body Care",
  "Fragrances",
  "Tools & Accessories",
  "MedSpa Equipment",
];

const brands = [
  "LuxeGlow",
  "Derma Elite",
  "Velvet Touch",
  "Pure Radiance",
  "Aura Beauty",
  "Silk & Satin",
];

const products = [
  {
    id: 1,
    name: "Luxury Hydrating Serum",
    category: "Skincare",
    brand: "LuxeGlow",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: "Professional Makeup Palette",
    category: "Makeup",
    brand: "Velvet Touch",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
    badge: "New",
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: "Keratin Hair Treatment",
    category: "Hair Care",
    brand: "Silk & Satin",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80",
    badge: null,
    rating: 4.7,
    reviews: 56,
  },
  {
    id: 4,
    name: "Anti-Aging Night Cream",
    category: "Skincare",
    brand: "Derma Elite",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600&q=80",
    badge: "Popular",
    rating: 4.9,
    reviews: 234,
  },
  {
    id: 5,
    name: "Volumizing Mascara Set",
    category: "Makeup",
    brand: "Aura Beauty",
    image: "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?w=600&q=80",
    badge: null,
    rating: 4.6,
    reviews: 67,
  },
  {
    id: 6,
    name: "Body Sculpting Oil",
    category: "Body Care",
    brand: "Pure Radiance",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600&q=80",
    badge: "Trending",
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 7,
    name: "Signature Eau de Parfum",
    category: "Fragrances",
    brand: "LuxeGlow",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80",
    badge: "Exclusive",
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 8,
    name: "Professional Brush Set",
    category: "Tools & Accessories",
    brand: "Velvet Touch",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
    badge: null,
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 9,
    name: "LED Facial Device",
    category: "MedSpa Equipment",
    brand: "Derma Elite",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
    badge: "Pro",
    rating: 4.9,
    reviews: 76,
  },
  {
    id: 10,
    name: "Vitamin C Brightening Serum",
    category: "Skincare",
    brand: "Pure Radiance",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&q=80",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 189,
  },
  {
    id: 11,
    name: "Matte Lipstick Collection",
    category: "Makeup",
    brand: "Aura Beauty",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=80",
    badge: null,
    rating: 4.6,
    reviews: 112,
  },
  {
    id: 12,
    name: "Argan Hair Repair Mask",
    category: "Hair Care",
    brand: "Silk & Satin",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80",
    badge: "New",
    rating: 4.7,
    reviews: 43,
  },
  {
    id: 13,
    name: "Midnight Bloom Parfum",
    category: "Fragrances",
    brand: "LuxeGlow",
    image: "https://images.unsplash.com/photo-1594035910387-fea477942698?w=600&q=80",
    badge: "Limited Edition",
    rating: 5.0,
    reviews: 84,
  },
  {
    id: 14,
    name: "Ocean Mist Cologne",
    category: "Fragrances",
    brand: "Pure Radiance",
    image: "https://images.unsplash.com/photo-1523293188086-b431e96000ec?w=600&q=80",
    badge: null,
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 15,
    name: "Golden Amber Essence",
    category: "Fragrances",
    brand: "Aura Beauty",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 215,
  },
  {
    id: 16,
    name: "Lumiere Pro X1 Laser",
    category: "MedSpa Equipment",
    brand: "Derma Elite",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
    badge: "Professional",
    rating: 5.0,
    reviews: 12,
  },
  {
    id: 17,
    name: "DermaLift Ultra System",
    category: "MedSpa Equipment",
    brand: "Derma Elite",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    badge: "New",
    rating: 4.9,
    reviews: 8,
  },
  {
    id: 18,
    name: "SculptBody 360",
    category: "MedSpa Equipment",
    brand: "LuxeGlow",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
    badge: "Trending",
    rating: 4.8,
    reviews: 25,
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [gridView, setGridView] = useState("large");
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: productsRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

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
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
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

            {/* Search Bar
            <div className="flex gap-3 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 bg-white/80 backdrop-blur border-[#D5CE95]/30 focus:border-[#D5CE95] rounded-full text-base"
                />
              </div>
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="h-14 px-6 bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal rounded-full lg:hidden"
              >
                <SlidersHorizontal className="w-5 h-5" />
              </Button>
            </div> */}
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
            <div className="flex-1" ref={productsRef}>
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
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="product-card group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
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
                              <Link href="/contact">
                                <Phone className="w-4 h-4 mr-2" />
                                Contact Us
                              </Link>
                            </Button>
                            <Button
                              size="icon"
                              variant="secondary"
                              className="bg-white/90 hover:bg-white"
                              onClick={() => toggleWishlist(product.id)}
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
                              asChild
                            >
                              <Link href={`/shop/${product.id}`}>
                                <Eye className="w-4 h-4 text-charcoal" />
                              </Link>
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
                  </motion.div>
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

      {/* CTA Banner */}
      <section className="py-16 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="absolute inset-0 bg-linear-to-r from-charcoal via-charcoal/90 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <Badge className="bg-[#D5CE95]/20 text-[#D5CE95] border-[#D5CE95]/30 mb-4">
              Wholesale Partner Program
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Become a <span className="text-[#D5CE95]">Wholesale Partner</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join our exclusive network of beauty professionals and access premium 
              products at wholesale prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#D5CE95] hover:bg-[#C4B87A] text-charcoal rounded-full px-8"
              >
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
