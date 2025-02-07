import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const InstitutionHeadProfile = () => {
  const images = [
    { src: '/Adarsh.jpg', alt: 'Adarsh and Saru, Jewellers' },
    { src: '/saru.jpg', alt: 'Our Jewelry Shop' },
    { src: '/01.jpg', alt: 'Our Jewelry Shop' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-yellow-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-light tracking-wide text-amber-800 mb-3 animate-fade-in-down font-['Playfair_Display']">
            Your trusted Jewellers
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentImageIndex === index ? 'bg-amber-600' : 'bg-amber-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold text-amber-800">Adarsh and Saru</h2>
              <p className="text-sm text-amber-600">Jewellers</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 text-amber-600"
          >
            <p className="text-lg leading-relaxed">
              Welcome to our jewellery shop, where elegance meets affordability! We offer a stunning collection of gold ornaments, blending traditional and modern designs to suit every occasion. Enjoy premium craftsmanship and exceptional quality at unbeatable wholesale prices. Visit us today!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionHeadProfile;