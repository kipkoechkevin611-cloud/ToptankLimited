"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [previousCartCount, setPreviousCartCount] = useState(cartCount);

  // Show popup when cart count increases
  useEffect(() => {
    if (cartCount > previousCartCount) {
      setShowCartPopup(true);
      const timer = setTimeout(() => setShowCartPopup(false), 2000);
      return () => clearTimeout(timer);
    }
    setPreviousCartCount(cartCount);
  }, [cartCount, previousCartCount]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#063B78] text-white text-center py-2.5 px-4 text-xs sm:text-sm font-semibold">
        <p className="flex items-center justify-center gap-2">
          🔥 Flash Sale: <span className="text-[#FFD21F]">20% OFF</span> All Tanks & Industrial Products — Direct Delivery Available
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#063B78]">
                TopTank
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-[#063B78] font-medium transition-colors text-base">
                Home
              </Link>
              <Link href="/shop" className="text-gray-900 hover:text-[#063B78] font-medium transition-colors text-base">
                Shop
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-[#063B78] font-medium transition-colors text-base">
                About
              </Link>
              <Link href="/faq" className="text-gray-900 hover:text-[#063B78] font-medium transition-colors text-base">
                FAQ
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-[#063B78] font-medium transition-colors text-base">
                Contact
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/search">
                <Button variant="ghost" size="icon" className="hover:bg-[#063B78]/5">
                  <Search className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/cart" className="relative">
                <Button variant="ghost" size="icon" className="hover:bg-[#063B78]/5">
                  <ShoppingCart className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#063B78] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {cartCount}
                    </span>
                  )}
                </Button>
                {/* Cart Popup */}
                {showCartPopup && (
                  <div className="absolute -top-12 right-0 bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-lg animate-bounce whitespace-nowrap">
                    Added to cart! ({cartCount})
                  </div>
                )}
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="sm" className="border-[#063B78] text-[#063B78] hover:bg-[#063B78]/5">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#063B78]/5 hover:text-[#063B78] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#063B78]/5 hover:text-[#063B78] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/categories"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#063B78]/5 hover:text-[#063B78] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#063B78]/5 hover:text-[#063B78] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#063B78]/5 hover:text-[#063B78] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#063B78]/5 hover:text-[#063B78] rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-gray-200 pt-4 mt-4 space-y-1">
                <Link
                  href="/search"
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#063B78]/5 hover:text-[#063B78] rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Search className="h-5 w-5 mr-3" />
                  Search
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-900 hover:bg-[#063B78]/5 hover:text-[#063B78] rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingCart className="h-5 w-5 mr-3" />
                  Cart {cartCount > 0 && `(${cartCount})`}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
