import { Link } from "react-router-dom";
import './menuCard.scss';

export const MenuCard = ({ data }) => {
  const { name } = data;

  return (
    <Link to={`/${name}`} className="menu-card" state={{category: name}}>
      <div className="menu-card__img adaptive-img">
        <img src={`img/categories/${name}.jpg`} alt={name} />
      </div>
      <div className="menu-card__footer">
        <h2 className="menu-card__title lightsaber">{name}</h2>
      </div>
    </Link>
  );
};