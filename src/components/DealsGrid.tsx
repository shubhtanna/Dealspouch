import React from 'react';
import { ExternalLink, Clock, Users, Tag, Heart, Share2 } from 'lucide-react';

const DealsGrid = () => {
  const deals = [
    {
      id: 1,
      title: "Apple iPhone 15 Pro Max",
      description: "Latest iPhone with advanced Pro camera system",
      originalPrice: 1199,
      discountedPrice: 999,
      discount: 17,
      store: "Apple Store",
      category: "Electronics",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
      expiresIn: "2 days",
      likes: 245,
      verified: true
    },
    {
      id: 2,
      title: "Nike Air Max 270",
      description: "Premium running shoes with Max Air technology",
      originalPrice: 150,
      discountedPrice: 89,
      discount: 41,
      store: "Nike",
      category: "Fashion",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      expiresIn: "5 days",
      likes: 189,
      verified: true
    },
    {
      id: 3,
      title: "Samsung 55\" 4K Smart TV",
      description: "Crystal UHD smart TV with HDR support",
      originalPrice: 799,
      discountedPrice: 549,
      discount: 31,
      store: "Samsung",
      category: "Electronics",
      image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400",
      expiresIn: "1 day",
      likes: 312,
      verified: true
    },
    {
      id: 4,
      title: "Dyson V15 Detect",
      description: "Cordless vacuum with laser dust detection",
      originalPrice: 599,
      discountedPrice: 449,
      discount: 25,
      store: "Dyson",
      category: "Home & Garden",
      image: "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=400",
      expiresIn: "3 days",
      likes: 156,
      verified: true
    },
    {
      id: 5,
      title: "MacBook Pro 14-inch",
      description: "M3 chip with 8-core CPU and 10-core GPU",
      originalPrice: 1999,
      discountedPrice: 1699,
      discount: 15,
      store: "Apple Store",
      category: "Electronics",
      image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400",
      expiresIn: "4 days",
      likes: 423,
      verified: true
    },
    {
      id: 6,
      title: "Adidas Ultraboost 22",
      description: "Premium running shoes with boost technology",
      originalPrice: 180,
      discountedPrice: 126,
      discount: 30,
      store: "Adidas",
      category: "Fashion",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      expiresIn: "6 days",
      likes: 267,
      verified: true
    }
  ];

  return (
    <section id="deals" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Today's Best Deals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked deals from trusted retailers with verified discounts and real savings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              {/* Deal Image */}
              <div className="relative overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{deal.discount}%
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Share2 className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Deal Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {deal.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{deal.expiresIn}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {deal.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {deal.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-purple-600">
                      ${deal.discountedPrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${deal.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{deal.likes}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    by {deal.store}
                  </span>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
                    <span>Get Deal</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
            View All Deals
          </button>
        </div>
      </div>
    </section>
  );
};

export default DealsGrid;