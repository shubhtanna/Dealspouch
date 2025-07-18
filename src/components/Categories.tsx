import React from 'react';
import { Smartphone, Shirt, Home, Gamepad2, Heart, Car, Book, Coffee } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: 'Electronics',
      icon: Smartphone,
      count: 1250,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      name: 'Fashion',
      icon: Shirt,
      count: 890,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600'
    },
    {
      name: 'Home & Garden',
      icon: Home,
      count: 670,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      name: 'Gaming',
      icon: Gamepad2,
      count: 450,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      name: 'Health & Beauty',
      icon: Heart,
      count: 560,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600'
    },
    {
      name: 'Automotive',
      icon: Car,
      count: 320,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    },
    {
      name: 'Books & Media',
      icon: Book,
      count: 280,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600'
    },
    {
      name: 'Food & Drink',
      icon: Coffee,
      count: 190,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600'
    }
  ];

  return (
    <section id="categories" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the best deals across all your favorite categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="group cursor-pointer"
              >
                <div className={`${category.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                  <div className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold ${category.textColor} mb-2`}>
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.count.toLocaleString()} deals
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;