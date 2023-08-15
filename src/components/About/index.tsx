import './About.css';

import About1Icon from 'src/assets/about1.svg';

const About = (): JSX.Element => {
  return (
    <div className="about-section">
      <div className="heading-about">ABOUT</div>
      <div className="div-tabs">
        <div className="tablist">
          <div className="tab">
            <img className="img" alt="Img" src={About1Icon} />
            <div className="div-heading">
              <div className="text-wrapper">Re-instill trust in data</div>
            </div>
          </div>
          <div className="div">
            {' '}
            <img className="img" alt="Img" src={About1Icon} />
            <div className="clean-up-messy-data-wrapper">
              <div className="text-wrapper-2">
                Clean up messy data
                <br />
                environments
              </div>
            </div>
          </div>
          <div className="div">
            <img className="img" alt="Img" src={About1Icon} />
            <div className="reduce-cost-of-wrapper">
              <div className="text-wrapper-2">
                Reduce cost of business
                <br />
                intelligence
              </div>
            </div>
          </div>
          <div className="div">
            <img className="img" alt="Img" src={About1Icon} />
            <div className="monitor-usage-and-wrapper">
              <p className="text-wrapper-2">
                Monitor usage and security
                <br />
                risks in BI
              </p>
            </div>
          </div>
        </div>
        <div className="tabpanel">
          <div className="div-d-cont-big">
            <div className="p-wh">
              <div className="overlap-group">
                <p className="p">85% of BI and analytics projects result in</p>
                <p className="failure-confusing">
                  <span className="span">failure.</span>
                  <span className="text-wrapper-3">
                    {' '}
                    Confusing reporting environments
                    <br />
                    lead to costly mistakes and regulatory risks.
                  </span>
                </p>
              </div>
            </div>
            <div className="link">
              <div className="text-wrapper-4">Learn more</div>
            </div>
            <div className="div-stat-div">
              <div className="text-wrapper-5">85%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
