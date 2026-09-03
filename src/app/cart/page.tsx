"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, formatCapacity } from "@/lib/products";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, getCartTotal, orderNumber, generateOrderNumber } = useCart();

  useEffect(() => {
    if (items.length > 0 && !orderNumber) {
      generateOrderNumber();
    }
  }, [items, orderNumber, generateOrderNumber]);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-20 w-20 sm:h-24 sm:w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Browse our collection of premium water tanks to get started.
            </p>
            <Link href="/shop">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Water Tanks
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const deliveryFee = 0; // Free delivery
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <Link
                      href={`/product/${item.product.slug}`}
                      className="text-base sm:text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">{formatCapacity(item.product.capacity)}</p>
                    {item.selectedColor && (
                      <p className="text-gray-600 text-sm">Color: {item.selectedColor}</p>
                    )}
                    <div className="flex flex-col mt-2">
                      {item.product.onSale && item.product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(item.product.originalPrice)}
                        </span>
                      )}
                      <p className="text-lg sm:text-xl font-bold text-blue-600">
                        {formatPrice(item.product.salePrice || item.product.price)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 justify-between sm:justify-end">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-10 h-10 rounded-full border-2 border-gray-800 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-900"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center font-semibold text-lg text-gray-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-10 h-10 rounded-full border-2 border-gray-800 bg-white flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-900"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-lg font-semibold text-gray-900">
                      {formatPrice((item.product.salePrice || item.product.price) * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-24 border border-gray-100">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {orderNumber && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>Order Number:</strong> {orderNumber}
                  </p>
                </div>
              )}

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{item.product.name}</p>
                      <p className="text-gray-600 text-sm">{formatCapacity(item.product.capacity)} × {item.quantity}</p>
                      {item.selectedColor && (
                        <p className="text-gray-600 text-sm">Color: {item.selectedColor}</p>
                      )}
                    </div>
                    <p className="font-semibold text-gray-900">
                      {formatPrice((item.product.salePrice || item.product.price) * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold text-green-600">
                    FREE
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-blue-600">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <Link href="/checkout" className="block">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg mb-3">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/shop" className="block">
                <Button variant="outline" size="lg" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                  Continue Shopping
                </Button>
              </Link>

              <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                <p className="text-sm text-green-900 leading-relaxed">
                  <strong>Free Nationwide Delivery:</strong> We deliver across Kenya at no extra cost. Contact us for delivery timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
