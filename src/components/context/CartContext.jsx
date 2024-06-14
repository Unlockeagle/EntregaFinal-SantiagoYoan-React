import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ToastContainer, toast, Bounce } from "react-toastify";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartProds, setCartProd] = useLocalStorage("cartLocal", []);

  const notifyAddCart = (el, cant) => {
    toast.success(`Added to cart \n
       ${el} x ${cant}`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });

  };


  const notifyAddCartError = () => {
    toast.error(`Excess stock`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const addItemToCart = (el, cant) => {
    
    setCartProd((prevCartProds) => {
      const prodExists = prevCartProds.some((item) => item.id === el.id);

      if (prodExists) {
        return prevCartProds.map((item) => {
          if (item.id === el.id) {
            
            if (item.quantity + cant <= item.stock) {
              notifyAddCart(el.title, cant)
              
              return { ...item, quantity: item.quantity + cant };
            } else {
              notifyAddCartError();

              return item;
              
            }
            }
            return item;
          
            } );
      } else {
        notifyAddCart(el.title, cant)
        return [...prevCartProds, { ...el, quantity: cant }];
      }
      
    });
    
  };

  const removeItemFromCart = (elId) => {
    setCartProd((prevCartProds) =>
      prevCartProds.filter((item) => item.id !== elId)
    );
  };

  const clearCarrito = () => {
    setCartProd([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProds,
        addItemToCart,
        removeItemFromCart,
        clearCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
