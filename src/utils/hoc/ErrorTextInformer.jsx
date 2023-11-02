export const ErrorTextInformer = ({ children, isValidApi, title = false }) => {
  return (
    <>
      {
        isValidApi.ok
          ? children
          : <div className="error-informer">{title ? <span>{title}</span> : 'There'}: was an error. Please try again later.</div>
      }
    </>
  );
};