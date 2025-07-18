import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Subscribing email:', email);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="mb-8">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Never Miss a Deal Again
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Get exclusive deals, early access to sales, and money-saving tips delivered straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubscribed}
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubscribed ? (
                  <>
                    <Check className="h-5 w-5 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </form>

          <p className="text-sm text-purple-200 mt-6">
            Join over 50,000 smart shoppers. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;