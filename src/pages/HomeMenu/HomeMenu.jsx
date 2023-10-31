import './homeMenu.scss';
import { MenuCard } from "../../components";
import { initialAPIs } from '../../utils/APIs';

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