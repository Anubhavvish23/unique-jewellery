'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'Bangles', path: '/bangles' },
        { name: 'Necklaces', path: '/necklaces' },
        { name: 'Gold Items', path: '/gold-items' },
        { name: 'New Arrivals', path: '/new-arrivals' },
      ]
    },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      link: 'https://www.facebook.com/share/1B36zhAfUD/', 
      label: 'Facebook' 
    },
    { 
      icon: Instagram, 
      link: 'https://www.instagram.com/uniquejewellery93?igsh=NjRiZmsyZTJuY2Zy', 
      label: 'Instagram' 
    },
    { 
      icon: Youtube, 
      link: 'https://youtube.com/@uniquejewellery-b7s?si=vQdSv-rfi9yAAJ6a', 
      label: 'YouTube' 
    },
  ];

  return (
    <footer 
      id="footer"
      className={`bg-gradient-to-r from-amber-100 to-yellow-100 pt-12 pb-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" legacyBehavior>
              <a className="text-3xl font-serif text-amber-500 hover:text-amber-700 transition-colors duration-300"
                 style={{ fontFamily: 'Playfair Display, serif' }}>
                Unique Jewellery
              </a>
            </Link>
            <p className="text-gray-600 mt-4">
              Elegant Jewellery collections with wholesale price
            </p>
          </div>

          {/* Navigation Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-600">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.path} legacyBehavior>
                      <a className="text-gray-600 hover:text-amber-500 transition-colors duration-300 transform hover:translate-x-1 inline-block">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-amber-600">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600 hover:text-amber-500 transition-colors duration-300">
                <Phone size={18} className="mr-2" /> +91 7892998441
              </p>
              <p className="flex items-center text-gray-600 hover:text-amber-500 transition-colors duration-300">
                <Mail size={18} className="mr-2" /> uniquejewellery21@gmail.com
              </p>
              <p className="flex items-center text-gray-600 hover:text-amber-500 transition-colors duration-300">
                <MapPin size={18} className="mr-2" /> #110, Wodeyar complex, Next to Bata showroom, Sampige road, Between 7th and 8th cross, Malleshwara, Bengaluru - 03
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-amber-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-500 hover:text-amber-700 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Unique Jewellery. All rights reserved.
            </p>
            <span className="hidden md:inline">•</span>
              <p className="text-gray-600 text-sm">
                Designed & Developed by{' '}
                <a 
                  href="https://www.notarc.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  Notarc
                </a>
              </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;