import "./Analysis.scss";
import phone from "../../../assets/phone.png";

const Analysis = () => {
  return (
    <div className="container-analysis">
      <div className="up-container">
        <div className="content-text">
          <h4>
            Send and receive <br />
            <span>payments</span> easily
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="img-content">
          <img src={phone} alt="" />
        </div>
      </div>

      <div className="down-container">
        <div className="analysis left">
          <h5>12.000 +</h5>
          <p>Downloaded</p>
        </div>

        <div className="analysis middle">
          <h5>$10 M</h5>
          <p>Transactions</p>
        </div>

        <div className="analysis right">
          <h5>1.000 +</h5>
          <p>Feedback</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
