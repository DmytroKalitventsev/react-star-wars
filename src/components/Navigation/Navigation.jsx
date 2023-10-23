import { Link, useLocation } from "react-router-dom";
import RenderElement from "../../utils/hoc/RenderElement";
import './navigation.scss';

export const Navigation = () => {
  const { state } = useLocation();
  console.log(state)
  return (
    <nav className="menu">
      <ul className="menu__items">
        <li className="menu__item">
          <Link to='/'>Home</Link>
        </li>

        <RenderElement data={state?.category}>
          <li className="menu__item">
            <Link to={`/${state?.category}`}>{state?.category}</Link>
          </li>
        </RenderElement>
      </ul>
    </nav>
  );
};