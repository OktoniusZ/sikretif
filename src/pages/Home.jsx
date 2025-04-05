import React from "react";
import HeroSection from "../components/home/HeroSection";
import BrandMessage from "../components/home/BrandMessage";
import ProductGrid from "../components/home/ProductGrid";
import { useTranslation } from "../hooks/useTranslation";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-black font-sans relative overflow-hidden pt-8">
      <h1 className="text-center text-2xl font-bold">{t("welcome")}</h1>
      <HeroSection />
      <BrandMessage />
      <ProductGrid />
    </div>
  );
};

export default Home;
