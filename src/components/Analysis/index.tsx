import './Analysis.css';

import AnalysisIcon from 'src/assets/analysis.png';

const Analysis = (): JSX.Element => {
  return (
    <div className="analysis-section">
      <div className="heading-about">ANALYSIS</div>
      <div className="div-survey-col">
        <p className="heading-is">Is Datalogz right for you?</p>
        <img className="img" alt="Img" src={AnalysisIcon} />
      </div>
      <div className="div-survey">
        <div className="div-q">
          <div className="div-survey-flex">
            <div className="heading">
              <p className="where-do-you">
                Where do you primarily
                <br />
                have data stored?
              </p>
            </div>
            <div className="p">
              <div className="overlap-group">
                <div className="text-wrapper">1</div>
                <div className="element"> / 3</div>
              </div>
            </div>
          </div>
          <div className="div-buttons">
            <div className="button">
              <div className="div">Cloud</div>
            </div>
            <div className="button">
              <div className="div">On-prem</div>
            </div>
            <div className="button">
              <div className="div">Local</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
