import { ErrorPage } from '../../pages';

export const ErrorProcessing = ({ children, isValidApi }) => {
  return (
    <>
      {
        isValidApi.ok
          ? children
          : <ErrorPage isValidApi={isValidApi} />
      }
    </>
  );
};