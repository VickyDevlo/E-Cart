import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeCart, updateQty, total } = useCart();

  const isCart = cart.length > 0;
  return (
    <>
      <div className="overflow-auto max-h-[379px] bg-gray-200 rounded-t-xl">
        {isCart ? (
          <table className="mx-auto table-fixed w-full">
            <thead className="bg-gray-100 sticky top-0 z-40 shadow-sm">
              <tr className="">
                <th className="max-md:hidden p-2 font-semibold text-gray-800">
                  No.
                </th>
                <th className="p-2 font-semibold text-gray-800">Product</th>
                <th className="p-2 font-semibold text-gray-800">Price</th>
                <th className="p-2 font-semibold text-gray-800">Qty</th>
                <th className="max-md:hidden p-2 font-semibold text-gray-800">
                  Subtotal
                </th>
                <th className="p-2 font-semibold text-gray-800">Action</th>
              </tr>
            </thead>

            <tbody className="text-center font-semibold">
              {cart.map((item, i) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="max-md:hidden p-2 text-gray-700 font-medium">
                    {i + 1}
                  </td>
                  <td className="p-2 w-10 md:w-48 truncate text-gray-700 
                  font-medium">
                    {item.name}
                  </td>
                  <td className="p-2 max-md:text-sm text-gray-700 font-medium">
                    ₹{item.price.toFixed(2)}
                  </td>
                  <td className="p-2 max-md:text-sm text-gray-700 font-medium">
                    <input
                      type="number"
                      value={item?.qty}
                      onChange={(e) => {
                        updateQty(item.id, Number(e.target.value));
                      }}
                      className="w-10 rounded pl-2"
                    />
                  </td>
                  <td className="max-md:hidden p-2 font-medium text-gray-700">
                    ₹ {(item?.price * item?.qty).toFixed(2)}
                  </td>
                  <td className="max-md:text-xs">
                    <button
                      onClick={() => removeCart(item?.id)}
                      className="cursor-pointer p-2  font-medium text-gray-700"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-6 text-center text-gray-600 w-full">
            <p className="text-xl flex justify-center uppercase">Sorry!!! Your cart is empty 🛍️</p>
          </div>
        )}
      </div>
      {cart?.length ? (
        <div className="flex text-gray-900 text-sm md:text-base bg-white items-center justify-end p-2 font-bold rounded-b-xl">
          Total: ₹ {total.toFixed(2)}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
