import './errorContent.scss';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo/Logo';

export const ErrorContent = ({url, status = '404'}) => {
  const navigate = useNavigate();

  const turnBack = () => navigate(-1);

  return (
    <div className='error-content'>

      <Logo />

      <div className='error-content__status'>
        <span className='error-content__text-status'>{status}. </span>
        <span className='error-content__text-status silver-text'>That's an error.</span>
      </div>
      <div className="error-content__url">
        <span className="error-content__text-url">
          The requested URL
          <span className='error-content__text-url silver-text'> {url} </span>
          was not found on this server.
        </span>
        <span className="error-content__text-url silver-text"> That's all we know.</span>
      </div>
      <div onClick={turnBack} className="error-content__return-home lightsaber">Turn Back</div>

      <div onClick={turnBack} className='error-content__quote'>
        <div className="error-content__picture">
          <img src="./img/darth-vader.png" alt="Darth Vader" />
        </div>
        <div className="error-content__quote-text">
          <span>You lost your own way </span>
          <span>my son</span>
        </div>
      </div>
    </div>
  );
};