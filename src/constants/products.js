import { images } from "./images";

const categories = {
  bracelets: {
    name: "Classic Comfort Bracelet",
    price: "Rp99.99",
    colors: ["#6B7280", "#10B981"],
    imagePrefix: "bracelet_",
    imageLetters: ['b'], // Bracelets: only 'b' as additional image
    totalItems: 33, // Now supports 33 bracelets
  },
  flowers: {
    name: "Elegant Flower Bouquet",
    price: "Rp149.99",
    colors: ["#EF4444", "#F59E0B"],
    imagePrefix: "bunga_",
    imageLetters: ['b', 'c', 'd'], // Flowers: 'b', 'c', 'd' as additional images
    totalItems: 7, // Flowers remain at 16
  },
};

export const products = [];

Object.entries(categories).forEach(([category, props]) => {
  for (let id = 1; id <= props.totalItems; id++) { // Use props.totalItems instead of hardcoded 16
    const productId = category === "bracelets" ? id : id + 100; // Offset flower IDs to avoid clashes (e.g., 101-116)

    // Generate additionalImages dynamically
    const additionalImages = props.imageLetters
      .map(letter => images[`${props.imagePrefix}${id}${letter}`])
      .filter(Boolean); // Filter out undefined (if an image is missing)

    // Ensure the main image exists
    const mainImage = images[`${props.imagePrefix}${id}a`];
    if (!mainImage) {
      console.warn(`Missing main image for ${category} ID ${id}: ${props.imagePrefix}${id}a`);
      continue; // Skip if main image is missing
    }

    products.push({
      id: productId,
      name: `${props.name} ${id}`, // Added ID to distinguish items (e.g., "Classic Comfort Bracelet 1")
      price: props.price,
      colors: props.colors,
      image: mainImage,
      additionalImages,
      description: "Lorem ipsum dolor sit amet...",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      category: category,
    });
  }
});