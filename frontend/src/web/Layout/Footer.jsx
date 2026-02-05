import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700/90 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold mb-3">HealthCare</h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            Providing compassionate healthcare and advanced medical services to our community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-300 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-blue-300 transition">Services</a></li>
            <li><a href="/doctors" className="hover:text-blue-300 transition">Doctors</a></li>
            <li><a href="/contact" className="hover:text-blue-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-blue-100 text-sm">123 Health St, Wellness City</p>
          <p className="text-blue-100 text-sm mt-1">Phone: (123) 456-7890</p>
          <p className="text-blue-100 text-sm mt-1">Email: info@medino.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full 
              bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-blue-400 py-3 text-center text-blue-100 text-xs">
        &copy; {new Date().getFullYear()} Medino Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
