import React, { useState, useEffect } from "react";
import { HeroSection } from "../components/products/HeroSection";
import { CategoryFilter } from "../components/products/CategoryFilter";
import { ProductGrid } from "../components/products/ProductGrid";
import { products } from "../constants/products";
import beads from "../../public/images/beads.jpg";
import { useTranslation } from "../hooks/useTranslation";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="bg-white">
      <HeroSection
        image={beads}
        title={t("Our Complete Collection")}
        subtitle={t("Discover the perfect pair for every occasion")}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />

          <ProductGrid
            products={filteredProducts}
            activeCategory={activeCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;