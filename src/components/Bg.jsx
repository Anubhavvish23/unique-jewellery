"use client";

import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle, MapPin, Youtube, Facebook } from 'lucide-react';

const Bg = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/bg1.avif', '/bg.jpg', '/bg2.jpg'];
  const phoneNumber = "917892998441";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ease-in-out ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-[2]"></div>

      {/* Content */}
      <div className="relative z-[3] flex flex-col items-center justify-center h-full text-center text-white px-4 animate-fade-in">
        <h1 className="text-6xl font-bold mb-6 animate-slide-down">
          Welcome to <span className="text-amber-400">Unique</span> Jewellery Shop
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl animate-slide-up opacity-90">
          Discover the finest collection of jewellery with a wholesale price.
        </p>
        <div className="animate-bounce-subtle mb-12">
          <a
            href="/shop"
            className="bg-white text-amber-500 py-3 px-12 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 transform hover:scale-105"
          >
            Shop Now
          </a>
        </div>
        
        {/* Image Navigation Dots */}
        <div className="flex gap-2 mb-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-amber-400 w-4' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Switch to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-8">
          <a 
            href="https://www.instagram.com/uniquejewellery93?igsh=NjRiZmsyZTJuY2Zy"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-amber-500 transition-all duration-300 hover:scale-110 group"
          >
            <Instagram className="w-6 h-6 text-white group-hover:text-white" />
          </a>
          <a 
            href="https://www.facebook.com/share/1B36zhAfUD/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-amber-500 transition-all duration-300 hover:scale-110 group"
          >
            <Facebook className="w-6 h-6 text-white group-hover:text-white" />
          </a>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-amber-500 transition-all duration-300 hover:scale-110 group"
          >
            <MessageCircle className="w-6 h-6 text-white group-hover:text-white" />
          </a>
          <a 
            href="https://maps.app.goo.gl/jaX6E6n4hkgthQGS9"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-amber-500 transition-all duration-300 hover:scale-110 group"
          >
            <MapPin className="w-6 h-6 text-white group-hover:text-white" />
          </a>
          <a 
            href="https://youtube.com/@uniquejewellery-b7s?si=vQdSv-rfi9yAAJ6a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-amber-500 transition-all duration-300 hover:scale-110 group"
          >
            <Youtube className="w-6 h-6 text-white group-hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bg;