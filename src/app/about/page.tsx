import { Shield, Droplets, Truck, Users, Award, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About TopTank
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kenya's trusted provider of premium triple-layer water storage solutions
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-12">
          <div className="flex items-start mb-6">
            <Target className="h-12 w-12 text-blue-600 mr-4 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide Kenyan homes, farms, businesses, and institutions with reliable, durable, and affordable water storage solutions. We are committed to delivering high-quality triple-layer water tanks that meet the diverse needs of our customers across the country.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            TopTank was established with a clear vision: to address the growing need for reliable water storage solutions in Kenya. Understanding the challenges that many Kenyans face with water scarcity and inconsistent supply, we set out to create products that would help families, farmers, and businesses store water safely and efficiently.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Over the years, we have grown from a small operation to a trusted brand serving customers across Kenya. Our commitment to quality, customer service, and innovation has made us a preferred choice for water storage solutions.
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every tank we produce meets stringent standards to ensure durability and reliability.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We listen to your needs and deliver solutions that work for you.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty and transparency. You can trust us to deliver on our promises.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <Droplets className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our products and processes to offer the best water storage solutions in the market.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <Truck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on time and stand behind our products. When you choose TopTank, you choose peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We are proud to serve Kenyan communities and contribute to water security across the nation.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-blue-600 text-white rounded-lg shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose TopTank?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-white/20 rounded-full p-2 mr-4 flex-shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Triple-Layer Technology</h3>
                <p className="text-blue-100">
                  Our tanks feature advanced triple-layer construction for superior durability and UV protection.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 rounded-full p-2 mr-4 flex-shrink-0">
                <Droplets className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Wide Range of Capacities</h3>
                <p className="text-blue-100">
                  From 1,000L to 24,000L, we have the perfect size for every need.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 rounded-full p-2 mr-4 flex-shrink-0">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Nationwide Delivery</h3>
                <p className="text-blue-100">
                  We deliver to all counties in Kenya, ensuring you get your tank wherever you are.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-white/20 rounded-full p-2 mr-4 flex-shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
                <p className="text-blue-100">
                  Our team is ready to help you choose the right tank and answer any questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
