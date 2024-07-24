import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img
              src="https://codehelp-shopping-cart.netlify.app/logo.png"
              alt=""
              width={170}
              height={20}
              className="h-14"
            />
          </div>
        </NavLink>

        <div className="flex justify-center items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <HiShoppingCart className="text-3xl" />

              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center rounded-full text-white animate-bounce">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
