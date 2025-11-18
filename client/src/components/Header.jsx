import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  
  return (
    <header className="bg-gray-100 shadow-md sticky top-0 overflow-hidden z-50">
      <nav className="container mx-auto flex items-center justify-between p-3">
        <h1
          onClick={() => navigate("/")}
          className="text-base md:text-xl font-bold cursor-pointer text-gray-800"
        >
          🛒 E-Cart
        </h1>
        <ul className="flex items-center gap-5 md:text-lg font-medium text-gray-800">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/cart"}>
              Cart
              <span className="text-gray-600 ml-0.5">({cart?.length})</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
