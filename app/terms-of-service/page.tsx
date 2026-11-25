'use client';

import { Footer } from '@/components/footer';
import { Scale, FileText, ShieldCheck, UserCheck } from 'lucide-react';

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: Scale,
      title: "Legal Agreement",
      description: "By using our services, you agree to these terms and conditions."
    },
    {
      icon: FileText,
      title: "Content Usage",
      description: "Guidelines for using our platform and content responsibly."
    },
    {
      icon: ShieldCheck,
      title: "User Obligations",
      description: "Your responsibilities while using our services."
    },
    {
      icon: UserCheck,
      title: "Account Terms",
      description: "Rules and requirements for maintaining your account."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Key Points */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        {/* Detailed Terms */}
        <div className="bg-white rounded-lg p-8 shadow-sm space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using Digital Store's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to suspend or terminate accounts that violate our terms</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. Ordering and Payment</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>All orders are subject to availability and confirmation of the order price</li>
              <li>Prices are inclusive of applicable taxes unless stated otherwise</li>
              <li>Payment must be made in full at the time of ordering</li>
              <li>We accept various payment methods as specified on our platform</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Delivery and Returns</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss and title for items pass to you upon delivery</li>
              <li>Returns are subject to our Returns Policy</li>
              <li>We reserve the right to refuse returns that don't meet our criteria</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content on our platform, including text, graphics, logos, and software, is the property of Digital Store and protected by intellectual property laws. You may not use, reproduce, or distribute our content without our explicit permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              To the maximum extent permitted by law, Digital Store shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}