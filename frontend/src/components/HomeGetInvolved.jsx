import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, Users, HandCoins } from "lucide-react";

const HomeGetInvolved = () => {
  const waysToHelp = [
    {
      icon: <Users className="w-10 h-10 text-[#1AA1B3]" />,
      title: "Volunteer",
      description:
        "Join our community of passionate volunteers making a difference in the lives of youth and families across South Africa.",
    },
    {
      icon: <HandCoins className="w-10 h-10 text-[#1AA1B3]" />,
      title: "Donate",
      description:
        "Your contribution helps us fund education programs, skills training, and community development projects.",
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-[#1AA1B3]" />,
      title: "Partner With Us",
      description:
        "Collaborate with the foundation to create impactful, sustainable initiatives that empower local communities.",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1AA1B3] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get Involved
        </motion.h2>

        <motion.p
          className="text-gray-700 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Together, we can transform communities and build a brighter future.
          Whether you volunteer, donate, or partner with us — your support
          drives real, lasting impact.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {waysToHelp.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-2xl shadow-md p-8 hover:shadow-lg transition-all duration-300 border-t-4 border-[#1AA1B3]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#1AA1B3] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="/contact"
            className="inline-block bg-[#1AA1B3] text-white px-8 py-3 rounded-md font-semibold shadow-md hover:bg-[#178b99] transition-all duration-300"
          >
            Join the Movement
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeGetInvolved;
