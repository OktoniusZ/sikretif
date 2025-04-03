import React from "react";
import { FiX, FiMessageSquare, FiShoppingBag } from "react-icons/fi";

const UnderDevelopmentPopup = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  const whatsappNumber = "1234567890"; // Replace with your number
  const whatsappMessage = `Hi, I'd like to place an order for: ${product.name} (${product.price})`;
  return (
    <div className="fixed inset-0 z-50">
      {/* Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup Container */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-4 shadow-xl relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <FiShoppingBag className="text-yellow-600 mr-2 text-xl" />
              <h3 className="text-lg font-bold">Feature Coming Soon!</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Body */}
          <p className="text-gray-600 mb-4 text-sm">
            Our online checkout is under development. Please order via WhatsApp:
          </p>

          {/* Actions */}
          <div className="flex flex-col space-y-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded font-medium text-sm"
            >
              <FiMessageSquare className="mr-2" />
              Order via WhatsApp
            </a>
            <button
              onClick={onClose}
              className="border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded font-medium text-sm"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UnderDevelopmentPopup);
