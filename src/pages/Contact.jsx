import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
      {/* Centered card container */}
      <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10 w-full max-w-4xl">
        {/* Badge-style label */}
        <div className="bg-primary rounded-full inline-block px-4 py-1 mb-6">
          <p className="text-white text-xs font-medium tracking-wider uppercase">
            Contact Information
          </p>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Get in Touch with Us
        </h1>
        <p className="text-center text-lg">
          Have a question or a special request? We'd love to hear from you!
          Whether you're looking for a custom handmade beaded piece, need
          assistance with an order, or just want to say hello, feel free to
          reach out. Our team is here to help and ensure you have the best
          experience with our handcrafted collections. 💖✨
        </p>

        {/* Three contact cards with enhanced hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {/* WhatsApp Card */}
          <div className="group bg-white rounded-lg border-b-4 border-primary shadow-md p-6 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-purple-500">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-purple-200 group-hover:scale-110">
              <FaWhatsapp className="text-purple-600 text-2xl transition-all duration-300 group-hover:text-purple-700 group-hover:scale-125" />
            </div>
            <p className="text-gray-800 font-medium transition-colors duration-300 group-hover:text-purple-700">
              (+67) 0422 332 235
            </p>
            <p className="text-gray-500 text-sm mt-1 transition-colors duration-300 group-hover:text-purple-500">
              WhatsApp
            </p>
          </div>

          {/* Email Card */}
          <div className="group bg-white rounded-lg border-b-4 border-primary shadow-md p-6 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-pink-500">
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-pink-200 group-hover:scale-110">
              <FaEnvelope className="text-pink-600 text-2xl transition-all duration-300 group-hover:text-pink-700 group-hover:scale-125" />
            </div>
            <p className="text-gray-800 font-medium transition-colors duration-300 group-hover:text-pink-700">
              hello@quillow.edu
            </p>
            <p className="text-gray-500 text-sm mt-1 transition-colors duration-300 group-hover:text-pink-500">
              Email
            </p>
          </div>

          {/* Location Card */}
          <div className="group bg-white rounded-lg border-b-4 border-primary shadow-md p-6 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-yellow-500">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-yellow-200 group-hover:scale-110">
              <FaMapMarkerAlt className="text-yellow-600 text-2xl transition-all duration-300 group-hover:text-yellow-700 group-hover:scale-125" />
            </div>
            <p className="text-gray-800 font-medium transition-colors duration-300 group-hover:text-yellow-700">
              San Francisco, CA
            </p>
            <p className="text-gray-500 text-sm mt-1 transition-colors duration-300 group-hover:text-yellow-500">
              Headquarters
            </p>
          </div>
        </div>

        {/* Additional CTA section */}
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Prefer to message us directly?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`https://wa.me/670422332235`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-medium rounded-lg px-6 py-3 transition-colors"
            >
              <FaWhatsapp className="text-white text-xl" />
              WhatsApp Us
            </a>
            <a
              href="mailto:hello@quillow.edu"
              className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg px-6 py-3 transition-colors"
            >
              <FaEnvelope className="text-white text-xl" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
