import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import CommunityJoin from './components/CommunityJoin';
import DealsSlider from './components/DealsSlider';
import BlogSection from './components/BlogSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import BlogPostPage from './components/BlogPostPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');

  if (currentPage === 'blog') {
    return <BlogPostPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSlider />
      <CommunityJoin />
      <DealsSlider />
      <div onClick={() => setCurrentPage('blog')}>
        <BlogSection />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;