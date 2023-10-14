import { initialAPIs } from "../../APIs/categoryAPIs";
import { MenuCard } from "../../components";

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