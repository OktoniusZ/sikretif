/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import ProductCard from "../home/ProductCard";

export const ProductGrid = ({ products, activeCategory }) => (
  <div className="flex-1">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold text-gray-900">
        {activeCategory === "all"
          ? "All Products"
          : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
      </h2>
    </div>

    {products.length > 0 ? (
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </motion.div>
    ) : (
      <div className="text-center py-12">
        <p className="text-gray-500">No products found in this category</p>
      </div>
    )}
  </div>
);