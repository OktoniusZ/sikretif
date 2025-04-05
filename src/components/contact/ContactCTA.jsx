// components/contact/ContactCTA.jsx
import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactCTA = ({
  title = "Prefer to message us directly?",
  whatsappNumber = "+6281324582425",
  email = "hello@quillow.edu",
}) => {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-medium rounded-lg px-6 py-3 transition-colors"
        >
          <FaWhatsapp className="text-white text-xl" />
          WhatsApp Us
        </a>
        <a
          href={`mailto:${email}`}
          className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg px-6 py-3 transition-colors"
        >
          <FaEnvelope className="text-white text-xl" />
          Send Email
        </a>
      </div>
    </div>
  );
};

export default ContactCTA;
