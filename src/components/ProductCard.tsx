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
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border border-gray-100 group flex flex-col h-full hover:border-[#063B78]/20">
      {/* Product Image */}
      <Link href={`/product/${product.slug}`} className="relative block">
        <div 
          className="aspect-square bg-white flex items-center justify-center p-3 md:p-4 relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image 
            src={isHovered && secondaryImage ? secondaryImage : product.image} 
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            quality={95}
            unoptimized
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/TANKS/verticalcylindrical tank/Deluxe Cylindrical Tank.jpeg';
            }}
          />
          {/* Sale Badge */}
          {product.onSale && (
            <div className="absolute top-2 left-2 bg-[#D92D20] text-white text-xs font-bold px-2 py-1 rounded-full">
              SAVE 20%
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-2 sm:p-3 md:p-4 flex-1 flex flex-col">
        {/* Category Badge */}
        <div className="mb-1">
          <span className="text-[11px] md:text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>

        {/* Product Title */}
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-[#063B78] transition-colors text-[13px] sm:text-[15px] md:text-base min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>
        
        {/* Capacity Tag */}
        {product.capacity && (
          <div className="mb-2">
            <span className="inline-block bg-gray-100 text-gray-700 text-[11px] md:text-xs font-medium px-2 py-1 rounded-full">
              {formatCapacity(product.capacity)}
            </span>
          </div>
        )}

        {/* Pricing Block */}
        <div className="mb-2 md:mb-3">
          {product.onSale && product.originalPrice && (
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] md:text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            </div>
          )}
          <span className="text-[15px] md:text-[18px] font-bold text-[#063B78]">
            {formatPrice(product.salePrice || product.price)}
          </span>
        </div>

        {/* Stock Status */}
        <div className="mb-2 md:mb-3">
          <span className={`text-[11px] md:text-xs font-semibold px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Link href={`/product/${product.slug}`} className="block">
            <Button size="sm" className="w-full text-xs sm:text-sm py-2.5 bg-[#063B78] hover:bg-[#052A5C] text-white font-semibold">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
