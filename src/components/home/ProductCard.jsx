import React from "react";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LazyMotionImage from "../LazyMotionImage";

const ProductCard = ({
  product,
  index,
  hoveredIndex,
  setHoveredIndex,
  selectedColor,
  onColorSelect,
}) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col group">
        {/* Image Container */}
        <div
          className="relative bg-gray-50 h-96 flex items-center justify-center aspect-square cursor-pointer"
          onClick={handleProductClick}
        >
          {/* Product Image */}
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            <LazyMotionImage
              src={product.image}
              alt={product.name}
              className="w-full h-4/5 object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            {/* <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-4/5 object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            /> */}
            {/* Quick Actions */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center gap-4 transition-all duration-300 ${
                hoveredIndex === index ? "opacity-0" : "opacity-0"
              }`}
            >
              <motion.button
                className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiHeart className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiShoppingBag className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 flex-grow flex flex-col">
          <h3
            className="font-bold text-lg mb-1 hover:text-primary transition-colors cursor-pointer"
            onClick={handleProductClick}
          >
            {product.name}
          </h3>
          <p className="text-gray-600 mb-3">{product.price}</p>

          {/* Color Selector */}
          <div className="mt-auto flex items-center space-x-2">
            {product.colors.map((color, colorIndex) => (
              <motion.button
                key={colorIndex}
                onClick={(e) => {
                  e.stopPropagation();
                  onColorSelect(index, colorIndex);
                }}
                className={`w-4 h-4 rounded-full border ${
                  selectedColor === colorIndex
                    ? "border-gray-800 scale-110"
                    : "border-gray-300"
                } transition-transform`}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${colorIndex + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
