import { Link } from "react-router-dom";

export default function ItemList({
  title,
  price,
  description,
  image,
  idProd,
}) {
  return (
    <>
      <section className="flex text-gray-700 bg-white shadow-md rounded-xl w-full sm:w-60 md:w-56 xl:w-72">
        <div className="flex sm:flex-col sm:gap-2 w-full items-center ">
          <div className="sm:mx-4 overflow-hidden text-gray-700 bg-white rounded-l-md rounded-s-md sm:rounded-b-none sm:rounded-se-md  w-full h-48">
            <img
              className="object-cover w-full h-full"
              src={image}
              alt="card-Img"
            />
          </div>
          <div className="contenedor-info justify-start card-actions">
            <div className=" flex sm:justify-between mx-4 gap-8">
              <p className="font-sans text-base text-center antialiased font-medium leading-relaxed text-blue-gray-900">
                {title}
              </p>
              <p className=" font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                $ {price}
              </p>
            </div>
            <p className=" font-sans text-left mx-4 mb-2 text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              {description}
            </p>
            <div className={"mt-4 mb-2 mx-4 py-2"}>
              <Link to={`/item/${idProd}`}>
                <button className=" btn-outline  btn btn-sm btn-block text-gray-600  text-base bg-amber-200 hover:bg-yellow-400">
                See details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
