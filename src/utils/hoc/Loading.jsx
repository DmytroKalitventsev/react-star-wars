import { Loader } from "../../components";

const Loading = ({ children, data }) => {
  return (
    <>
      {data ? <Loader /> : children}
    </>
  );
};

export default Loading;