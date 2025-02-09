import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const ProductCategories = ({ onNavClick }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const mainCategories = [
    { title: 'Necklace', description: 'Elegant Necklaces crafted with precision', image: '/n12.jpg' },
    { title: 'Bangles', description: 'Traditional and modern bangles collection', image: '/b2.jpeg' },
    { title: 'Gold Items', description: 'Premium gold jewelry collection', image: '/ga.jpg' },
    { title: 'Jadebille', description: 'Exquisite Jadebille collection', image: '/jb1.jpeg' },
    { title: 'Dab', description: 'Exquisite Dab collection', image: '/dab1.jpeg' },
    { title: 'Earings', description: 'Exquisite Earings collection', image: '/e1.jpeg' }
  ];

  const allImages = [

    { title: 'b1', description: 'b1 Image', image: '/b1.jpeg' },
    { title: 'b2', description: 'b2 Image', image: '/b2.jpeg' },
    { title: 'b3', description: 'b3 Image', image: '/b3.jpeg' },
    { title: 'b4', description: 'b4 Image', image: '/b4.jpeg' },
    { title: 'b5', description: 'b5 Image', image: '/b5.jpeg' },
    { title: 'b6', description: 'b6 Image', image: '/b6.jpeg' },
    { title: 'b7', description: 'b7 Image', image: '/b7.jpeg' },
    { title: 'b8', description: 'b8 Image', image: '/b8.jpeg' },
    { title: 'bg', description: 'bg Image', image: '/bg.jpg' },
    { title: 'bg1', description: 'bg1 Image', image: '/bg1.avif' },
    { title: 'bg2', description: 'bg2 Image', image: '/bg2.jpg' },
    { title: 'dab1', description: 'dab1 Image', image: '/dab1.jpeg' },
    { title: 'dab2', description: 'dab2 Image', image: '/dab2.jpeg' },
    { title: 'dab3', description: 'dab3 Image', image: '/dab3.jpeg' },
    { title: 'dab4', description: 'dab4 Image', image: '/dab4.jpeg' },
    { title: 'dab5', description: 'dab5 Image', image: '/dab5.jpeg' },
    { title: 'dab6', description: 'dab6 Image', image: '/dab6.jpeg' },
    { title: 'dab7', description: 'dab7 Image', image: '/dab7.jpeg' },
    { title: 'dab8', description: 'dab8 Image', image: '/dab8.jpeg' },
    { title: 'dab9', description: 'dab9 Image', image: '/dab9.jpeg' },
    { title: 'dab10', description: 'dab10 Image', image: '/dab10.jpeg' },
    { title: 'dab11', description: 'dab11 Image', image: '/dab11.jpeg' },
    { title: 'dab12', description: 'dab12 Image', image: '/dab12.jpeg' },
    { title: 'e1', description: 'e1 Image', image: '/e1.jpeg' },
    { title: 'e2', description: 'e2 Image', image: '/e2.jpeg' },
    { title: 'ga', description: 'ga Image', image: '/ga.jpg' },
    { title: 'ga1', description: 'ga1 Image', image: '/ga1.jpg' },
    { title: 'ga2', description: 'ga2 Image', image: '/ga2.jpg' },
    { title: 'ga3', description: 'ga3 Image', image: '/ga3.jpg' },
    { title: 'ga4', description: 'ga4 Image', image: '/ga4.jpg' },
    { title: 'ga5', description: 'ga5 Image', image: '/ga5.jpg' },
    { title: 'ga6', description: 'ga6 Image', image: '/ga6.jpg' },
    { title: 'ga7', description: 'ga7 Image', image: '/ga7.jpg' },
    { title: 'ga8', description: 'ga8 Image', image: '/ga8.jpg' },
    { title: 'ga9', description: 'ga9 Image', image: '/ga9.jpg' },
    { title: 'ga10', description: 'ga10 Image', image: '/ga10.jpg' },
    { title: 'ga11', description: 'ga11 Image', image: '/ga11.jpg' },
    { title: 'ga12', description: 'ga12 Image', image: '/ga12.jpg' },
    { title: 'ga13', description: 'ga13 Image', image: '/ga13.jpg' },
    { title: 'ga14', description: 'ga14 Image', image: '/ga14.jpg' },
    { title: 'ga15', description: 'ga15 Image', image: '/ga15.jpg' },
    { title: 'ga16', description: 'ga16 Image', image: '/ga16.jpg' },
    { title: 'ga17', description: 'ga17 Image', image: '/ga17.jpg' },
    { title: 'ga18', description: 'ga18 Image', image: '/ga18.jpg' },
    { title: 'ga19', description: 'ga19 Image', image: '/ga19.jpg' },
    { title: 'ga20', description: 'ga20 Image', image: '/ga20.jpg' },
    { title: 'ga21', description: 'ga21 Image', image: '/ga21.jpg' },
    { title: 'ga22', description: 'ga22 Image', image: '/ga22.jpg' },
    { title: 'ga23', description: 'ga23 Image', image: '/ga23.jpg' },
    { title: 'ga24', description: 'ga24 Image', image: '/ga24.jpg' },
    { title: 'ga25', description: 'ga25 Image', image: '/ga25.jpg' },
    { title: 'ga26', description: 'ga26 Image', image: '/ga26.jpg' },
    { title: 'ga27', description: 'ga27 Image', image: '/ga27.jpg' },
    { title: 'ga28', description: 'ga28 Image', image: '/ga28.jpg' },
    { title: 'ga29', description: 'ga29 Image', image: '/ga29.jpg' },
    { title: 'jb1', description: 'jb1 Image', image: '/jb1.jpeg' },
    { title: 'jb2', description: 'jb2 Image', image: '/jb2.jpeg' },
    { title: 'jb3', description: 'jb3 Image', image: '/jb3.jpeg' },
    { title: 'jb4', description: 'jb4 Image', image: '/jb4.jpeg' },
    { title: 'jb5', description: 'jb5 Image', image: '/jb5.jpeg' },
    { title: 'jb6', description: 'jb6 Image', image: '/jb6.jpeg' },
    { title: 'jb7', description: 'jb7 Image', image: '/jb7.jpeg' },
    { title: 'jb8', description: 'jb8 Image', image: '/jb8.jpeg' },
    { title: 'jb9', description: 'jb9 Image', image: '/jb9.jpeg' },
    { title: 'jb10', description: 'jb10 Image', image: '/jb10.jpeg' },
    { title: 'jb11', description: 'jb11 Image', image: '/jb11.jpeg' },
    { title: 'jb12', description: 'jb12 Image', image: '/jb12.jpeg' },
    { title: 'n1', description: 'n1 Image', image: '/n1.jpg' },
    { title: 'n2', description: 'n2 Image', image: '/n2.jpg' },
    { title: 'n3', description: 'n3 Image', image: '/n3.jpg' },
    { title: 'n4', description: 'n4 Image', image: '/n4.jpg' },
    { title: 'n5', description: 'n5 Image', image: '/n5.jpg' },
    { title: 'n6', description: 'n6 Image', image: '/n6.jpg' },
    { title: 'n7', description: 'n7 Image', image: '/n7.jpg' },
    { title: 'n8', description: 'n8 Image', image: '/n8.jpg' },
    { title: 'n9', description: 'n9 Image', image: '/n9.jpg' },
    { title: 'n10', description: 'n10 Image', image: '/n10.jpg' },
    { title: 'n11', description: 'n11 Image', image: '/n11.jpg' },
    { title: 'n12', description: 'n12 Image', image: '/n12.jpg' },
    { title: 'n13', description: 'n13 Image', image: '/n13.jpg' },
    { title: 'n14', description: 'n14 Image', image: '/n14.jpg' },
    { title: 'n15', description: 'n15 Image', image: '/n15.jpg' },
    { title: 'n16', description: 'n16 Image', image: '/n16.jpg' },
    { title: 'n18', description: 'n18 Image', image: '/n18.jpg' },
    { title: 'n19', description: 'n19 Image', image: '/n19.jpg' },
    { title: 'n20', description: 'n20 Image', image: '/n20.jpg' },
 
  ];

  const handleCategoryClick = (title) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavClick(title);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Welcome Section */}
      <div className="text-center py-12">
        <h1 className="text-6xl font-bold mb-6 text-gray-900">
          Welcome to <span className="text-amber-400">Unique</span> Jewellery Shop
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-700">
          Discover the finest collection of jewellery with a wholesale price.
        </p>
      </div>

      {/* Products Section with Infinite Scroll */}
      <section className="w-full py-12">
        <h2 className="text-4xl font-serif text-center text-amber-600 mb-12">
          Our Collections
        </h2>

        {/* Infinite Scroll Container */}
        <div className="slider">
          <div className="slide-track">
            {[...mainCategories, ...mainCategories].map((category, index) => (
              <div className="slide" key={`${category.title}-${index}`}>
                <CategoryCard 
                  category={category}
                  index={index}
                  hoveredCategory={hoveredCategory}
                  setHoveredCategory={setHoveredCategory}
                  handleCategoryClick={handleCategoryClick}
                />
              </div>
            ))}
          </div>
        </div>

        {/* All Images Grid */}
        <div className="mt-24">
          <h2 className="text-4xl font-serif text-center text-amber-600 mb-12">
            All Collections
          </h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {allImages.map((item, index) => (
                <div 
                  key={item.title}
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleCategoryClick(item.title)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ category, index, hoveredCategory, setHoveredCategory, handleCategoryClick }) => (
  <div
    className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer h-[400px] w-full"
    onMouseEnter={() => setHoveredCategory(index)}
    onMouseLeave={() => setHoveredCategory(null)}
    onClick={() => handleCategoryClick(category.title)}
  >
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={category.image}
        alt={category.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-80" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
      <h3 className="text-2xl font-serif mb-2">
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
);

export default ProductCategories;