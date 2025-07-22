// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       // title: "THE BEST",
//       // subtitle: "AIR CONDITIONERS",
//       // caption: "YOU BUY TODAY",
//       // description: "Premium cooling solutions with energy efficiency and smart features",
//       image: "https://m.media-amazon.com/images/G/31/img21/AmazonBrands/sSAP/Headers/Kitchen_Dining_banner_1242x450.jpg",
//       buttonText: "Shop AC Deals"
//     },
//     {
//       id: 2,
//       // title: "PREMIUM",
//       // subtitle: "SMARTPHONES",
//       // caption: "AT BEST PRICES",
//       // description: "Latest technology with unbeatable deals and exclusive offers",
//       image: "https://m.media-amazon.com/images/G/31/img15/zak/24/dell/laptop-header_mob._SX1242_QL85_FMpng_.png",
//       buttonText: "Explore Phones"
//     },
//     {
//       id: 3,
//       // title: "AMAZING",
//       // subtitle: "HOME APPLIANCES",
//       // caption: "FOR MODERN LIVING",
//       // description: "Transform your home with smart appliances and innovative solutions",
//       image: "https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
//       buttonText: "Shop Appliances"
//     },
//     {
//       id: 4,
//       // title: "EXCLUSIVE",
//       // subtitle: "FASHION DEALS",
//       // caption: "UP TO 70% OFF",
//       // description: "Trending fashion and accessories at incredible discounts",
//       image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
//       buttonText: "Shop Fashion"
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <section className="relative h-[600px] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//             index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
//           }`}
//         >
//           {/* Full Background Image */}
//           <div 
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url(${slide.image})`,
//             }}
//           >
//             {/* Dark Overlay for Better Text Readability */}
//             {/* <div className="absolute inset-0 bg-black/40"></div> */}
            
//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
//           </div>
          
//           {/* Content Overlay */}
//           <div className="relative z-10 h-full flex items-center">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//               <div className="max-w-2xl">
//                 {/* Main Content */}
//                 <div className="text-white space-y-6">
//                   {/* <div className="space-y-2">
//                     <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
//                       {slide.title}
//                     </h1>
//                     <h2 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-yellow-400">
//                       {slide.subtitle}
//                     </h2>
//                     <h3 className="text-2xl lg:text-4xl font-semibold text-white/90 mt-4">
//                       {slide.caption}
//                     </h3>
//                   </div> */}
                  
//                   {/* <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-xl">
//                     {slide.description}
//                   </p> */}

//                   <div className="flex flex-col sm:flex-row gap-4 pt-6">
//                     {/* <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105">
//                       <ShoppingCart className="h-5 w-5" />
//                       <span>{slide.buttonText}</span>
//                     </button> */}
//                     {/* <button className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 text-lg backdrop-blur-sm">
//                       View All Deals
//                     </button> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 z-20 shadow-lg hover:scale-110"
//       >
//         <ChevronLeft className="h-6 w-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 z-20 shadow-lg hover:scale-110"
//       >
//         <ChevronRight className="h-6 w-6" />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-4 h-4 rounded-full transition-all duration-300 ${
//               index === currentSlide 
//                 ? 'bg-yellow-400 scale-125' 
//                 : 'bg-white/50 hover:bg-white/70'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Slide Counter */}
//       <div className="absolute top-8 right-8 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium z-20">
//         {currentSlide + 1} / {slides.length}
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ShoppingCart, Star, TrendingUp, Zap, Gift } from "lucide-react"

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      category: "Electronics",
      title: "Best Electronics Deals",
      // subtitle: "Up to 60% OFF",
      description: "Discover the latest smartphones, laptops, home appliances & many more gadgets at best prices",
      image:
        "https://static.vecteezy.com/system/resources/previews/036/314/557/non_2x/a-set-of-household-appliances-microwave-oven-washing-machine-refrigerator-fan-tv-coffee-laptop-air-conditioner-illustration-vector.jpg",
      buttonText: "Shop Electronics",
      badge: "Amazon",
      link: "https://amzn.to/4lEYmlb",
      // rating: "4.8",
      // dealCount: "500+",
      gradient: "from-blue-600/80 via-purple-600/60 to-transparent",
    },
    {
      id: 2,
      category: "Fashion",
      title: "Style Revolution",
      // subtitle: "Trending Now",
      description: "Transform your wardrobe with the latest fashion trends and exclusive collections",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Explore Fashion",
      badge: "Amazon",
      link: "https://amzn.to/3IDll1a",
      // rating: "4.9",
      // dealCount: "1000+",
      gradient: "from-pink-600/80 via-rose-600/60 to-transparent",
    },
    {
      id: 3,
      category: "Home & Living",
      title: "Smart Home Solutions",
      // subtitle: "Save Big Today",
      description: "Upgrade your living space with innovative home appliances and decor",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
      buttonText: "Shop Home",
      badge: "Amazon",
      link: "https://amzn.to/4eZiifT",
      // rating: "4.7",
      // dealCount: "750+",
      gradient: "from-green-600/80 via-emerald-600/60 to-transparent",
    },
    {
      id: 4,
      category: "Health & Beauty",
      title: "Wellness Essentials",
      // subtitle: "Special Offers",
      description: "Premium beauty products and health supplements for your well-being",
      image:
        "https://images.squarespace-cdn.com/content/v1/65011996a295ad0023c97624/2019e98a-8e97-45c6-92ef-ce993fab3431/How+to+Import+Beauty+Products+into+Japan.png",
      buttonText: "Shop Beauty",
      badge: "Amazon",
      link: "https://amzn.to/3TLIrFk",
      // rating: "4.9",
      // dealCount: "300+",
      gradient: "from-orange-600/80 via-amber-600/60 to-transparent",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleShopNow = (link:any) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative h-[70vh] min-h-[600px] max-h-[800px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-1000"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
            }}
          />

          {/* Dynamic Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="text-white space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-semibold">{slide.badge}</span>
                  </div>

                  {/* Category */}
                  <div className="text-lg font-medium text-white/80 uppercase tracking-wider">{slide.category}</div>

                  {/* Main Title */}
                  <div className="space-y-2">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">{slide.title}</h1>
                    {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">{slide.subtitle}</h2> */}
                  </div>

                  {/* Description */}
                  <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl">{slide.description}</p>

                  {/* Stats */}
                  {/* <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="font-semibold">{slide.rating}</span>
                      <span className="text-white/70">Rating</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                      <span className="font-semibold">{slide.dealCount}</span>
                      <span className="text-white/70">Deals</span>
                    </div>
                  </div> */}

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="group bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105"  onClick={() => handleShopNow(slide.link)}>
                      <ShoppingCart className="h-5 w-5 group-hover:animate-bounce" />
                      <span>{slide.buttonText}</span>
                    </button>
                    {/* <button className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 text-lg backdrop-blur-sm flex items-center justify-center space-x-2">
                      <Gift className="h-5 w-5" />
                      <span>View All Offers</span>
                    </button> */}
                  </div>
                </div>

                {/* Right Content - Feature Cards */}
                
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 lg:p-4 rounded-full hover:bg-white/30 transition-all duration-300 z-20 shadow-lg hover:scale-110"
      >
        <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-3 lg:p-4 rounded-full hover:bg-white/30 transition-all duration-300 z-20 shadow-lg hover:scale-110"
      >
        <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-8 h-3 bg-yellow-400 rounded-full"
                : "w-3 h-3 bg-white/50 hover:bg-white/70 rounded-full"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 lg:top-8 right-4 lg:right-8 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium z-20">
        <span className="text-yellow-400">{currentSlide + 1}</span> / {slides.length}
      </div>
    </section>
  )
}

export default HeroSlider
