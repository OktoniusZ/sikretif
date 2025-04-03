import { images } from "./images";

export const products = [
  {
    id: 1,
    name: "Urban Runner Pro",
    price: "Rp129.99",
    colors: ["#000000", "#3B82F6", "#EF4444"],
    isNew: true,
    image: images.bunga_1a,
    additionalImages: [images.bunga_1b, images.bunga_1c, images.bunga_1d], // Add more images here
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Flower",
  },
  {
    id: 2,
    name: "Classic Comfort",
    price: "Rp99.99",
    colors: ["#6B7280", "#10B981"],
    isNew: false,
    image: images.bunga_2a,
    additionalImages: [images.bunga_2b, images.bunga_2c],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Flower",
  },
  {
    id: 3,
    name: "Classic Comfort",
    price: "Rp99.99",
    colors: ["#6B7280", "#10B981"],
    isNew: false,
    image: images.bunga_3a,
    additionalImages: [images.bunga_3b, images.bunga_3c, images.bunga_3d],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    category: "Flower",
  },
];
