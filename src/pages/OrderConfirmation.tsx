import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";

const OrderConfirmation = () => {
  // Санамсаргүй захиалгын дугаар үүсгэнэ
  const orderNumber = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />

          <h1 className="text-3xl font-bold mb-2">Захиалга амжилттай!</h1>
          <p className="text-gray-600 mb-6">
            Худалдан авалт хийсэн танд баярлалаа. Таны захиалгыг хүлээн авсан
            бөгөөд боловсруулагдаж байна.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Захиалгын дэлгэрэнгүй</h2>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Захиалгын дугаар:</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Захиалсан огноо:</span>
              <span className="font-medium">
                {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Бид таны захиалгын дэлгэрэнгүй мэдээллийг имэйл хаяг руу илгээлээ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="outline">Худалдан авалтаа үргэлжлүүлэх</Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
