import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowLeft, Share2, Heart, Bookmark, Clock, Tag, ExternalLink, Facebook, Twitter, Linkedin, Copy, Check, MessageCircle, Eye, ThumbsUp, Star, ShoppingCart, TrendingUp, Award, Zap, Shield, DollarSign, X } from 'lucide-react';

interface BlogPostProps {
  postId?: string;
  onBack?: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  published: string;
  updated: string;
  author: {
    displayName: string;
    url?: string;
    image?: {
      url: string;
    };
  };
  url: string;
  labels?: string[];
  replies?: {
    totalItems: number;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ postId = "demo", onBack }) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareDropdownOpen, setShareDropdownOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [likeCount, setLikeCount] = useState(156);
  const [viewCount] = useState(2847);

  // Enhanced demo blog post for affiliate marketing
  const demoPost: BlogPost = {
    id: "demo",
    title: "iPhone 15 Pro Max Complete Review & Best Deals: Where to Buy at Lowest Price (Updated 2024)",
    content: `
      <div class="blog-content">
        <!-- Affiliate Disclosure -->
        <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p class="text-blue-800 text-sm">
            <strong>Affiliate Disclosure:</strong> This post contains affiliate links. When you purchase through our links, we may earn a commission at no extra cost to you. This helps us keep bringing you the best deals and reviews.
          </p>
        </div>

        <!-- Product Hero Section -->
        <div class="product-hero bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-8 text-white">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div class="flex items-center space-x-2 mb-4">
                <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Award class="h-4 w-4 mr-1" />
                  Editor's Choice 2024
                </span>
                <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  🔥 Best Deal
                </span>
              </div>
              <h2 class="text-3xl font-bold mb-4">iPhone 15 Pro Max</h2>
              <div class="flex items-center space-x-4 mb-4">
                <div class="flex items-center">
                  <div class="flex text-yellow-400">
                    <Star class="h-5 w-5 fill-current" />
                    <Star class="h-5 w-5 fill-current" />
                    <Star class="h-5 w-5 fill-current" />
                    <Star class="h-5 w-5 fill-current" />
                    <Star class="h-5 w-5 fill-current" />
                  </div>
                  <span class="ml-2 text-white font-semibold">4.8/5</span>
                  <span class="ml-2 text-gray-300">(2,847 verified reviews)</span>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="text-3xl font-bold text-green-400">$999</div>
                <div class="text-xl text-gray-400 line-through">$1,199</div>
                <div class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save $200 (17% OFF)
                </div>
              </div>
              <div class="mt-4 flex space-x-3">
                <button class="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center space-x-2">
                  <ShoppingCart class="h-5 w-5" />
                  <span>Get Deal on Amazon</span>
                </button>
                <button class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Compare Prices
                </button>
              </div>
            </div>
            <div class="text-center">
              <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500" alt="iPhone 15 Pro Max" class="w-full max-w-sm mx-auto rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>

        <!-- Quick Summary Box -->
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mb-8">
          <h3 class="text-xl font-bold text-purple-900 mb-4">📋 Quick Summary</h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold text-purple-800 mb-2">✅ Why We Recommend It:</h4>
              <ul class="text-purple-700 text-sm space-y-1">
                <li>• Best-in-class A17 Pro performance</li>
                <li>• Outstanding camera system</li>
                <li>• Premium titanium build quality</li>
                <li>• Currently at lowest price ever</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold text-purple-800 mb-2">💰 Best Deals Right Now:</h4>
              <ul class="text-purple-700 text-sm space-y-1">
                <li>• Amazon: $999 (17% off)</li>
                <li>• Apple Store: $1,049 (with trade-in)</li>
                <li>• Best Buy: $1,099 (activation required)</li>
                <li>• Target: $1,149 (with RedCard)</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Deal Alert -->
        <div class="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
          <div class="flex items-center space-x-3 mb-3">
            <div class="bg-red-500 text-white p-2 rounded-full animate-pulse">
              <TrendingUp class="h-5 w-5" />
            </div>
            <h3 class="text-lg font-semibold text-red-900">🚨 Price Drop Alert!</h3>
          </div>
          <p class="text-red-800 mb-3">The iPhone 15 Pro Max just hit its lowest price ever on Amazon! This is a limited-time deal that typically lasts only 24-48 hours. Based on our price tracking, this model usually sells for $1,199.</p>
          <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button class="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center space-x-2">
              <ShoppingCart class="h-5 w-5" />
              <span>Claim This Deal Now</span>
            </button>
            <div class="flex items-center space-x-2 text-red-700">
              <Clock class="h-4 w-4" />
              <span class="font-medium">Deal expires in: 1d 14h 23m</span>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Why the iPhone 15 Pro Max is Worth Every Penny</h2>
        <p class="text-lg text-gray-700 leading-relaxed mb-6">After 3 weeks of intensive testing and comparing prices across 50+ retailers, I can confidently say the iPhone 15 Pro Max offers exceptional value, especially at the current discounted price. Here's my honest, unbiased review based on real-world usage.</p>

        <!-- Pros and Cons -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-green-900 mb-4 flex items-center">
              <div class="bg-green-500 text-white p-1 rounded-full mr-2">
                <Check class="h-4 w-4" />
              </div>
              What I Love About It
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <Check class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span class="text-green-800"><strong>A17 Pro Performance:</strong> Blazing fast, handles everything I throw at it</span>
              </li>
              <li class="flex items-start space-x-3">
                <Check class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span class="text-green-800"><strong>Titanium Build:</strong> Feels premium, lighter than steel, very durable</span>
              </li>
              <li class="flex items-start space-x-3">
                <Check class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span class="text-green-800"><strong>Camera Quality:</strong> Best smartphone camera I've ever used</span>
              </li>
              <li class="flex items-start space-x-3">
                <Check class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span class="text-green-800"><strong>Battery Life:</strong> Easily lasts 1.5 days with heavy usage</span>
              </li>
              <li class="flex items-start space-x-3">
                <Check class="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span class="text-green-800"><strong>USB-C:</strong> Finally! No more Lightning cables</span>
              </li>
            </ul>
          </div>
          <div class="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-red-900 mb-4 flex items-center">
              <div class="bg-red-500 text-white p-1 rounded-full mr-2">
                <X class="h-4 w-4" />
              </div>
              Areas That Could Be Better
            </h3>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3">
                <X class="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span class="text-red-800"><strong>Price:</strong> Still expensive even with current discount</span>
              </li>
              <li class="flex items-start space-x-3">
                <X class="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span class="text-red-800"><strong>Design:</strong> Very similar to iPhone 14 Pro Max</span>
              </li>
              <li class="flex items-start space-x-3">
                <X class="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span class="text-red-800"><strong>Charging Speed:</strong> Could be faster compared to Android flagships</span>
              </li>
              <li class="flex items-start space-x-3">
                <X class="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span class="text-red-800"><strong>Storage:</strong> Base model only has 128GB</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Real-World Performance Testing</h2>
        <p class="text-gray-700 leading-relaxed mb-6">I put the iPhone 15 Pro Max through extensive real-world tests. Here's what I found after using it as my daily driver for 3 weeks:</p>

        <!-- Performance Stats -->
        <div class="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">📊 My Test Results</h3>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-700">Gaming Performance</span>
                  <span class="font-bold text-green-600">Excellent</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 95%"></div>
                </div>
                <p class="text-sm text-gray-600 mt-1">Genshin Impact at max settings: 60fps stable</p>
              </div>
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-700">Camera Quality</span>
                  <span class="font-bold text-blue-600">Outstanding</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 98%"></div>
                </div>
                <p class="text-sm text-gray-600 mt-1">Best smartphone camera I've tested</p>
              </div>
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-700">Battery Life</span>
                  <span class="font-bold text-purple-600">Very Good</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 88%"></div>
                </div>
                <p class="text-sm text-gray-600 mt-1">8-10 hours screen time daily</p>
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-700">Build Quality</span>
                  <span class="font-bold text-green-600">Premium</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 96%"></div>
                </div>
                <p class="text-sm text-gray-600 mt-1">Titanium feels amazing, very durable</p>
              </div>
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-700">Display Quality</span>
                  <span class="font-bold text-blue-600">Excellent</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 94%"></div>
                </div>
                <p class="text-sm text-gray-600 mt-1">Bright, colorful, great for outdoor use</p>
              </div>
              <div>
                <div class="flex justify-between items-center mb-2">
                  <span class="font-medium text-gray-700">Value for Money</span>
                  <span class="font-bold text-orange-600">Good (at sale price)</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-orange-600 h-2 rounded-full" style="width: 78%"></div>
                </div>
                <p class="text-sm text-gray-600 mt-1">Worth it at $999, overpriced at $1,199</p>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Camera Deep Dive: Sample Photos</h2>
        <p class="text-gray-700 leading-relaxed mb-6">The camera is where this phone truly shines. I've taken hundreds of photos in various conditions. Here are some samples that showcase its capabilities:</p>

        <!-- Camera Samples Grid -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="space-y-4">
            <img src="https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Daylight photo sample" class="w-full rounded-lg shadow-md" />
            <div class="bg-white border border-gray-200 rounded-lg p-4">
              <h4 class="font-semibold text-gray-900 mb-2">📸 Daylight Photography</h4>
              <p class="text-sm text-gray-600">Shot with main 48MP camera. Notice the incredible detail in the leaves and perfect color reproduction. This is straight out of camera with no editing.</p>
            </div>
          </div>
          <div class="space-y-4">
            <img src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=500" alt="Night mode sample" class="w-full rounded-lg shadow-md" />
            <div class="bg-white border border-gray-200 rounded-lg p-4">
              <h4 class="font-semibold text-gray-900 mb-2">🌙 Night Mode</h4>
              <p class="text-sm text-gray-600">Night mode automatically activated. The improvement over iPhone 14 Pro is noticeable - less noise, better detail retention in shadows.</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">💰 Price Comparison: Where to Buy Cheapest</h2>
        <p class="text-gray-700 leading-relaxed mb-6">I've tracked prices across all major retailers for the past month. Here's where you can get the best deals right now (prices updated daily):</p>

        <!-- Price Comparison Table -->
        <div class="bg-white border border-gray-200 rounded-xl overflow-hidden mb-8 shadow-sm">
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">🏆 Best Deals Available Now</h3>
            <p class="text-sm text-gray-600">Prices verified within the last 24 hours</p>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div class="flex items-center space-x-4">
                <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  🥇 #1 BEST DEAL
                </div>
                <div>
                  <div class="font-bold text-gray-900 text-lg">Amazon</div>
                  <div class="text-gray-600 text-sm">✓ Free shipping • ✓ Easy returns • ✓ Prime eligible</div>
                  <div class="text-green-600 text-sm font-medium">💰 Save $200 vs Apple Store</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold text-green-600">$999</div>
                <div class="text-gray-500 line-through text-sm">$1,199</div>
                <button class="bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-green-600 transition-colors mt-2">
                  Get Deal Now →
                </button>
              </div>
            </div>
            <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div class="flex items-center space-x-4">
                <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                  🥈 #2 GOOD DEAL
                </div>
                <div>
                  <div class="font-bold text-gray-900 text-lg">Apple Store</div>
                  <div class="text-gray-600 text-sm">✓ Trade-in available • ✓ AppleCare+ • ✓ Student discount</div>
                  <div class="text-blue-600 text-sm font-medium">📱 Up to $800 trade-in value</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold text-blue-600">$1,049</div>
                <div class="text-gray-500 text-sm">with trade-in</div>
                <button class="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors mt-2">
                  Check Trade-in →
                </button>
              </div>
            </div>
            <div class="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div class="flex items-center space-x-4">
                <div class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
                  🥉 #3 OKAY DEAL
                </div>
                <div>
                  <div class="font-bold text-gray-900 text-lg">Best Buy</div>
                  <div class="text-gray-600 text-sm">✓ Geek Squad support • ✓ Price match • ⚠️ Activation required</div>
                  <div class="text-yellow-600 text-sm font-medium">📞 Must activate with carrier</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold text-yellow-600">$1,099</div>
                <div class="text-gray-500 text-sm">with activation</div>
                <button class="bg-yellow-500 text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-yellow-600 transition-colors mt-2">
                  View Deal →
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Money-Saving Tips -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 mb-8">
          <h3 class="text-lg font-bold text-green-900 mb-4 flex items-center">
            <DollarSign class="h-5 w-5 mr-2" />
            💡 Pro Money-Saving Tips
          </h3>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 class="font-semibold text-green-800">Use Cashback Apps</h4>
                  <p class="text-green-700 text-sm">Rakuten offers 1-3% cashback on electronics. That's an extra $10-30 back!</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 class="font-semibold text-green-800">Credit Card Rewards</h4>
                  <p class="text-green-700 text-sm">Use a card with electronics bonus category for extra points/cashback.</p>
                </div>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-start space-x-3">
                <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 class="font-semibold text-green-800">Trade-In Your Old Phone</h4>
                  <p class="text-green-700 text-sm">Apple offers up to $800 trade-in. Even a 3-year-old iPhone has value!</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 class="font-semibold text-green-800">Student/Military Discounts</h4>
                  <p class="text-green-700 text-sm">Apple offers 10% education discount. Military gets special pricing too.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">🤔 Should You Buy It? My Honest Recommendation</h2>
        
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8 mb-8">
          <div class="flex items-center space-x-4 mb-6">
            <div class="bg-purple-500 text-white p-3 rounded-full">
              <Award class="h-6 w-6" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-purple-900">Final Verdict: Highly Recommended</h3>
              <div class="flex items-center space-x-2">
                <div class="flex text-yellow-400">
                  <Star class="h-5 w-5 fill-current" />
                  <Star class="h-5 w-5 fill-current" />
                  <Star class="h-5 w-5 fill-current" />
                  <Star class="h-5 w-5 fill-current" />
                  <Star class="h-5 w-5 fill-current" />
                </div>
                <span class="font-bold text-purple-900">4.8/5 Stars</span>
              </div>
            </div>
          </div>
          
          <div class="space-y-4 text-purple-800">
            <p class="text-lg leading-relaxed">
              <strong>Bottom Line:</strong> At $999, the iPhone 15 Pro Max offers exceptional value. Yes, it's still expensive, but you're getting the most advanced smartphone available with a $200 discount.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-bold text-purple-900 mb-2">✅ Buy it if you:</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Want the absolute best iPhone</li>
                  <li>• Take lots of photos/videos</li>
                  <li>• Keep phones for 3+ years</li>
                  <li>• Can afford the premium price</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold text-purple-900 mb-2">❌ Skip it if you:</h4>
                <ul class="space-y-1 text-sm">
                  <li>• Happy with your current phone</li>
                  <li>• Budget is tight</li>
                  <li>• Don't need pro camera features</li>
                  <li>• Prefer Android ecosystem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Final CTA -->
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center mb-8">
          <h3 class="text-2xl font-bold mb-4">Ready to Get the iPhone 15 Pro Max?</h3>
          <p class="text-blue-100 mb-6 text-lg">Don't wait - this $200 discount won't last forever. Based on our price tracking, deals like this typically last only 24-48 hours.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 text-lg">
              <ShoppingCart class="h-5 w-5" />
              <span>Get Best Deal - $999 on Amazon</span>
            </button>
            <button class="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors text-lg">
              Compare All Prices
            </button>
          </div>
          <p class="text-blue-200 text-sm mt-4">
            ⚡ Free shipping • 🔄 Easy returns • 💳 Secure checkout
          </p>
        </div>

        <!-- FAQ Section -->
        <div class="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 class="text-xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h3>
          <div class="space-y-4">
            <div class="bg-white rounded-lg p-4">
              <h4 class="font-semibold text-gray-900 mb-2">Q: Is this the lowest price ever for iPhone 15 Pro Max?</h4>
              <p class="text-gray-700 text-sm">A: Yes! Based on our price tracking since launch, $999 is the lowest price we've seen. The previous best was $1,049.</p>
            </div>
            <div class="bg-white rounded-lg p-4">
              <h4 class="font-semibold text-gray-900 mb-2">Q: How long will this deal last?</h4>
              <p class="text-gray-700 text-sm">A: Amazon typically runs these deals for 24-48 hours. We recommend acting quickly if you're interested.</p>
            </div>
            <div class="bg-white rounded-lg p-4">
              <h4 class="font-semibold text-gray-900 mb-2">Q: Is it worth upgrading from iPhone 14 Pro Max?</h4>
              <p class="text-gray-700 text-sm">A: Only if you're a heavy user who values the A17 Pro performance and improved cameras. For most users, iPhone 14 Pro Max is still excellent.</p>
            </div>
          </div>
        </div>
      </div>
    `,
    published: "2024-01-15T10:00:00Z",
    updated: "2024-01-15T14:30:00Z",
    author: {
      displayName: "Alex Thompson",
      url: "https://blogger.com/profile/alex",
      image: {
        url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
      }
    },
    url: "https://yourblog.blogspot.com/2024/01/iphone-15-pro-max-review.html",
    labels: ["iPhone", "Apple", "Smartphone", "Review", "Deals", "Technology", "Affiliate"],
    replies: {
      totalItems: 47
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPost(demoPost);
      setLoading(false);
    }, 1000);
  }, [postId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(' ').length;
    return Math.ceil(words / wordsPerMinute);
  };

  const handleShare = async (platform: string) => {
    if (!post) return;
    
    const url = window.location.href;
    const title = post.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
          console.error('Failed to copy URL');
        }
        break;
    }
    setShareDropdownOpen(false);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
          <button
            onClick={onBack}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            ← Back to blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Blog</span>
          </button>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.labels?.map((label, index) => (
              <span key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                {label}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                {post.author.image && (
                  <img
                    src={post.author.image.url}
                    alt={post.author.displayName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{post.author.displayName}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.published)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{calculateReadTime(post.content)} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-gray-500">
                <Eye className="h-4 w-4" />
                <span className="text-sm font-medium">{viewCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm font-medium">{post.replies?.totalItems || 0}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all ${
                  isLiked 
                    ? 'bg-red-100 text-red-600 border border-red-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                <span className="font-medium">{likeCount}</span>
              </button>
              
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all ${
                  isBookmarked 
                    ? 'bg-yellow-100 text-yellow-600 border border-yellow-200' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                <span className="font-medium">Save</span>
              </button>
            </div>
            
            <div className="relative">
              <button
                onClick={() => setShareDropdownOpen(!shareDropdownOpen)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all border border-purple-600"
              >
                <Share2 className="h-5 w-5" />
                <span className="font-medium">Share</span>
              </button>
              
              {shareDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors"
                  >
                    <Facebook className="h-4 w-4 text-blue-600" />
                    <span>Facebook</span>
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors"
                  >
                    <Twitter className="h-4 w-4 text-blue-400" />
                    <span>Twitter</span>
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-blue-700" />
                    <span>LinkedIn</span>
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors"
                  >
                    {copySuccess ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-600" />
                    )}
                    <span>{copySuccess ? 'Copied!' : 'Copy Link'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div 
            className="prose prose-lg max-w-none p-8 sm:p-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              '--tw-prose-body': 'rgb(55 65 81)',
              '--tw-prose-headings': 'rgb(17 24 39)',
              '--tw-prose-lead': 'rgb(75 85 99)',
              '--tw-prose-links': 'rgb(147 51 234)',
              '--tw-prose-bold': 'rgb(17 24 39)',
              '--tw-prose-counters': 'rgb(107 114 128)',
              '--tw-prose-bullets': 'rgb(209 213 219)',
              '--tw-prose-hr': 'rgb(229 231 235)',
              '--tw-prose-quotes': 'rgb(17 24 39)',
              '--tw-prose-quote-borders': 'rgb(229 231 235)',
              '--tw-prose-captions': 'rgb(107 114 128)',
              '--tw-prose-code': 'rgb(17 24 39)',
              '--tw-prose-pre-code': 'rgb(229 231 235)',
              '--tw-prose-pre-bg': 'rgb(31 41 55)',
              '--tw-prose-th-borders': 'rgb(209 213 219)',
              '--tw-prose-td-borders': 'rgb(229 231 235)',
            } as React.CSSProperties}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Published on {formatDate(post.published)}
              {post.updated !== post.published && (
                <span> • Updated on {formatDate(post.updated)}</span>
              )}
            </div>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <span className="text-sm font-medium">View on Blogger</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </footer>

        {/* Related Products Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">🔥 More Hot Deals You'll Love</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
              <img
                src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="MacBook Pro review"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                -25%
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    Laptop Deal
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.7</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  MacBook Pro M3: Complete Review & Best Deals
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  In-depth review of the new MacBook Pro with M3 chip, performance tests, and where to find the lowest prices...
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-green-600 font-bold text-lg">$1,599</span>
                    <span className="text-gray-500 line-through text-sm ml-2">$1,999</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                    Read Review →
                  </button>
                </div>
              </div>
            </article>
            
            <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
              <img
                src="https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Samsung TV review"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                -31%
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    TV Deal
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.5</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Samsung 65" QLED TV: Ultimate Buying Guide
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive review of Samsung's latest QLED technology with detailed price comparisons across all retailers...
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-green-600 font-bold text-lg">$899</span>
                    <span className="text-gray-500 line-through text-sm ml-2">$1,299</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                    Read Review →
                  </button>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group">
              <img
                src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="AirPods Pro review"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div class="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                -28%
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
                    Audio Deal
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  AirPods Pro 2: Worth the Upgrade? Full Review
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Detailed review of Apple's latest AirPods Pro with noise cancellation tests and best deals available...
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-green-600 font-bold text-lg">$179</span>
                    <span className="text-gray-500 line-through text-sm ml-2">$249</span>
                  </div>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                    Read Review →
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </article>
    </div>
  );
};

export default BlogPost;