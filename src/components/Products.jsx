'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ProductCategories = ({ onNavClick }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryClick = (title) => {
    console.log('Category clicked:', title); // Debug log
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    onNavClick(title);
  };
  

  const categories = [
    { title: 'Necklace', description: 'Elegant Necklaces crafted with precision', image: '/n12.jpg' },
    { title: 'Bangles', description: 'Traditional and modern bangles collection', image: '/b2.jpeg' },
    { title: 'Gold Items', description: 'Premium gold jewelry collection', image: '/ga.jpg' },
    { title: 'Jadebille', description: 'Exquisite Jadebille collection', image: '/jb1.jpeg' },
    { title: 'Dab', description: 'Exquisite Jadebille collection', image: '/dab1.jpeg' },
    { title: 'Earings', description: 'Exquisite Jadebille collection', image: '/e1.jpeg' }
  ];

  return (
    <section className="bg-yellow-100 py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-serif text-center text-amber-600 mb-12"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Our Collections
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.slice(0, 3).map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => handleCategoryClick(category.title)}
            >
              <div className="relative h-[300px] w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                <h3 className="text-2xl font-serif mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {category.title}
                </h3>
                <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <div className={`flex items-center text-amber-300 transform transition-all duration-300 ${hoveredCategory === index ? 'translate-x-2' : ''}`}>
                  <span className="mr-2">View Collection</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of the categories in a single column */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8">
          {categories.slice(3).map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCategory(index + 3)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => handleCategoryClick(category.title)}
            >
              
              <div className="relative h-[300px] w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
                <h3 className="text-2xl font-serif mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {category.title}
                </h3>
                <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <div className={`flex items-center text-amber-300 transform transition-all duration-300 ${hoveredCategory === index + 3 ? 'translate-x-2' : ''}`}>
                  <span className="mr-2">View Collection</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;
