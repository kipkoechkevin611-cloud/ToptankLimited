import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with TopTank for inquiries, orders, and support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our water tanks? Need help choosing the right capacity? Our team is here to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+254731957540" className="text-blue-600 hover:text-blue-700 text-lg">
                    +254 731 957 540
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Mon-Sat: 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@toptank.co.ke" className="text-blue-600 hover:text-blue-700 text-lg">
                    info@toptank.co.ke
                  </a>
                  <p className="text-gray-600 text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-700">
                    Visit us at our convenient location along Mombasa Road, P.O. Box 3115 (Nairobi), Athi River.
                  </p>
                  <p className="text-gray-600 text-sm mt-1">Serving all 47 counties</p>
                  <a
                    href="https://maps.app.goo.gl/z8aRhBMg5kM1bLdn8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Saturday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600 text-sm mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 bg-blue-600 text-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Quick Contact</h3>
              <p className="text-blue-100 mb-4">
                For immediate assistance, call us or send us a message.
              </p>
              <a
                href="tel:+254731957540"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="+254 700 000 000"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black bg-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="order">Place an Order</option>
                  <option value="delivery">Delivery Information</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What is the delivery time?</h3>
              <p className="text-gray-600">
                Delivery times vary by location. Nairobi and surrounding areas typically receive delivery within 2-3 business days. Other counties may take 3-7 business days.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer installation services?</h3>
              <p className="text-gray-600">
                We can recommend professional installers in your area. Contact us for installation referrals and guidance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept M-Pesa, bank transfers, and cash on delivery in select areas. Contact us for payment details.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Are the tanks UV resistant?</h3>
              <p className="text-gray-600">
                Yes, all our triple-layer water tanks feature UV-resistant outer layers to protect against sun damage and ensure long-lasting performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
