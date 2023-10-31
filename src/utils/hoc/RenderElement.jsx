export const RenderElement = ({ children, data }) => {
  return (
    <>
      {data ? children : false}
    </>
  );
};