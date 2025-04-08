import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center aspect-square">
        <motion.img
          src={selectedImage}
          alt={product.name}
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[product.image, ...(product.additionalImages || [])].map(
          (img, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 flex items-center justify-center aspect-square cursor-pointer hover:bg-gray-100 transition"
              onClick={() => setSelectedImage(img)}
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
  );
};

export default ProductGallery;