'use client';

import { useState } from 'react';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

interface OrderStatus {
  status: 'processing' | 'shipped' | 'delivered' | 'not-found';
  orderNumber: string;
  timeline: {
    status: string;
    date: string;
    completed: boolean;
  }[];
}

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState<OrderStatus | null>(null);

  // Mock order tracking - In production, this would call an API
  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock response
    if (orderNumber) {
      setOrderStatus({
        status: 'shipped',
        orderNumber: orderNumber,
        timeline: [
          {
            status: 'Order Placed',
            date: '2024-03-20 10:30 AM',
            completed: true
          },
          {
            status: 'Order Confirmed',
            date: '2024-03-20 10:45 AM',
            completed: true
          },
          {
            status: 'Out for Delivery',
            date: '2024-03-20 02:15 PM',
            completed: true
          },
          {
            status: 'Delivered',
            date: 'Estimated: 2024-03-20 05:00 PM',
            completed: false
          }
        ]
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Track Your Order
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Enter your order number to track your delivery status.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Track Order Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <form onSubmit={handleTrackOrder} className="flex gap-4">
            <Input
              placeholder="Enter your order number"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              Track Order
            </Button>
          </form>
        </div>

        {/* Order Status */}
        {orderStatus && (
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Order #{orderStatus.orderNumber}</h2>
              <p className="text-gray-600">
                Current Status: <span className="font-semibold capitalize">{orderStatus.status}</span>
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {orderStatus.timeline.map((event, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    event.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {event.completed ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className={`font-semibold ${
                      event.completed ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {event.status}
                    </h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Details */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Delivery Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Delivery Address</p>
                  <p className="text-gray-700">123 Main Street, Apartment 4B<br />Dhaka, Bangladesh</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Contact</p>
                  <p className="text-gray-700">John Doe<br />+880 1234-567890</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}