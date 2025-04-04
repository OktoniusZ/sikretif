import React from "react";
import { FiArrowRight } from "react-icons/fi";
import logo from "../../../public/images/beads.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Text Content - Always full width on mobile, half on desktop */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            {t("Handcrafted Beauty,")} <span className="text-[#3498db]">{t("Beaded")}</span>{" "}
            {t("to Perfection")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
            {t(
              "Discover handcrafted beaded artistry, designed to add elegance and charm to your everyday style."
            )}
          </p>
          <motion.button
            className="px-8 py-3 border-2 rounded-full font-medium bg-primary text-white hover:bg-primary hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to="/products">{t("Explore Collection")}</NavLink>
          </motion.button>
        </div>

        {/* Image - Full width on mobile, adjusted on larger screens */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
          <img
            src={logo}
            alt="Premium Comfort Shoe"
            className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover shadow-lg transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
