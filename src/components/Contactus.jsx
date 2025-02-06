import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-yellow-100 to-yellow-100 font-serif">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light tracking-wide text-amber-800 mb-3 animate-fade-in-down font-['Playfair_Display']">
            Contact Us
          </h2>
          <div className="w-29 h-1 bg-amber-600 mx-auto rounded-full animate-pulse" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Map Section */}
          <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden animate-slide-in-left">
            <div className="relative h-full min-h-[400px]">
              <Image 
                src="/l1.png"
                alt="Location Map"
                fill
                className="object-cover"
              />
              <a 
                href="https://maps.app.goo.gl/jaX6E6n4hkgthQGS9"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-amber-600 hover:bg-amber-700 text-white font-light py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2 shadow-lg hover:scale-105 transform active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                Get Location
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8 animate-slide-in-right">
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-amber-800 mb-6 font-['Playfair_Display']">
                Get in Touch
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:scale-105 hover:translate-x-2">
                  <div className="mt-1">
                    <MapPin className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1 text-lg">Our Location</h4>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-900">
                      #110, Wodeyar complex, Next to Bata showroom,<br />
                      Sampige road, Between 7th and 8th cross,<br />
                      Malleshwara, Bengaluru - 03<br />
                      Karnataka
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <a 
                  href="tel:+917892998441" 
                  className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:scale-105 hover:translate-x-2"
                >
                  <Phone className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1 text-lg">Phone</h4>
                    <p className="text-gray-600 group-hover:text-gray-900">+91 7892998441</p>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:uniquejewellery21@gmail.com" 
                  className="flex items-start gap-4 group cursor-pointer transition-all duration-300 hover:scale-105 hover:translate-x-2"
                >
                  <Mail className="w-6 h-6 text-amber-600 group-hover:text-amber-700" />
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1 text-lg">Email</h4>
                    <p className="text-gray-600 group-hover:text-gray-900">
                      uniquejewellery21@gmail.com
                    </p>
                  </div>
                </a>

                {/* Business Hours */}
                <div className="flex items-start gap-4 transition-all duration-300 hover:scale-105 hover:translate-x-2">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1 text-lg">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Sunday: 10:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <a 
                  href="tel:+917892998441"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-light py-3 px-6 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 hover:scale-105 transform active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a 
                  href="mailto:uniquejewellery21@gmail.com"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-light py-3 px-6 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 hover:scale-105 transform active:scale-95"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;