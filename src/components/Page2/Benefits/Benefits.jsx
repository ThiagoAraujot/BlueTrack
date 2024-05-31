import "./Benefits.scss";
import benefitImg from "../../../assets/benefit.png";
import benefitImg1 from "../../../assets/benefit1.svg";

const Benefits = () => {
  return (
    <div id="benefits" className="container-benefits">
      <h3>
        Why it is <br /> Worth Choosing <span>PrimePay</span>
      </h3>

      <div className="grid-container">
        <div className="item card-1">
          <div className="content">
            <h4 className="title-benefit">Safe & Security</h4>
            <p className="text-benefit">
              Easily integrate with all your need favorite tools through and
              APIsing including automaticEasily integrate with all your need favorite tools through 
            </p>
          </div>
          <img src={benefitImg1} alt="" />
        </div>
        <div className="item card-2">
          <img src={benefitImg} alt="" />
          <h4 className="title-benefit">Safe & Security</h4>
          <p className="text-benefit">
            Easily integrate with all your need favorite tools through and
            APIsing including automatic
          </p>
        </div>
        <div className="item card-3">
          <img src={benefitImg} alt="" />
          <h4 className="title-benefit">Safe & Security</h4>
          <p className="text-benefit">
            Easily integrate with all your need favorite tools through and
            APIsing including automatic
          </p>
        </div>
        <div className="item card-4">
          <img src={benefitImg} alt="" />
          <h4 className="title-benefit">Safe & Security</h4>
          <p className="text-benefit">
            Easily integrate with all your need favorite tools through and
            APIsing including automatic
          </p>
        </div>
        <div className="item card-5">
          <img src={benefitImg} alt="" />
          <h4 className="title-benefit">Safe & Security</h4>
          <p className="text-benefit">
            Easily integrate with all your need favorite tools through and
            APIsing including automatic
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
