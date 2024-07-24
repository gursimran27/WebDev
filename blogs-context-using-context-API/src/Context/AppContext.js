import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

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

  // data filling
  async function fetchBlogPosts(page = 1) {
    //default parameter is used as page-1
    setLoading(true);

    let url = `${baseUrl}?page=${page}`; // this is synatx
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
    fetchBlogPosts(page);
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
