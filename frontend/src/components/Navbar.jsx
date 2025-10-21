import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const primaryColor = "#1AA1B3";
  const hoverColor = "#17b0c7";

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md backdrop-blur" : "bg-white"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center space-x-2">
          <img
            src={assets.logo}
            alt="P Masemola Foundation Logo"
            className="h-10 w-auto object-contain"
          />
         
        </div>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative group text-[#1AA1B3] hover:text-[#17b0c7] transition-colors duration-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#17b0c7] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="/donate"
            className="bg-[#1AA1B3] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#17b0c7] transition-all duration-300 shadow-sm"
          >
            Donate
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-[#1AA1B3] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1AA1B3]/95 backdrop-blur-sm px-4 py-4 space-y-3 text-white font-medium shadow-md"
          >
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="block py-2 hover:text-[#17b0c7] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/donate"
              className="block bg-[#17b0c7] text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-[#1AA1B3] transition-all"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
