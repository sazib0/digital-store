import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { CartProvider } from '@/lib/CartContext';
import { Header } from '@/components/header';
import { TopInfo } from "@/components/top-info";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Add display swap
  preload: true,   // Ensure preloading
  fallback: ['system-ui', 'arial'], // Add fallback fonts
});

export const metadata: Metadata = {
  title: 'Digital Store - Online Marketplace',
  description: 'Digital Store - a farm-to-home marketplace for fresh agricultural products in Bangladesh.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
                    <TopInfo />

          <Header />
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}