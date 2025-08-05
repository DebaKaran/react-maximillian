import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

import classes from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
