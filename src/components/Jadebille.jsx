'use client';

import { useState } from 'react';

const Jadebille = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const necklaces = [
    {
      id: 1,
      src: "/jb1.jpeg",
      alt: "Gold Necklace"
    },
    {
      id: 2,
      src: "/jb2.jpeg",
      alt: "Diamond Necklace"
    },
    {
      id: 3,
      src: "/jb3.jpeg",
      alt: "Diamond Necklace"
    },
    {
      id: 4,
      src: "/jb4.jpeg",
      alt: "Diamond Necklace"
    },
    {
      id: 5,
      src: "/jb5.jpeg",
      alt: "Diamond Necklace"
    },
    {
      id: 6,
      src: "/jb6.jpeg",
      alt: "Diamond Necklace"
    },
    {
      id: 7,
      src: "/jb7.jpeg",
      alt: "Diamond Necklace"
    },
    {
      id: 8,
      src: "/jb8.jpeg",
      alt: "Diamond Necklace"
    },
    {
      id: 9,
      src: "/jb9.jpeg",
      alt: "Diamond Necklace"
    },
    {
      id: 10,
      src: "/jb10.jpeg",
      alt: "Diamond Necklace"
    },
    {
      id: 11,
      src: "/jb11.jpeg",
      alt: "Diamond Necklace"
    },
    {
      id: 12,
      src: "/jb12.jpeg",
      alt: "Diamond Necklace"
    },
    
  ];

  return (
    <section className="bg-yellow-100 py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-serif text-center text-amber-600 mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Jadebille Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {necklaces.map((necklace) => (
            <div
              key={necklace.id}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(necklace)}
            >
              <div className="relative h-[300px] w-full">
                <img
                  src={necklace.src}
                  alt={necklace.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-amber-300"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[90vh] max-w-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Jadebille;