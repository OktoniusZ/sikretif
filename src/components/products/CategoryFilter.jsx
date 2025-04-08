/* eslint-disable no-unused-vars */
import { FiX, FiChevronDown, FiFilter } from "react-icons/fi";
import { motion } from "framer-motion";

export const CategoryFilter = ({
  categories,
  activeCategory,
  setActiveCategory,
  mobileFiltersOpen,
  setMobileFiltersOpen,
}) => (
  <>
    {/* Desktop Filter */}
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

    {/* Mobile Filter */}
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
  </>
);
