import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl md:text-3xl font-semibold my-4 md:my-8">
        🛒 Shopping Cart
      </h1>
      <Cart />
    </div>
  );
};

export default CartPage;
