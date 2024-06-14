import { useContext, useEffect, useState } from "react";
import Form from "./Form";
import OrderSummary from "./OrderSummary";
import { CartContext } from "./context/CartContext";
import ItemOrderSumary from "./ItemOrderSumary";
import { addOrder } from "../firebase/firebase";
import ModalComponent from "./ModalComponent";


export default function Checkout() {
  const { cartProds, clearCarrito } = useContext(CartContext);
  const [orderID, setOrederID] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  

  const newOrders = (names, lastNames, phones, emails) => {
    const items = cartProds.map(({ id, title, quantity, price }) => ({
      id,
      title,
      quantity,
      price,
    }));

    const total = cartProds.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0
    );

    const newOrder = {
      buyer: {
        name: `${names}`,
        lastName: `${lastNames}`,
        phone: `${phones}`,
        mail: `${emails}`,
      },

      items: items,
      total: total,
      date: new Date(),
    };

    addOrder(newOrder).then((id) => setOrederID(id));
    openModal()
  };


  return (
    <>
      <p className="text-back text-2xl font-bold mt-20 text-center">
        Please complete the form to complete your purchase 👍.
      </p>
      <article className="flex flex-col sm:flex-row gap-4 md:gap-28 sm:gap-8 shadow-xl rounded-xl sm:px-12 sm:pb-20 py-4 px-4">
        <div className=" p-2">
          <section>
            <h2 className="text-xl font-bold text-start">Purchase summary</h2>
            {cartProds.map((el) => {
              return (
                <ItemOrderSumary
                  key={el.id}
                  cant={el.quantity}
                  image={el.image}
                  title={el.title}
                  price={el.price}
                />
              );
            })}
          </section>

          <OrderSummary classHiden={"hidden"} />
        </div>

        <Form
          orderId={orderID}
          newOrders={ newOrders}
          clearCart={clearCarrito}
        />
        <ModalComponent orderID={orderID} show={showModal} onClose={closeModal}/>
      </article>
    </>
  );
}
