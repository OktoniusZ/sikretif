import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiFilter, FiX, FiChevronDown } from "react-icons/fi";
import ProductCard from "../components/home/ProductCard";
import { products } from "../constants/products";
import beads from "../../public/images/beads.jpg";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  // Extract unique categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products based on category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${beads})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-3xl font-bold text-white sm:text-4xl pt-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Complete Collection
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-white max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Discover the perfect pair for every occasion
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Button */}
          {/* <button
            type="button"
            className="md:hidden flex items-center gap-2 text-gray-700 mb-4"
            onClick={() => setMobileFiltersOpen(true)}
          >
            <FiFilter className="h-5 w-5" />
            <span>Filters</span>
          </button> */}

          {/* Category Navigation - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-4">
              <h3 className="font-medium text-gray-900">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === category
                          ? "bg-primary-100 text-primary-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Category Navigation (Sidebar) */}
          {mobileFiltersOpen && (
            <motion.div
              className="fixed inset-0 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <motion.div
                className="relative flex flex-col w-full max-w-xs h-full bg-white shadow-xl"
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex items-center justify-between px-4 py-5 border-b">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <FiX className="h-6 w-6" />
                  </button>
                </div>
                <div className="p-4 overflow-y-auto">
                  <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => {
                            setActiveCategory(category);
                            setMobileFiltersOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            activeCategory === category
                              ? "bg-primary-100 text-primary-700 font-medium"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Category Title */}
            {/* Product Grid Header - Now with combined filter/category button */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeCategory === "all"
                  ? "All Products"
                  : activeCategory.charAt(0).toUpperCase() +
                    activeCategory.slice(1)}
              </h2>

              {/* Mobile: Combined Category & Filter Button */}
              <div className="relative md:hidden">
                <button
                  className="flex items-center gap-2 text-gray-700 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 shadow-sm"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <FiFilter className="h-4 w-4" /> {/* Added filter icon */}
                  <span>
                    {activeCategory === "all" ? "Filters" : activeCategory}
                  </span>
                  <FiChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No products found in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
