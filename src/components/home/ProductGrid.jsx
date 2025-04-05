import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products } from "../../constants/products";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";


const ProductGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedColors, setSelectedColors] = useState(
    Array(products.length).fill(0)
  );
  const [selectedCategory, setSelectedCategory] = useState("Flowers");

  const handleColorSelect = (productIndex, colorIndex) => {
    const newSelectedColors = [...selectedColors];
    newSelectedColors[productIndex] = colorIndex;
    setSelectedColors(newSelectedColors);
  };

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory.toLowerCase()
  );
  const { t } = useTranslation();
  const categories = [t("Flowers"), t("Bags"), t("Bracelets")];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("Our")} <span className="text-primary">{t("Collection")}</span>
        </motion.h2>

        {/* Navigation Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 border-2 rounded-full font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "border-gray-300 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                hoveredIndex={hoveredIndex}
                setHoveredIndex={setHoveredIndex}
                selectedColor={selectedColors[index]}
                onColorSelect={handleColorSelect}
              />
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No products available in this category.
            </p>
          )}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <motion.button
            className="px-8 py-3 border-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to="/products">View All Products</NavLink>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
