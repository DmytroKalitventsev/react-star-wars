import { ErrorPage } from '../../pages';

export const ErrorProcessing = ({ children, error }) => {
  return (
    <>
      {
        error
          ? <ErrorPage error={error} />
          : children
      }
    </>
  );
};