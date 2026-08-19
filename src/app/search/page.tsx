"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, formatCapacity } from "@/lib/products";
import { Search, X } from "lucide-react";

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof products>([]);

  useEffect(() => {
    if (query.trim()) {
      const searchQuery = query.toLowerCase();
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery) ||
          product.capacity.toString().includes(searchQuery) ||
          product.capacity.toString().replace(/,/g, "").includes(searchQuery) ||
          product.description.toLowerCase().includes(searchQuery) ||
          formatCapacity(product.capacity).toLowerCase().includes(searchQuery)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/shop?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search Water Tanks
          </h1>
          <p className="text-gray-600">
            Find the perfect water tank for your needs
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by capacity (e.g., 5000L, 10000 litres)..."
              className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black text-lg"
              autoFocus
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </form>

        {/* Search Results */}
        {query && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {results.length} {results.length === 1 ? "result" : "results"} for "{query}"
            </h2>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg shadow-md">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600 text-lg mb-2">No tanks found</p>
                <p className="text-gray-500 mb-4">
                  Try searching for a different capacity or browse all products
                </p>
                <Link href="/shop">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Browse All Tanks
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Popular Searches */}
        {!query && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-3">
              {["1000L", "2000L", "5000L", "10000L", "triple layer", "water tank"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="bg-white border border-gray-300 px-4 py-2 rounded-full text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Browse by Capacity</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-3 flex items-center justify-center">
                    <div className="text-blue-600 font-bold">{product.capacity}L</div>
                  </div>
                  <p className="text-sm font-semibold text-gray-900">
                    {formatCapacity(product.capacity)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
