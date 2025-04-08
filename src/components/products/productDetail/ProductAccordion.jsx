import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ProductAccordion = ({ title, children, isExpanded, toggle }) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex items-center justify-between w-full"
        onClick={toggle}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      {isExpanded && <div className="mt-3">{children}</div>}
    </div>
  );
};

export default ProductAccordion;