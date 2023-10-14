import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";

export const Main = () => {
  return (
    <div className="main">

      <Navigation />

      <Outlet />

    </div>
  );
};