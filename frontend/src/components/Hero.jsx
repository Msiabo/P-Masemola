import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-4 sm:px-6 md:px-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Transforming Communities, Empowering Lives
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
          Join P Masemola Foundation in creating sustainable opportunities, promoting education, and inspiring positive change.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
          {/* Get Involved Button */}
          <Link
            to="/contact"
            className="bg-[#1AA1B3] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#17b0c7] transition-all w-full sm:w-auto text-center"
          >
            Get Involved
          </Link>

          {/* Donate Now Button */}
          <Link
            to="/donate"
            className="border-2 border-[#1AA1B3] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#1AA1B3] hover:text-white transition-all w-full sm:w-auto text-center"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
