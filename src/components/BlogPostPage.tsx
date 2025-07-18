import React, { useState } from 'react';
import BlogPost from './BlogPost';
import BlogSection from './BlogSection';
import Header from './Header';
import Footer from './Footer';

const BlogPostPage = () => {
  const [showBlogPost, setShowBlogPost] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState<string>('');

  const handleViewPost = (postId: string) => {
    setSelectedPostId(postId);
    setShowBlogPost(true);
  };

  const handleBackToBlog = () => {
    setShowBlogPost(false);
    setSelectedPostId('');
  };

  if (showBlogPost) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <BlogPost postId={selectedPostId} onBack={handleBackToBlog} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Blog Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            DealsPro Blog
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Your ultimate resource for saving money, finding the best deals, and mastering the art of smart shopping.
          </p>
        </div>
      </section>

      {/* Demo Button */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => handleViewPost('demo')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            View Demo Blog Post Template
          </button>
          <p className="text-gray-600 mt-2 text-sm">
            Click to see the beautiful blog post template design
          </p>
        </div>
      </section>

      <BlogSection />
      <Footer />
    </div>
  );
};

export default BlogPostPage;