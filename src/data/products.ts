
import { Product } from "../context/CartContext";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and long battery life."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=989&q=80",
    category: "Electronics",
    description: "Feature-rich smartwatch with health tracking, notifications, and water resistance."
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "Clothing",
    description: "Soft and comfortable 100% cotton t-shirt, perfect for everyday wear."
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 89.99,
    originalPrice: 109.99,
    image: "https://images.unsplash.com/photo-1585657440475-abe3eab4c17d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "Home",
    description: "Programmable coffee maker with timer and multiple brewing options."
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "Footwear",
    description: "Lightweight and durable running shoes with cushioned soles for comfort."
  },
  {
    id: 6,
    name: "Smartphone",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
    category: "Electronics",
    description: "Latest smartphone with high-resolution camera and fast processor."
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 34.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "Home",
    description: "Adjustable desk lamp with multiple brightness levels and color temperatures."
  },
  {
    id: 8,
    name: "Backpack",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "Accessories",
    description: "Durable backpack with multiple compartments, perfect for travel or daily use."
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
