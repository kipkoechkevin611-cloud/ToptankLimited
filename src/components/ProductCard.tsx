import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";
import { formatPrice, formatCapacity } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
      {/* Product Image */}
      <Link href={`/product/${product.slug}`}>
        <div className="aspect-square bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            quality={90}
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/TANKS/deluxe cylindrical tank/Deluxe Cylindrical Tank.jpeg';
            }}
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors min-h-[3rem]">
            {product.name}
          </h3>
        </Link>
        
        {product.capacity && (
          <p className="text-sm text-gray-600 mb-3 font-medium">
            {formatCapacity(product.capacity)}
          </p>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            {product.onSale && product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-xl font-bold text-blue-600">
              {formatPrice(product.salePrice || product.price)}
            </span>
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>

        <div className="flex gap-2">
          {onAddToCart && product.inStock && (
            <Button
              size="sm"
              onClick={() => onAddToCart(product)}
              className="flex-1 text-xs sm:text-sm py-2.5 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <ShoppingCart className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Add to Cart</span>
              <span className="sm:hidden">Add</span>
            </Button>
          )}
          <Link href={`/product/${product.slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm py-2.5 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
