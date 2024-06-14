import { DeleteIcon} from './Icons'

export default function ItemCart({
  image,
  title,
  price,
  cant,
  stock,
  removeItemFromCart,
}) {

  const total = price * cant
  return (
    <>
      <div className="flex gap-4">
        <div className="w-10 h-10 sm:w-20 sm:h-20 overflow-hidden align-center items-start">
          <img
            className="w-full h-full object-cover rounded-md"
            src={image}
            alt={title}
          />
        </div>

        <div className="flex gap-4 text-start items-start">
          <div className="flex w-32">
            <p>{title}</p>
          </div>
          <div className="flex flex-col">
            <p>Price: <br /> $ {price}</p>
          </div>
            <span>Cant: <br /> {cant} </span>
          <div>
          <span>Stock: <br /> {stock}</span>
          </div>
          <div>
            <strong>Total: <br /> $ {total}</strong>
          </div>
        </div>
        <div>

            <button className=" btn btn-circle btn-sm btn-ghost text-slate-800" onClick={removeItemFromCart}><DeleteIcon/></button>
        </div>
      </div>
    </>
  );
}
