import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../constants/products";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import UnderDevelopmentPopup from "../components/UnderDevelopment";
import ProductNotFound from "../components/products/productDetail/ProductNotFound";
import ProductGallery from "../components/products/productDetail/ProductGallery";
import ProductInfo from "../components/products/productDetail/ProductInfo";
import Swal from "sweetalert2";

const extractPriceNumber = (priceString) => {
  const numericValue = parseFloat(priceString.replace(/[^0-9.]/g, ""));
  return isNaN(numericValue) ? 0 : numericValue;
};

const formatPrice = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showAlert = (product, quantity, basePrice, totalPrice) => {
    const whatsappNumber = "+6281324582425";
    const whatsappMessage = `Hi, I'd like to place an order for: ${
      product.name
    } (${quantity} × ${formatPrice(basePrice)} = ${formatPrice(totalPrice)})`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    Swal.fire({
      title: "Feature Coming Soon!",
      text: "Our online checkout is under development. You can order via WhatsApp instead.",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Chat on WhatsApp",
      buttonsStyling: false,
      cancelButtonText: "Continue Browsing",
      customClass: {
        popup: "rounded-lg shadow-lg",
        title: "text-lg font-bold",
        confirmButton:
          "bg-greenPrimary hover:bg-greenSecondary text-white px-4 py-2 rounded-md mr-4",
        cancelButton:
          "border bg-primary border-gray-300 hover:bg-secondary text-white px-4 py-2 rounded-md",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(whatsappLink, "_blank");
      }
    });
  };

  if (!product) {
    return <ProductNotFound navigate={navigate} />;
  }

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
        <ProductGallery product={product} />
        <ProductInfo 
          product={product} 
          showAlert={showAlert} 
          extractPriceNumber={extractPriceNumber}
          formatPrice={formatPrice}
        />
      </div>
      
      <UnderDevelopmentPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        product={product}
      />
    </motion.div>
  );
};

export default ProductDetail;