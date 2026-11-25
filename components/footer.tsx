'use client';

import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for subscribing to our newsletter!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="mt-auto bg-[#2aaa8a]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Digital Store</h3>
            <p className="text-gray-800">
              Your one-stop destination for quality products. We provide the best shopping experience with carefully curated items.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-800 hover:text-primary transition">About Us</a></li>
              <li><a href="/contact" className="text-gray-800 hover:text-primary transition">Contact</a></li>
              <li><a href="/faq" className="text-gray-800 hover:text-primary transition">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/returns-policy" className="text-gray-800 hover:text-primary transition">Returns Policy</a></li>
              <li><a href="/privacy-policy" className="text-gray-800 hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-800 hover:text-primary transition">Terms of Service</a></li>
              <li><a href="/track-order" className="text-gray-800 hover:text-primary transition">Track Order</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <p className="text-gray-800">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" required />
                <Button type="submit" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </form>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:text-primary transition">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-800 hover:text-primary transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-800 hover:text-primary transition">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-800 hover:text-primary transition">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-800">
          <p>&copy; {new Date().getFullYear()} Digital Store - All rights reserved. Developed by <a className="underline" href="https://gikra.com" target="_blank">Gikra</a>.</p>
        </div>
      </div>
    </footer>
  );
}