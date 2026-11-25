import { Product, Category } from './types';
import { Wheat, Fish, Apple, Flower, Egg, Milk, Carrot } from 'lucide-react';

export const categories: Category[] = [
  { id: 'crops', name: 'Crops', icon: 'Wheat' },
  { id: 'livestock', name: 'Livestock', icon: 'Beef' },
  { id: 'fish', name: 'Fish', icon: 'Fish' },
  { id: 'fruits', name: 'Fruits', icon: 'Apple' },
  { id: 'flowers', name: 'Flowers', icon: 'Flower' },
  { id: 'dairy', name: 'Dairy', icon: 'Milk' },
  { id: 'poultry', name: 'Poultry', icon: 'Egg' },
  { id: 'vegetables', name: 'Vegetables', icon: 'Carrot' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Rice (5kg)',
    description: 'Premium quality rice from local farmers',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80',
    category: 'crops',
    rating: 4.8,
    reviews: 245
  },
  {
    id: '2',
    name: 'Farm Fresh Eggs (12pc)',
    description: 'Free-range chicken eggs',
    price: 280,
    image: 'https://images.unsplash.com/photo-1569288052389-dac9b0ac9b6b?w=500&q=80',
    category: 'poultry',
    rating: 4.9,
    reviews: 189
  },
  {
    id: '3',
    name: 'Organic Milk (1L)',
    description: 'Fresh dairy milk from grass-fed cows',
    price: 400,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500&q=80',
    category: 'dairy',
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Fresh Tilapia Fish (1kg)',
    description: 'Farm-raised fresh tilapia',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1574502902341-7ab27b3a8df7?w=500&q=80',
    category: 'fish',
    rating: 4.6,
    reviews: 134
  },
  {
    id: '5',
    name: 'Seasonal Mango (1kg)',
    description: 'Sweet and juicy mangoes',
    price: 810,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80',
    category: 'fruits',
    rating: 4.9,
    reviews: 278
  },
  {
    id: '6',
    name: 'Fresh Roses (Bunch)',
    description: 'Beautiful garden roses',
    price: 1300,
    image: 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=500&q=80',
    category: 'flowers',
    rating: 4.8,
    reviews: 167
  },
  {
    id: '7',
    name: 'Organic Tomatoes (500g)',
    description: 'Fresh organic tomatoes',
    price: 350,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&q=80',
    category: 'vegetables',
    rating: 4.5,
    reviews: 145
  },
  {
    id: '8',
    name: 'Fresh Chicken (1kg)',
    description: 'Farm-raised chicken',
    price: 900,
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=500&q=80',
    category: 'livestock',
    rating: 4.7,
    reviews: 198
  }
];

export const shopLists = [
  {
    title: "Fresh Picks",
    products: [
      {
        id: '9',
        name: 'Organic Wheat (5kg)',
        description: 'Premium quality organic wheat',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80',
        category: 'crops',
        rating: 4.6,
        reviews: 123
      },
      {
        id: '10',
        name: 'Fresh Carp Fish (1kg)',
        description: 'Farm-raised carp fish',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1511374322656-8bbe3fd98c7f?w=500&q=80',
        category: 'fish',
        rating: 4.7,
        reviews: 145
      },
      {
        id: '11',
        name: 'Organic Carrots (1kg)',
        description: 'Fresh organic carrots',
        price: 500,
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&q=80',
        category: 'vegetables',
        rating: 4.5,
        reviews: 167
      }
    ]
  },
  {
    title: "Popular Items",
    products: [
      {
        id: '12',
        name: 'Fresh Goat Milk (1L)',
        description: 'Pure goat milk',
        price: 730,
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=500&q=80',
        category: 'dairy',
        rating: 4.8,
        reviews: 178
      },
      {
        id: '13',
        name: 'Organic Apples (1kg)',
        description: 'Sweet and fresh apples',
        price: 550,
        image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&q=80',
        category: 'fruits',
        rating: 4.6,
        reviews: 156
      },
      {
        id: '14',
        name: 'Sunflowers (Bunch)',
        description: 'Beautiful sunflowers',
        price: 980,
        image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=500&q=80',
        category: 'flowers',
        rating: 4.7,
        reviews: 134
      }
    ]
  }
];