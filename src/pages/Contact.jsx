import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactHeader from "../components/contact/ContactHeader";
import ContactCard from "../components/contact/ContactCard";
import ContactCTA from "../components/contact/ContactCTA";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
      {/* Centered card container */}
      <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10 w-full max-w-4xl">
        <ContactHeader
          badgeText="Contact Information"
          title="Get in Touch with Us"
          description="Have a question or a special request? We'd love to hear from you!
          Whether you're looking for a custom handmade beaded piece, need
          assistance with an order, or just want to say hello, feel free to
          reach out. Our team is here to help and ensure you have the best
          experience with our handcrafted collections. 💖✨"
        />

        {/* Three contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <ContactCard
            icon={FaWhatsapp}
            contactInfo="(+67) 0422 332 235"
            label="WhatsApp"
            iconColor="purple"
            hoverColor="purple"
          />

          <ContactCard
            icon={FaEnvelope}
            contactInfo="hello@quillow.edu"
            label="Email"
            iconColor="pink"
            hoverColor="pink"
          />

          <ContactCard
            icon={FaMapMarkerAlt}
            contactInfo="San Francisco, CA"
            label="Headquarters"
            iconColor="yellow"
            hoverColor="yellow"
          />
        </div>

        <ContactCTA />
      </div>
    </div>
  );
};

export default ContactPage;
