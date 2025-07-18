import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, ExternalLink, AlertCircle, Loader } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  published: string;
  author: {
    displayName: string;
    url?: string;
  };
  url: string;
  labels?: string[];
}

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Your actual Blogger credentials
  const BLOG_ID = '8699106822279813191';
  const API_KEY = 'AIzaSyA3T5v-ABw-cncM73FrFKhZYm8-_Nea4aE';

  // Check if credentials are configured
  const isConfigured = BLOG_ID !== 'YOUR_BLOG_ID_HERE' && API_KEY !== 'YOUR_API_KEY_HERE';

  useEffect(() => {
    const fetchBlogPosts = async () => {
      if (!isConfigured) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=6`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setBlogPosts(data.items || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please check your API configuration.');
        // Fallback to mock data for demonstration
        setBlogPosts(mockBlogPosts);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [isConfigured]);

  // Mock blog posts for demonstration with images
  const mockBlogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'iPhone 15 Pro Max Complete Review & Best Deals: Where to Buy at Lowest Price',
      content: 'After 3 weeks of intensive testing, here\'s my honest review of the iPhone 15 Pro Max. We\'ve also tracked prices across 50+ retailers to find you the absolute best deals available right now...',
      published: '2024-01-15T10:00:00Z',
      author: {
        displayName: 'Alex Thompson',
        url: 'https://blogger.com/profile/alex'
      },
      url: 'https://yourblog.blogspot.com/2024/01/iphone-15-pro-max-review.html',
      labels: ['iPhone', 'Apple', 'Smartphone', 'Review', 'Deals']
    },
    {
      id: '2',
      title: 'Samsung Galaxy S24 Ultra vs iPhone 15 Pro Max: Which Should You Buy?',
      content: 'Comprehensive comparison between Samsung\'s latest flagship and Apple\'s iPhone 15 Pro Max. We compare cameras, performance, battery life, and current deals to help you decide...',
      published: '2024-01-12T14:30:00Z',
      author: {
        displayName: 'Sarah Johnson',
        url: 'https://blogger.com/profile/sarah'
      },
      url: 'https://yourblog.blogspot.com/2024/01/samsung-vs-iphone-comparison.html',
      labels: ['Samsung', 'iPhone', 'Comparison', 'Smartphone', 'Deals']
    },
    {
      id: '3',
      title: 'MacBook Pro M3 Review: Is It Worth the Upgrade? Best Deals Inside',
      content: 'In-depth review of the new MacBook Pro with M3 chip. Performance benchmarks, real-world usage tests, and where to find the best deals with up to $300 off retail price...',
      published: '2024-01-10T09:15:00Z',
      author: {
        displayName: 'Mike Chen',
        url: 'https://blogger.com/profile/mike'
      },
      url: 'https://yourblog.blogspot.com/2024/01/macbook-pro-m3-review.html',
      labels: ['MacBook', 'Apple', 'Laptop', 'Review', 'M3 Chip']
    },
    {
      id: '4',
      title: 'Sony WH-1000XM5 vs Bose QuietComfort Ultra: Noise Cancelling Showdown',
      content: 'Which premium noise-cancelling headphones should you buy? We test both in real-world scenarios and find the best deals currently available...',
      published: '2024-01-08T16:45:00Z',
      author: {
        displayName: 'Emily Rodriguez',
        url: 'https://blogger.com/profile/emily'
      },
      url: 'https://yourblog.blogspot.com/2024/01/sony-vs-bose-headphones.html',
      labels: ['Headphones', 'Sony', 'Bose', 'Audio', 'Review']
    },
    {
      id: '5',
      title: 'Nintendo Switch OLED vs Steam Deck: Gaming Handheld Battle 2024',
      content: 'Complete comparison of the top gaming handhelds. Performance tests, game library comparison, and current deals to help you choose the perfect portable gaming device...',
      published: '2024-01-05T11:20:00Z',
      author: {
        displayName: 'David Kim',
        url: 'https://blogger.com/profile/david'
      },
      url: 'https://yourblog.blogspot.com/2024/01/switch-vs-steam-deck.html',
      labels: ['Gaming', 'Nintendo', 'Steam Deck', 'Handheld', 'Review']
    },
    {
      id: '6',
      title: 'Tesla Model 3 vs Model Y: Which Tesla Should You Buy in 2024?',
      content: 'Detailed comparison of Tesla\'s most popular models. Range tests, feature comparison, pricing analysis, and current incentives to help you make the right choice...',
      published: '2024-01-03T13:30:00Z',
      author: {
        displayName: 'Lisa Wang',
        url: 'https://blogger.com/profile/lisa'
      },
      url: 'https://yourblog.blogspot.com/2024/01/tesla-model-3-vs-y.html',
      labels: ['Tesla', 'Electric Car', 'Automotive', 'Comparison', 'EV']
    }
  ];

  // Function to get appropriate image for blog post based on content
  const getBlogImage = (post: BlogPost) => {
    // Extract image from blog post content or use category-specific images
    const content = post.content.toLowerCase();
    const title = post.title.toLowerCase();
    
    // Try to extract image from blog content first
    const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch) {
      return imgMatch[1];
    }
    
    // Fallback to category-based images
    if (title.includes('iphone') || title.includes('apple')) {
      return 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400';
    } else if (title.includes('samsung') || title.includes('galaxy')) {
      return 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400';
    } else if (title.includes('macbook') || title.includes('laptop')) {
      return 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400';
    } else if (title.includes('headphones') || title.includes('airpods') || title.includes('audio')) {
      return 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=400';
    } else if (title.includes('gaming') || title.includes('nintendo') || title.includes('steam')) {
      return 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400';
    } else if (title.includes('tesla') || title.includes('car') || title.includes('automotive')) {
      return 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400';
    } else if (title.includes('tv') || title.includes('television')) {
      return 'https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400';
    } else {
      // Default fallback image
      return 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=400';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateContent = (content: string, maxLength: number) => {
    // Remove HTML tags for clean preview
    const cleanContent = content.replace(/<[^>]*>/g, '');
    if (cleanContent.length <= maxLength) return cleanContent;
    return cleanContent.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <section id="blog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In-depth reviews, comparisons, and the best deals on your favorite products
            </p>
          </div>
          <div className="flex justify-center items-center py-12">
            <Loader className="h-8 w-8 animate-spin text-purple-600" />
            <span className="ml-3 text-gray-600">Loading blog posts...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In-depth reviews, comparisons, and the best deals on your favorite products
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-6 w-6 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">Error Loading Blog Posts</h3>
                <p className="text-red-700">{error}</p>
                <p className="text-sm text-red-600 mt-2">Showing demo content below.</p>
              </div>
            </div>
          </div>
          {/* Show fallback posts with images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group border border-gray-200">
                {/* Blog Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={getBlogImage(post)}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Review
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{formatDate(post.published)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <User className="h-4 w-4" />
                      <span className="text-sm">{post.author.displayName}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {truncateContent(post.content, 120)}
                  </p>
                  {post.labels && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.labels.slice(0, 3).map((label, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                          {label}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-2 transition-colors"
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In-depth reviews, comparisons, and the best deals on your favorite products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group border border-gray-200">
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img
                  src={getBlogImage(post)}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Review
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{formatDate(post.published)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{post.author.displayName}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {truncateContent(post.content, 120)}
                </p>

                {post.labels && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.labels.slice(0, 3).map((label, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                        {label}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center space-x-2 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;