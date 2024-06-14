import { useContext, useEffect, useState } from "react";
import { BagIcon } from "./Icons";
import { CartContext } from "./context/CartContext";

export default function CartwidgetComponent() {
  const { cartProds} = useContext(CartContext);
  const [cantCart, setCantCart] = useState(0)

  const getTotalQuantity = () => {
    const total = cartProds.reduce((prevValue, currentValue) => {
      return prevValue + currentValue.quantity
    }, 0)
  
    setCantCart(total )
  
    
  };
  useEffect(() => {
    getTotalQuantity()
  }, [cartProds])


  return (
    <>
      <div className="indicator">
        <button className=" btn-outline btn btn-sm text-white hover:bg-yellow-400  text-base ">
          {<span className="indicator-item indicator-top rounded-full text-sm w-5 h-5 badge-error">
            {cantCart}
          </span>}
          
          <BagIcon />
        </button>
      </div>
    </>
  );
}
