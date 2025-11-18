import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-green-50 p-2 rounded shadow-sm text-center">
      <div className="w-full">
        <h5 className="truncate text-center text-gray-700 font-semibold">{product.name}</h5>
        <p className="mt-3 text-lg font-medium text-gray-600">
          ₹ {product.price.toFixed(2)}
        </p>
        
          <button
            onClick={() => addToCart(product)}
            className="cursor-pointer text-sm w-full text-white p-1.5 md:p-2 
            rounded uppercase bg-green-600 hover:bg-green-700 transition-colors duration-300 mt-6"
          >
            Add to Cart
          </button>
      </div>
    </div>
  );
};
