import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import PagesToRead from "./components/PagesToRead";
import ListedBooks from "./components/ListedBooks";
import ShowDetailsBook from "./components/ShowDetailsBook";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: []
  },
  {
    path: "/pagestoread",
    element: <PagesToRead />,
  },
  {
    path: "/view-list",
    element: <ListedBooks />,
  },
  {
    path: "/book/book-details/:bookId",
    element: <ShowDetailsBook />,
    loader:()=>fetch("booksData.json")
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
