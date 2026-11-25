'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { House,MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Footer } from '@/components/footer';
import { CartSheet } from '@/components/cart-sheet';
import Link from 'next/link';

// Dynamically import the map component to avoid SSR issues
const Map = dynamic(() => import('@/components/map'), { ssr: false });

interface Farm {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  distance: number;
  category: string;
  coordinates: [number, number];
  address: string;
}

const farms: Farm[] = [
  {
    id: '1',
    name: 'Dhaka Organic Farm',
    description: 'Fresh organic vegetables and fruits',
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=500&q=80',
    rating: 4.8,
    distance: 2.1,
    category: 'Organic',
    coordinates: [23.8103, 90.4125],
    address: 'Uttara, Dhaka'
  },
  {
    id: '2',
    name: 'Green Fields Farm',
    description: 'Sustainable farming practices',
    image: 'https://images.unsplash.com/photo-1585438874374-56efc73c6190?w=500&q=80',
    rating: 4.5,
    distance: 3.2,
    category: 'Organic',
    coordinates: [23.8001, 90.4152],
    address: 'Gulshan, Dhaka'
  },
  {
    id: '3',
    name: 'Bangla Dairy',
    description: 'Fresh milk and dairy products',
    image: 'https://images.unsplash.com/photo-1594761077961-cadd5ce417d2?w=500&q=80',
    rating: 4.7,
    distance: 1.8,
    category: 'Dairy',
    coordinates: [23.7925, 90.4078],
    address: 'Banani, Dhaka'
  },
  {
    id: '4',
    name: 'Urban Poultry Farm',
    description: 'Free-range eggs and poultry',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&q=80',
    rating: 4.3,
    distance: 4.5,
    category: 'Poultry',
    coordinates: [23.7937, 90.4066],
    address: 'Mohakhali, Dhaka'
  },
  {
    id: '5',
    name: 'Fresh Fruit Valley',
    description: 'Seasonal local fruits',
    image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=500&q=80',
    rating: 4.6,
    distance: 2.9,
    category: 'Fruits',
    coordinates: [23.7985, 90.4312],
    address: 'Badda, Dhaka'
  },
  {
    id: '6',
    name: 'Dhaka Vegetable Hub',
    description: 'Fresh vegetables daily',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&q=80',
    rating: 4.4,
    distance: 3.7,
    category: 'Vegetables',
    coordinates: [23.8096, 90.4197],
    address: 'Mirpur, Dhaka'
  },
  {
    id: '7',
    name: 'Nature\'s Best Farm',
    description: 'Organic and hydroponic vegetables',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=500&q=80',
    rating: 4.9,
    distance: 5.1,
    category: 'Organic',
    coordinates: [23.8147, 90.4136],
    address: 'Pallabi, Dhaka'
  },
  {
    id: '8',
    name: 'Golden Eggs Farm',
    description: 'Premium quality eggs',
    image: 'https://images.unsplash.com/photo-1569288052389-dac9b0ac9b6b?w=500&q=80',
    rating: 4.2,
    distance: 4.3,
    category: 'Poultry',
    coordinates: [23.7877, 90.4265],
    address: 'Rampura, Dhaka'
  },
  {
    id: '9',
    name: 'Pure Milk Dairy',
    description: 'Traditional dairy products',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80',
    rating: 4.7,
    distance: 3.4,
    category: 'Dairy',
    coordinates: [23.7969, 90.4203],
    address: 'Tejgaon, Dhaka'
  },
  {
    id: '10',
    name: 'Green Harvest',
    description: 'Seasonal vegetables and herbs',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=500&q=80',
    rating: 4.5,
    distance: 2.8,
    category: 'Vegetables',
    coordinates: [23.8223, 90.4256],
    address: 'Uttara Sector 10, Dhaka'
  },
  {
    id: '11',
    name: 'Fruit Paradise',
    description: 'Exotic and local fruits',
    image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=500&q=80',
    rating: 4.6,
    distance: 3.9,
    category: 'Fruits',
    coordinates: [23.7814, 90.4124],
    address: 'Dhanmondi, Dhaka'
  },
  {
    id: '12',
    name: 'Eco Farm',
    description: 'Sustainable farming',
    image: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=500&q=80',
    rating: 4.8,
    distance: 4.7,
    category: 'Organic',
    coordinates: [23.8034, 90.4195],
    address: 'Mohammadpur, Dhaka'
  },
  {
    id: '13',
    name: 'Fresh Dairy Farm',
    description: 'Organic dairy products',
    image: 'https://images.unsplash.com/photo-1594761077961-cadd5ce417d2?w=500&q=80',
    rating: 4.4,
    distance: 3.2,
    category: 'Dairy',
    coordinates: [23.7936, 90.4079],
    address: 'Farmgate, Dhaka'
  },
  {
    id: '14',
    name: 'Poultry Plus',
    description: 'Quality poultry products',
    image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=500&q=80',
    rating: 4.3,
    distance: 5.5,
    category: 'Poultry',
    coordinates: [23.7875, 90.4010],
    address: 'Agargaon, Dhaka'
  },
  {
    id: '15',
    name: 'Garden Fresh',
    description: 'Hydroponic vegetables',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&q=80',
    rating: 4.7,
    distance: 2.6,
    category: 'Vegetables',
    coordinates: [23.8129, 90.4195],
    address: 'Mirpur DOHS, Dhaka'
  }
];

const categories = ['All', 'Organic', 'Dairy', 'Poultry', 'Vegetables', 'Fruits'];

export default function NearbyShopsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null);

  const filteredFarms = farms.filter(farm => {
    const matchesSearch = farm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         farm.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         farm.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || farm.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="font-bold mb-8">Farms in Dhaka</h1>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search farms by name, description, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent position="popper" className="w-[180px]">
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map - Now first on mobile */}
          <div className="lg:col-span-2 h-[400px] lg:h-[800px] rounded-lg overflow-hidden sticky top-[100px]">
            <Map farms={farms} selectedFarm={selectedFarm} />
          </div>

          {/* Farm List */}
          <div className="space-y-4">
            {filteredFarms.map((farm) => (
              <div
                key={farm.id}
                className={`bg-card p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedFarm?.id === farm.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedFarm(farm)}
              >
                <div className="flex gap-4">
                  <img
                    src={farm.image}
                    alt={farm.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{farm.name}</h3>
                    <p className="text-sm text-muted-foreground">{farm.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{farm.address}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < Math.floor(farm.rating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {farm.rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {farm.distance} km away
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}