import './Header.css';
import Logo from 'src/assets/logo.png';

const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="div-nav-container">
        <img className="link-home" alt="Link home" src={Logo} />
        <div className="navbar">
          <div className="div">Home</div>
          <div className="link-product">Product</div>
          <div className="link-about">About</div>
          <div className="link-resources">Resources</div>
          <div className="link-power-BI">Power BI</div>
          <div className="link-careers">Careers</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-2">Book Demo</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
