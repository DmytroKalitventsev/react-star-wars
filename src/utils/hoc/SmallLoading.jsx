export const SmallLoading = ({ children, data }) => {
  return (
    <>
      {
        data
          ? <div className="loading-informer">Loading...</div>
          : children
      }
    </>
  );
};