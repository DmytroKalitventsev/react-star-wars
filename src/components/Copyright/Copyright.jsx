import './copyright.scss';

export const Copyright = () => {
  return (
    <div className="copyright">
      Star Wars and all associated names and/or images are copyright Lucasfilm
      Ltd. Images were freely collected from
      <a className='copyright__link lightsaber' href='https://starwars.fandom.com/wiki/Main_Page' target='blank'>
        Wookiepedia.
      </a>
    </div>
  );
};