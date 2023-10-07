import { initialAPIs } from "../initialAPIs";
import MenuCard from "../components/MenuCard";


export const HomeMenu = () => {
  return (
    <div className="home-menu">
      {
        initialAPIs.map(api => <MenuCard data={api} />)
      }
    </div>
  );
};