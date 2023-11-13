import './menuCard.scss';
import { Link } from "react-router-dom";
import { useNameReplace } from '../../utils/hooks';

export const MenuCard = ({ itemName }) => {
  const [categoryName] = useNameReplace(itemName, 'people', 'characters');

  return (
    <Link
      to={`/${categoryName}`}
      className="menu-card"
      state={{ categoryName }}
    >
      <div className="menu-card__img adaptive-img">
        <img src={`./img/categories/${categoryName}.jpg`} alt={categoryName} />
      </div>
      <div className="menu-card__footer">
        <h2 className="menu-card__title lightsaber">{categoryName}</h2>
      </div>
    </Link>
  );
};