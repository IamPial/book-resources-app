import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homepages/HomePage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
import ReadBooksPage from "../pages/readBooksPage/ReadBooksPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "/readBooksPage",
        Component: ReadBooksPage,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
