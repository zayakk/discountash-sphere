import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { FEATURED_PRODUCTS, CATEGORIES } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Нүүр хуудасны баатар хэсэг */}
      <section className="relative bg-gradient-to-r from-pink-400 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-4">Зуны загварын шинэ коллекц</h1>
            <p className="text-xl mb-6">
              Шинэхэн загваруудаар гоёж, өөрийнхөө хэв маягийг шинэ түвшинд хүргээрэй.
            </p>
            <Link to="/products">
              <Button className="bg-white text-pink-600 hover:bg-gray-100">
                Одоо худалдаж авах
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Онцлох бүтээгдэхүүнүүд */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Онцлох цуглуулга</h2>
            <Link to="/products">
              <Button variant="outline">Бүгдийг харах</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Ангиллууд */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Ангиллаар хайх</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="bg-pink-50 rounded-lg shadow hover:shadow-md transition-shadow p-6 text-center"
              >
                <h3 className="font-medium text-pink-800">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
};

export default Index;
