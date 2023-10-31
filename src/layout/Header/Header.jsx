import './header.scss';
import { Logo, Navigation } from "../../components";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">

          <Logo />

          <Navigation />

        </div>
      </div>
    </header>
  );
};