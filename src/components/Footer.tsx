import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Компаны мэдээлэл */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">ShopNow</h3>
            <p className="text-gray-600 mb-4">
              Таны худалдан авалтын бүх хэрэгцээг хангах хамгийн сайн хямдралтай дэлгүүр.
            </p>
          </div>

          {/* Түргэн холбоосууд */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Түргэн холбоосууд</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-shop-primary">
                  Нүүр хуудас
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-shop-primary">
                  Бүтээгдэхүүнүүд
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-600 hover:text-shop-primary">
                  Хямдрал
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-600 hover:text-shop-primary">
                  Сагс
                </Link>
              </li>
            </ul>
          </div>

          {/* Төрөл бүрийн аккаунт */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Таны аккаунт</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-600 hover:text-shop-primary">
                  Нэвтрэх
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-shop-primary">
                  Бүртгүүлэх
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-600 hover:text-shop-primary">
                  Захиалгууд
                </Link>
              </li>
            </ul>
          </div>

          {/* Холбоо барих */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Холбоо барих</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@shopnow.com</li>
              <li>Утас: 88304555</li>
              <li>Цагийн хуваарь: Даваа-Баасан, 9AM-5PM</li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
