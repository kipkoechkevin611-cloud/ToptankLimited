"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, formatCapacity } from "@/lib/products";
import { sendOrderEmailAction } from "@/app/actions/send-order-email";
import { ArrowLeft, CheckCircle, Mail } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>("");
  const [emailSent, setEmailSent] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    county: "",
    town: "",
    deliveryAddress: "",
    additionalInstructions: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    setIsMounted(true);
    if (items.length === 0 && !orderPlaced) {
      router.push("/cart");
    }
  }, [items.length, orderPlaced, router]);

  if (!isMounted) {
    return null;
  }

  if (items.length === 0 && !orderPlaced) {
    return null;
  }

  const subtotal = getCartTotal();
  const deliveryFee = 0; // Free delivery
  const total = subtotal + deliveryFee;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^(\+254|0)[1-9]\d{8}$/.test(formData.phoneNumber.replace(/\s/g, ""))) {
      newErrors.phoneNumber = "Please enter a valid Kenyan phone number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.county.trim()) {
      newErrors.county = "County is required";
    }
    if (!formData.town.trim()) {
      newErrors.town = "Town/Area is required";
    }
    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = "Delivery address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('[CHECKOUT] Form submission started');

    if (!validateForm()) {
      console.log('[CHECKOUT] Form validation failed');
      return;
    }

    // Prevent duplicate submissions
    if (emailSent) {
      console.log('[CHECKOUT] Duplicate submission prevented - email already sent');
      return;
    }

    setIsSubmitting(true);
    console.log('[CHECKOUT] Submitting order...');

    try {
      // Generate unique order number
      const timestamp = Date.now().toString().slice(-8);
      const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      const generatedOrderNumber = `TT-${timestamp}-${random}`;
      console.log('[CHECKOUT] Generated order number:', generatedOrderNumber);

      // Prepare order data for email
      const orderData = {
        orderNumber: generatedOrderNumber,
        customerName: formData.fullName,
        customerPhone: formData.phoneNumber,
        customerEmail: formData.email,
        county: formData.county,
        town: formData.town,
        deliveryAddress: formData.deliveryAddress,
        additionalInstructions: formData.additionalInstructions || undefined,
        items: items.map(item => ({
          name: item.product.name,
          capacity: item.product.capacity,
          color: item.selectedColor,
          price: item.product.salePrice || item.product.price,
          quantity: item.quantity,
        })),
        subtotal,
        deliveryFee,
        totalAmount: total,
        paymentMethod: 'Pending',
        paymentStatus: 'Pending',
      };

      console.log('[CHECKOUT] Calling server action to send email...');
      // Send email via server action
      const emailResult = await sendOrderEmailAction(orderData);
      
      console.log('[CHECKOUT] Server action response:', emailResult);
      
      if (!emailResult.success) {
        console.error('[CHECKOUT] Email sending failed:', emailResult.error);
        alert(`There was an error sending your order: ${emailResult.error}. Please try again or call us directly at +254 100 198 769.`);
        setIsSubmitting(false);
        return;
      }

      console.log('[CHECKOUT] Email sent successfully');
      // Track Google Ads conversion
      if (typeof window !== 'undefined' && (window as any).gtag_report_conversion) {
        (window as any).gtag_report_conversion();
      }
      // Mark email as sent to prevent duplicates
      setEmailSent(true);
      setOrderNumber(generatedOrderNumber);
      setOrderPlaced(true);
      clearCart();
      console.log('[CHECKOUT] Order completed successfully');
    } catch (error) {
      console.error('[CHECKOUT] Error processing order:', error);
      alert('There was an error processing your order. Please try again or call us directly at +254 100 198 769.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-xl p-8 text-center border border-gray-100">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
            <p className="text-gray-600 mb-2">
              Thank you, {formData.fullName}!
            </p>
            <p className="text-gray-600 mb-8">
              We have received your order and will contact you shortly to confirm delivery details.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-8 text-left border border-blue-100">
              <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Order Number:</strong> #{orderNumber}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Order Total:</strong> {formatPrice(total)}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Delivery Address:</strong> {formData.deliveryAddress}, {formData.town}, {formData.county}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Phone:</strong> {formData.phoneNumber}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Email:</strong> {formData.email}
              </p>
              <p className="text-sm text-green-600 mt-3 font-medium">
                ✓ Order confirmation sent to toptank662@gmail.com
              </p>
            </div>
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/cart" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black transition-all ${
                      errors.fullName ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="+254 700 000 000 or 07 00 000 000"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-6 pt-4 border-t">Delivery Information</h2>

                <div>
                  <label htmlFor="county" className="block text-sm font-medium text-gray-900 mb-2">
                    County *
                  </label>
                  <select
                    id="county"
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black bg-white transition-all ${
                      errors.county ? "border-red-500" : "border-gray-200"
                    }`}
                  >
                    <option value="">Select your county</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Kiambu">Kiambu</option>
                    <option value="Machakos">Machakos</option>
                    <option value="Kajiado">Kajiado</option>
                    <option value="Turkana">Turkana</option>
                    <option value="Baringo">Baringo</option>
                    <option value="Bomet">Bomet</option>
                    <option value="Bungoma">Bungoma</option>
                    <option value="Busia">Busia</option>
                    <option value="Elgeyo-Marakwet">Elgeyo-Marakwet</option>
                    <option value="Embu">Embu</option>
                    <option value="Garissa">Garissa</option>
                    <option value="Homa Bay">Homa Bay</option>
                    <option value="Isiolo">Isiolo</option>
                    <option value="Kakamega">Kakamega</option>
                    <option value="Kericho">Kericho</option>
                    <option value="Kilifi">Kilifi</option>
                    <option value="Kirinyaga">Kirinyaga</option>
                    <option value="Kisii">Kisii</option>
                    <option value="Kitui">Kitui</option>
                    <option value="Kwale">Kwale</option>
                    <option value="Laikipia">Laikipia</option>
                    <option value="Lamu">Lamu</option>
                    <option value="Marsabit">Marsabit</option>
                    <option value="Meru">Meru</option>
                    <option value="Migori">Migori</option>
                    <option value="Murang'a">Murang'a</option>
                    <option value="Nairobi">Nairobi</option>
                    <option value="Nandi">Nandi</option>
                    <option value="Narok">Narok</option>
                    <option value="Nyamira">Nyamira</option>
                    <option value="Nyandarua">Nyandarua</option>
                    <option value="Nyeri">Nyeri</option>
                    <option value="Samburu">Samburu</option>
                    <option value="Siaya">Siaya</option>
                    <option value="Taita-Taveta">Taita-Taveta</option>
                    <option value="Tana River">Tana River</option>
                    <option value="Tharaka-Nithi">Tharaka-Nithi</option>
                    <option value="Trans Nzoia">Trans Nzoia</option>
                    <option value="Uasin Gishu">Uasin Gishu</option>
                    <option value="Vihiga">Vihiga</option>
                    <option value="Wajir">Wajir</option>
                    <option value="West Pokot">West Pokot</option>
                  </select>
                  {errors.county && (
                    <p className="text-red-600 text-sm mt-1">{errors.county}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="town" className="block text-sm font-medium text-gray-900 mb-2">
                    Town/Area *
                  </label>
                  <input
                    type="text"
                    id="town"
                    name="town"
                    value={formData.town}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
                      errors.town ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your town or area"
                  />
                  {errors.town && (
                    <p className="text-red-600 text-sm mt-1">{errors.town}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-900 mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    id="deliveryAddress"
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black ${
                      errors.deliveryAddress ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your complete delivery address"
                  />
                  {errors.deliveryAddress && (
                    <p className="text-red-600 text-sm mt-1">{errors.deliveryAddress}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="additionalInstructions" className="block text-sm font-medium text-gray-900 mb-2">
                    Additional Instructions (Optional)
                  </label>
                  <textarea
                    id="additionalInstructions"
                    name="additionalInstructions"
                    value={formData.additionalInstructions}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="Any additional delivery instructions or special requests"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing Order..." : "Place Order"}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-xl p-6 sticky top-24 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => {
                  const unitPrice = item.product.salePrice || item.product.price;
                  return (
                    <div key={item.product.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{item.product.name}</p>
                        <p className="text-gray-600 text-sm">{formatCapacity(item.product.capacity)} × {item.quantity}</p>
                        {item.selectedColor && (
                          <p className="text-gray-600 text-sm">Color: {item.selectedColor}</p>
                        )}
                      </div>
                      <p className="font-semibold text-gray-900">
                        {formatPrice(unitPrice * item.quantity)}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="border-t pt-4 space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-gray-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold text-gray-900">
                    {deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee)}
                  </span>
                </div>
                {deliveryFee === 0 && (
                  <p className="text-sm text-green-600">
                    Free delivery on orders over Ksh. 50,000
                  </p>
                )}
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-blue-600">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-900">
                    Order confirmation will be sent to {formData.email || "your email"}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
