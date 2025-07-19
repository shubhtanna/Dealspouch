import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const DealsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const deals = [
    {
      id: 1,
      title: "Monsoon Appliances",
      caption: "Up to 40% Off on Geysers and all",
      store: "Amazon",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Electronics",
    },
    {
      id: 2,
      title: "Summer Electronics Sale",
      caption: "Best deals on AC, Coolers & more",
      store: "Flipkart",
      image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Electronics",
    },
    {
      id: 3,
      title: "Fashion Mega Sale",
      caption: "Up to 70% off on trending fashion",
      store: "Myntra",
      image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Fashion",
    },
    {
      id: 4,
      title: "Home & Kitchen Deals",
      caption: "Essential home appliances at best prices",
      store: "Amazon",
      image: "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Home",
    }
  ];

  const maxIndex = deals.length - 1;

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Electronics': return 'bg-blue-500/20 text-blue-100 border-blue-300/30';
      case 'Fashion': return 'bg-pink-500/20 text-pink-100 border-pink-300/30';
      case 'Home': return 'bg-green-500/20 text-green-100 border-green-300/30';
      case 'Beauty': return 'bg-purple-500/20 text-purple-100 border-purple-300/30';
      default: return 'bg-gray-500/20 text-gray-100 border-gray-300/30';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🔥 Trending Deals
            </h2>
            <p className="text-xl text-gray-600">
              Hand-picked deals from top retailers with verified discounts
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isAutoPlaying 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full transition-colors shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-50 text-gray-700 p-3 rounded-full transition-colors shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="w-full flex-shrink-0 relative"
              >
                {/* Background Image */}
                <div 
                  className="h-96 sm:h-[500px] bg-cover bg-center bg-no-repeat relative"
                  style={{ backgroundImage: `url(${deal.image})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <div className="max-w-2xl">
                        {/* Category Badge */}
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium border backdrop-blur-sm mb-4 ${getCategoryColor(deal.category)}`}>
                          {deal.category}
                        </span>
                        
                        {/* Title */}
                        <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                          {deal.title}
                        </h3>

                        {/* Caption */}
                        <p className="text-xl sm:text-2xl text-gray-200 mb-6 leading-relaxed">
                          {deal.caption}
                        </p>

                        {/* Store Info */}
                        <div className="flex items-center space-x-4 mb-8">
                          <span className="text-white/80 font-medium">
                            Available at
                          </span>
                          <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold border border-white/30">
                            {deal.store}
                          </span>
                        </div>

                        {/* Get Deal Button */}
                        <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-xl hover:shadow-2xl transform hover:scale-105">
                          <ShoppingCart className="h-6 w-6" />
                          <span>Get Deal Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {deals.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSlider;