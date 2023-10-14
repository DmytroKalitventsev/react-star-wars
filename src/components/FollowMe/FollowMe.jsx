import './followMe.scss';

export const FollowMe = () => {
  return (
    <div className="follow">
      <h2 className="follow__title">FOLLOW ME:</h2>
      <a className="follow__link lightsaber" href='https://www.linkedin.com/in/dm-kalitventsev/' target='blank'>
        <i className="fa-brands fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      <a className="follow__link lightsaber" href='https://github.com/DmytroKalitventsev' target='blank'>
        <i className="fa-brands fa-square-github"></i>
        <span>GitHub</span>
      </a>
    </div>
  );
};