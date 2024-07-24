import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addtoCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart!");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart!");
  };

  return (
    <div className="group hover:scale-110 transition duration-300 ease-in flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 p-4 mt-10 ml-5  rounded-xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title.substring(0, 13) + "..."}
        </p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="h-[180px] ">
        <img src={post.image} alt="error" className="w-full h-full" />
      </div>

      <div className="flex items-center justify-between w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {/* we have not used includes function here because cart is an array of objects and further the one object contain id while in some() we can pass a test in form of callBack function */}
        {cart.some((item) => item.id === post.id) ? (
          <button
            onClick={removeFromCart}
            className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
          >
            Remove Item
          </button>
        ) : (
          <button
            onClick={addtoCart}
            className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
