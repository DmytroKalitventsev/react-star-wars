import { Loader } from "../../components";

export const Loading = ({ children, data }) => {
  return (
    <>
      {data ? <Loader /> : children}
    </>
  );
}