import { Outlet } from "react-router-dom";
import './main.scss';

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