import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/context/CartContext";
import { searchProducts } from "@/data/products";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState<Product[]>([]);
  
  useEffect(() => {
    if (query) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
    }
  }, [query]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              placeholder="Бүтээгдэхүүн хайх..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <SearchIcon className="h-4 w-4 mr-2" />
              Хайх
            </Button>
          </form>
        </div>
        
        {query && (
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">"{query}" хайлтын үр дүн</h1>
            <p className="text-gray-500">{results.length} бүтээгдэхүүн олдлоо</p>
          </div>
        )}
        
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          query && (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">Бүтээгдэхүүн олдсонгүй</h2>
              <p className="text-gray-500 mb-6">
                "{query}" хайлтаар тохирох бүтээгдэхүүн олдсонгүй. Та өөр хайлтын үг ашиглах эсвэл бүх бүтээгдэхүүнийг үзнэ үү.
              </p>
              <Button onClick={() => navigate("/products")}>
                Бүх бүтээгдэхүүнийг үзэх
              </Button>
            </div>
          )
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Search;
