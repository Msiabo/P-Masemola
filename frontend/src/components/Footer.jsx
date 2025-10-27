import React from "react";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import BackToTop from "./BackToTop";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-[#1AA1B3] via-[#148997] to-[#1AA1B3] text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-[#F5B800]">Contact Us</h3>
          <p className="flex items-center space-x-2">
            <Mail size={16} /> <span>pmasemolafoundation@gmail.com</span>
          </p>
          <p className="flex items-center space-x-2">
            <Phone size={16} /> <span>+27 66 295 0540</span>
          </p>

          {/* Social Links (same as header) */}
          <div className="flex space-x-4 mt-4">
            {[
              {
                icon: <Facebook size={20} />,
                href: "https://www.facebook.com/profile.php?id=100095305279324",
              },
              {
                icon: <Twitter size={20} />,
                href: "https://x.com/PMasemola59251",
              },
              {
                icon: <Instagram size={20} />,
                href: "https://www.instagram.com/", // add your Instagram link here
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F5B800] transition-all transform hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-[#F5B800]">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Get Involved", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-[#F5B800] transition-all duration-200"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </motion.div>
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
