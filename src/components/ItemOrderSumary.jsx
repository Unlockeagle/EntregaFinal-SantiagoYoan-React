

export default function ItemOrderSumary({
  title,
  price,
  cant,

}) {

  const total = price * cant
  return (
    <>
      <div className="border-b-2 pb-1 p-2">     
        
          <div className="flex justify-between text-start items-start">
          <div className="flex">
            <p>{title}</p>
          </div>
          <div className="flex flex-col">
            <p>Price: <br /> $ {price}</p>
          </div>
            <span>Cant: <br /> {cant} </span>
          
          <div>
            <strong>Total: <br /> $ {total}</strong>
          </div>
        </div>
        
      </div>
    </>
  );
}