import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import router1 from "./router/router1";

function App() {
  // return <RouterProvider router={router} />;
  return <RouterProvider router={router1} />;
}

export default App;
