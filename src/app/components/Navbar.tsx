"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
        ⚡ Kapcan Electrical Services
        {/* Kapcan Electrical Services */}
      </Link>

      <div className="hidden md:flex space-x-8">
        <Link href="/services" className="hover:text-yellow-500 transition">Services</Link>
        <Link href="/about" className="hover:text-yellow-500 transition">About</Link>
        <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        <a href="tel:0554145411" className="font-semibold text-gray-700 hidden md:block">
          (055) 414-5411
        </a>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
          Get a Quote
        </Button>
      </div>
    </nav>
  );
}
