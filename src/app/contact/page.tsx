"use client"

import Navbar from "../components/Navbar"
import { Phone, Mail } from "lucide-react"
import { Footer } from "../components/Footer"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-4xl font-semibold mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">
          Have questions or need a free estimate? Reach out to Kapcan Electrical Services — 
          our team is ready to provide fast, reliable assistance.
        </p>

        <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-10 w-full max-w-lg space-y-6">
          
          {/* PHONE 1 */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 text-black p-3 rounded-full shadow-md">
              <Phone />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Primary Line</p>
              <a 
                href="tel:0554145411" 
                className="text-yellow-600 font-medium hover:underline"
              >
                055 414 5411
              </a>
            </div>
          </div>

          {/* PHONE 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 text-black p-3 rounded-full shadow-md">
              <Phone />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Alternate Line</p>
              <a 
                href="tel:+233557906780" 
                className="text-yellow-600 font-medium hover:underline"
              >
                +233 55 790 6780
              </a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 text-black p-3 rounded-full shadow-md">
              <Mail />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email Us</p>
              <a 
                href="mailto:nemifrancis774@gmail.com" 
                className="text-yellow-600 font-medium hover:underline"
              >
                nemifrancis774@gmail.com
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
