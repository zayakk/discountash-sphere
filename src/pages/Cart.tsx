import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trash2, Minus, Plus, ShoppingBag, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [couponError, setCouponError] = useState("");
  const [discount, setDiscount] = useState(0);

  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping - discount;

  const handleApplyCoupon = () => {
    setCouponError("");
    if (couponCode.toUpperCase() === "SUMMER20") {
      const discountAmount = subtotal * 0.2;
      setDiscount(discountAmount);
      toast.success("Купон амжилттай ашиглагдлаа!");
    } else {
      setCouponError("Буруу купон код");
    }
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast("Төлбөр хийхийн тулд нэвтэрнэ үү", {
        description: "Та захиалга үргэлжлүүлэхийн тулд нэвтэрсэн байх шаардлагатай.",
        action: {
          label: "Нэвтрэх",
          onClick: () => navigate("/login"),
        },
      });
      return;
    }

    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold mb-2">Таны сагс хоосон байна</h1>
          <p className="text-gray-500 mb-6">Та бараа нэмээд дахин оролдоно уу</p>
          <Link to="/products">
            <Button>Дэлгүүр хэсэх</Button>
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Таны сагс</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-8/12">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 text-sm font-medium text-gray-500">
                <div className="col-span-6">Бүтээгдэхүүн</div>
                <div className="col-span-2 text-center">Үнэ</div>
                <div className="col-span-2 text-center">Тоо</div>
                <div className="col-span-2 text-center">Нийт</div>
              </div>

              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.product.id} className="p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6">
                      <div className="flex items-center">
                        <Link to={`/product/${item.product.id}`}>
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                        </Link>
                        <div className="ml-4">
                          <Link to={`/product/${item.product.id}`} className="font-medium hover:text-shop-primary">
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-gray-500">{item.product.category}</p>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 text-sm flex items-center mt-1 md:hidden"
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Устгах
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 text-center">
                      <div className="md:hidden text-sm text-gray-500">Үнэ:</div>
                      ${item.product.price.toFixed(2)}
                    </div>

                    <div className="md:col-span-2 flex items-center justify-center">
                      <div className="md:hidden text-sm text-gray-500 mr-2">Тоо:</div>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 w-8 p-0"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className="md:col-span-2 flex items-center justify-between md:justify-center">
                      <div className="md:hidden text-sm text-gray-500">Нийт:</div>
                      <div className="flex items-center">
                        <span className="font-medium">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 ml-4 hidden md:block"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <Button variant="outline" className="text-sm" onClick={() => navigate("/products")}>
                Дэлгүүр хэсэх
              </Button>
              <Button
                variant="outline"
                className="text-sm text-red-500 border-red-200 hover:bg-red-50"
                onClick={clearCart}
              >
                Сагсыг цэвэрлэх
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-4/12">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Захиалгын мэдээлэл</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Нийлбэр дүн</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Хөнгөлөлт</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-600">Хүргэлт</span>
                  <span>{shipping === 0 ? "Үнэгүй" : `$${shipping.toFixed(2)}`}</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>Нийт</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Купон код ашиглах
                </label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 border rounded-l-md px-3 py-2"
                    placeholder="Код оруулах"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button variant="secondary" className="rounded-l-none" onClick={handleApplyCoupon}>
                    Ашиглах
                  </Button>
                </div>
                {couponError && (
                  <div className="mt-2 text-sm text-red-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    {couponError}
                  </div>
                )}
                <div className="mt-2 text-xs text-gray-500">
                  "SUMMER20" кодыг туршаад үзээрэй (20% хямдрал)
                </div>
              </div>

              <Button className="w-full bg-shop-primary hover:bg-shop-primary/90 h-12 text-lg" onClick={handleCheckout}>
                Төлбөр төлөх
              </Button>

              
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
