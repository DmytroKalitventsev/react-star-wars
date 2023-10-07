const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main-info">
        <div className="follow">
          <h2 className="follow__title">FOLLOW ME:</h2>
          <a className="follow__link" href='https://www.linkedin.com/in/dm-kalitventsev/' target='blank'>
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a className="follow__link" href='https://github.com/DmytroKalitventsev' target='blank'>
            <i className="fa-brands fa-square-github"></i>
            <span>GitHub</span>
          </a>
        </div>
        <div className="developer">
          DESIGNED AND DEVELOPED BY
          <a href='https://dmytrokalitventsev.github.io/my-portfolio/' target='blank'>
            DMYTRO KALITVENTSEV
          </a>
          ©2023
        </div>
      </div>
      <div className="footer__copyright">
        Star Wars and all associated names and/or images are copyright Lucasfilm
        Ltd. Images were freely collected from
        <a href='https://starwars.fandom.com/wiki/Main_Page' target='blank'>
          Wookiepedia.
        </a>
      </div>
    </footer>
  );
};

export default Footer;