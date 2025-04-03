import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../constants/products";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import UnderDevelopmentPopup from "../components/UnderDevelopment";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  const [quantity, setQuantity] = useState(1);
  const [expandedSections, setExpandedSections] = useState({
    description: true,
    dimensions: false,
    fabric: false,
    delivery: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }
  const whatsappNumber = "00000"; // Replace with your number
  const whatsappMessage = `Hi, I'd like to place an order for: ${product.name} (${product.price})`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const showAlert = () => {
    Swal.fire({
      title: "Feature Coming Soon!",
      text: "Our online checkout is under development. You can order via WhatsApp instead.",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Chat on WhatsApp",
      cancelButtonText: "Continue Browsing",
      customClass: {
        popup: "rounded-lg shadow-lg",
        title: "text-lg font-bold",
        confirmButton:
          "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md",
        cancelButton:
          "border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-md",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(whatsappLink, "_blank");
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-white pt-24"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-black mb-8 transition-colors"
      >
        <FiArrowLeft className="mr-2" /> Back to products
      </button>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Product Images */}
        <div className="space-y-6">
          {/* Main Image */}
          <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center aspect-square">
            <motion.img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-contain"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {[product.image, ...(product.additionalImages || [])].map(
              (img, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 flex items-center justify-center aspect-square cursor-pointer hover:bg-gray-100 transition"
                  onClick={() => setSelectedImage(img)} // Update selected image on click
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className={`w-full h-full object-contain ${
                      selectedImage === img ? "border-2 border-black" : ""
                    }`}
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Column - Product Information */}
        <div className="space-y-6">
          {/* Category */}
          <p className="text-sm text-gray-500 uppercase tracking-wider">
            {product.category} COLLECTION
          </p>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>

          {/* Delivery Info */}
          <p className="text-sm text-gray-500">
            Delivery within 3-5 business days
          </p>

          {/* Description */}
          <div className="border-b border-gray-200 pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleSection("description")}
            >
              <h3 className="text-lg font-medium">Description</h3>
              {expandedSections.description ? (
                <FiChevronUp />
              ) : (
                <FiChevronDown />
              )}
            </button>
            {expandedSections.description && (
              <p className="mt-3 text-gray-600">{product.description}</p>
            )}
          </div>

          {/* Price */}
          <div className="space-y-1">
            <p className="text-2xl font-bold">{product.price}</p>
            <p className="text-sm text-gray-500">
              Member price: Rp
              {(parseFloat(product.price.replace("$", "")) * 0.9).toFixed(2)}
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <p className="text-sm font-medium">Quantity</p>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <FiMinus />
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <FiPlus />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button
              onClick={showAlert}
              className="border-2 border-black rounded-lg py-3 font-medium hover:bg-gray-50 active:bg-gray-100"
            >
              Add to Cart
            </button>
            <button
              onClick={showAlert}
              className="bg-black text-white rounded-lg py-3 font-medium hover:bg-gray-800 active:bg-gray-900"
            >
              Buy Now
            </button>
          </div>

          {/* Additional Info Sections */}
          <div className="space-y-4 pt-6">
            {[
              {
                key: "dimensions",
                title: "Dimensions",
                content: product.dimensions,
              },
              {
                key: "fabric",
                title: "Fabric Details",
                content: product.fabricDetails,
              },
              {
                key: "delivery",
                title: "Delivery & Returns",
                content: product.deliveryInfo,
              },
            ].map((section) => (
              <div key={section.key} className="border-b border-gray-200 pb-4">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleSection(section.key)}
                >
                  <h3 className="text-lg font-medium">{section.title}</h3>
                  {expandedSections[section.key] ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </button>
                {expandedSections[section.key] && (
                  <div className="mt-3 text-gray-600">
                    {Array.isArray(section.content) ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {section.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{section.content}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <UnderDevelopmentPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        product={product} // Pass product for dynamic WhatsApp message
      />
    </motion.div>
  );
};

export default ProductDetail;
