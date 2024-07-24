import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate, useSearchParams } from "react-router-dom";

// * step-1 create context
export const AppContext = createContext();

// *step-2 provider
// children is by-default
// this function is used in index.js and its children represent the <App/>
export default function AppContextProvider({ children }) {
  // all logic are here
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]); //array of objects
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const nav = useNavigate();

  // data filling
  // we have 3 API for 3 differnet work
  async function fetchBlogPosts(page = 1, tag = null, category) {
    //default parameter is used as page-1
    setLoading(true);

    let url = `${baseUrl}?page=${page}`; // for pages
    if (tag) {
      url += `&tag=${tag}`;
    }

    if (category) {
      url += `&category=${category}`;
    }

    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data); //one page data

      // see from json formatter
      setPage(data?.page);
      setTotalPages(data?.totalPages);
      setPosts(data?.posts); //array of objects
    } catch (error) {
      console.log("error in fetching data");
      setPage(1);
      setTotalPages(null);
      setPosts([]); //array of objects
    }

    setLoading(false);
  }

  function HandlePageChange(page) {
    setPage(page);
    nav({ search: `?page=${page}` }); //*! this will simply update the query paramter/search parameter  and updates are also reflected on URL
  //! importanrt search refers to query parameter/string  while the rest thigs in URL remain same and in this we have passed an object..this will update the location.search ...useEffect
    // this will make change in query string/search parameter of URl and as location.search changes so in app.js under useeffect hook that particular API is called and them rendering take place
  }

  const value = {
    //object
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    HandlePageChange,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
