// components/products/productDetail/FullScreenImage.js
import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FullScreenImageViewer = ({
  images = [],
  currentIndex = 0,
  onClose,
  onChangeIndex,
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance required
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    // Reset touch
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handlePrev = () => {
    onChangeIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onChangeIndex((currentIndex + 1) % images.length);
  };

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <AnimatePresence>
      {images.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl z-20 p-2"
            onClick={onClose}
            aria-label="Close"
          >
            <FiX className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-2 md:left-4 z-20 text-white p-2 bg-black bg-opacity-50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
          >
            <FiChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          <button
            className="absolute right-2 md:right-4 z-20 text-white p-2 bg-black bg-opacity-50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <FiChevronRight className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-full max-h-full w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Full screen view ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] md:max-h-[90vh] object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Mobile indicator (only shown on mobile) */}
          <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenImageViewer;
