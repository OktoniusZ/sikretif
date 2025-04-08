import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiPlus, FiMinus } from "react-icons/fi";
import ProductAccordion from "./ProductAccordion";
import ProductActions from "./ProductActions";

const formatPrice = (amount) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const ProductInfo = ({ product, showAlert, extractPriceNumber }) => {
  const [expandedSections, setExpandedSections] = useState({
    description: true,
    dimensions: false,
    fabric: false,
    delivery: false,
  });
  const [quantity, setQuantity] = useState(1);
  const [basePrice] = useState(extractPriceNumber(product.price));
  const [totalPrice, setTotalPrice] = useState(basePrice);

  useEffect(() => {
    setTotalPrice(basePrice * quantity);
  }, [quantity, basePrice]);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500 uppercase tracking-wider">
        {product.category} COLLECTION
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>
      <p className="text-sm text-gray-500">
        Delivery within 3-5 business days
      </p>

      <ProductAccordion
        title="Description"
        isExpanded={expandedSections.description}
        toggle={() => toggleSection("description")}
      >
        <p className="mt-3 text-gray-600">{product.description}</p>
      </ProductAccordion>

      <div className="space-y-1">
        <p className="text-2xl font-bold">
          {formatPrice(totalPrice)}{" "}
          {quantity > 1 && `(${quantity} × ${formatPrice(basePrice)})`}
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <p className="text-sm font-medium">Quantity</p>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            <FiMinus />
          </button>
          <span className="px-4 py-1">{quantity}</span>
          <button
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
            onClick={() => setQuantity((q) => q + 1)}
          >
            <FiPlus />
          </button>
        </div>
      </div>

      <ProductActions showAlert={showAlert} />

      <div className="space-y-4 pt-6">
        {[
          {
            key: "dimensions",
            title: "Dimensions",
            content: product.dimensions,
          },
          {
            key: "fabric",
            title: "Fabric Details",
            content: product.fabricDetails,
          },
          {
            key: "delivery",
            title: "Delivery & Returns",
            content: product.deliveryInfo,
          },
        ].map((section) => (
          <ProductAccordion
            key={section.key}
            title={section.title}
            isExpanded={expandedSections[section.key]}
            toggle={() => toggleSection(section.key)}
          >
            {Array.isArray(section.content) ? (
              <ul className="list-disc pl-5 space-y-1">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </ProductAccordion>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;