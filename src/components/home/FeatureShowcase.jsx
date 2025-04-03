import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Adaptive Cushioning",
      description:
        "Our proprietary foam technology adjusts to your foot's unique shape and movement patterns for personalized comfort.",
      icon: "🔄",
      stats: "87% better impact absorption",
    },
    {
      title: "Breathable Mesh",
      description:
        "Engineered ventilation keeps your feet cool and dry even during intense activities.",
      icon: "🌬️",
      stats: "42% increased airflow",
    },
    {
      title: "Eco-Friendly Materials",
      description:
        "Made from 100% recycled materials without compromising durability or performance.",
      icon: "♻️",
      stats: "73% lower carbon footprint",
    },
  ];

  const nextFeature = () => {
    setActiveTab((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevFeature = () => {
    setActiveTab((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Engineered for <span className="text-blue-600">Performance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the innovative technologies that set our footwear apart
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <div className="flex justify-center gap-4 mb-8">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === index
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="text-5xl">{features[activeTab].icon}</div>
                  <h3 className="text-2xl font-bold">
                    {features[activeTab].title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {features[activeTab].description}
                  </p>
                  <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg inline-block">
                    {features[activeTab].stats}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Feature Visualization</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 space-y-6"
            >
              <div className="text-4xl text-center">
                {features[activeTab].icon}
              </div>
              <h3 className="text-xl font-bold text-center">
                {features[activeTab].title}
              </h3>
              <p className="text-gray-600 text-center">
                {features[activeTab].description}
              </p>
              <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-center">
                {features[activeTab].stats}
              </div>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center mt-4">
                <span className="text-gray-400">Feature Visualization</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-6">
            <button
              onClick={prevFeature}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex space-x-2 items-center">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-2 h-2 rounded-full ${
                    activeTab === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextFeature}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Interactive CTA */}
        <div className="mt-12 text-center">
          <button className="relative px-8 py-3 bg-black text-white rounded-full overflow-hidden group">
            <span className="relative z-10 flex items-center">
              Experience the Difference
              <FiChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
