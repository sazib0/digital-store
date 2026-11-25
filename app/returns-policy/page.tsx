'use client';

import { Footer } from '@/components/footer';
import { Package, RefreshCw, Clock, CheckCircle } from 'lucide-react';

export default function ReturnsPage() {
  const returnSteps = [
    {
      icon: Package,
      title: "Initiate Return",
      description: "Contact our customer service within 24 hours of delivery if you're unsatisfied with your product."
    },
    {
      icon: RefreshCw,
      title: "Product Collection",
      description: "Our delivery partner will collect the product from your specified location."
    },
    {
      icon: Clock,
      title: "Quality Check",
      description: "Our team will inspect the returned product to verify its condition."
    },
    {
      icon: CheckCircle,
      title: "Refund Processing",
      description: "Once approved, refund will be processed within 3-5 business days."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Returns Policy
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Easy returns and refunds to ensure your complete satisfaction.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Return Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Return Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Policy Details */}
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Return Policy Details</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Eligibility for Returns</h3>
              <p className="text-gray-600">
                Products must be returned within 24 hours of delivery. They must be unused, in their original packaging, and in the same condition as received.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Non-Returnable Items</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Perishable goods such as cut fruits or prepared foods</li>
                <li>Products that have been opened or used</li>
                <li>Items marked as non-returnable at the time of purchase</li>
                <li>Customized or personalized products</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Refund Process</h3>
              <p className="text-gray-600">
                Refunds will be processed to the original payment method within 3-5 business days after the return is approved. For cash on delivery orders, refunds will be processed to your bank account.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                We stand behind the quality of our products. If you receive a damaged or defective item, we'll replace it or provide a full refund, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}