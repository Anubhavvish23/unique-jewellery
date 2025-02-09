"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Bangles",
    path: "/#Bangles",
  },
  {
    title: "Necklaces",
    path: "/#Necklace",
  },
  {
    title: "Gold Items",
    path: "/#Golditems",
  },
];

const Navbar = ({ onNavClick }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    if (onNavClick) {
      onNavClick(link.title === 'Necklaces' ? 'Necklace' : link.title);
    }
    setNavbarOpen(false); // Close mobile navbar
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-amber-100 shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link
              href="/"
              className={`flex items-center gap-4 text-3xl font-semibold transition-colors duration-300 ${
                scrolled ? "text-amber-700" : "text-amber-500"
              }`}
            >
              <span>Unique Jewellery</span>
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img 
                  src="/Adarsh.jpg" 
                  alt="Adarsh Jewellery"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  onClick={() => handleLinkClick(link)}
                  className={`text-lg font-medium transition-colors duration-300 hover:text-amber-700 ${
                    scrolled ? "text-amber-700" : "text-amber-500"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <X
                  className={`h-8 w-8 transition-colors duration-300 ${
                    scrolled ? "text-amber-700" : "text-amber-500"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-8 w-8 transition-colors duration-300 ${
                    scrolled ? "text-amber-700" : "text-amber-500"
                  }`}
                />
              )}
            </button>
          </div>

          <div
            className={`md:hidden transition-all duration-300 ${
              navbarOpen
                ? "max-h-screen opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
          >
            <div className="py-4 space-y-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  onClick={() => handleLinkClick(link)}
                  className={`block w-full text-left px-4 py-2 text-lg font-medium transition-colors duration-300 hover:bg-amber-100 ${
                    scrolled ? "text-amber-700" : "text-amber-500"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {navbarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      <div className="h-20" />
    </>
  );
};

export default Navbar;