import { useEffect } from "react";
import { useState } from "react";
import { getProducts, filterProductsByCategory } from "../firebase/firebase";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";

export default function ItemListContainer() {
  const [carrito, setCarrito] = useState([]);
  const { categoryId = "all" } = useParams();
  const [myProds, setMyProds] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Comienza la carga
      try {
        if (categoryId === "all") {
          const products = await getProducts();
          setMyProds(products);
        } else {
          const products = await filterProductsByCategory(categoryId);
          setMyProds(products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Termina la carga
      }
    };

    fetchProducts();
  }, [categoryId]);

  const handleClickAddCart = (el) => {
    !carrito.some((item) => item.id === el.id)
      ? setCarrito((prevCarrito) => [...prevCarrito, el])
      : console.log("Prod ya esta en carrito");
  };

  return (
    <>
      {loading ? (
        <div className="mt-12">
          <h1 className="text-3xl font-semibold">Products...</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8">
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
            <LoadingComponent />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 mt-12">
          <h1 className="text-3xl font-semibold">{categoryId} Products</h1>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8">
            {myProds.map((el) => {
              return (
                <ItemList
                  idProd={el.id}
                  key={el.id}
                  title={el.title}
                  price={el.price}
                  stock={el.stock}
                  image={el.image}
                  description={el.description}
                  onclick={() => handleClickAddCart(el)}
                />
              );
            })}
          </section>
        </div>
      )}
    </>
  );
}
