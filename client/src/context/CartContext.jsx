import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  //Add to cart
  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  //UpdateCart
  const updateQty = (id, qty) => {
    if (qty < 1) qty = 1;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  //DeleteCart
  const removeCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  //Total
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      console.error("Failed add to cart:", err);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQty, removeCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
// custom-hook
export const useCart = () => useContext(CartContext);
