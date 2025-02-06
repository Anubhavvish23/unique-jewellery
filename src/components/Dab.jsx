'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dabs = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const dabs = [
    {
      id: 1,
      src: "/dab1.jpeg",
      alt: "Gold Dab"
    },
    {
      id: 2,
      src: "/dab2.jpeg",
      alt: "Diamond Dab"
    },
    {
      id: 3,
      src: "/dab3.jpeg",
      alt: "Diamond Dab"
    },
    {
      id: 4,
      src: "/dab4.jpeg",
      alt: "Diamond Dab"
    },
    {
      id: 5,
      src: "/dab5.jpeg",
      alt: "Diamond Dab"
    },
    {
      id: 6,
      src: "/dab6.jpeg",
      alt: "Diamond Dab"
    },
    {
      id: 7,
      src: "/dab7.jpeg",
      alt: "Diamond Dab"
    },
    {
      id: 8,
      src: "/dab6.jpeg",
      alt: "Diamond Dab"
    },
    {
      id: 9,
      src: "/dab9.jpeg",
      alt: "Diamond Dab"
    },
    {
      id: 10,
      src: "/dab10.jpeg",
      alt: "Diamond Dab"
    },
    {
      id: 11,
      src: "/dab11.jpeg",
      alt: "Diamond Dab"
    },
    {
      id: 12,
      src: "/dab5.jpeg",
      alt: "Diamond Dab"
    },
  ];

  return (
    <section id="Dab">
      <div id="Dab" className="pt-24 min-h-screen bg-gradient-to-b from-amber-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl text-amber-700 text-center mb-12 font-serif"
          >
            Our Exclusive Dab Collection
          </motion.h1>
         
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {dabs.map((dab) => (
              <motion.div
                key={dab.id}
                className="relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedImage(dab)}
              >
                <img
                  src={dab.src}
                  alt={dab.alt}
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
    </section>
  );
};

export default Dabs;
