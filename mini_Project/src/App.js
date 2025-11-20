import React from "react";
import ReactDOM from "react-dom/client";


import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <ContactUs />
        }
      ]
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);