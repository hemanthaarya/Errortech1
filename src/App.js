import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet";

// Pages
import HomePage from "./ErrorTech/HomePage";
import LoginPage from "./ErrorTech/LoginPage";
import RegisterPage from "./ErrorTech/RegisterPage";
import MyAccountPage from "./ErrorTech/MyAccountPage";
import CartPage from "./ErrorTech/CartPage";
import ShopPage from "./ErrorTech/ShopPage";

// Context
import UserContext from "./ErrorTech/userContext";

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/loginPage",
    element: <LoginPage />,
  },
  {
    path: "/registerPage",
    element: <RegisterPage />,
  },
  {
    path: "/myaccountPage",
    element: <MyAccountPage />,
  },
  {
    path: "/cartPage",
    element: <CartPage />,
  },
  {
    path: "/ShopPage/:id",
    element: <ShopPage />,
  },
  {
    path: "*",
    element: <h1 style={{ textAlign: "center", marginTop: "50px" }}>404 - Page Not Found</h1>,
  },
]);

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const stored = localStorage.getItem("isLoggedIn");
    return stored ? JSON.parse(stored) : false;
  });

  // Persist login state in localStorage
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <>
      <Helmet>
        <title>ShopHub</title>
        <meta name="description" content="ShopHub E-commerce Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <UserContext.Provider value={{ isRegistered, setIsRegistered, isLoggedIn, setIsLoggedIn }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
