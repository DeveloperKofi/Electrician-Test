"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
//import fence  from "../../public/elec_gh.jpg";
//import sudden from "../../public/247.png";
import biz from "../../public/biz_elec.png";
import crib from "../../public/cribw.png";
import fence from "../../public/fencer.png"
// import elec from "../../public/elec-bg.png";
//import Services from "./components/Services";
//import Hero from "./components/Hero";


// Add pics to public folder (electrician-bg, residential, commerical, emergency)
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <Navbar />
     <main className="flex flex-col items-center bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex flex-col justify-center items-center text-center bg-[url('/elec-bg.png')] bg-cover bg-center">
        <div className="absolute inset-`0 bg-black/60" />
        <div className="relative z-10 max-w-5xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Powering Homes & Businesses
          </h1>
          <p className="text-xl text-black-200 mb-6">
            Reliable Residential & Commercial Electrical 
          </p>
         
          {/* Animated showing */}
          {/* <Hero /> */}
        </div>
      </section>

      {/* About Section */}
      {/* <About /> */}
      <section className="max-w-6xl w-full px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We’re a locally owned electrical company specializing in high-quality
          residential and commercial electrical solutions. Our licensed experts
          are dedicated to keeping your property powered safely and efficiently.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white w-full py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Home Wiring & Upgrades",
                desc: "From lighting upgrades to full home rewiring, we keep your home safe and efficient. Additionally we install CCTV systems for enhanced security.",
                img: crib,
              },
              {
                title: "Commercial Electrical",
                desc: "Professional solutions for offices, retail spaces, and new business installations.",
                img: biz,
              },
              {
                title: "Fence, Outdoor Lighting, and Repairs",
                desc: "Full perimeter fence installations, outdoor lighting solutions, and prompt electrical repairs to keep your property secure and well-lit.",
                img: fence,
              },
            ].map((service) => (
              <div
              key={service.title}
              className="bg-gray-100 rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                  />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-base">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
      {/* Contact CTA Section */}
        <Contact />
      {/* Footer */}
        <Footer />
           
    </div>
  );
}


