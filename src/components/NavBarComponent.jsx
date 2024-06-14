import { Link } from "react-router-dom";
import CartwidgetComponent from "./CartWidgetComponent";

export default function NavBarComponent() {

  return (
    <>
      <nav className=" navbar w-full bg-slate-800 text-slate-50 fixed top-0 left-0 justify-center ">
        <div className="navbar-start">
          <Link to={"/"}>
            <h1 className="text-2xl text-amber-200">Araguaney</h1>
          </Link>
        </div>
        <div className="navbar-center  gap-4" role="button">
          
          <ul className="list-none flex gap-4">
            <li>
              {" "}
              <Link
                className=" btn-outline  btn btn-sm w-24 text-gray-600  text-base bg-amber-200 hover:bg-yellow-400"
                to={"/"}
              >
                All
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className=" btn-outline  btn btn-sm w-24 text-gray-600  text-base bg-amber-200 hover:bg-yellow-400"
                to={"/categories/men"}
              >
                Men
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className=" btn-outline  btn btn-sm w-24 text-gray-600  text-base bg-amber-200 hover:bg-yellow-400"
                to={"/categories/women"}
              >
                Women
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link
                className=" btn-outline  btn btn-sm w-24 text-gray-600  text-base bg-amber-200 hover:bg-yellow-400"
                to={"/categories/shoes"}
              >
                Shoes
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div className="navbar-end w-24">
          <Link to={"./cart"}>
            <CartwidgetComponent />
          </Link>
        </div>
      </nav>
    </>
  );
}
