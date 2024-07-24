import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]); //empty array of objects

  async function fetchProductData() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setPosts(data);
    } catch (error) {
      console.log("error");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []); //on first time render

  return (
    <div className="mt-20">
      {loading ? (
        <Spinner />
      ) : !posts.length > 0 ? (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2">
          {posts.map((post) => {
            return <Product post={post} key={post.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
