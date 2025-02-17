"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-50 to-green-50 mt-10 font-ubuntu py-16 px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6 tracking-wide">
          Contact Us
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
          We'd love to hear from you! Feel free to reach out via email, phone, or visit our location.
        </p>

        {/* Contact Details */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
          {/* Location */}
          <div className="flex items-center space-x-4 mb-6">
            <FaMapMarkerAlt className="text-red-500 text-3xl" />
            <p className="text-xl text-gray-700 font-medium">
              Kakuma Refugee Camp
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 mb-6">
            <FaEnvelope className="text-blue-500 text-3xl" />
            <p className="text-xl text-gray-700 font-medium">
              info.educateus@gmail.com
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 mb-6">
            <FaPhone className="text-green-500 text-3xl" />
            <p className="text-xl text-gray-700 font-medium">+254 111 955 733</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg shadow-md transition-all duration-300 hover:bg-green-500 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
