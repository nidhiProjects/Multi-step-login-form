import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Signup from "./pages/Signup.js";
import Navbar from "./pages/Navbar.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from "./pages/Profile.js";
import Work from "./pages/Work.js";
const app = createBrowserRouter([
  {
    path: "/",
    element:<Signup/>,
  },
  {
    path: "/profile",
    element:<Profile/>,
  },
  {
    path: "/work",
    element:<Work/>,
  },

  {
    path: "/email",
    element:<Navbar/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={app} />
  </React.StrictMode>
);
