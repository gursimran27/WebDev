import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext2";
import { baseUrl } from "../baseUrl";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const newURL = "https://codehelp-apis.vercel.app/api/";

  const [blog, setBlog] = useState(null);

  const [relatedBlogs, setRelatedBlogs] = useState([]);//array of objects

  const location = useLocation();

  const nav = useNavigate();

  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newURL}get-blog?blogId=${blogId}`;
    // in url of our wesite it is http://localhost:3000/blog/BLOG100 and here is no query string so only when in that page we clciked on new blog then UI will no repaint so we need to add location.pathname as dependices in useEffect hook

    try {
      const result = await fetch(url);
      const data = await result.json();

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch (error) {
      setBlog(null);
      setRelatedBlogs([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]); 
// in url of our wesite it is http://localhost:3000/blog/BLOG100 and here is no query string so only when in that page we clciked on new blog then UI will no repaint so we need to add location.pathname as dependices in useEffect hook

  return (
    <div className="mt-24 -mb-16">
      <Header />

      <div className="flex space-x-2 items-center w-[45%] max-w-[1280px] mx-auto -mb-[70px]">
        <button
          onClick={() => nav(-1)}
          className="border-[3px] rounded-md px-4 py-1 hover:border-blue-400 hover:scale-90  transition-all duration-300 bottom-1"
        >
          Back
        </button>
      </div>

      {loading ? (
        <div className="w-screen  flex items-center justify-center mt-[20%] mb-24">
          <Spinner />
        </div>
      ) : !blog ? (
        <div className="text-3xl font-bold mt-[30%]">No Blog Found!</div>
      ) : (
        <div className="w-[45%] mx-auto flex flex-col items-center mt-24 mb-16">
          <BlogDetails post={blog} />
          <h2 className="text-3xl font-bold w-[45%] -translate-x-[61%] mt-3 mb-10 italic">
            Related Blogs
          </h2>
          {
              relatedBlogs.map((post) => {
              return (
                <div key={post.id}>
                  <BlogDetails post={post} />
                </div>
              );
            })
          }
        </div>
      )}
    </div>
  );
};

export default BlogPage;
