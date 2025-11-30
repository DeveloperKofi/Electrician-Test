"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-white shadow-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-bold text-yellow-500 flex items-center gap-2"
          >
            ⚡ Kapcan Electrical Services
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="hover:text-yellow-500 transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-yellow-500 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-yellow-500 transition">
              Contact
            </Link>
          </div>

          {/* DESKTOP PHONE + BUTTON */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:0554145411" className="font-semibold text-gray-700">
              (055) 414-5411
            </a>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Get a Quote
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-b border-gray-200 px-6 py-4 space-y-4 animate-slideDown">
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className="block font-medium text-gray-700 hover:text-yellow-500"
          >
            Services
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block font-medium text-gray-700 hover:text-yellow-500"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block font-medium text-gray-700 hover:text-yellow-500"
          >
            Contact
          </Link>

          <div className="pt-2">
            <a
              href="tel:0554145411"
              className="block font-semibold text-gray-800 mb-3"
            >
              (055) 414-5411
            </a>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
