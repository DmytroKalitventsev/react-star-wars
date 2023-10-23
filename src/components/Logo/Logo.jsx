import { Link } from 'react-router-dom';
import './logo.scss';

export const Logo = () => {
  return (
    <Link to='/' className="logo">
      <img src="/img/logo.png" alt="logo" />
    </Link>
  );
};