import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Briefcase } from "lucide-react";

const HomePillars = () => {
  const pillars = [
    {
      title: "Education",
      description:
        "Providing quality educational resources and support to help youth excel academically and unlock their potential.",
      icon: <BookOpen className="w-10 h-10 text-[#1AA1B3]" />,
    },
    {
      title: "Leadership",
      description:
        "Developing strong leaders who can drive positive change in their communities and beyond.",
      icon: <Users className="w-10 h-10 text-[#1AA1B3]" />,
    },
    {
      title: "Entrepreneurship",
      description:
        "Fostering entrepreneurial skills and mindset to create economic opportunities and sustainable livelihoods.",
      icon: <Briefcase className="w-10 h-10 text-[#1AA1B3]" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1AA1B3] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Three Pillars of Impact
        </motion.h2>

        <motion.p
          className="text-gray-700 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We believe in a holistic approach to youth development, focusing on
          three key areas that create lasting change in communities.
        </motion.p>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 border-t-4 border-[#1AA1B3]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold text-[#1AA1B3] mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="/projects"
            className="inline-block bg-[#1AA1B3] text-white px-8 py-3 rounded-md font-semibold shadow-md hover:bg-[#178b99] transition-all duration-300"
          >
            Explore All Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePillars;
