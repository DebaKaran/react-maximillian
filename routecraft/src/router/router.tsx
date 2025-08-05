import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import Products from "../pages/Products";
import RootLayout from "../components/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import ProductDetail from "../pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        children: [
          { index: true, element: <Products /> },
          { path: ":productId", element: <ProductDetail /> },
        ],
      },
    ],
  },
]);

export default router;
