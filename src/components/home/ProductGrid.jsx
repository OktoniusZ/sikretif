import React, { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState({
    key: "flowers",
    label: "Flowers"
  });
  const maxProductsToShow = 3;

  const handleColorSelect = (productIndex, colorIndex) => {
    const newSelectedColors = [...selectedColors];
    newSelectedColors[productIndex] = colorIndex;
    setSelectedColors(newSelectedColors);
  };

  const filteredProducts = products
    .filter((product) => product.category === selectedCategory.key)
    .slice(0, maxProductsToShow);

  const { t } = useTranslation();
  const categories = [
    { key: "flowers", label: t("Flowers") },
    { key: "bags", label: t("Bags") },
    { key: "bracelets", label: t("Bracelets") },
    { key: "phoneStraps", label: t("Phone Straps") }
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("Our")} <span className="text-primary">{t("Collection")}</span>
        </motion.h2>

        {/* Wrapping Navigation Tabs */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`px-4 py-2 text-sm sm:text-base border-2 rounded-full font-medium transition-colors duration-200 whitespace-nowrap ${
                  selectedCategory.key === category.key
                    ? "bg-primary text-white border-primary"
                    : "border-gray-200 hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
        <div className="text-center mt-8 md:mt-12">
          <motion.button
            className="px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base border-2 rounded-full font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to="/products">{t("View All Products")}</NavLink>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;