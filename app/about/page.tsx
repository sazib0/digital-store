'use client';

import { Award, Heart, Leaf, Shield, Sprout, Users } from 'lucide-react';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above all else.'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to environmentally friendly farming practices.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality control for all our products.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Supporting local farmers and strengthening communities.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for excellence in everything we do.'
    },
    {
      icon: Sprout,
      title: 'Innovation',
      description: 'Embracing new technologies and farming methods.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Connecting farmers with consumers, bringing fresh produce from farm to table since 2020.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At Digital Store, we're on a mission to revolutionize the agricultural marketplace by creating
                direct connections between farmers and consumers. We believe in:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </span>
                  <span>Supporting sustainable farming practices</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Users className="w-4 h-4 text-green-600" />
                  </span>
                  <span>Empowering local farming communities</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <Shield className="w-4 h-4 text-green-600" />
                  </span>
                  <span>Ensuring fair prices for both farmers and consumers</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1592192113441-2c0cab14c0b3?auto=format&fit=crop&q=80"
                alt="Farming"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}