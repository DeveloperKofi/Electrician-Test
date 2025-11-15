"use client";
import { Button } from "@/components/ui/button";
//import React from 'react'

function Contact() {
  return (
    <div>
        {/* Contact CTA Section */}
      <section className="bg-yellow-500 w-full py-16 text-center text-black">
        <h2 className="text-3xl font-bold mb-4">Need Electrical Help?</h2>
        <p className="text-lg mb-6">
          Call us today for a free estimate and fast, friendly service.
        </p>
        <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-lg">
          Contact Us
        </Button>
      </section>

    </div>
  )
}

export default Contact