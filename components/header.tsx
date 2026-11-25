'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, House, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartSheet } from '@/components/cart-sheet';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Digital Store Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-green-600 hidden sm:inline">
              Digital Store
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <House className="w-4 h-4" />
                <span>Home</span>
              </Button>
            </Link>
            <Link href="/nearby-shops">
              <Button variant="ghost" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Farms</span>
              </Button>
            </Link>
            <CartSheet />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <CartSheet />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <House className="w-4 h-4" />
                  <span>Home</span>
                </Button>
              </Link>
              <Link href="/nearby-shops">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MapPin className="w-4 h-4" />
                  <span>Farms</span>
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}