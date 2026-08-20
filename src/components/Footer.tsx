import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="">
            <h3 className="text-2xl font-bold mb-4">
              Top<span className="text-[#FFD21F]">Tank</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Premium triple-layer water tanks for homes, farms, and businesses across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/delivery" className="text-gray-400 hover:text-white transition-colors">
                  Delivery Information
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-white transition-colors">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-[#FFD21F] flex-shrink-0 mt-0.5" />
                <a href="tel:+254731957540" className="text-gray-400 hover:text-white transition-colors">
                  +254 731 957 540
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-[#FFD21F] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@toptank.co.ke" className="text-gray-400 hover:text-white transition-colors">
                  info@toptank.co.ke
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-[#FFD21F] flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p className="leading-relaxed">Mombasa Road, P.O. Box 3115 (Nairobi), Athi River</p>
                  <a
                    href="https://maps.app.goo.gl/z8aRhBMg5kM1bLdn8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFD21F] hover:text-[#E6BD1B] text-sm mt-2 inline-block transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} TopTank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
