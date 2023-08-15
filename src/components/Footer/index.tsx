import './Footer.css';
import Logo from 'src/assets/logo.png';

export const Footer = (): JSX.Element => {
  return (
    <div className="footer">
      <div className="div-footer-flex">
        <div className="div-social-links">
          <p className="logo">
            <img alt="Link home" src={Logo} />
          </p>

          <p className="link">Home</p>
          <p className="img">About</p>
          <p className="link-2">Insights</p>
          <p className="link-3">Contact</p>
        </div>
        <div className="div-small-p">
          <p className="div">© 2023 by Datalogz. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
