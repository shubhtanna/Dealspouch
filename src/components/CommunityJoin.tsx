import React from 'react';
import { MessageCircle, Send, Twitter, Users } from 'lucide-react';

const CommunityJoin = () => {
  const communities = [
    {
      name: "WhatsApp Community",
      description: "Join our exclusive deals community",
      // members: "25K+ Members",
      icon: MessageCircle,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      buttonColor: "bg-green-500 hover:bg-green-600",
      image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      link: "https://whatsapp.com/channel/0029Vb75np6DeON5FNggEj0q"
    },
    {
      name: "WhatsApp Channel",
      description: "Get instant deal notifications",
      // members: "50K+ Subscribers",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      image: "https://images.pexels.com/photos/5082560/pexels-photo-5082560.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      link: "https://chat.whatsapp.com/DjSHeQmtKILGlhFDL6TN4n"
    },
    {
      name: "Twitter Updates",
      description: "Follow for daily deal tweets",
      // members: "15K+ Followers",
      icon: Twitter,
      color: "from-sky-500 to-sky-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      textColor: "text-sky-700",
      buttonColor: "bg-sky-500 hover:bg-sky-600",
      image: "https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      link: "https://x.com/Dealspouch27"
    },
    {
      name: "Telegram Group",
      description: "Real-time deal discussions",
      // members: "30K+ Members",
      icon: Send,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      image: "https://images.pexels.com/photos/5082578/pexels-photo-5082578.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      link: "https://t.me/your-telegram-group"
    }
  ];

  const handleJoinClick = (link: string, communityName: string) => {
    // Track the click event (you can add analytics here)
    console.log(`Joining ${communityName}`);
    
    // Open the link in a new tab
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Deal Community
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Never miss a deal! Join our active community of smart shoppers and get exclusive access to the best deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, index) => {
            const IconComponent = community.icon;
            return (
              <div
                key={index}
                className={`${community.bgColor} ${community.borderColor} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group hover:scale-105`}
              >
                <div className="relative mb-6">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                  />
                  <div className={`absolute -bottom-2 -right-2 bg-gradient-to-r ${community.color} w-10 h-10 rounded-full flex items-center justify-center shadow-lg`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                </div>

                <h3 className={`text-lg font-bold ${community.textColor} mb-2`}>
                  {community.name}
                </h3>
                
                <p className="text-gray-600 mb-3 text-sm">
                  {community.description}
                </p>

                {/* <div className={`${community.textColor} font-semibold text-sm mb-4`}>
                  {community.members}
                </div> */}

                 <button 
                  onClick={() => handleJoinClick(community.link, community.name)}
                  className={`w-full ${community.buttonColor} text-white py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 group-hover:shadow-lg hover:transform hover:scale-105 active:scale-95`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>Join Now</span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">
              🎉 Special Community Benefits
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-purple-800">Instant alerts on the products you love.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-purple-800">Your personal watchdog for the best prices online.</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-purple-800">Price drop alerts</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <span className="text-purple-800">Let the best deals come directly to you</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityJoin;