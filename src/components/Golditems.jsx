'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GoldItems = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const goldItems = [
    {
      id: 1,
      src: "/ga.jpg",
      title: "Gold Set"
    },
    {
        id: 2,
        src: "/ga1.jpg",
        title: "Gold Set"
      },
      {
        id: 3,
        src: "/ga2.jpg",
        title: "Gold Set"
      },
      {
        id: 4,
        src: "/ga3.jpg",
        title: "Gold Set"
      },
      {
        id: 5,
        src: "/ga4.jpg",
        title: "Gold Set"
      },
      {
        id: 6,
        src: "/ga5.jpg",
        title: "Gold Set"
      },
      {
        id: 7,
        src: "/ga6.jpg",
        title: "Gold Set"
      }, {
        id: 8,
        src: "/ga7.jpg",
        title: "Gold Set"
      },
      {
        id: 9,
        src: "/ga8.jpg",
        title: "Gold Set"
      },
      {
        id: 10,
        src: "/ga9.jpg",
        title: "Gold Set"
      }, {
        id: 11,
        src: "/ga10.jpg",
        title: "Gold Set"
      }, {
        id: 12,
        src: "/ga11.jpg",
        title: "Gold Set"
      },
      {
        id: 13,
        src: "/ga12.jpg",
        title: "Gold Set"
      },
      {
        id: 14,
        src: "/ga13.jpg",
        title: "Gold Set"
      },
      {
        id: 15,
        src: "/ga14.jpg",
        title: "Gold Set"
      },
      {
        id: 16,
        src: "/ga15.jpg",
        title: "Gold Set"
      },
      {
        id: 17,
        src: "/ga16.jpg",
        title: "Gold Set"
      },
      {
        id: 18,
        src: "/ga17.jpg",
        title: "Gold Set"
      },
      {
        id: 19,
        src: "/ga18.jpg",
        title: "Gold Set"
      },
      {
        id: 20,
        src: "/ga19.jpg",
        title: "Gold Set"
      },
      {
        id: 21,
        src: "/ga20.jpg",
        title: "Gold Set"
      },
      {
        id: 22,
        src: "/ga21.jpg",
        title: "Gold Set"
      },
      {
        id: 23,
        src: "/ga22.jpg",
        title: "Gold Set"
      },
      {
        id: 24,
        src: "/ga23.jpg",
        title: "Gold Set"
      },
      {
        id: 25,
        src: "/ga24.jpg",
        title: "Gold Set"
      },
      {
        id: 26,
        src: "/ga25.jpg",
        title: "Gold Set"
      },
      {
        id: 27,
        src: "/ga26.jpg",
        title: "Gold Set"
      },
      {
        id: 28,
        src: "/ga27.jpg",
        title: "Gold Set"
      },
      {
        id: 29,
        src: "/ga28.jpg",
        title: "Gold Set"
      },
      {
        id: 30,
        src: "/ga29.jpg",
        title: "Gold Set"
      },
  ]; 

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-amber-100 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-amber-800 text-center mb-12 font-serif"
        >
          Gold Collection
        </motion.h1>

        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {goldItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.title}
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
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GoldItems;