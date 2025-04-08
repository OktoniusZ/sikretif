import React from "react";

const ProductActions = ({ showAlert }) => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-4">
      <button
        onClick={showAlert}
        className="border-2 border-black rounded-lg py-3 font-medium hover:bg-gray-50 active:bg-gray-100"
      >
        Add to Cart
      </button>
      <button
        onClick={showAlert}
        className="bg-primary text-white rounded-lg py-3 font-medium hover:bg-secondary"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductActions;