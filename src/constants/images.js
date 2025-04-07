// src/utils/imageImports.js
const numbers = Array.from({length: 32}, (_, i) => i + 1);
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

// Generate bracelet image paths
numbers.forEach(num => {
  letters.forEach(letter => {
    images[`strap_${num}${letter}`] = `/images/phoneStraps/strap${num}-${letter}.jpg`;
  });
});

// Generate bags image paths
numbers.forEach(num => {
  letters.forEach(letter => {
    images[`bags_${num}${letter}`] = `/images/bags/bags${num}-${letter}.jpg`;
  });
});

export { images };