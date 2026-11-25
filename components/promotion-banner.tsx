'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Tag, Percent, ShoppingBag } from 'lucide-react';

const promotions = [
  {
    id: 1,
    title: 'সুপার ডিসকাউন্ট!',
    description: 'সকল তাজা ফলের উপর ৩০% ছাড়',
    bgImage: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&q=80',
    buttonText: 'এখনই কিনুন',
    icon: Percent,
  },
  {
    id: 2,
    title: 'নতুন গ্রাহক অফার',
    description: 'প্রথম অর্ডারে ২০% ছাড়',
    bgImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
    buttonText: 'রেজিস্টার করুন',
    icon: Tag,
  },
  {
    id: 3,
    title: 'ফ্রি ডেলিভারি',
    description: '১০০০ টাকার উপরে অর্ডারে',
    bgImage: 'https://images.unsplash.com/photo-1557844352-761f2565b576?auto=format&fit=crop&q=80',
    buttonText: 'শপিং করুন',
    icon: ShoppingBag,
  },
];

export function PromotionBanner() {
  return (
    <div className="w-full bg-white py-8">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto"
      >
        <CarouselContent>
          {promotions.map((promo) => {
            const Icon = promo.icon;
            return (
              <CarouselItem key={promo.id}>
                <div className="relative h-[300px] rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${promo.bgImage}')`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
                  </div>
                  <div className="relative h-full flex items-center p-8 md:p-12">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-2 mb-4">
                        <Icon className="w-8 h-8 text-yellow-400" />
                        <span className="text-yellow-400 font-semibold text-xl">স্পেশাল অফার</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {promo.title}
                      </h2>
                      <p className="text-xl text-gray-200 mb-6">
                        {promo.description}
                      </p>
                      <Button
                        size="lg"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                      >
                        {promo.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}