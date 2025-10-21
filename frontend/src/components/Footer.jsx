import React from "react";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-[#1AA1B3] via-[#148997] to-[#1AA1B3] text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#F5B800]">Contact Us</h3>
          <p className="flex items-center space-x-2">
            <Mail size={16} /> <span>info@pmasemolafoundation.org</span>
          </p>
          <p className="flex items-center space-x-2">
            <Phone size={16} /> <span>+27 71 234 5678</span>
          </p>
          <div className="flex space-x-4 mt-2">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5B800] transition-all transform hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#F5B800]">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Get Involved", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-[#F5B800] transition-all duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter / Message */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-[#F5B800]">Stay Connected</h3>
          <p>
            Subscribe to receive the latest updates on our projects, events, and
            community programs.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 flex-1 rounded-full bg-white text-gray-800 shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F5B800] transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-[#F5B800] text-[#1AA1B3] font-semibold shadow-md hover:bg-[#e5aa00] transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Copyright */}
      <div className="mt-12 border-t border-[#F5B800]/40 pt-6 text-center text-sm text-[#F5B800]/80">
        &copy; {new Date().getFullYear()} P Masemola Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;