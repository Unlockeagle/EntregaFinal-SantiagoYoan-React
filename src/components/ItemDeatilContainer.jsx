import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { filterProductsById } from "../firebase/firebase";
import { useParams } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function ItemDetailContainer() {
  const [myProdsId, setMyProdsId] = useState([]);

  const { prodId } = useParams(null);
  const {addItemToCart} = useContext(CartContext);

  useEffect(() => {
    filterProductsById(parseInt(prodId)).then((products) =>
      setMyProdsId(products)
    );
  }, []);

  const handleClickAddCart = (cant) => {
     addItemToCart(myProdsId[0], cant);
 
  };






  return (
    <>
      <div className="flex flex-col gap-4 mt-12">
        <h2 className="text-3xl text-black">Product Detail</h2>
        <div>
          {myProdsId.map((el) => {
            return (
              <ItemDetail
                key={el.id}
                image={el.image}
                title={el.title}
                price={el.price}
                description={el.description}
                stock={el.stock}
                handleClickAddCart={handleClickAddCart}
              />
            );
          })}
            
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}
