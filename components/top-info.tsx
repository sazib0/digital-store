"use client";

import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function TopInfo() {
  return (
    <div className="bg-gray-100 py-2 text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Dhaka, Bangladesh</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-1" />
            <span>Unable</span>
          </div>
        </div>

        <a className="hover:text-primary" href="https://gikra.com" target="_blank">Apply for Vendor/Seller Registration</a>
      </div>
    </div>
  );
}