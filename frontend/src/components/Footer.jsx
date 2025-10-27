import React from "react";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import BackToTop from "./BackToTop";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-t from-[#148997] via-[#1AA1B3] to-[#148997] text-white py-16 overflow-hidden">
      {/* Decorative Glow Circles */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#F5B800]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#F5B800]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {/* Contact Info */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-[#F5B800] tracking-wide">
            Contact Us
          </h3>
          <p className="flex items-center space-x-2 text-sm">
            <Mail size={16} className="text-[#F5B800]" />{" "}
            <span>pmasemolafoundation@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2 text-sm">
            <Phone size={16} className="text-[#F5B800]" />{" "}
            <span>+27 66 295 0540</span>
          </p>

          {/* Social Links */}
          <div className="flex space-x-5 mt-5">
            {[
              {
                icon: <Facebook size={22} />,
                href: "https://www.facebook.com/profile.php?id=100095305279324",
              },
              {
                icon: <Twitter size={22} />,
                href: "https://x.com/PMasemola59251",
              },
             
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-white/10 hover:bg-[#F5B800]/20 transition-all duration-300 shadow-md hover:shadow-[#F5B800]/30"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider (visible on mobile) */}
        <div className="md:hidden border-t border-white/30"></div>

        {/* Quick Links */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-[#F5B800] tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Projects", "Get Involved", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[#F5B800] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>

        {/* Foundation Message */}
        <motion.div
          className="space-y-4 text-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-2xl font-bold text-[#F5B800] tracking-wide">
            Our Mission
          </h3>
          <p className="text-white/90 leading-relaxed">
            Empowering communities through education, healthcare, and
            sustainable development — building a brighter future together.
          </p>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Copyright */}
      <div className="mt-16 border-t border-[#F5B800]/30 pt-6 text-center text-sm text-[#F5B800]/80 z-10 relative">
        &copy; {new Date().getFullYear()} P Masemola Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
