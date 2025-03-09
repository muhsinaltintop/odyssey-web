"use client";
import React, { useState, useEffect } from "react";
import Slide from "./atoms/Slide";
import SliderInfo from "../../public/SliderInfo.json";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === SliderInfo.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? SliderInfo.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {SliderInfo.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-700 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Slide image={slide.image} alt={slide.alt} />
        </div>
      ))}
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <MdArrowBack size={30} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <MdArrowForward size={30} />
      </button>
    </div>
  );
};

export default Slider;
