"use client";

import React, { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaLocationDot, FaYoutube } from 'react-icons/fa6';
import { BsWhatsapp } from 'react-icons/bs';
import { IoSend, IoClose } from 'react-icons/io5';

const Bg = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Fixed image paths to include leading forward slash
  const images = ['/Adarsh.jpg', '/saru.jpg', '/o1.jpg', '/n5.jpg', '/b1.jpeg'];
  const phoneNumber = "917892998441";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    setIsLoaded(true);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const chatTimer = setTimeout(() => {
      setShowChat(true);
    }, 3000);

    return () => clearTimeout(chatTimer);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    window.open(`${whatsappUrl}?text=${encodedMessage}`, '_blank');
    setMessage('');
  };

  const Sparkle = ({ style }) => (
    <div 
      className="absolute w-1 h-1 bg-amber-400 rounded-full animate-sparkle"
      style={style}
    />
  );

  return (
    <section className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-fixed transition-all duration-1000 ease-in-out
            ${currentImageIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
            ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            zIndex: currentImageIndex === index ? 1 : 0,
            transitionDelay: isLoaded ? '0.3s' : '0s'
          }}
        />
      ))}

      <div className={`absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 animate-shimmer z-[2]
        transition-transform duration-1000 ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}
      />

      <div className="relative z-[3] flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="relative">
          <Sparkle style={{ top: '-20px', left: '10px' }} />
          <Sparkle style={{ top: '20px', right: '10px' }} />
          <Sparkle style={{ bottom: '-10px', left: '50%' }} />
          
          <h1 className={`text-6xl font-bold mb-6 transition-all duration-1000 ease-out
            ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
            style={{ transitionDelay: '0.5s' }}
          >
            <span 
              className="text-amber-400 relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {isHovering && (
                <div className="absolute inset-0 bg-amber-400/20 blur-lg animate-pulse" />
              )}
            </span>
          </h1>
        </div>
        
        <p className={`text-xl md:text-2xl mb-12 max-w-2xl transition-all duration-1000 ease-out
          ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
          style={{ transitionDelay: '0.7s' }}
        />

        <div className={`animate-float mb-12 transition-all duration-1000 ease-out
          ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
          style={{ transitionDelay: '0.9s' }}
        >
          <a href="tel:+917892998441" className="group bg-white text-amber-500 py-3 px-12 rounded-full font-semibold transition-all duration-300 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-500/20 transform hover:scale-105">
            <span className="inline-block transform group-hover:scale-105 transition-transform">
              Call Now
            </span>
          </a>
        </div>

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

        <div className="flex gap-6 mt-8">
          {[
            { Icon: FaInstagram, href: "https://www.instagram.com/uniquejewellery93?igsh=NjRiZmsyZTJuY2Zy", bgColor: "bg-gradient-to-tr from-pink-500 via-red-500 to-purple-500", iconColor: "text-white" },
            { Icon: FaFacebookF, href: "https://www.facebook.com/share/1B36zhAfUD/", bgColor: "bg-blue-600", iconColor: "text-white" },
            { Icon: BsWhatsapp, onClick: () => setShowChat(!showChat), bgColor: "bg-green-500", iconColor: "text-white" },
            { Icon: FaLocationDot, href: "https://maps.app.goo.gl/jaX6E6n4hkgthQGS9", bgColor: "bg-red-500", iconColor: "text-white" },
            { Icon: FaYoutube, href: "https://youtube.com/@uniquejewellery-b7s?si=vQdSv-rfi9yAAJ6a", bgColor: "bg-red-600", iconColor: "text-white" }
          ].map(({ Icon, href, onClick, bgColor, iconColor }, index) => {
            const Component = href ? 'a' : 'button';
            return (
              <Component
                key={index}
                href={href}
                onClick={onClick}
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
                className={`p-3 ${bgColor} rounded-full shadow-lg hover:scale-110 
                  transition-all duration-300 group
                  ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                style={{
                  transitionDelay: `${1.3 + index * 0.1}s`
                }}
              >
                <Icon 
                  className={`w-6 h-6 ${iconColor} transform group-hover:rotate-12 transition-transform`}
                />
              </Component>
            );
          })}
        </div>
      </div>

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
              <IoClose className="w-6 h-6 transform hover:rotate-90 transition-transform" />
            </button>
          </div>
          <div className="bg-gray-100">
            <div className="p-6 bg-white/80 backdrop-blur-sm">
              <p className="text-gray-600 mb-2">👋 Welcome to Unique Jewellery Shop!</p>
              <p className="text-gray-500 text-sm">Feel free to ask us anything about our jewelry collection.</p>
            </div>
            <div className="h-64 bg-gray-50 p-4 overflow-y-auto" />
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
                <IoSend className="w-5 h-5 transform group-hover:-rotate-12 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Bg;