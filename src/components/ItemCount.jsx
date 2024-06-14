import { useState } from "react";
import { Link } from "react-router-dom";
import { BagIcon, PlusCircle} from "./Icons";

export default function ItemCount({ stock, handleClickAddCart }) {
  const [cant, setCant] = useState(1);

  const handleIncrementar = () => {
    cant < stock && setCant(cant + 1);
  };
  const handleReducir = () => {
    cant > 0 && setCant(cant - 1);
  };

  const handleAddCartCant = () => {
    cant > 0 && handleClickAddCart(cant);
  };

  return (
    <>
      <div className=" items-center">
        <div className="flex justify-center pb-4">
          <button onClick={handleReducir} className="btn btn-sm">
            -
          </button>
          <p className="mx-4 text-2xl">{cant}</p>
          <button onClick={handleIncrementar} className="btn btn-sm ">
            +
          </button>
        </div>

        <div className="btn-container flex flex-col gap-2">
          <button
            onClick={handleAddCartCant}
            className="btn-outline  btn btn-sm btn-wide text-gray-600  text-base bg-amber-200 hover:bg-yellow-400"
          >
            Add to Cart <PlusCircle/>
          </button>

          <Link to={"/cart"}>
            <button className="btn-outline  btn btn-sm btn-wide text-gray-600  text-base bg-amber-200 hover:bg-yellow-400">
              Go to Cart <BagIcon />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
