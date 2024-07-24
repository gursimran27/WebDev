import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext2";
import "./App.css";
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import BlogPage from "./pages/BlogPage";

const App = () => {
  const { fetchBlogPosts } = useContext(AppContext);

  // we need to fill data in component being render with help of URL as according to that we will make that particular api call

  const [searchParams, setSearchParams] = useSearchParams(); //* it is used to get a particular search parameter key from url query string

  const location = useLocation(); //*it gives the current path, search paramerte/query string , hash of url

  // as here based on path we make that particular API call and set the data in state variables
  useEffect(() => {
    const page = searchParams.get("page") ?? 1; //if page named key is found then stored that else store 1 as our default page
    // ! at first time render the URL would be http://localhost:3000 and in this no page query is there so we use default page=1; and the URL http://localhost:3000/?page=2 is genterated the query string with the help of nav( {search: }) in appContext2.js

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " "); //.at(-1) mean last value of splitted pathname

      fetchBlogPosts(Number(page), tag);
      // Number(page) means that it convert page string into a number
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " "); //.at(-1) mean last value of splitted pathname

      fetchBlogPosts(Number(page), category);
      // Number(page) means that it convert page string into a number
    } else fetchBlogPosts(Number(page));
  }, [location.pathname, location.search]);
  // location.search mean page at url i.e query string/searh parameter
  // so it would render on every change of these dependies

  return (
    <div>
      <Routes>
        {/* /:blogId is dynamic parameter */}
        <Route path="/" element={<Home />} />

        <Route path="/blog/:blogId" element={<BlogPage />} />

        <Route path="/tags/:tag" element={<TagPage />} />

        <Route path="/categories/:category" element={<CategoryPage />} />
      </Routes>
    </div>
  );
};

export default App;
