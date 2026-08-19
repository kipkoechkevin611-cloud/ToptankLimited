import Link from "next/link";
import { products, formatCapacity, formatPrice } from "@/lib/products";
import { Home as HomeIcon, Factory, School, Building2, Wrench, Users, Droplets } from "lucide-react";

export default function CategoriesPage() {
  const categories = [
    {
      name: "Residential",
      description: "Perfect for homes and apartments",
      icon: HomeIcon,
      capacities: [1000, 2000, 3000, 5000],
      color: "from-green-50 to-green-100",
      iconColor: "text-green-600",
    },
    {
      name: "Agriculture",
      description: "Ideal for farms and irrigation",
      icon: Factory,
      capacities: [5000, 8000, 10000, 16000],
      color: "from-amber-50 to-amber-100",
      iconColor: "text-amber-600",
    },
    {
      name: "Institutions",
      description: "For schools and hospitals",
      icon: School,
      capacities: [8000, 10000, 16000, 20000],
      color: "from-purple-50 to-purple-100",
      iconColor: "text-purple-600",
    },
    {
      name: "Commercial",
      description: "Business and industrial use",
      icon: Building2,
      capacities: [5000, 10000, 16000, 24000],
      color: "from-blue-50 to-blue-100",
      iconColor: "text-blue-600",
    },
    {
      name: "Construction",
      description: "Site water management",
      icon: Wrench,
      capacities: [3000, 5000, 8000, 10000],
      color: "from-orange-50 to-orange-100",
      iconColor: "text-orange-600",
    },
    {
      name: "All Tanks",
      description: "Browse our complete range",
      icon: Droplets,
      capacities: [1000, 2000, 3000, 4000, 5000, 6000, 8000, 10000, 16000, 20000, 24000],
      color: "from-cyan-50 to-cyan-100",
      iconColor: "text-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect water tank for your specific needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href="/shop"
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className={`bg-gradient-to-br ${category.color} p-8`}>
                  <Icon className={`h-16 w-16 ${category.iconColor} mb-4`} />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">Recommended Capacities:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.capacities.map((capacity) => (
                      <span
                        key={capacity}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {capacity.toLocaleString()}L
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* All Capacities */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            All Available Capacities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center hover:from-blue-100 hover:to-blue-200 transition-colors group"
              >
                <Droplets className="h-8 w-8 mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform" />
                <div className="font-bold text-gray-900 mb-1">
                  {formatCapacity(product.capacity)}
                </div>
                <div className="text-sm font-semibold text-blue-600">
                  {formatPrice(product.price)}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Capacity Guide */}
        <div className="mt-16 bg-blue-600 text-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Choosing the Right Capacity</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Small (1,000L - 3,000L)</h3>
              <p className="text-blue-100 text-sm">
                Ideal for small households, apartments, and limited spaces. Perfect for daily water needs.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Medium (4,000L - 8,000L)</h3>
              <p className="text-blue-100 text-sm">
                Suitable for growing families, small businesses, and light agricultural use.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Large (10,000L - 24,000L)</h3>
              <p className="text-blue-100 text-sm">
                Perfect for farms, institutions, commercial buildings, and major water storage requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
