import { initialAPIs } from "../initialAPIs";
import MenuCard from "./MenuCard";

const MenuCards = () => {
  return (
    <div className="menu-cards">
      {
        initialAPIs.map(api => <MenuCard data={api} />)
      }
    </div>
  );
};

export default MenuCards;