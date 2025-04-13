import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ProductGallery = ({ product }) => {
  const allImages = [product.image, ...(product.additionalImages || [])];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goToNextImage();
      if (e.key === 'ArrowLeft') goToPrevImage();
      if (e.key === 'Escape') toggleFullscreen();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNextImage(); // swipe left
    if (distance < -50) goToPrevImage(); // swipe right
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="space-y-6">
      {/* Main product image - responsive container */}
      <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 flex items-center justify-center aspect-square">
        <motion.img
          src={allImages[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-contain filter brightness-100 cursor-zoom-in"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={toggleFullscreen}
        />
      </div>

      {/* Thumbnail grid - responsive columns */}
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {allImages.map((img, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-2 sm:p-3 md:p-4 flex items-center justify-center aspect-square cursor-pointer hover:bg-gray-100 transition"
            onClick={() => setCurrentImageIndex(index)}
          >
            <img
              src={img}
              alt={`${product.name} view ${index + 1}`}
              className={`w-full h-full object-contain ${
                currentImageIndex === index ? "border-2 border-black" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Close button - responsive positioning */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all text-black"
              aria-label="Close fullscreen"
            >
              <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Navigation arrows - responsive size and positioning */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
              className="absolute left-2 sm:left-4 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all text-black"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
              className="absolute right-2 sm:right-4 p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all text-black"
              aria-label="Next image"
            >
              <ChevronRightIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Image container with touch events */}
            <motion.div
              className="w-full h-full flex items-center justify-center touch-none"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              key={currentImageIndex}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={allImages[currentImageIndex]}
                alt={product.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>

            {/* Image counter - responsive text size */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGallery;