import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { FEATURED_PRODUCTS } from "@/data/products";

const Deals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        {/* Хямдралын Хэсэг */}
        <section className="bg-gradient-to-r from-shop-accent to-yellow-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Хямдрал ба Онцгой Саналууд
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Хямдралтай бүтээгдэхүүнүүдийг үзэж, дуртай бараан дээрээ том
              хэмнэлт хийгээрэй.
            </p>
          </div>
        </section>

        {/* Хямдралын зарлал
        <section className="bg-white py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  {" "}
                  50% Хүртэлх ХЯМДРАЛ
                </h3>
                <p className="text-gray-600">Зарим электроник бараан дээр</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-shop-primary mb-2">
                  1-ийг авбал 1 үнэгүй
                </h3>
                <p className="text-gray-600">Зарим хувцасны бараанд</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-green-600 mb-2">
                  Үнэгүй хүргэлт
                </h3>
                <p className="text-gray-600">500000-аас дээш захиалгад</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Онцгой Хямдралтай Бараа */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Онцлох Хямдралууд</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {FEATURED_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Deals;
