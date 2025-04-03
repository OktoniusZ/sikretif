import React from 'react';
import { images } from '../../constants/images';

const ProductShowcase = () => {
  return (
    <section className="relative py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex justify-center">
          {/* Background watermark text */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-gray-100 text-8xl md:text-9xl font-bold opacity-30 whitespace-nowrap">
              PERFORMANCE
            </p>
          </div>
          
          {/* Shoe image with shadow */}
          <div className="relative z-10">
            <img 
              src={images.shoe} 
              alt="Premium Shoe" 
              className="w-full max-w-lg object-contain shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;