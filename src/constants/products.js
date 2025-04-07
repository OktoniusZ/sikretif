import { images } from "./images";

const categories = {
  bracelets: {
    name: "Classic Comfort Bracelet",
    price: "Rp10,000",
    colors: ["#6B7280", "#10B981"],
    imagePrefix: "bracelet_",
    imageLetters: ['b'], 
    totalItems: 9, 
  },
  phoneStraps: {
    name: "Premium Phone Strap",
    price: "Rp15,000",
    colors: ["#000000", "#F59E0B", "#B45309"],
    imagePrefix: "strap_",
    imageLetters: ['b'], 
    totalItems: 12,
  },
  flowers: {
    name: "Elegant Flower Bouquet",
    price: "Rp150,000",
    colors: ["#EF4444", "#F59E0B"],
    imagePrefix: "bunga_",
    imageLetters: ['b', 'c', 'd'], 
    totalItems: 7, 
  },
};

export const products = [];

Object.entries(categories).forEach(([category, props]) => {
  for (let id = 1; id <= props.totalItems; id++) {
    // Assign unique IDs (bracelets: 1-9, phoneStraps: 101-112, flowers: 201-207)
    const productId = 
      category === "bracelets" ? id : 
      category === "phoneStraps" ? id + 100 : 
      id + 200;

    // Generate additional images (e.g. strap_1b.jpg, strap_1c.jpg)
    const additionalImages = props.imageLetters
      .map(letter => images[`${props.imagePrefix}${id}${letter}`])
      .filter(Boolean);

    // Get main image (e.g. strap_1a.jpg)
    const mainImage = images[`${props.imagePrefix}${id}a`];
    if (!mainImage) {
      console.warn(`Missing main image for ${category} ID ${id}: ${props.imagePrefix}${id}a`);
      continue;
    }

    products.push({
      id: productId,
      name: `${props.name} #${id}`,
      price: props.price,
      colors: props.colors,
      image: mainImage,
      additionalImages,
      description: "High-quality handmade product with premium materials",
      details: [
        "Durable materials designed for daily use",
        "Adjustable sizing for perfect fit",
        "Handcrafted with attention to detail"
      ],
      category: category,
    });
  }
});