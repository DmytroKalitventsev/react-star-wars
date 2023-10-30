import { useNavigate, useParams } from 'react-router-dom';
import './errorPage.scss';
import { Logo } from '../../components';

export const ErrorPage = () => {
  const { '*': address } = useParams();
  const navigate = useNavigate();

  const turnBack = () => navigate(-1);

  return (
    <div className='error-page'>
      <div className='container'>
        <div className='error-content'>

          <Logo />

          <div className='error-content__status'>
            <span className='error-content__text-status'>404. </span>
            <span className='error-content__text-status silver-text'>That's an error.</span>
          </div>
          <div className="error-content__url">
            <span className="error-content__text-url">
              The requested URL
              <span className='error-content__text-url silver-text'> https://{address} </span>
              was not found on this server.
            </span>
            <span className="error-content__text-url silver-text"> That's all we know.</span>
          </div>

          <div onClick={turnBack} className="error-content__return-home lightsaber">Turn Back</div>
        </div>
      </div>

    </div>
  );
};