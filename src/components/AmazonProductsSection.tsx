import React, { useState, useEffect } from 'react';
import { Search, Filter, Loader } from 'lucide-react';
import { amazonApi } from '../services/amazonApi';
import { AmazonProduct } from '../types/amazon';
import { AmazonProductCard } from './AmazonProductCard';

export const AmazonProductsSection: React.FC = () => {
  const [products, setProducts] = useState<AmazonProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Popular categories for dropdown
  const categories = [
    'All',
    'Electronics',
    'Computers',
    'Home & Kitchen',
    'Sports & Outdoors',
    'Tools & Home Improvement',
    'Toys & Games',
    'Books',
    'Clothing & Accessories',
    'Beauty & Personal Care'
  ];

  // Load initial products
  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      // Load some featured/trending products
      const featuredProducts = await amazonApi.searchProducts('best seller electronics', 12);
      setProducts(featuredProducts);
    } catch (err) {
      setError('Failed to load featured products. Please check your Amazon API configuration.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const searchResults = await amazonApi.searchProducts(
        searchTerm,
        20,
        selectedCategory === 'All' ? 'All' : selectedCategory
      );
      setProducts(searchResults);
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Amazon Deals & Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover amazing deals and products from Amazon with our affiliate partnerships
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white min-w-[200px]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-w-[120px]"
            >
              {loading ? (
                <Loader className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader className="w-8 h-8 animate-spin text-blue-500" />
            <span className="ml-2 text-gray-600">Loading products...</span>
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <AmazonProductCard
                key={product.ASIN}
                product={product}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && products.length === 0 && !error && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No products found for "{searchTerm}". Try different keywords or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
