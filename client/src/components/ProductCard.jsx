import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();

  // Initial status for already-added products
  const [status, setStatus] = useState(() => {
    return cart.some((item) => item.id === product.id) ? "Update" : "";
  });

  const timerRef = useRef(null);

  const handleAdd = () => {
    addToCart(product);

    setStatus("Added ✔");

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setStatus("Update");
    }, 3000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const buttonText = status === "Update" ? "Update" : status || "Add to Cart";

  const bgClass =
    status === "Added ✔"
      ? "bg-orange-800"
      : status === "Update"
      ? "bg-yellow-600 hover:bg-yellow-700"
      : "bg-green-600 hover:bg-green-700";

  return (
    <div className="bg-green-50 p-2 rounded shadow-sm text-center">
      <h5 className="truncate text-center text-gray-700 font-semibold">
        {product.name}
      </h5>

      <p className="mt-3 text-lg font-medium text-gray-600">
        ₹ {product.price.toFixed(2)}
      </p>

      <button
        onClick={handleAdd}
        className={`cursor-pointer text-sm w-full text-white p-1.5 md:p-2 rounded uppercase duration-300 mt-6 ${bgClass}`}
      >
        {buttonText}
      </button>
    </div>
  );
};
