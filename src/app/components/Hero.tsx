"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center bg-gray-50">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Residential & Commercial Electrical Services
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-gray-600 mb-6 max-w-xl"
      >
        Powering homes and businesses safely, efficiently, and affordably.
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-3">
          Get a Free Quote
        </Button>
      </motion.div>
    </section>
  );
}

