import { createBrowserRouter } from "react-router-dom"; // Corrected the import

import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../Component/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "blog",
        element: <Blog></Blog>
      }
    ],
  },
]);
