import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProductShowcase from "../components/home/ProductShowcase";
import CustomerReviews from "../components/home/CustomerReviews";
import BrandMessage from "../components/home/BrandMessage";
import ProductGrid from '../components/home/ProductGrid'

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans relative overflow-hidden pt-8">
      <HeroSection />
      {/* <ProductShowcase /> */}
      {/* <CustomerReviews /> */}
      <BrandMessage />
      <ProductGrid />
    </div>
  );
};

export default Home;
