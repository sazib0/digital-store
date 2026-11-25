'use client';
import * as React from 'react';

import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const reviews = [
  {
    id: 1,
    name: 'রহিম আহমেদ',
    rating: 5,
    comment: 'খুব ভালো মানের তাজা সবজি। দ্রুত ডেলিভারি সার্ভিস। আমি নিয়মিত এখান থেকে কেনাকাটা করি।',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop&crop=faces',
  },
  {
    id: 2,
    name: 'ফাতেমা বেগম',
    rating: 5,
    comment: 'অর্গানিক ফল এবং সবজির জন্য এই সাইটটি খুবই ভরসাযোগ্য। পণ্যের মান অসাধারণ।',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces',
  },
  {
    id: 3,
    name: 'করিম হোসেন',
    rating: 5,
    comment: 'দামও ভালো, মানও ভালো। বাড়িতে বসে তাজা সবজি পাওয়া যায়, এর চেয়ে ভালো কি হতে পারে!',
    image: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=150&h=150&fit=crop&crop=faces',
  },
  {
    id: 4,
    name: 'সাবরিনা খান',
    rating: 4,
    comment: 'প্রতিটি পণ্য খুব যত্ন করে প্যাকেজিং করা হয়। সবজি এবং ফলের তাজগি নিয়ে কোনো সন্দেহ নেই।',
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=150&h=150&fit=crop&crop=faces',
  },
  {
    id: 5,
    name: 'জাহিদ হাসান',
    rating: 5,
    comment: 'অনলাইনে কৃষিপণ্য কেনার সেরা জায়গা। কৃষকদের সাথে সরাসরি যোগাযোগের সুবিধা খুবই ভালো।',
    image: 'https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=150&h=150&fit=crop&crop=faces',
  },
  {
    id: 6,
    name: 'নাজমা আক্তার',
    rating: 5,
    comment: 'প্রতিদিনের প্রয়োজনীয় সবজি কেনার জন্য এই সাইটটি খুবই সহায়ক। কাস্টমার সার্ভিস অসাধারণ।',
    image: 'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?w=150&h=150&fit=crop&crop=faces',
  }
];

export function Reviews() {
  return (
     <div className="w-full bg-white py-8">
      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            গ্রাহকদের অভিজ্ঞতা
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <Star
                          key={i + review.rating}
                          className="w-4 h-4 text-gray-300"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
       </div>
  );
}