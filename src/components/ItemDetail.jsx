import ItemCount from "./ItemCount";

export default function ItemDetail({
  id,
  image,
  title,
  description,
  price,
  stock,
  handleClickAddCart,
}) {
  return (
    <>
      <div
        key={id}
        className="flex flex-col sm:flex-row mx-4 mt-4 gap-4 shadow-xl rounded-xl p-4 items-center"
      >
        <div className=" overflow-hidden text-gray-700 bg-white rounded-xl w-full h-80">
          <img className="object-cover w-full h-full" src={image} alt={title} />
        </div>
        <div className="flex flex-col justify-around items-start gap-4">
          <article className="flex gap-8">
            <p className="text-xl">Producto: {title}</p>
            <p className="text-xl font-bold">Precio: $ {price}</p>
          </article>
          <p>Description: {description}</p>

          <ItemCount handleClickAddCart={handleClickAddCart} stock={stock} />

          <span className="text-sm">Stock Disponible: {stock}</span>
        </div>
      </div>
    </>
  );
}
