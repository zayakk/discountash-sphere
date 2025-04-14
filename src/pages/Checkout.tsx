
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [addressDetails, setAddressDetails] = useState({
    fullName: user?.name || "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "..",
  });
  
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [isProcessing, setIsProcessing] = useState(false);
  
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    
    // Validate form
    const requiredFields = [
      "fullName", "address", "city", "state", "zipCode", "country"
    ];
    
    const missingFields = requiredFields.filter(field => 
      !addressDetails[field as keyof typeof addressDetails]
    );
    
    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate("/order-confirmation");
      toast.success("Your order has been placed successfully!");
    }, 2000);
  };
  
  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-3xl font-bold mb-8">Төлбөр хийх</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Захиалга хийх форм */} 
          <div className="lg:w-8/12">
            <form onSubmit={handleSubmit}>
              {/* Хүргэлтийн хаяг */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Хаягийн мэдээлэл</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Бүтэн нэр</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={addressDetails.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Гэрийн хаяг</Label>
                    <Input
                      id="address"
                      name="address"
                      value={addressDetails.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">Хот</Label>
                    <Input
                      id="city"
                      name="city"
                      value={addressDetails.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">Аймаг / Муж</Label>
                    <Input
                      id="state"
                      name="state"
                      value={addressDetails.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Зип / Шуудангийн код</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      value={addressDetails.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Улс</Label>
                    <select
                      id="country"
                      name="country"
                      value={addressDetails.country}
                      onChange={(e) =>
                        setAddressDetails((prev) => ({
                          ...prev,
                          country: e.target.value,
                        }))
                      }
                      className="w-full border rounded-md px-3 py-2"
                      required
                    >
                      <option value="..">...</option>
                      <option value="US">Монгол Улс</option>
                      <option value="US">Америкийн Нэгдсэн Улс</option>
                      <option value="CA">Хятад</option>
                      <option value="UK">Солонгос</option>
                      <option value="AU">Австрали</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Төлбөрийн хэлбэр */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">Төлбөрийн хэлбэр</h2>

                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card">Кредит / Дебит карт</Label>
                  </div>

                  {/* <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div> */}
                </RadioGroup>

                {paymentMethod === "credit-card" && (
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Картын дугаар</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Дуусах хугацаа</Label>
                        <Input id="expiryDate" placeholder="MM/YY" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-shop-primary hover:bg-shop-primary/90 h-12 text-lg"
                disabled={isProcessing}
              >
                {isProcessing ? "Төлбөр хийгдэж байна..." : `Төлөх $${total.toFixed(2)}`}
              </Button>
            </form>
          </div>

          {/* Захиалгын хураангуй */}
          <div className="lg:w-4/12">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Захиалгын хураангуй</h2>

              <div className="space-y-4 mb-6">
                <div className="divide-y">
                  {items.map((item) => (
                    <div key={item.product.id} className="py-3 flex justify-between">
                      <div>
                        <span className="font-medium">{item.product.name}</span>
                        <div className="text-sm text-gray-500">Тоо: {item.quantity}</div>
                      </div>
                      <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Нийлбэр</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Хүргэлт</span>
                    <span>{shipping === 0 ? "Үнэгүй" : `$${shipping.toFixed(2)}`}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">НӨАТ (7%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between font-bold">
                    <span>Нийт дүн</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
