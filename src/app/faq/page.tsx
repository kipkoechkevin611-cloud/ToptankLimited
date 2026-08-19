"use client";

import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What are TopTank water tanks made of?",
    answer: "TopTank water tanks are made of high-quality triple-layer polyethylene material that is UV-resistant, durable, and designed for long-term water storage. The triple-layer construction provides extra strength and protection against environmental factors."
  },
  {
    question: "What capacities do you offer?",
    answer: "We offer a wide range of capacities from 1,000 litres to 24,000 litres to suit various needs including residential, agricultural, commercial, and institutional applications."
  },
  {
    question: "How long do TopTank water tanks last?",
    answer: "With proper installation and maintenance, TopTank water tanks can last 15-20 years or more. Our triple-layer construction and UV protection ensure durability even in harsh weather conditions."
  },
  {
    question: "Do you deliver across Kenya?",
    answer: "Yes, we deliver to all 47 counties in Kenya. Delivery times and fees may vary depending on your location. Contact us for specific delivery information to your area."
  },
  {
    question: "Are the tanks food-grade safe?",
    answer: "Yes, all TopTank water tanks are made from food-grade polyethylene material that is safe for storing drinking water. Our tanks meet international safety standards for water storage."
  },
  {
    question: "Do you offer installation services?",
    answer: "We can recommend professional installation services or provide guidance for self-installation. Contact us to discuss installation options for your specific location and requirements."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including M-Pesa, bank transfers, and cash on delivery for certain locations. For large orders, we can discuss flexible payment terms."
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes, TopTank water tanks come with a manufacturer's warranty against manufacturing defects. The warranty period varies by tank size and model. Contact us for specific warranty information."
  },
  {
    question: "Can I use the tanks for purposes other than water storage?",
    answer: "While primarily designed for water storage, our tanks can also be used for storing other non-corrosive liquids. However, we recommend consulting with us for specific use cases to ensure compatibility."
  },
  {
    question: "How do I clean and maintain my TopTank?",
    answer: "Regular cleaning involves draining the tank, scrubbing the interior with mild soap and water, and rinsing thoroughly. We recommend cleaning every 6-12 months depending on usage. Avoid using harsh chemicals or abrasive materials."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Find answers to common questions about TopTank water tanks, delivery, installation, and more.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help you find the perfect water storage solution.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
