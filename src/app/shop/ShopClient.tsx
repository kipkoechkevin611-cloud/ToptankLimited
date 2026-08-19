"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products, type Product, getCategories, getSubcategories } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";

export default function ShopClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [selectedCapacity, setSelectedCapacity] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("price-asc");
  const [showFilters, setShowFilters] = useState(false);

  // Read category from URL params on mount and when URL changes
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory("all");
    }
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("all");
    if (category === "all") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${encodeURIComponent(category)}`);
    }
  };

  const categories = useMemo(() => getCategories(), []);
  const subcategories = useMemo(() => {
    if (selectedCategory === "all" || !selectedCategory) return [];
    return getSubcategories(selectedCategory);
  }, [selectedCategory]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          (product.capacity && product.capacity.toString().includes(query)) ||
          (product.capacity && product.capacity.toString().replace(/,/g, "").includes(query)) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          (product.subcategory && product.subcategory.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filter by subcategory
    if (selectedSubcategory !== "all") {
      filtered = filtered.filter((product) => product.subcategory === selectedSubcategory);
    }

    // Filter by capacity
    if (selectedCapacity !== "all") {
      filtered = filtered.filter((product) => {
        if (!product.capacity) return false;
        switch (selectedCapacity) {
          case "small":
            return product.capacity <= 1000;
          case "medium":
            return product.capacity > 1000 && product.capacity <= 5000;
          case "large":
            return product.capacity > 5000;
          default:
            return true;
        }
      });
    }

    // Sort products - priority first, then by selected sort
    filtered.sort((a, b) => {
      // Priority sorting: products with priority come first
      const priorityA = a.priority || 0;
      const priorityB = b.priority || 0;
      if (priorityA !== priorityB) {
        return priorityB - priorityA; // Higher priority first
      }
      
      // Then apply regular sorting
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedCapacity, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Shop Our Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our complete range of premium products including water tanks, lifestyle items, road safety equipment, sanitation solutions, and bins
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black bg-gray-50 focus:bg-white transition-all"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filters
            </Button>

            {/* Sort */}
            <div className="lg:w-56">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black bg-gray-50 focus:bg-white transition-all"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Category Filters */}
          <div className={`${showFilters ? "block" : "hidden"} lg:block mt-6 pt-6 border-t border-gray-100`}>
            <h3 className="font-semibold text-gray-900 mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <button
                onClick={() => handleCategoryChange("all")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === "all"
                    ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                All Products
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {subcategories.length > 0 && (
              <>
                <h3 className="font-semibold text-gray-900 mb-4 mt-6">Filter by {selectedCategory}</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedSubcategory("all")}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                      selectedSubcategory === "all"
                        ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`}
                  >
                    All {selectedCategory}
                  </button>
                  {subcategories.map((subcategory) => (
                    <button
                      key={subcategory}
                      onClick={() => setSelectedSubcategory(subcategory)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                        selectedSubcategory === subcategory
                          ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                      }`}
                    >
                      {subcategory}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Capacity Filters */}
            <h3 className="font-semibold text-gray-900 mb-4 mt-6">Filter by Capacity</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCapacity("all")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCapacity === "all"
                    ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                All Capacities
              </button>
              <button
                onClick={() => setSelectedCapacity("small")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCapacity === "small"
                    ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                100L - 1,000L
              </button>
              <button
                onClick={() => setSelectedCapacity("medium")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCapacity === "medium"
                    ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                1,500L - 5,000L
              </button>
              <button
                onClick={() => setSelectedCapacity("large")}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCapacity === "large"
                    ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                }`}
              >
                6,000L+
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600 font-medium">
            Showing <span className="text-blue-600 font-bold">{filteredAndSortedProducts.length}</span> {filteredAndSortedProducts.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <p className="text-gray-600 text-lg mb-4">No products found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedSubcategory("all");
                setSelectedCapacity("all");
              }}
              variant="outline"
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
