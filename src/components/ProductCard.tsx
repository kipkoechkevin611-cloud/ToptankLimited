"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { formatPrice, formatCapacity } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const secondaryImage = product.images.length > 1 ? product.images[1] : null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
      {/* Product Image */}
      <Link href={`/product/${product.slug}`} className="relative block">
        <div 
          className="aspect-square bg-[#F9FAFB] flex items-center justify-center p-4 relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image 
            src={isHovered && secondaryImage ? secondaryImage : product.image} 
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-contain transition-all duration-300"
            quality={95}
            unoptimized
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg';
            }}
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-2 sm:p-4 flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        {/* Product Title */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors text-sm sm:text-base min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>
        
        {/* Capacity Tag */}
        {product.capacity && (
          <div className="mb-3">
            <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
              {formatCapacity(product.capacity)}
            </span>
          </div>
        )}

        {/* Pricing Block */}
        <div className="mb-4">
          {product.onSale && product.originalPrice && (
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </div>
          )}
          <span className="text-lg font-bold text-blue-600">
            {formatPrice(product.salePrice || product.price)}
          </span>
        </div>

        {/* Stock Status */}
        <div className="mb-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Link href={`/product/${product.slug}`} className="block">
            <Button size="sm" className="w-full text-xs sm:text-sm py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
