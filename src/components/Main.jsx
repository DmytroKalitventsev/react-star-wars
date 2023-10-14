import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Main = () => {
  return (
    <div className="main">

      <Navigation />

      <Outlet />

    </div>
  );
};

export default Main;