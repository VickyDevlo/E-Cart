import { useCart } from "../context/CartContext";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white p-2 rounded shadow-sm text-center">
      <div className="w-full">
        <h5 className="truncate text-center">{product.name}</h5>
        <p className="mt-3 text-lg font-semibold">
          ₹ {product.price.toFixed(2)}
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => addToCart(product)}
            className="cursor-pointer text-white p-2 bg-yellow-600 rounded 
            uppercase"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
