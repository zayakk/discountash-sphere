
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { FEATURED_PRODUCTS } from "@/data/products";

const Deals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-shop-accent to-yellow-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Hot Deals & Discounts</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Shop our selection of discounted products and save big on your favorite items.
            </p>
          </div>
        </section>
        
        {/* Discount Banner */}
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 mb-2">Up to 50% OFF</h3>
                <p className="text-gray-600">On selected electronics</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-shop-primary mb-2">Buy 1 Get 1 Free</h3>
                <p className="text-gray-600">On select clothing items</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-green-600 mb-2">Free Shipping</h3>
                <p className="text-gray-600">On orders over $50</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Deals */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Deals</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {FEATURED_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Limited Time Offers */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Limited Time Offers</h2>
            
            <div className="bg-gray-900 text-white rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">Summer Clearance Sale</h3>
                  <p className="mb-6">
                    Take an extra 20% off all already-reduced items. Use code SUMMER20 at checkout.
                  </p>
                  <div className="bg-white text-gray-900 inline-block px-4 py-2 rounded font-bold">
                    SUMMER20
                  </div>
                </div>
                <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold mb-2">20%</div>
                    <div className="text-2xl">EXTRA OFF</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Deals;
