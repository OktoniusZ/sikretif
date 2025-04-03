import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "../../constants/products";

const ProductGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedColors, setSelectedColors] = useState(
    Array(products.length).fill(0)
  );

  const handleColorSelect = (productIndex, colorIndex) => {
    const newSelectedColors = [...selectedColors];
    newSelectedColors[productIndex] = colorIndex;
    setSelectedColors(newSelectedColors);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-primary">Collection</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              selectedColor={selectedColors[index]}
              onColorSelect={handleColorSelect}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.button
            className="px-8 py-3 border-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
