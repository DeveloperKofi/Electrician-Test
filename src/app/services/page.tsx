"use client"

import { Footer } from "../components/Footer"
import Navbar from "../components/Navbar"

function Services() {
  const services = [
    "Electric Installation",
    "Electric Fence",
    "AC Servicing",
    "Heating System",
    "AC Installation",
    "Trouble Shooting",
    "Separation",
    "House Wiring",
    "Remote Gate Automatic",
    "CCTV Installation",
    "Industrial Installation",
    "Saw Mill Installation",
    "Corn Mill Installation",
    "and many more"];

  return (
    
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-20 px-6">
      <h1>
        Our Services but not limited to:
      </h1>

      {/* Services List */}
      <div className="bg-white shadow-lg rounded-2xl p-10">

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition text-gray-700 font-medium">⚡{service}</li>
        ))}
      </ul>
      </div>
      <div className="mt-14">
            <a
              href="tel:0554145411"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-3 rounded-xl shadow-md transition"
            >
              Call Now for a Free Estimate
            </a>
            <p className="text-gray-500 mt-2">We are available 24/7 for emergencies.</p>
          </div>
      
      <Footer />
    </main>
    </div>
  )
}

export default Services