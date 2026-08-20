"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, getCategories } from "@/lib/products";
import { Droplets, Shield, Truck, Users, Home as HomeIcon, Factory, School, Building2, Wrench, ShoppingBag, Phone, MapPin, Package, Leaf, HardHat, Heart, Trash2, Check, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";

export default function Home() {
  // Filter for specific Vertical Cylindrical Tanks and sort by price descending (highest to lowest)
  const allowedCapacities = [1000, 2000, 3000, 4000, 5000, 6000, 8000, 10000, 15000, 16000, 20000, 24000];
  const verticalCylindricalTanks = products.filter(p =>
    p.category === 'TANKS' &&
    p.subcategory === 'Vertical Cylindrical' &&
    p.capacity &&
    allowedCapacities.includes(p.capacity)
  ).sort((a, b) => {
    const priceA = a.salePrice || a.price;
    const priceB = b.salePrice || b.price;
    return priceB - priceA; // Higher price first (descending)
  });
  const featuredProducts = verticalCylindricalTanks;
  const { addToCart } = useCart();
  const categories = getCategories();

  // Hero carousel state - showcase Vertical Cylindrical Tanks
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroProducts = verticalCylindricalTanks.slice(0, 4); // Only Vertical Cylindrical Tanks

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroProducts.length]);

  const categoryIcons: Record<string, any> = {
    "TANKS": Droplets,
    "Lifestyle": Leaf,
    "Road Safety & Industrial": HardHat,
    "Sanitation": Heart,
    "bins": Trash2
  };

  const categoryColors: Record<string, string> = {
    "TANKS": "from-blue-100 to-blue-200",
    "Lifestyle": "from-green-100 to-green-200",
    "Road Safety & Industrial": "from-orange-100 to-orange-200",
    "Sanitation": "from-purple-100 to-purple-200",
    "bins": "from-gray-100 to-gray-200"
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section - Text First Layout */}
      <section className="relative bg-[#063B78] py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#FFD21F]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFD21F]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Column */}
            <div className="text-white order-2 md:order-1">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6 border border-white/20">
                <span className="text-sm font-semibold">🇰🇪 Proudly Made in Kenya</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Kenya's Trusted Water Storage Solutions
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-xl">
                Premium triple-layer water tanks and industrial products built for Kenyan homes, farms, institutions and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/shop?category=TANKS">
                  <Button size="lg" className="w-full sm:w-auto bg-[#FFD21F] text-[#063B78] hover:bg-[#E6BD1B] shadow-xl font-semibold">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Shop Water Tanks
                  </Button>
                </Link>
                <Link href="/shop">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                    Browse All Products
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#FFD21F]" />
                  <span className="text-sm font-medium">Triple-Layer Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-[#FFD21F]" />
                  <span className="text-sm font-medium">Nationwide Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-[#FFD21F]" />
                  <span className="text-sm font-medium">UV Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#FFD21F]" />
                  <span className="text-sm font-medium">Food-Grade Material</span>
                </div>
              </div>
            </div>

            {/* Rotating Product Carousel - Right Column */}
            <div className="flex justify-center relative order-1 md:order-2">
              <div className="relative w-72 h-96 md:w-96 md:h-[32rem]">
                <div className="absolute inset-0 bg-white/5 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 overflow-hidden">
                  {heroProducts.length > 0 && heroProducts[currentSlide] ? (
                    <img 
                      src={heroProducts[currentSlide].image} 
                      alt={heroProducts[currentSlide].name}
                      className="w-full h-full object-contain p-8 md:p-12 transition-opacity duration-500"
                      key={currentSlide}
                    />
                  ) : (
                    <img 
                      src="/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg" 
                      alt="TopTank Water Tank"
                      className="w-full h-full object-contain p-8 md:p-12"
                    />
                  )}
                </div>
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-[#FFD21F]/10 rounded-2xl blur-2xl -z-10"></div>
                
                {/* Carousel Navigation */}
                {heroProducts.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                    >
                      <ChevronLeft className="h-6 w-6 text-gray-800" />
                    </button>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % heroProducts.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                    >
                      <ChevronRight className="h-6 w-6 text-gray-800" />
                    </button>
                    {/* Carousel Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {heroProducts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            currentSlide === index ? 'bg-white w-6' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Row */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <div className="w-12 h-12 bg-[#063B78]/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-[#063B78]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Triple-Layer Construction</p>
                <p className="text-sm text-gray-500">Extra durability</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <div className="w-12 h-12 bg-[#063B78]/10 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-[#063B78]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Nationwide Delivery</p>
                <p className="text-sm text-gray-500">Across Kenya</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <div className="w-12 h-12 bg-[#063B78]/10 rounded-full flex items-center justify-center">
                <Droplets className="h-6 w-6 text-[#063B78]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">UV Protected</p>
                <p className="text-sm text-gray-500">Built for Kenyan weather</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <div className="w-12 h-12 bg-[#063B78]/10 rounded-full flex items-center justify-center">
                <Check className="h-6 w-6 text-[#063B78]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Food Grade</p>
                <p className="text-sm text-gray-500">Safe water storage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Water Tanks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our most trusted vertical cylindrical tanks for Kenyan homes and businesses
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={() => addToCart(product)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop">
              <Button size="lg" className="shadow-lg bg-[#063B78] hover:bg-[#052A5C] text-white px-8">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our wide range of products across 5 main categories
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || Package;
              const colorClass = categoryColors[category] || "from-blue-100 to-blue-200";
              return (
                <Link
                  key={category}
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="bg-white hover:bg-blue-50 rounded-xl p-8 text-center transition-all duration-300 shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-300 group"
                >
                  <div className={`bg-gradient-to-br ${colorClass} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors text-lg">{category}</div>
                  <div className="text-sm text-gray-500 mt-2">
                    {products.filter(p => p.category === category).length} Products
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/shop">
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose TopTank */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TopTank
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Built for Kenya, trusted by Kenyans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78]/10 to-[#063B78]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-[#063B78]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Triple-Layer Construction</h3>
              <p className="text-gray-600 leading-relaxed">Built for dependable long-term water storage.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78]/10 to-[#063B78]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Droplets className="h-8 w-8 text-[#063B78]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">UV Protection</h3>
              <p className="text-gray-600 leading-relaxed">Designed for demanding outdoor conditions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78]/10 to-[#063B78]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Check className="h-8 w-8 text-[#063B78]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Food-Grade Material</h3>
              <p className="text-gray-600 leading-relaxed">Suitable for safe drinking water storage.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78]/10 to-[#063B78]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Truck className="h-8 w-8 text-[#063B78]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Nationwide Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Convenient delivery across Kenya.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78]/10 to-[#063B78]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="h-8 w-8 text-[#063B78]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Built for Kenya</h3>
              <p className="text-gray-600 leading-relaxed">Designed for local homes, farms and businesses.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78]/10 to-[#063B78]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-[#063B78]" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">Official TopTank quality assurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-slate-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Application
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Versatile water storage solutions for homes, farms, businesses, and institutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78]/10 to-[#063B78]/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <HomeIcon className="h-10 w-10 text-[#063B78]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Residential</h3>
              <p className="text-gray-600">Homes and apartments</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78]/10 to-[#063B78]/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Factory className="h-10 w-10 text-[#063B78]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Agriculture</h3>
              <p className="text-gray-600">Farms and irrigation</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78]/10 to-[#063B78]/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <School className="h-10 w-10 text-[#063B78]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Institutions</h3>
              <p className="text-gray-600">Schools and hospitals</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78]/10 to-[#063B78]/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building2 className="h-10 w-10 text-[#063B78]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Commercial</h3>
              <p className="text-gray-600">Businesses and industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Ordering Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Simple and straightforward process to get your water tank
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78] to-[#052A5C] text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Choose Your Tank</h3>
              <p className="text-gray-600">Browse our range and select the perfect capacity</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78] to-[#052A5C] text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Add to Cart</h3>
              <p className="text-gray-600">Add your selected tank to the shopping cart</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78] to-[#052A5C] text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Enter Your Details</h3>
              <p className="text-gray-600">Provide delivery information and contact details</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-gradient-to-br from-[#063B78] to-[#052A5C] text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:scale-110 transition-transform">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Confirm Your Order</h3>
              <p className="text-gray-600">Review and confirm your order for processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#063B78] py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#FFD21F]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFD21F]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Get Your Water Tank?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Browse our selection and find the perfect water storage solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="w-full sm:w-auto bg-[#FFD21F] text-[#063B78] hover:bg-[#E6BD1B] shadow-xl font-semibold">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                <Phone className="mr-2 h-5 w-5" />
                Contact TopTank
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Location
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find us at our convenient location along Mombasa Road, Athi River
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817924716734!2d36.9167!3d-1.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjInNTkuMCJTIDM2wrA1NScwMC4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
            <div className="p-8 bg-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">TopTank Headquarters</h3>
                  <p className="text-gray-600 text-lg">Mombasa Road, P.O. Box 3115 (Nairobi), Athi River, Kenya</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/z8aRhBMg5kM1bLdn8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#063B78] text-white rounded-xl hover:bg-[#052A5C] transition-colors shadow-lg hover:shadow-xl"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
