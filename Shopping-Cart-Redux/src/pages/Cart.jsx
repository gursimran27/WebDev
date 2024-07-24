import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart); //return state i.e array of objects

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // so we can do it with for loop also
    setTotalAmount(cart.reduce((acc, curr) => acc + curr?.price, 0)); //used to sum of prices using reduce func with 2 arrguments i.e call back function and initial value
    // 0 means inintial value
  }, [cart]);
  // it would be executd on first render and whenever the cart redux state variable changes

  return (
    <div className="mt-20">
      {cart.length > 0 ? ( //cart is array of objects
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>

          <div className="w-[100%] md:w-[40%] mt-5  flex flex-col  p-5 gap-5 my-14  h-[100%] justify-between">
            <div className="flex flex-col gap-5 ">
              <div className="font-semibold text-xl text-green-800 ">
                Your Cart
              </div>
              <div className="font-semibold text-5xl text-green-700  -mt-5">
                Summery
              </div>
              <p className="text-xl">
                <span className="text-gray-700 font-semibold text-xl">
                  Total Items: {Cart.lenght}
                </span>
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold">Total Amount:${totalAmount}</p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <NavLink to="/">
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
