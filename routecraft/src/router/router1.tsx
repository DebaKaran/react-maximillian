import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";

const routerDefination = createRoutesFromElements(
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<Products />} />
  </>
);

const router1 = createBrowserRouter(routerDefination);

export default router1;
