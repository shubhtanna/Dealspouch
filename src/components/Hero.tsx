import React from 'react';
import { TrendingUp, Clock, Percent } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <TrendingUp className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">Over 10,000+ Active Deals</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Amazing
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Deals & Offers
              </span>
            </h1>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Save money on your favorite products with our curated collection of the best deals, 
              coupons, and exclusive offers from top brands worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Browse Deals
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                How It Works
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">10K+</div>
                <div className="text-sm text-purple-200">Active Deals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-purple-200">Partner Stores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">90%</div>
                <div className="text-sm text-purple-200">Avg. Savings</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-yellow-400 text-purple-900 p-2 rounded-lg">
                  <Percent className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Exclusive Discounts</h3>
              </div>
              <p className="text-purple-100">
                Get access to exclusive deals and discounts that you won't find anywhere else.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-pink-400 text-purple-900 p-2 rounded-lg">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Real-time Updates</h3>
              </div>
              <p className="text-purple-100">
                Never miss a deal with our real-time notifications and daily updates.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-400 text-purple-900 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Trending Deals</h3>
              </div>
              <p className="text-purple-100">
                Discover what's trending and popular among our community of deal hunters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;