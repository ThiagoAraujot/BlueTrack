import "./Banner.scss";
import bannerImg from "../../../assets/Image.png";

const Banner = () => {
  return (
    <>
      <div className="container">
        <h2 className="title">
          Ready To Launch Your <br /> Online <span>Payment</span> App
        </h2>
        <p className="text">
          A simple yet modern solution to showcase your app
        </p>

        <a href="#features">
          <button className="btn-banner">Get Started</button>
        </a>

        <img className="phone-img" src={bannerImg} alt="" />
      </div>

      <aside className="blur"></aside>
    </>
  );
};

export default Banner;
