"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Bg from "../components/Bg";
import ProductCategories from "../components/Products";
import Footer from "../components/Footer";
import Bangles from "../components/Bangles";
import Necklace from "../components/Necklace";
import Golditems from "../components/Golditems";
import Jadebille from "../components/Jadebille";
import Dab from "../components/Dab";
import Earings from "../components/Earings";
import Contactus from "../components/Contactus";
import Aboutus from "../components/Aboutus";

export default function Home() {
  const [activePage, setActivePage] = useState(null);

  // Add console log to debug state changes
  const handlePageChange = (page) => {
    console.log('Setting active page to:', page); // Debug log
    setActivePage(page);
  };

  const renderContent = () => {
    console.log('Current active page:', activePage); // Debug log
    switch(activePage) {
      case 'Bangles':
        return <Bangles />;
      case 'Necklace':
        return <Necklace />;
      case 'Gold Items':
        return <Golditems />;
      case 'Jadebille':
        return <Jadebille />;
      case 'Dab':
        return <Dab />;
      case 'Earings':
        return <Earings />;
      default:
        return (
          <main className="flex-grow">
            <Bg />
            <ProductCategories onNavClick={handlePageChange} />
            <Aboutus />
            <Contactus />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavClick={handlePageChange} />
      {renderContent()}
      <Footer />
    </div>
  );
}