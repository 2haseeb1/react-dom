import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import PagesToRead from "./components/PagesToRead";
import ListedBooks from "./components/ListedBooks";
import ShowDetailsBook from "./components/ShowDetailsBook";
import TabData from "./components/WishList";
import ErrorPage from "./components/ErrorPage";
import Genres from "./components/Genres";
import Authors from "./components/Authors";

const fetchBookData = async () => {
  try {
    const response = await fetch('booksData.json'); 
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch book data:", error);
    throw error; 
  }
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pages-to-read",
    element: <PagesToRead />,
  },
  {
    path: "/view-list",
    element: <ListedBooks />,
  },
  {
    path: "/wish-list",
    element: <TabData />,
  },
  {
    path: "/book/book-details/:bookId",
    element: <ShowDetailsBook />,
    loader: fetchBookData,
  },
  {
    path: "/authors", 
    element: <Authors/>,
  },
  {
    path: "/genres", 
    element: <Genres/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
