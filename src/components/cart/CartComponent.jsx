import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCart from "../ItemCart";
import { ClearCartIcon } from "../Icons";
import OrderSummary from "../OrderSummary";

export default function CartComponent() {
  const { cartProds, clearCarrito, removeItemFromCart } =
    useContext(CartContext);

  const handleClearCart = () => {
    clearCarrito();
  };

  const removeCart = (id) => {
    removeItemFromCart(id);
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      <section className="flex flex-col sm:justify-between md:flex-row mt-12 gap-8">
        <div className="flex justify-between flex-col gap-4 p-2 rounded-l-md shadow-xl rounded-md w-[450px] sm:w-[550px]">
          <h2 className="text-xl font-bold text-start">Shopping Cart</h2>

          {cartProds && cartProds.length > 0 ? (
            cartProds.map((prod) => (
              <ItemCart
                key={prod.id}
                image={prod.image}
                title={prod.title}
                cant={prod.quantity}
                price={prod.price}
                stock={prod.stock}
                removeItemFromCart={(e) => removeCart(prod.id)}
              />
            ))
          ) : (
            <p>No items in cart</p>
          )}
          <button
            onClick={handleClearCart}
            className="btn btn-sm btn-outline text-gray-600  text-base"
          >
            Clear Cart <ClearCartIcon /> 
          </button>
        </div>

        <div className="shadow-xl rounded-md max-h-64">
          <OrderSummary />
        </div>
      </section>
    </>
  );
}
