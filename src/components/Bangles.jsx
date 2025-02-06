'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Bangles = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const bangles = [
    {
      id: 1,
      src: "/b1.jpeg",
      alt: "Gold Traditional Bangle"
    },
    {
      id: 2,
      src: "/b2.jpeg",
      alt: "Gold Traditional Bangle"
    },
    {
      id: 3,
      src: "/b3.jpeg",
      alt: "Gold Traditional Bangle"
    },
    {
      id: 4,
      src: "/b4.jpeg",
      alt: "Gold Traditional Bangle"
    },
    {
      id: 5,
      src: "/b5.jpeg",
      alt: "Gold Traditional Bangle"
    },
    {
      id: 6,
      src: "/b6.jpeg",
      alt: "Gold Traditional Bangle"
    },
    {
      id: 7,
      src: "/b7.jpeg",
      alt: "Gold Traditional Bangle"
    },
    {
      id: 8,
      src: "/b8.jpeg",
      alt: "Gold Traditional Bangle"
    },
   
  ];

  return (
    <div id='Bangles'>
    <div className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-amber-700 text-center mb-12 font-serif"
        >
          Our Exclusive Bangle Collection
        </motion.h1>
        
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {bangles.map((bangle) => (
            <motion.div
              key={bangle.id}
              className="relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(bangle)}
            >
              <img
                src={bangle.src}
                alt={bangle.alt}
                className="w-full h-64 object-cover transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full bg-transparent"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors duration-300"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={32} />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Bangles;