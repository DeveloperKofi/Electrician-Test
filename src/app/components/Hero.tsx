"use client";

export default function Hero() {
  return (
    <section className="relative w-full">

      {/* Static Image */}
      <img
        src="/luvv.png"
        alt="Hero Background"
        className="w-full h-auto"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Powering Homes & Businesses
        </h1>
        <p className="text-xl mb-6">
          Reliable Residential & Commercial Electrical Services
        </p>
      </div>

    </section>
  );
}
