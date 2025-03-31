
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES, getProductsByCategory } from "@/data/products";
import { Product } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 });
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(PRODUCTS);
  const [sortBy, setSortBy] = useState<string>("default");

  useEffect(() => {
    let filteredProducts = [...PRODUCTS];

    // Apply category filter
    if (selectedCategory) {
      filteredProducts = getProductsByCategory(selectedCategory);
    }

    // Apply price filter
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply sorting
    if (sortBy === "price-low-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "discounted") {
      filteredProducts.sort((a, b) => {
        const aDiscount = a.originalPrice ? a.originalPrice - a.price : 0;
        const bDiscount = b.originalPrice ? b.originalPrice - b.price : 0;
        return bDiscount - aDiscount;
      });
    }

    setDisplayedProducts(filteredProducts);
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">
          {selectedCategory ? `${selectedCategory}` : "All Products"}
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="w-full md:w-1/4 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="font-bold text-lg mb-4">Categories</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="all" 
                    checked={selectedCategory === null}
                    onCheckedChange={() => setSelectedCategory(null)}
                  />
                  <Label htmlFor="all" className="cursor-pointer">All Products</Label>
                </div>
                
                {CATEGORIES.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={category} 
                      checked={selectedCategory === category}
                      onCheckedChange={() => setSelectedCategory(category)}
                    />
                    <Label htmlFor={category} className="cursor-pointer">{category}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="font-bold text-lg mb-4">Price Range</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <Label htmlFor="min-price">Min</Label>
                    <Input
                      id="min-price"
                      type="number"
                      min="0"
                      value={priceRange.min}
                      onChange={(e) => 
                        setPriceRange({ ...priceRange, min: Number(e.target.value) })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="max-price">Max</Label>
                    <Input
                      id="max-price"
                      type="number"
                      min="0"
                      value={priceRange.max}
                      onChange={(e) => 
                        setPriceRange({ ...priceRange, max: Number(e.target.value) })
                      }
                    />
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setPriceRange({ min: 0, max: 1000 })}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p>{displayedProducts.length} products</p>
              <select
                className="border rounded p-2"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort by: Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="discounted">Best Discount</option>
              </select>
            </div>
            
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No products found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory(null);
                    setPriceRange({ min: 0, max: 1000 });
                    setSortBy("default");
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
