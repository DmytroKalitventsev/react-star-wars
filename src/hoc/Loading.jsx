import Loader from "../components/Loader";

const Loading = ({ children, data }) => {
  return (
    <>
      {data ? <Loader /> : children}
    </>
  );
};

export default Loading;