import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, HeartHandshake, Users, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-[#1AA1B3] to-[#148a9d] text-white text-center py-24 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get Involved
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Join our mission to empower youth and transform communities.  
          There are many ways you can make a meaningful difference.
        </motion.p>
      </section>

      {/* WAYS TO GET INVOLVED */}
      <section className="max-w-6xl mx-auto py-20 px-6 md:px-12 grid md:grid-cols-3 gap-10 text-center">
        <motion.div
          className="bg-[#E8F8FA] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <HeartHandshake className="w-12 h-12 mx-auto text-[#1AA1B3] mb-4" />
          <h3 className="text-2xl font-bold text-[#1AA1B3] mb-3">Donate</h3>
          <p className="text-gray-600 mb-6">
            Support our programs with a financial contribution that directly impacts youth development.
          </p>
          <a
            href="/donate"
            className="inline-block bg-[#F9A813] text-[#980A26] font-semibold px-6 py-3 rounded-md hover:bg-[#e0a111] transition-all"
          >
            Make a Donation
          </a>
        </motion.div>

        <motion.div
          className="bg-[#E8F8FA] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Users className="w-12 h-12 mx-auto text-[#1AA1B3] mb-4" />
          <h3 className="text-2xl font-bold text-[#1AA1B3] mb-3">Volunteer</h3>
          <p className="text-gray-600 mb-6">
            Share your skills and time to mentor youth and support our community programs.
          </p>
          <a
            href="/volunteer"
            className="inline-block bg-[#F9A813] text-[#980A26] font-semibold px-6 py-3 rounded-md hover:bg-[#e0a111] transition-all"
          >
            Become a Volunteer
          </a>
        </motion.div>

        <motion.div
          className="bg-[#E8F8FA] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Building2 className="w-12 h-12 mx-auto text-[#1AA1B3] mb-4" />
          <h3 className="text-2xl font-bold text-[#1AA1B3] mb-3">Partner</h3>
          <p className="text-gray-600 mb-6">
            Collaborate with us as a corporate partner to expand our reach and impact.
          </p>
          <a
            href="/partnership"
            className="inline-block bg-[#F9A813] text-[#980A26] font-semibold px-6 py-3 rounded-md hover:bg-[#e0a111] transition-all"
          >
            Explore Partnership
          </a>
        </motion.div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-5xl mx-auto py-20 px-6 md:px-12">
        <motion.h2
          className="text-3xl font-bold text-center text-[#1AA1B3] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Join Us?
        </motion.h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Fill out the form to get started. We'll reach out to discuss how you can best
          contribute to our mission of empowering youth.
        </p>

        <form
          className="bg-[#E8F8FA] rounded-2xl p-10 shadow-md space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1AA1B3]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1AA1B3]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1AA1B3]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                How would you like to get involved? *
              </label>
              <select
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1AA1B3]"
                required
              >
                <option value="">Select an option</option>
                <option value="donate">Donate</option>
                <option value="volunteer">Volunteer</option>
                <option value="partner">Partner</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Tell us more about your interest..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1AA1B3]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#F9A813] text-[#980A26] font-semibold px-8 py-3 rounded-md shadow-md hover:bg-[#e0a111] transition-all duration-300"
          >
            Submit Application
          </button>
        </form>

        {/* Contact Info */}
        <div className="text-center mt-12 space-y-2 text-gray-700">
          <p><Mail className="inline-block w-5 h-5 mr-2 text-[#1AA1B3]" /> pmasemolafoundation@gmail.com</p>
          <p><Phone className="inline-block w-5 h-5 mr-2 text-[#1AA1B3]" /> +27 66 295 0540</p>
          <p><MapPin className="inline-block w-5 h-5 mr-2 text-[#1AA1B3]" /> Ext 15, Mamelodi East, Pretoria, 0122, South Africa</p>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full h-[400px] md:h-[500px] mt-10">
        <iframe
          title="P Masemola Foundation Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.214977663947!2d28.408004315030604!3d-25.70692038364856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95653d96e6dc4b%3A0x70b5b8e70a0dd6f1!2sMamelodi%20East%2C%20Pretoria%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1697384934092!5m2!1sen!2sza"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
