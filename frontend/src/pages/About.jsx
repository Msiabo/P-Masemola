import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Award, Quote } from "lucide-react";
import founderImage from "../assets/founder2.jpg"; // 🔹 Replace with actual image path

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-[#1AA1B3]" />,
      title: "Compassion",
      description:
        "We serve with empathy, prioritizing dignity and care in every initiative. Every program we run starts with understanding the needs of our youth and communities.",
    },
    {
      icon: <Award className="w-8 h-8 text-[#1AA1B3]" />,
      title: "Excellence",
      description:
        "We are dedicated to achieving meaningful impact through integrity, accountability, and consistent effort in everything we do.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#1AA1B3]" />,
      title: "Community",
      description:
        "We believe in collaboration and unity. By working hand-in-hand with local partners and schools, we multiply our reach and strengthen our impact.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#1AA1B3]" />,
      title: "Innovation",
      description:
        "We continuously explore new ideas and solutions that help us better serve youth and create sustainable opportunities.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#1AA1B3] text-white py-24 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Story – P. Masemola Foundation
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Born from a deep need to uplift young people in underserved areas, the
          P. Masemola Foundation is rooted in a passion for growth, dignity, and
          opportunity.
        </motion.p>
      </section>

      {/* About Story Section */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1AA1B3] mb-6">Our Journey</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Inspired by the legacy of a leader devoted to community empowerment,
            our foundation carries that mission forward — focused on education,
            leadership, and local impact.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we work closely with schools and youth in Mamelodi East and
            beyond, offering mentorship, career guidance, and skill-building
            opportunities that open doors and spark long-term change. Through
            collaboration and dedication, we aim to create environments where
            every young person can reach their full potential.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1AA1B3] mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To inspire and support youth in rural and township communities by
            focusing on access to education, life skills, and leadership growth
            that sparks sustainable progress.
          </p>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-[#1AA1B3] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border-t-4 border-[#F9A813]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#1AA1B3] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gray-100 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={founderImage}
              alt="Founder P. Masemola"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-[#1AA1B3] mb-4">
              The Visionary Behind Our Work
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The P. Masemola Foundation was founded by <strong>Mr. P. Masemola</strong>,
              a leader who has dedicated his life to empowering the youth and
              creating lasting impact through education and community programs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              His belief is simple yet powerful: *“When we invest in young
              minds, we invest in the future of our nation.”* This philosophy
              drives every initiative and inspires the foundation to continue
              its mission with passion and purpose.
            </p>

            <div className="flex items-center text-[#1AA1B3] italic font-medium">
              <Quote className="w-5 h-5 mr-2" />
              “Leadership is not about position, it’s about purpose — and the
              courage to serve others.”
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#1AA1B3]/2 text-[#1AA1B3] py-16 text-center px-6">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Building a Future Together
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-6 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Every step we take is guided by purpose and unity. Join us in creating
          a world where every young person can dream, lead, and thrive.
        </motion.p>
        <a
          href="/contact"
          className="inline-block bg-[#F9A813] text-[#980A26] px-8 py-3 rounded-md font-semibold shadow-md hover:bg-[#e0a111] transition-all duration-300"
        >
          Get Involved
        </a>
      </section>
    </div>
  );
};

export default About;
