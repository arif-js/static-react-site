import './Banner.css';

import ArrowIcon from 'src/assets/arrow.svg';

const Banner = (): JSX.Element => {
  return (
    <div className="banner-section">
      <div className="div-cols">
        <div className="overlap">
          <div className="div-col">
            <div className="overlap-group">
              <div className="heading-in">in business intelligence</div>
              <div className="div-anim-div">
                <div className="heading-cut-costs">Cut costs</div>
                <div className="div-n-pro" />
                <div className="div-n-bar" />
              </div>
            </div>
            <div className="p-lead">
              <p className="isn-t-it-time-to">
                Isn’t it time to avoid the wild wild west of
                <br />
                data reporting?
              </p>
            </div>
            <div className="link">
              <div className="text-wrapper">Book a Demo</div>
            </div>
            <img className="img" alt="Link" src={ArrowIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
