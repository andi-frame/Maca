// import React, { useState } from "react";
import BookPage from "./pages/BookPage";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubmitPage from "./pages/SubmitPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/book/:id",
    element: <BookPage />,
  },
  {
    path: "/submitpage",
    element: <SubmitPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
