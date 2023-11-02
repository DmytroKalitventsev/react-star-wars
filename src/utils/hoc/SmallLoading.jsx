import { EllipsisLoader } from "../../components"

export const SmallLoading = ({ children, data }) => {
  return (
    <>
      {
        data
          ? <EllipsisLoader />
          : children
      }
    </>
  );
};