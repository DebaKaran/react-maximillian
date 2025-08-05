import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import Products from "../pages/Products";
import RootLayout from "../components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

export default router;
