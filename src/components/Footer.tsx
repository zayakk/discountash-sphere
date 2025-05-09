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
              Таны худалдан авалтын бүх хэрэгцээг хангах хамгийн сайн хямдралтай
              дэлгүүр.
            </p>
          </div>

          {/* Холбоо барих */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Холбоо барих</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: exam17@gmail.com</li>
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
