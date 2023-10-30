import { Link, useLocation } from "react-router-dom";
import RenderElement from "../../utils/hoc/RenderElement";
import './navigation.scss';

export const Navigation = () => {
  const { state } = useLocation();
  const category = state?.category;
  const name = state?.titleText;

  return (
    <nav className="menu">
      <ul className="menu__items">
        <li className="menu__item">
          <Link to='/'>Home</Link>
        </li>

        <RenderElement data={category}>
          <li className="menu__item">
            <Link to={`/${category}`} state={{ category }}>{category}</Link>
          </li>
        </RenderElement>

        <RenderElement data={name}>
          <li className="menu__item menu__item_cursor">{name}</li>
        </RenderElement>
      </ul>
    </nav>
  );
};