"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatPrice, formatCapacity, products } from "@/lib/products";
import type { Product } from "@/lib/products";
import { ShoppingCart, Phone, ArrowLeft, Check, Shield, Droplets, Thermometer, Layers, Truck, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import Toast from "@/components/Toast";

export default function ProductPageClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [showToast, setShowToast] = useState(false);

  // Ensure images array exists and has at least one image
  const productImages = product.images && product.images.length > 0 ? product.images : [product.image];

  // Extract available colors from specifications or features, or use defaults
  const availableColors = product.specifications?.color 
    ? product.specifications.color.split('/').map(c => c.trim()).filter(c => c && !c.toLowerCase().includes('various'))
    : product.category === 'TANKS' 
      ? ['Blue', 'Black', 'Green', 'Orange', 'Yellow']
      : product.category === 'bins'
        ? ['Green', 'Yellow', 'Blue', 'Black', 'Red']
        : [];

  useEffect(() => {
    if (availableColors.length > 1) {
      setSelectedColor(availableColors[0]);
    }
  }, [availableColors]);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor || undefined);
    setShowToast(true);
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, Math.min(99, prev + delta)));
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link href="/shop" className="inline-flex items-center text-[#063B78] hover:text-[#052A5C] mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Gallery */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Main Image */}
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden cursor-zoom-in group">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }}></div>
              
              <Image 
                src={productImages[selectedImageIndex] || product.image} 
                alt={`${product.name} - Image ${selectedImageIndex + 1}`}
                width={1200}
                height={1200}
                className="w-full h-full object-contain p-6 transition-all duration-300 group-hover:scale-105"
                quality={95}
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = product.image;
                }}
              />

              {/* Navigation Arrows */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            {productImages.length > 1 && (
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index 
                          ? 'border-blue-600 shadow-md' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        width={120}
                        height={120}
                        className="w-full h-full object-contain"
                        quality={95}
                        unoptimized
                        sizes="80px"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = product.image;
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Premium Quality
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex flex-col">
                {product.onSale && product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-4xl font-bold text-[#063B78]">
                  {formatPrice(product.salePrice || product.price)}
                </span>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}>
                {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
              </span>
            </div>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="mb-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  Specifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.capacity && (
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Droplets className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Capacity</p>
                        <p className="font-semibold text-gray-900">{formatCapacity(product.capacity)}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications.layers && (
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Layers className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Layers</p>
                        <p className="font-semibold text-gray-900">{product.specifications.layers}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications.material && (
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Material</p>
                        <p className="font-semibold text-gray-900">{product.specifications.material}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications.uvProtection !== undefined && (
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Thermometer className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">UV Protection</p>
                        <p className="font-semibold text-gray-900">
                          {product.specifications.uvProtection ? "✓ Yes" : "✗ No"}
                        </p>
                      </div>
                    </div>
                  )}
                  {product.specifications.color && (
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Color</p>
                        <p className="font-semibold text-gray-900">{product.specifications.color}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {availableColors.length > 1 && (
              <div className="mb-6 bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Select Color</h3>
                <div className="flex flex-wrap gap-3">
                  {availableColors.map((color) => {
                    const colorMap: Record<string, string> = {
                      'Black': '#000000',
                      'Blue': '#063B78',
                      'Green': '#15803D',
                      'Yellow': '#FFD21F',
                      'Orange': '#F97316',
                      'Red': '#D92D20'
                    };
                    const bgColor = colorMap[color] || '#666666';
                    
                    return (
                      <button
                        key={color}
                        type="button"
                        aria-label={`Select ${color}`}
                        title={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#063B78] ${
                          selectedColor === color
                            ? 'ring-2 ring-offset-2 ring-[#063B78] scale-110'
                            : 'hover:scale-105'
                        }`}
                        style={{ backgroundColor: bgColor }}
                      >
                        {selectedColor === color && (
                          <span className="sr-only">Selected</span>
                        )}
                      </button>
                    );
                  })}
                </div>
                <p className="text-sm text-gray-500 mt-3">Selected: {selectedColor}</p>
              </div>
            )}

            {/* Quantity Selection */}
            <div className="mb-6 bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Select Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center text-xl font-bold text-gray-700 transition-all"
                >
                  -
                </button>
                <div className="w-20 h-12 rounded-lg border-2 border-gray-300 flex items-center justify-center text-xl font-bold text-gray-900">
                  {quantity}
                </div>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-12 h-12 rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-50 flex items-center justify-center text-xl font-bold text-gray-700 transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/checkout" className="flex-1">
                <Button 
                  size="lg" 
                  className="w-full bg-[#063B78] hover:bg-[#052A5C] text-white shadow-lg"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {product.inStock ? "Order Now" : "Out of Stock"}
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline"
                className="flex-1 border-2 border-[#063B78] text-[#063B78] hover:bg-[#063B78]/5"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>

            {/* Delivery Info */}
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start">
                <Truck className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-900 mb-1">Free Nationwide Delivery</p>
                  <p className="text-sm text-green-800">
                    We deliver across Kenya at no extra cost. Contact us for delivery timelines to your location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {product.category === 'TANKS' && product.subcategory && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Capacities</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {products
                .filter(p => p.category === 'TANKS' && p.subcategory === product.subcategory && p.id !== product.id)
                .sort((a, b) => {
                  const priorityA = a.priority || 0;
                  const priorityB = b.priority || 0;
                  if (priorityA !== priorityB) {
                    return priorityB - priorityA; // Higher priority first
                  }
                  return 0;
                })
                .slice(0, 6)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.slug}`}
                    className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow group"
                  >
                    <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-3 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                      <div className="text-blue-600 font-bold text-xl">
                        {relatedProduct.capacity ? `${relatedProduct.capacity}L` : 'N/A'}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      {relatedProduct.capacity ? `${relatedProduct.capacity.toLocaleString()} Litres` : relatedProduct.name}
                    </p>
                    <p className="text-sm font-bold text-blue-600">{formatPrice(relatedProduct.price)}</p>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Toast Notification */}
      <Toast
        show={showToast}
        product={product}
        quantity={quantity}
        selectedColor={selectedColor}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
