// components/contact/ContactHeader.jsx
import React from "react";

const ContactHeader = ({ badgeText, title, description }) => {
  return (
    <>
      {/* Badge-style label */}
      <div className="bg-primary rounded-full inline-block px-4 py-1 mb-6">
        <p className="text-white text-xs font-medium tracking-wider uppercase">
          {badgeText}
        </p>
      </div>

      {/* Main heading */}
      <h1 className="text-4xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
        {title}
      </h1>
      <p className="text-center text-lg">{description}</p>
    </>
  );
};

export default ContactHeader;
