// components/contact/ContactCard.jsx
import React from "react";

const ContactCard = ({
  // eslint-disable-next-line no-unused-vars
  icon: Icon,
  contactInfo,
  label,
  iconColor = "purple",
  hoverColor = "purple",
}) => {
  const colorClasses = {
    purple: {
      iconBg: "bg-purple-100 group-hover:bg-purple-200",
      icon: "text-purple-600 group-hover:text-purple-700",
      text: "group-hover:text-purple-700",
      label: "group-hover:text-purple-500",
      border: "hover:border-purple-500",
    },
    pink: {
      iconBg: "bg-pink-100 group-hover:bg-pink-200",
      icon: "text-pink-600 group-hover:text-pink-700",
      text: "group-hover:text-pink-700",
      label: "group-hover:text-pink-500",
      border: "hover:border-pink-500",
    },
    yellow: {
      iconBg: "bg-yellow-100 group-hover:bg-yellow-200",
      icon: "text-yellow-600 group-hover:text-yellow-700",
      text: "group-hover:text-yellow-700",
      label: "group-hover:text-yellow-500",
      border: "hover:border-yellow-500",
    },
  };

  return (
    <div
      className={`group bg-white rounded-lg border-b-4 border-primary shadow-md p-6 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${colorClasses[hoverColor].border}`}
    >
      <div
        className={`w-16 h-16 rounded-full ${colorClasses[iconColor].iconBg} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}
      >
        <Icon
          className={`${colorClasses[iconColor].icon} text-2xl transition-all duration-300 group-hover:scale-125`}
        />
      </div>
      <p
        className={`text-gray-800 font-medium transition-colors duration-300 ${colorClasses[hoverColor].text}`}
      >
        {contactInfo}
      </p>
      <p
        className={`text-gray-500 text-sm mt-1 transition-colors duration-300 ${colorClasses[hoverColor].label}`}
      >
        {label}
      </p>
    </div>
  );
};

export default ContactCard;
