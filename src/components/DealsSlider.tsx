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
      image: "https://m.media-amazon.com/images/G/31/CookwareDining/tdhruvko/Stores/Monsoon/Assets/SA-banner_apr._SX1242_QL85_FMpng_.png",
      category: "Electronics",
    },
    {
      id: 2,
      title: "Summer Electronics Sale",
      caption: "Best deals on AC, Coolers & more",
      store: "Flipkart",
      image: "https://m.media-amazon.com/images/G/31/CookwareDining/tdhruvko/Stores/Monsoon/Assets/SA-banner_apr._SX1242_QL85_FMpng_.png",
      category: "Electronics",
    },
    {
      id: 3,
      title: "Fashion Mega Sale",
      caption: "Up to 70% off on trending fashion",
      store: "Myntra",
      image: "https://m.media-amazon.com/images/G/31/CookwareDining/tdhruvko/Stores/Monsoon/Assets/SA-banner_apr._SX1242_QL85_FMpng_.png",
      category: "Fashion",
    },
    {
      id: 4,
      title: "Home & Kitchen Deals",
      caption: "Essential home appliances at best prices",
      store: "Amazon",
      image: "https://m.media-amazon.com/images/G/31/CookwareDining/tdhruvko/Stores/Monsoon/Assets/SA-banner_apr._SX1242_QL85_FMpng_.png",
      category: "Home",
    },
    {
      id: 5,
      title: "Mobile & Gadgets",
      caption: "Latest smartphones and accessories",
      store: "Amazon",
      image: "https://m.media-amazon.com/images/G/31/CookwareDining/tdhruvko/Stores/Monsoon/Assets/SA-banner_apr._SX1242_QL85_FMpng_.png",
      category: "Electronics",
    },
    {
      id: 6,
      title: "Beauty & Personal Care",
      caption: "Premium beauty products at low prices",
      store: "Nykaa",
      image: "https://m.media-amazon.com/images/G/31/CookwareDining/tdhruvko/Stores/Monsoon/Assets/SA-banner_apr._SX1242_QL85_FMpng_.png",
      category: "Beauty",
    }
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, deals.length - itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

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
      case 'Electronics': return 'bg-blue-100 text-blue-800';
      case 'Fashion': return 'bg-pink-100 text-pink-800';
      case 'Home': return 'bg-green-100 text-green-800';
      case 'Beauty': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  {/* Deal Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Deal Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {deal.title}
                    </h3>

                    {/* Caption */}
                    <p className="text-gray-600 mb-4">
                      {deal.caption}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(deal.category)}`}>
                        {deal.category}
                      </span>
                      <span className="text-gray-500 font-medium">
                        {deal.store}
                      </span>
                    </div>

                    {/* Get Deal Button */}
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg">
                      <ShoppingCart className="h-4 w-4" />
                      <span>Get Deal</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSlider;