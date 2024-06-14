import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { CheckBlack } from "./Icons";

export default function OrderSummary({classHiden}) {
  const { cartProds } = useContext(CartContext);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const subTotalizar = () => {
    setSubTotal(
      cartProds.reduce((prevValue, currentValue) => {
        return prevValue + currentValue.quantity * currentValue.price;
      }, 0)
    );
  };

  const totalizar = () => {
    const descuentos = 0;
    const tax = 0;

    setTotal(subTotal - descuentos + tax);
  };

  useEffect(() => {
    subTotalizar();
    totalizar();
  }, [cartProds, subTotal]);

  return (
    <>
      <section className=" right-2 flex flex-col gap-4 p-2 h-64 md:w-72">
        
        <h2 className="text-xl font-bold text-start">Order summary</h2>
        <div className="sub-total flex justify-between">
          <p className="text-black">Sub-Total: </p>
          <strong>$ {subTotal}</strong>
        </div>
        <div className="descuentos flex justify-between">
          <p className="text-black">Decuentos: </p>
          <strong>-$ 0</strong>
        </div>
        <div className="tax flex justify-between border-b-2 pb-1">
          <p className="text-black">Tax: </p>
          <strong>$ 0</strong>
        </div>
        <div className="total flex justify-between">
          <strong>Total: </strong>
          <strong>$ {total}</strong>
        </div>
        <Link to={"/Checkout"}>
          <button className={`btn btn-sm btn-block text-slate-800  text-base bg-amber-200 hover:bg-yellow-400 ${classHiden}`}>
            Checkout <CheckBlack/>
          </button>
        </Link>
      </section>
    </>
  );
}
