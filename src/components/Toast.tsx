"use client";

import { useEffect, useState } from "react";
import { X, ShoppingCart, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice, formatCapacity } from "@/lib/products";
import type { Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

interface ToastProps {
  show: boolean;
  product: Product;
  quantity: number;
  selectedColor?: string;
  onClose: () => void;
}

export default function Toast({ show, product, quantity, selectedColor, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [show]);

  if (!show) return null;

  const totalPrice = (product.salePrice || product.price) * quantity;

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-sm w-full overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-white" />
            <span className="text-white font-semibold">Added to Cart!</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-green-200 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Product Details */}
        <div className="p-4">
          <div className="flex gap-4">
            {/* Product Thumbnail */}
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="w-full h-full object-contain p-2"
                unoptimized
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1">
                {product.name}
              </h4>
              {product.capacity && (
                <p className="text-xs text-gray-600 mb-1">
                  {formatCapacity(product.capacity)}
                </p>
              )}
              {selectedColor && (
                <p className="text-xs text-gray-600 mb-1">
                  Color: {selectedColor}
                </p>
              )}
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-blue-600">
                  {formatPrice(product.salePrice || product.price)}
                </span>
                <span className="text-xs text-gray-500">× {quantity}</span>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
            <span className="text-sm text-gray-600">Subtotal:</span>
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 pb-4 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Continue Shopping
          </Button>
          <Link href="/checkout" className="flex-1">
            <Button
              size="sm"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Checkout
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
