import './navigation.scss';
import { Link, useLocation } from "react-router-dom";
import { RenderElement } from "../../utils/hoc";

export const Navigation = () => {
  const { state } = useLocation();
  const category = state?.category;
  const name = state?.titleText;

  return (
    <nav className="navigation">
      <ul className="navigation__items">
        <li className="navigation__item">
          <Link to='/'>Home</Link>
        </li>

        <RenderElement data={category}>
          <li className="navigation__item">
            <Link to={`/${category}`} state={{ category }}>{category}</Link>
          </li>
        </RenderElement>

        <RenderElement data={name}>
          <li className="navigation__item navigation__item_cursor">{name}</li>
        </RenderElement>
      </ul>
    </nav>
  );
};