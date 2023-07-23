import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeLayout from "./Layout/HomeLayout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./components/NotFound/NotFound.jsx";
import Login from "./components/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:"*",
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
