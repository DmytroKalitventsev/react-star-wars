import './pageNotFound.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from "../../components";

export const PageNotFound = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const turnBack = () => navigate(-1);

  return (
    <div className='not-page'>
      <div className='container'>
        <div className='not-content'>

          <Logo />

          <div className='not-content__main'>
            <div className='not-content__status'>
              <span className='not-content__text-status'>404. </span>
              <span className='not-content__text-status silver-text'>Page Not Found.</span>
            </div>
            <div className="not-content__url">
              The requested URL
              <span className='silver-text'> https:/{pathname} </span>
              was not found on this server.
              <span className="silver-text"> That's all we know.</span>
            </div>
            <div onClick={turnBack} className="not-content__return-home lightsaber">Turn Back</div>
          </div>

          <div onClick={turnBack} className='not-content__quote'>
            <div className="not-content__picture">
              <img src="./img/darth-vader.png" alt="Darth Vader" />
            </div>
            <div className="not-content__quote-text">
              <span>You lost your own way </span>
              <span>my son</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};