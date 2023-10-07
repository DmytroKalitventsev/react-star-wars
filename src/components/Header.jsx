import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="img/logo.png" alt="logo" />
      </div>
      <nav className="menu">
        <ul className="menu__items">
          <li className="menu__item">
            <Link href='/'>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;