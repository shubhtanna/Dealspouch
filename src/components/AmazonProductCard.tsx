import React from 'react';
import { Star, ShoppingCart, ExternalLink } from 'lucide-react';
import { AmazonProduct } from '../types/amazon';

interface AmazonProductCardProps {
  product: AmazonProduct;
  className?: string;
}

export const AmazonProductCard: React.FC<AmazonProductCardProps> = ({ 
  product, 
  className = '' 
}) => {
  const price = product.Offers?.Listings?.[0]?.Price;
  const originalPrice = product.Offers?.Listings?.[0]?.SavingBasis;
  const rating = product.CustomerReviews?.StarRating?.Value || 0;
  const reviewCount = product.CustomerReviews?.Count || 0;
  const availability = product.Offers?.Listings?.[0]?.Availability;

  const calculateDiscount = () => {
    if (originalPrice && price) {
      const discount = ((originalPrice.Amount - price.Amount) / originalPrice.Amount) * 100;
      return Math.round(discount);
    }
    return 0;
  };

  const discount = calculateDiscount();

  console.log("hello.....",discount);

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.Images?.Primary?.Large?.URL || product.Images?.Primary?.Medium?.URL}
          alt={product.ItemInfo?.Title?.DisplayValue}
          className="w-full h-64 object-contain bg-gray-50 p-4"
          loading="lazy"
        />
        {discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            -{discount}%
          </div>
        )}
        {availability?.Type === 'Now' && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            In Stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
          {product.ItemInfo?.Title?.DisplayValue}
        </h3>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">
              ({reviewCount.toLocaleString()})
            </span>
          </div>
        )}

        {/* Features */}
        {product.ItemInfo?.Features && (
          <div className="mb-4">
            <ul className="text-sm text-gray-600 space-y-1">
              {product.ItemInfo.Features.DisplayValues.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 mr-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pricing */}
        <div className="mb-4">
          {price && (
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-green-600">
                {price.DisplayAmount}
              </span>
              {originalPrice && discount > 0 && (
                <span className="text-lg text-gray-500 line-through">
                  {originalPrice.DisplayAmount}
                </span>
              )}
            </div>
          )}
          {availability && (
            <p className="text-sm text-gray-600 mt-1">{availability.Message}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <a
            href={product.DetailPageURL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex-1 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Buy Now</span>
          </a>
          <a
            href={product.DetailPageURL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};