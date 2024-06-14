import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBarComponent from "./components/NavBarComponent";
import CartComponent from "./components/cart/CartComponent";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDeatilContainer";
import { CartProvider } from "./components/context/CartContext";
import Checkout from "./components/Checkout";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";



function App() {
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBarComponent />
          <ToastContainer/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />}></Route>
            <Route exact path="/cart" element={<CartComponent />}></Route>
            <Route exact path="/Checkout" element={<Checkout />}></Route>
            {/* <Route
              exact
              path="/itemDetail/:prodId"
              element={<ItemDetail />}
            ></Route> */}
            <Route
              exact
              path="/item/:prodId"
              element={<ItemDetailContainer />}
            ></Route>
            <Route
              exact
              path="/categories/:categoryId"
              element={<ItemListContainer />}
            ></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
