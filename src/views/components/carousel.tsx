import { useState, useEffect } from "react";

interface SlideButton {
  text: string;
  link: string;
}

interface Slide {
  image: string;
  title: string;
  description: string;
  button?: SlideButton;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({
  slides,
  autoPlay = true,
  interval = 5000,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    if (!autoPlay || totalSlides === 0) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [totalSlides, autoPlay, interval]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  if (totalSlides === 0) return null;

  return (
    <div className="relative w-full h-[70vh] .min-h-\[500px\] {min-height: 500px;} overflow-hidden">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        >
          {/* IMAGE */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center bg-center"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50 flex items-center z-30">
            <div className="max-w-7xl mx-auto px-6 text-white w-full">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-6 max-w-2xl">
                {slide.description}
              </p>

              {slide.button && (
                <a
                  href={slide.button.link}
                  className="inline-block bg-green-700 px-6 py-3 rounded-lg hover:bg-green-800 transition"
                >
                  {slide.button.text}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* BOUTON PREV */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-40 bg-white/30 hover:bg-white/50 text-white text-2xl p-4 rounded-full backdrop-blur-md transition"
      >
        ❮
      </button>

      {/* BOUTON NEXT */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-40 bg-white/30 hover:bg-white/50 text-white text-2xl p-4 rounded-full backdrop-blur-md transition"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}