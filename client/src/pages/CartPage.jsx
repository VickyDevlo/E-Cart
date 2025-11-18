import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <div className="w-full px-4">
      <h1 className="text-xl md:text-3xl font-semibold max-md:py-2 md:py-4 ">
        🛒 Shopping Cart
      </h1>
      <Cart />
    </div>
  );
};

export default CartPage;
