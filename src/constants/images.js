// src/assets/flowerImages.js
const imageModules = import.meta.glob([
  "../assets/flowers/bunga*.jpg",
  "../assets/bracelets/bracelet*.jpg",
  "../assets/bags/bags*.jpg",
],{eager: true});

const images = {};


// Process all matched images
for (const path in imageModules) {
  // Handle flowers (bunga)
  if (path.includes("/flowers/")) {
    const matches = path.match(/bunga(\d+)-([a-z])\.jpg$/);
    if (matches) {
      const [, number, letter] = matches;
      const key = `bunga_${number}${letter}`;
      images[key] = new URL(path, import.meta.url).href;
    }
  }

  // Handle bracelets
  else if (path.includes("/bracelets/")) {
    const matches = path.match(/bracelet(\d+)-([a-z])\.jpg$/);
    if (matches) {
      const [, number, letter] = matches;
      const key = `bracelet_${number}${letter}`;
      images[key] = new URL(path, import.meta.url).href;
    }
  }

  // handle bags
  else if (path.includes("/bags/")) {
    const matches = path.match(/bags(\d+)-([a-z])\.jpg$/);
    if (matches) {
      const [, number, letter] = matches;
      const key = `bags_${number}${letter}`;
      images[key] = new URL(path, import.meta.url).href;
    }
  }
}

export { images };
