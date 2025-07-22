import React, { useState } from 'react';
import { Search, Menu, X, Tag, Zap, Gift, TrendingUp } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Electronics', icon: Zap },
    { name: 'Fashion', icon: Tag },
    { name: 'Home & Garden', icon: Gift },
    { name: 'Trending', icon: TrendingUp }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg">
                <Gift className="h-6 w-6" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                DealsPouch
              </span>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for deals, stores, or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#deals" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Deals
            </a>
            <a href="#blog" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Blog
            </a>
            <a href="#categories" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Categories
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search deals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <nav className="space-y-2">
              <a href="#deals" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">
                Deals
              </a>
              <a href="#blog" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">
                Blog
              </a>
              <a href="#categories" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">
                Categories
              </a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-purple-600 font-medium">
                About
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Categories Bar */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 py-3 overflow-x-auto">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.name}
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap"
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;