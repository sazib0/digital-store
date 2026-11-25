'use client';

import { useState } from 'react';
import { products, categories, shopLists } from '@/lib/data';
import { ProductCard } from '@/components/ui/product-card';
import { CartSheet } from '@/components/cart-sheet';
import { Button } from '@/components/ui/button';
import { PromotionBanner } from '@/components/promotion-banner';
import { Reviews } from '@/components/review';
import { Footer } from '@/components/footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import { MapPin } from 'lucide-react';


const features = [
  { id: 1, text: 'অর্গানিক উৎপাদন' },
  { id: 2, text: 'দ্রুত ডেলিভারি' },
  { id: 3, text: 'সরাসরি কৃষকের কাছ থেকে' },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
 <main className="min-h-screen">
        {/* Hero Banner */}
      <div className="relative">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        {/* Content Layer */}
        <div className="relative h-min flex items-center">
          <div className=" container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div className="inline-block bg-green-600 rounded-full px-4 py-1 text-sm font-semibold mb-2 mt-8">
                  ১০০% অর্গানিক
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  তাজা সবজি এবং ফল
                  <br />
                  <span className="text-green-400">আপনার দোরগোড়ায়</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  আমাদের কাছে পাবেন সবচেয়ে তাজা ও নির্ভেজাল কৃষিপণ্য, যা সরাসরি কৃষকের ক্ষেত থেকে আপনার বাড়িতে পৌঁছে যায়।
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {features.map((feature) => (
                    <div 
                      key={feature.id}
                      className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium"
                    >
                      {feature.text}
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 pb-4">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6"
                  >
                    এখনই কিনুন
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white text-lg px-8 py-6"
                  >
                    আরও জানুন
                  </Button>
                </div>
              </div>
              
              {/* Right Content - Floating Cards */}
              <div className="hidden lg:block relative">
                <div className="absolute -top-32 right-0 bg-white/10 backdrop-blur-md rounded-2xl p-6 w-72 transform rotate-3">
                  <img 
                    src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80" 
                    alt="Fresh Vegetables" 
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-white font-semibold">তাজা সবজি</h3>
                  <p className="text-gray-300 text-sm">প্রতিদিন সকালে সংগ্রহ করা</p>
                </div>
                <div className="absolute top-20 right-32 bg-white/10 backdrop-blur-md rounded-2xl p-6 w-72 transform -rotate-2">
                  <img 
                    src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80" 
                    alt="Fresh Fruits" 
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-semibold">মৌসুমি ফল</h3>
                  <p className="text-sm">গাছ পাকা টাটকা ফল</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 mt-4 container mx-auto px-4">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 container mx-auto px-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      {/* Promotion Banner */}
   <div className="container mx-auto px-4">
      <PromotionBanner />
     </div>

        {/* Shop Lists */}
        <div className="space-y-8 container mx-auto px-4">
          {shopLists.map((list, index) => (
            <section key={index} className="bg-card rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{list.title}</h2>
              <ScrollArea className="w-full whitespace-nowrap rounded-md">
                <div className="flex space-x-4 pb-4">
                  {list.products.map((product) => (
                    <div key={product.id} className="w-[300px] shrink-0">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </section>
          ))}
        </div>
         <Reviews />

         <Footer />

      </main>

  );
}