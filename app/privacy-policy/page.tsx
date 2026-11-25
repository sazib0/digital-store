'use client';

import { Footer } from '@/components/footer';
import { Shield, Lock, Eye, UserCheck, Database, Share2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "We implement robust security measures to protect your personal information."
    },
    {
      icon: Lock,
      title: "Secure Transactions",
      description: "All payment transactions are encrypted and processed securely."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We're clear about how we collect, use, and share your data."
    },
    {
      icon: UserCheck,
      title: "User Control",
      description: "You have full control over your personal data and privacy settings."
    },
    {
      icon: Database,
      title: "Data Storage",
      description: "Your data is stored securely and only retained as long as necessary."
    },
    {
      icon: Share2,
      title: "Third-Party Sharing",
      description: "We never sell your personal information to third parties."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We value your privacy and are committed to protecting your personal information.
          </p>
        </div>
      </div>

      {/* Key Points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Policy */}
        <div className="bg-white rounded-lg p-8 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Name and contact information</li>
              <li>Delivery address and preferences</li>
              <li>Payment information</li>
              <li>Order history and preferences</li>
              <li>Communication preferences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use the collected information for:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Processing and delivering your orders</li>
              <li>Communicating about your orders and account</li>
              <li>Improving our services and user experience</li>
              <li>Sending relevant marketing communications (with your consent)</li>
              <li>Preventing fraud and maintaining security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure socket layer technology, and regular security assessments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}