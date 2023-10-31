import './main.scss';
import { Outlet } from "react-router-dom";

export const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main-content">
          
          <Outlet />

        </div>
      </div>
    </div>
  );
};