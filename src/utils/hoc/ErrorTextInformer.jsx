export const ErrorTextInformer = ({ children, error, itemName }) => {
  return (
    <>
      {
        error
          ? <div className="error-informer">{itemName ? <span>Homeworld</span> : 'There'}: was an error. Please try again later.</div>
          : children
      }
    </>
  );
};