import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layout/Home";
import Shop from "./components/Header/Shop/Shop";
import Order from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./Loaders/CartProductLoader";
import Cheakout from "./components/Cheakout/Cheakout";
import AuthProvider from "./Provider/AuthProvider";
import SignUp from "./components/SignUp/SignUp";
import PrivetRoute from "./components/route/PrivetRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader:()=>fetch('http://localhost:5000/totalProducts')
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: cartProductsLoader,
      },
      {
        path: "/inventory",
        element: <PrivetRoute><Inventory></Inventory></PrivetRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/cheakout",
        element: <PrivetRoute><Cheakout></Cheakout></PrivetRoute>,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
