import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Нууц үг таарахгүй байна.");
      return;
    }

    setIsLoading(true);

    try {
      const success = await register(name, email, password);
      if (success) {
        navigate("/");
      }
    } catch (err) {
      setError("Бүртгэл амжилтгүй боллоо. Дахин оролдоно уу.");
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
            <CardTitle className="text-2xl font-bold">Бүртгүүлэх</CardTitle>
            <CardDescription>
              Та дараах мэдээллийг бөглөж бүртгүүлнэ үү
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
                <Label htmlFor="name">Бүтэн нэр</Label>
                <Input
                  id="name"
                  placeholder="Өөрийн бүтэн нэрийг оруулна уу"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">И-мэйл</Label>
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
                <Label htmlFor="password">Нууц үг</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Нууц үг үүсгэнэ үү"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Нууц үгээ давтах</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Нууц үгээ давтан оруулна уу"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                {isLoading ? "Бүртгэл үүсгэж байна..." : "Бүртгүүлэх"}
              </Button>

              <div className="text-center text-sm">
                Та бүртгэлтэй юу?{" "}
                <Link to="/login" className="text-shop-primary hover:underline">
                  Нэвтрэх
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

export default Register;
