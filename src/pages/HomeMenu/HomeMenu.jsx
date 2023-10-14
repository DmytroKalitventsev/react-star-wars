import { initialAPIs } from "../../utils/APIs/categoryAPIs";
import { MenuCard } from "../../components";
import './homeMenu.scss';

export const HomeMenu = () => {
  return (
    <div className="home-menu">
      {
        initialAPIs.map(api =>
          <MenuCard
            key={crypto.randomUUID()}
            data={api}
          />
        )
      }
    </div>
  );
};