import "./Features.scss";
import cardImg1 from "../../../assets/Icon.png";
import cardImg2 from "../../../assets/Icon2.png";
import cardImg3 from "../../../assets/Icon3.png";

const Features = () => {
  return (
    <>
      <div id="features" className="container-features">
        <div className="features">
          <img className="card-img" src={cardImg1} alt="" />
          <h3 className="title-card">Creat an account</h3>
          <p className="text-card">
            Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets
            consectetus. Agencies define their new business
          </p>
        </div>

        <div className="features">
          <img className="card-img-different" src={cardImg2} alt="" />
          <h3 className="title-card">Creat an account</h3>
          <p className="text-card">
            Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets
            consectetus. Agencies define their new business
          </p>
        </div>

        <div className="features">
          <img className="card-img" src={cardImg3} alt="" />
          <h3 className="title-card">Creat an account</h3>
          <p className="text-card">
            Aspernatur sit adipisci quaerat unde Redug Lagre dolor sit amets
            consectetus. Agencies define their new business
          </p>
        </div>
      </div>

      <aside className="blur-left"></aside>
    </>
  );
};

export default Features;
