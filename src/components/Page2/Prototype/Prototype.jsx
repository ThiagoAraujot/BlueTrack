import "./Prototype.scss";
import login from "../../../assets/login.svg";
import orders from "../../../assets/orders.png";
import feedbacks from "../../../assets/feedbacks.png";

const Prototype = () => {
  return (
    <div className="container-prototype">
      <h4 className="title-prototype">
        Acesso Fácil pelo <span>Dispositivo Móvel!</span>
      </h4>

      <div className="prototypes">
        <img className="order" src={orders} alt="" />
        <img className="login" src={login} alt="" />

        <img className="feedbacks" src={feedbacks} alt="" />
      </div>
    </div>
  );
};

export default Prototype;
