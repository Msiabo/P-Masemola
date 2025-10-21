import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, HeartHandshake } from "lucide-react";

const Projects = () => {
  const programs = [
    {
      title: "Education Support",
      description:
        "Comprehensive educational empowerment including menstrual education, sanitary products, and academic resources.",
      points: [
        "Menstrual education programs",
        "Sanitary pad distribution",
        "Educational material support",
        "School engagement initiatives",
      ],
      icon: <BookOpen className="w-10 h-10 text-[#1AA1B3]" />,
      bg: "bg-[#E8F8FA]",
    },
    {
      title: "Youth Leadership",
      description:
        "Building confident young leaders who can drive positive change in Mamelodi East communities.",
      points: [
        "Youth empowerment workshops",
        "Community leadership programs",
        "Young lady ownership model",
        "Community project development",
      ],
      icon: <Users className="w-10 h-10 text-[#1AA1B3]" />,
      bg: "bg-[#F4FCFD]",
    },
    {
      title: "Community Engagement",
      description:
        "Fostering sustainable community solutions and creating opportunities for breaking poverty cycles.",
      points: [
        "Community needs assessment",
        "Sustainable solution development",
        "Poverty cycle intervention",
        "Local partnership facilitation",
      ],
      icon: <HeartHandshake className="w-10 h-10 text-[#1AA1B3]" />,
      bg: "bg-[#E8F8FA]",
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
          Our Programs
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Discover how we're making a difference through our comprehensive
          programs designed to empower youth and strengthen Mamelodi East
          communities.
        </motion.p>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center rounded-2xl p-10 shadow-md hover:shadow-xl transition-all duration-300 ${program.bg}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Text Content */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                {program.icon}
                <h2 className="text-2xl md:text-3xl font-bold text-[#1AA1B3]">
                  {program.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {program.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {program.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* Decorative Side */}
            <motion.div
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-72 h-72 bg-[#1AA1B3]/10 rounded-full flex items-center justify-center border-4 border-[#F9A813]/50">
                {program.icon}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-[#1AA1B3]/2 text-[#1AA1B3] text-center py-20 px-6">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Make a Difference?
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-6 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Join us in empowering the next generation of leaders in Mamelodi East.
          Your support can transform lives and strengthen our community.
        </motion.p>
        <a
          href="/contact"
          className="inline-block bg-[#F9A813] text-[#980A26] px-8 py-3 rounded-md font-semibold shadow-md hover:bg-[#e0a111] transition-all duration-300"
        >
          Get Involved Today
        </a>
      </section>
    </div>
  );
};

export default Projects;
