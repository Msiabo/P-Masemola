import React from "react";
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const primaryColor = "#1AA1B3"; // P Masemola Foundation color

  return (
    <header className="w-full bg-[#1AA1B3] text-white text-sm py-2 px-6 flex flex-col md:flex-row items-center justify-between shadow-sm">
      {/* Left: Contact Info */}
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-1">
          <Mail size={14} className="text-white" />
          <span className="hover:text-white cursor-pointer transition-colors">
            info@pmasemola.org
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <Phone size={14} className="text-white" />
          <span className="hover:text-white cursor-pointer transition-colors">
            +27 71 234 5678
          </span>
        </div>
      </motion.div>

      {/* Center: Animated Message */}
      <motion.div
        className="text-center font-semibold text-xs md:text-sm mt-2 md:mt-0 text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.3,
        }}
      >
        Empowering Communities for a Better Tomorrow 🌍
      </motion.div>

      {/* Right: Social Links */}
      <motion.div
        className="flex items-center space-x-3 mt-2 md:mt-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {[
          { icon: <Facebook size={16} />, href: "https://www.facebook.com/profile.php?id=100095305279324" },
          { icon: <Twitter size={16} />, href: "https://x.com/PMasemola59251" },
          
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:text-white transition-all transform hover:scale-110`}
          >
            {item.icon}
          </a>
        ))}
      </motion.div>
    </header>
  );
};

export default Header;
