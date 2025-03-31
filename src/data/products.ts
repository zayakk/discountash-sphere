
import { Product } from "../context/CartContext";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1579975339713-a135d7a8e92a",
    category: "Outerwear",
    description: "Timeless blue denim jacket with button closure and two front pockets."
  },
  {
    id: 2,
    name: "Floral Summer Dress",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1464375264579-4f02aea4646b",
    category: "Dresses",
    description: "Light and breezy summer dress with a delicate floral print and adjustable waist."
  },
  {
    id: 3,
    name: "Striped Cotton T-Shirt",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1521572163130-d4f44c37b6c0",
    category: "T-Shirts",
    description: "Soft cotton t-shirt with classic horizontal stripes, perfect for casual wear."
  },
  {
    id: 4,
    name: "High-Waisted Jeans",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1604272490375-3dfb69d3a6e9",
    category: "Jeans",
    description: "Modern high-waisted jeans with a slim fit and comfortable stretch fabric."
  },
  {
    id: 5,
    name: "Running Sneakers",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Shoes",
    description: "Lightweight and comfortable running shoes with cushioned soles."
  },
  {
    id: 6,
    name: "Wool Blend Sweater",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1593032465175-20eed5ece6b4",
    category: "Sweaters",
    description: "Warm and cozy wool blend sweater with a classic crew neck design."
  },
  {
    id: 7,
    name: "Leather Ankle Boots",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1535043431092-448c4ca78115",
    category: "Shoes",
    description: "Stylish genuine leather ankle boots with a comfortable low heel."
  },
  {
    id: 8,
    name: "Silk Printed Scarf",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1611558109169-bb5cbe9d1aad",
    category: "Accessories",
    description: "Luxurious silk scarf with an elegant geometric print."
  }
];

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => !!p.originalPrice);

export const getProductById = (id: number): Product | undefined => {
  return PRODUCTS.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return PRODUCTS.filter(product => product.category === category);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return PRODUCTS.filter(
    product => 
      product.name.toLowerCase().includes(lowercaseQuery) || 
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const CATEGORIES = Array.from(
  new Set(PRODUCTS.map(product => product.category))
);

