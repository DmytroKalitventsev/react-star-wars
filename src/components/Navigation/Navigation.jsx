import { Link, useParams } from "react-router-dom";
import './navigation.scss';

export const Navigation = () => {
  const { category } = useParams();
  
  return (
    <nav className="menu">
      <ul className="menu__items">
        <li className="menu__item">
          <Link to='/'>Home</Link>
        </li>
        {
          category
            ?
            <li className="menu__item">
              <Link to={`/${category}`}>{category}</Link>
            </li>
            : false
        }
      </ul>
    </nav>
  );
};