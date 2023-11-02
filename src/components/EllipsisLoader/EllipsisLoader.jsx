import './ellipsisLoader.scss';

export const EllipsisLoader = () => {
  return (
    <div className="lds-ellipsis">
      <div className="lds-ellipsis__item"></div>
      <div className="lds-ellipsis__item"></div>
      <div className="lds-ellipsis__item"></div>
      <div className="lds-ellipsis__item"></div>
    </div>
  );
};