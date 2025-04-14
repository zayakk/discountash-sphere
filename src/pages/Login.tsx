import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Жишээ: user@example.com / password123
      const success = await login(email, password);
      if (success) {
        navigate("/");
      }
    } catch (err) {
      setError("Нэвтрэхэд алдаа гарлаа. И-мэйл болон нууц үгээ шалгана уу.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center p-4 bg-gray-50">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Нэвтрэх</CardTitle>
            <CardDescription>
              Бүртгэлдээ нэвтрэхийн тулд и-мэйл болон нууц үгээ оруулна уу.
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <div className="p-3 text-sm bg-red-50 text-red-500 rounded-md">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">И-мэйл хаяг</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="И-мэйл хаягаа оруулна уу"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Нууц үг</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-shop-primary hover:underline"
                  >
                    Нууц үг мартсан уу?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Нууц үгээ оруулна уу"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                className="w-full bg-shop-primary hover:bg-shop-primary/90"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Нэвтэрч байна..." : "Нэвтрэх"}
              </Button>

              <div className="text-center text-sm">
                Бүртгэлгүй юу?{" "}
                <Link
                  to="/register"
                  className="text-shop-primary hover:underline"
                >
                  Шинээр бүртгүүлэх
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
