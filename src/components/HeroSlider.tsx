import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "THE BEST",
      subtitle: "AIR CONDITIONERS",
      caption: "YOU BUY TODAY",
      description: "Premium cooling solutions with energy efficiency",
      image: "https://images.pexels.com/photos/6186810/pexels-photo-6186810.jpeg?auto=compress&cs=tinysrgb&w=1200",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "PREMIUM",
      subtitle: "SMARTPHONES",
      caption: "AT BEST PRICES",
      description: "Latest technology with unbeatable deals",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "AMAZING",
      subtitle: "HOME APPLIANCES",
      caption: "FOR MODERN LIVING",
      description: "Transform your home with smart appliances",
      image: "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1200",
      gradient: "from-green-500 to-green-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div className={`bg-gradient-to-r ${slide.gradient} h-full relative`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-white/5"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center h-full py-12">
                {/* Left Content - Text Overlay */}
                <div className="text-white space-y-6 z-10">
                  <div className="space-y-2">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                      {slide.subtitle}
                    </h2>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white/90">
                      {slide.caption}
                    </h3>
                  </div>
                  
                  <p className="text-xl text-white/80 leading-relaxed max-w-md">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 text-lg">
                      <ShoppingCart className="h-5 w-5" />
                      <span>Shop Now</span>
                    </button>
                    <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-lg">
                      View Deals
                    </button>
                  </div>
                </div>

                {/* Right Content - Product Image */}
                <div className="relative flex justify-center items-center">
                  <div className="relative z-10">
                    <img
                      src={slide.image}
                      alt={slide.subtitle}
                      className="w-full max-w-lg mx-auto object-contain h-80 transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;