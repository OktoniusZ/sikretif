/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export const HeroSection = ({ image, title, subtitle }) => (
  <div
    className="relative bg-cover bg-center py-16 px-4 sm:px-6 lg:px-8"
    style={{ backgroundImage: `url(${image})` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative max-w-7xl mx-auto text-center">
      <motion.h1
        className="text-3xl font-bold text-white sm:text-4xl pt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-white max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {subtitle}
      </motion.p>
    </div>
  </div>
);