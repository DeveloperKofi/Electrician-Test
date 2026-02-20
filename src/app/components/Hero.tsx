"use client";

export default function Hero() {
  return (
    <section className="relative w-full flex justify-center">

  {/* Image Wrapper (controls size) */}
  <div className="relative w-[90%] max-w-[1400px]">
    
    {/* Static Image */}
    <img
      src="/luvv.png"
      alt="Hero Background"
      className="w-full h-auto"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-start text-white 
                px-6 sm:px-10 md:px-16 text-left">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 max-w-xl md:max-w-2xl">
        Powering Homes & Businesses
      </h1>
      <p className="text-lg sm:text-xl mb-6 max-w-md md:max-w-xl">
        Reliable Residential & Commercial Electrical Services
      </p>
    </div>

  </div>

</section>




  );
}
