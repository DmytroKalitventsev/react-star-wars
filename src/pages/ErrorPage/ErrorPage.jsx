import './errorPage.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { RenderElement } from '../../utils/hoc';

export const ErrorPage = ({ error }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const turnBack = () => navigate(-1);

  const { status, errorText, originalStatus } = {
    status: error && error?.status,
    errorText: error && error?.error,
    originalStatus: error && error?.originalStatus,
  }

  return (
    <div className='error-page'>
      <div className='container'>
        <div className='error-content'>
          <div className='error-content__main'>
            <div className='error-content__status'>
              <span className='error-content__text-status'>{originalStatus ?? '404'}. </span>
              <span className='error-content__text-status silver-text'>{status}.</span>
            </div>
            <div className="error-content__url">
              {errorText}.
              <span className="silver-text"> That's all we know. </span>
            </div>
            <div className='error-content__text-status'>Go back or try again later</div>

            <RenderElement data={pathname !== '/'}>
              <div onClick={turnBack} className="error-content__return-home lightsaber">Go back</div>
            </RenderElement>

          </div>
        </div>
      </div>
    </div>
  );
};