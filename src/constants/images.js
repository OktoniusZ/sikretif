// src/utils/imageImports.js
const numbers = [1, 2, 3, 4];
const letters = ['a', 'b', 'c', 'd'];

const images = {};

// Generate flower image paths
numbers.forEach(num => {
  letters.forEach(letter => {
    images[`bunga_${num}${letter}`] = `/images/flowers/bunga${num}-${letter}.jpg`;
  });
});

// Generate bracelet image paths
numbers.forEach(num => {
  letters.forEach(letter => {
    images[`bracelet_${num}${letter}`] = `/images/bracelets/bracelet${num}-${letter}.jpg`;
  });
});

// Generate bags image paths
numbers.forEach(num => {
  letters.forEach(letter => {
    images[`bags_${num}${letter}`] = `/images/bags/bags${num}-${letter}.jpg`;
  });
});

export { images };