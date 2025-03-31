
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Product, useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {hasDiscount && (
            <div className="absolute top-2 right-2 bg-shop-accent text-white text-xs font-bold rounded px-2 py-1">
              {discountPercentage}% OFF
            </div>
          )}
        </div>
        <CardHeader className="p-4 pb-0">
          <h3 className="font-medium truncate">{product.name}</h3>
          <p className="text-sm text-gray-500 truncate">{product.category}</p>
        </CardHeader>
      </Link>
      <CardContent className="p-4 pt-2">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          {hasDiscount && (
            <span className="text-gray-400 line-through text-sm">
              ${product.originalPrice?.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addToCart(product)}
          className="w-full bg-shop-primary hover:bg-shop-primary/90"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
