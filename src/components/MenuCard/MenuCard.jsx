import { Link } from "react-router-dom";

export const MenuCard = ({ data }) => {
  const { name } = data;

  return (
    <Link to={`/${name}`} className="menu-card">
      <div className="menu-card__img">
        <img src={`img/categories/${name}.jpg`} alt={name} />
      </div>
      <div className="menu-card__footer">
        <h2 className="menu-card__title">{name}</h2>
      </div>
    </Link>
  );
};