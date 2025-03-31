
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">ShopNow</h3>
            <p className="text-gray-600 mb-4">
              Your one-stop shop for all your shopping needs with the best deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-shop-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-shop-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-600 hover:text-shop-primary">
                  Deals
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-shop-primary">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-600 hover:text-shop-primary">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-shop-primary">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-600 hover:text-shop-primary">
                  Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@shopnow.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: Mon-Fri, 9AM-5PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ShopNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
