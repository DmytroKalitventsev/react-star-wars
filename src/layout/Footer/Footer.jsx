import './footer.scss';
import { AboutDeveloper, Copyright, FollowMe } from '../../components';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content__main-info">

            <FollowMe />

            <AboutDeveloper/>

          </div>

          <Copyright />
          
        </div>
      </div>
    </footer>
  );
};