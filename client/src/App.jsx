// import React, { useState } from "react";
import BookPage from "./pages/BookPage";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Home /> 
  },
  { 
    path: "/book/:id", 
    element: <BookPage /> 
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
