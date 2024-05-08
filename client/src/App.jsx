// import React, { useState } from "react";
import BookPage from "./pages/BookPage";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubmitPage from "./pages/SubmitPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ActivitiesPage from "./pages/ActivitiesPage";

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
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/activities",
    element: <ActivitiesPage />,
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
