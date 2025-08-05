import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import Products from "../pages/Products";
import RootLayout from "../components/RootLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

export default router;
