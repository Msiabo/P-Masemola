import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const HomeAbout = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={assets.founder} // Replace with an image of the foundation or community work
            alt="About P Masemola Foundation"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="flex-1 text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1AA1B3] mb-6">
            About P Masemola Foundation
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The <span className="font-semibold">P Masemola Foundation</span> is dedicated
            to empowering communities through education, health awareness, and
            sustainable development initiatives. We believe in fostering
            long-term impact by creating opportunities that uplift individuals
            and strengthen families across South Africa.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Guided by compassion and integrity, we partner with local
            organizations, youth groups, and stakeholders to deliver programs
            that inspire growth, equality, and hope for a brighter future.
          </p>

          <button className="bg-[#1AA1B3] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#17b0c7] transition-all">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
