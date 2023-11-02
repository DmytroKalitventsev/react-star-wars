import './errorPage.scss';
import { ErrorContent } from "../../components";
import { useLocation } from 'react-router-dom';

export const ErrorPage = ({ isValidApi = false }) => {
  const { status, url } = isValidApi;
  const { pathname } = useLocation();
  const errorUrl = url ? url : `https:/${pathname}`;

  return (
    <div className='error-page'>
      <div className='container'>

        <ErrorContent
          url={errorUrl}
          status={status}
        />

      </div>

    </div>
  );
};