"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

export default function VideoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slides, setSlides] = useState([0, 1, 2]); // Change to number of videos you have

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Carousel container */}
      <div className="overflow-hidden rounded-2xl shadow-lg" ref={emblaRef}>
        <div className="flex">
          {slides.map((i) => (
            <div className="flex-shrink-0 w-full" key={i}>
              
              <video
                src={`/videos/video${i + 1}.mp4`}
                controls
                className="w-full max-h-[500px] object-contain bg-black rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-between mt-4">
        <Button onClick={scrollPrev} variant="outline">
          ⬅ Prev
        </Button>
        <Button onClick={scrollNext} variant="outline">
          Next ➡
        </Button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              selectedIndex === i
                ? "bg-yellow-500 w-6"
                : "bg-gray-300"
            )}
          />
        ))}
      </div>
    </div>
  );
}
