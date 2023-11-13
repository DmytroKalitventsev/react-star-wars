import './navigation.scss';
import { Link, useLocation } from "react-router-dom";
import { RenderElement } from "../../utils/hoc";

export const Navigation = () => {
  const { state } = useLocation();

  const currentCategory = state?.categoryName;
  const itemName = state?.itemName;

  return (
    <nav className="navigation">
      <ul className="navigation__items">
        <li className="navigation__item">
          <Link to='/'>Home</Link>
        </li>

        <RenderElement data={currentCategory}>
          <li className="navigation__item">
            <Link to={`/${currentCategory}`} state={{ categoryName: currentCategory }}>{currentCategory}</Link>
          </li>
        </RenderElement>

        <RenderElement data={itemName}>
          <li className="navigation__item navigation__item_cursor">{itemName}</li>
        </RenderElement>
      </ul>
    </nav>
  );
};