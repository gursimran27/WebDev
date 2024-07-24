import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext2";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
  // consuming by using useContext HOOK
  const { loading, posts } = useContext(AppContext);
  // posts is an array of objects

  return (
    <div className="w-[45%] mx-auto flex flex-col items-center mt-24 mb-16">
      {loading ? (
        <div className="w-screen h-[90%] flex items-center justify-center mt-[30%]">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-3xl font-bold mt-[30%]">No Blog Found!</div>
      ) : (
        /* instead of cooding here we can also create a card */
        posts.map((post) => {
          return <BlogDetails key={post.id} post={post} />;
        })
      )}
    </div>
  );
};

export default Blogs;
