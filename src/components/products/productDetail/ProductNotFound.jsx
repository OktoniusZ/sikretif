import React from "react";

const ProductNotFound = ({ navigate }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Product not found</h2>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ProductNotFound;