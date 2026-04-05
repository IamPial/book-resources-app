import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homepages/HomePage";
import Books from "../pages/books/Books";

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
    ],
  },
]);
