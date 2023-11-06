import './errorContent.scss';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { RenderElement } from '../../utils/hoc';

export const ErrorContent = ({ url, status }) => {
  const navigate = useNavigate();

  const turnBack = () => navigate(-1);

  return (
    <div className='error-content'>

      <RenderElement data={!status}>
        <Logo />
      </RenderElement>

      <div className='error-content__main'>
        <div className='error-content__status'>
          <span className='error-content__text-status'>{status ? status : '404'}. </span>
          <span className='error-content__text-status silver-text'>That's an error.</span>
        </div>
        <div className="error-content__url">
          The requested URL
          <span className='silver-text'> {url} </span>
          was not found on this server.
          <span className="silver-text"> That's all we know.</span>
        </div>
        <div onClick={turnBack} className="error-content__return-home lightsaber">Turn Back</div>
      </div>

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