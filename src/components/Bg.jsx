"use client";

import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle, MapPin, Youtube, Facebook, Send, X } from 'lucide-react';

const Bg = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const images = ['/bg1.avif', '/bg.jpg', '/bg2.jpg'];
  const phoneNumber = "917892998441";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Trigger entrance animations after component mounts
    setIsLoaded(true);

    return () => clearInterval(interval);
  }, []);

  // Delayed WhatsApp chat appearance
  useEffect(() => {
    const chatTimer = setTimeout(() => {
      setShowChat(true);
    }, 3000); // Shows chat after 3 seconds

    return () => clearTimeout(chatTimer);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
    setMessage('');
  };

  // Sparkle effect component
  const Sparkle = ({ style }) => (
    <div 
      className="absolute w-1 h-1 bg-amber-400 rounded-full animate-sparkle"
      style={style}
    />
  );

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images with enhanced transition */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-fixed transition-all duration-1000 ease-in-out
            ${currentImageIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            zIndex: currentImageIndex === index ? 1 : 0,
            transitionDelay: isLoaded ? '0.3s' : '0s'
          }}
        />
      ))}

      {/* Enhanced gradient overlay with shimmer effect */}
      <div className={`absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 animate-shimmer z-[2]
        transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}
      ></div>

      {/* Content with enhanced animations */}
      <div className="relative z-[3] flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="relative">
          {/* Decorative sparkles */}
          <Sparkle style={{ top: '-20px', left: '10px' }} />
          <Sparkle style={{ top: '20px', right: '10px' }} />
          <Sparkle style={{ bottom: '-10px', left: '50%' }} />
          
          <h1 className={`text-6xl font-bold mb-6 transition-all duration-1000 ease-out
            ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            Welcome to{' '}
            <span 
              className="text-amber-400 relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Unique
              {isHovering && (
                <div className="absolute inset-0 bg-amber-400/20 blur-lg animate-pulse" />
              )}
            </span>{' '}
            Jewellery Shop
          </h1>
        </div>
        
        <p className={`text-xl md:text-2xl mb-12 max-w-2xl transition-all duration-1000 ease-out
          ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          Discover the finest collection of jewellery with a wholesale price.
        </p>

        {/* Enhanced button with float animation */}
        <div className={`animate-float mb-12 transition-all duration-1000 ease-out
          ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
          style={{ transitionDelay: '0.9s' }}
        >
          <button className="group bg-white text-amber-500 py-3 px-12 rounded-full font-semibold transition-all duration-300 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/20 transform hover:scale-105">
            <span className="inline-block transform group-hover:scale-105 transition-transform">
              Shop Now
            </span>
          </button>
        </div>

        {/* Enhanced image navigation dots */}
        <div className={`flex gap-2 mb-8 transition-all duration-1000 ease-out
          ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
          style={{ transitionDelay: '1.1s' }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 transform hover:scale-125 ${
                currentImageIndex === index 
                  ? 'bg-amber-400 w-4 animate-pulse' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Switch to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Enhanced social icons with stagger animation */}
        <div className="flex gap-6 mt-8">
          {[
            { Icon: Instagram, href: "https://www.instagram.com/uniquejewellery93?igsh=NjRiZmsyZTJuY2Zy" },
            { Icon: Facebook, href: "https://www.facebook.com/share/1B36zhAfUD/" },
            { Icon: MessageCircle, onClick: () => setShowChat(!showChat) },
            { Icon: MapPin, href: "https://maps.app.goo.gl/jaX6E6n4hkgthQGS9" },
            { Icon: Youtube, href: "https://youtube.com/@uniquejewellery-b7s?si=vQdSv-rfi9yAAJ6a" }
          ].map(({ Icon, href, onClick }, index) => {
            const Component = href ? 'a' : 'button';
            return (
              <Component
                key={index}
                href={href}
                onClick={onClick}
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
                className={`p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-amber-500 
                  transition-all duration-1000 hover:scale-110 group
                  ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                style={{
                  transitionDelay: `${1.3 + index * 0.1}s`
                }}
              >
                <Icon className="w-6 h-6 text-white group-hover:text-white transform group-hover:rotate-12 transition-transform" />
              </Component>
            );
          })}
        </div>
      </div>

      {/* Enhanced WhatsApp Chat Widget with fade-in animation */}
      {showChat && (
        <div className="fixed bottom-24 right-4 z-50 max-w-sm w-full md:w-96 rounded-lg shadow-lg animate-fade-in">
          <div className="bg-emerald-500 p-4 rounded-t-lg flex justify-between items-center">
            <div className="text-white">
              <p className="font-medium">How can I help you? :)</p>
              <p className="text-xs opacity-90">Usually replies instantly</p>
            </div>
            <button 
              onClick={() => setShowChat(false)}
              className="text-white hover:bg-emerald-600 p-1 rounded-full transition-colors"
            >
              <X className="w-6 h-6 transform hover:rotate-90 transition-transform" />
            </button>
          </div>
          <div className="bg-gray-100">
            <div className="p-6 bg-white/80 backdrop-blur-sm">
              <p className="text-gray-600 mb-2">👋 Welcome to Unique Jewellery Shop!</p>
              <p className="text-gray-500 text-sm">Feel free to ask us anything about our jewelry collection.</p>
            </div>
            <div className="h-64 bg-gray-50 p-4 overflow-y-auto">
              {/* Chat history would go here */}
            </div>
            <form onSubmit={handleSendMessage} className="p-4 bg-white rounded-b-lg flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="submit"
                className="p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors group"
              >
                <Send className="w-5 h-5 transform group-hover:-rotate-12 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Bg;