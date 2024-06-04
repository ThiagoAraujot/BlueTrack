import "./Banner.scss";
import bannerImg from "../../../assets/Image.png";

const Banner = () => {
  return (
    <>
      <div className="container">
        <h2 className="title">
          <span>Rastreando</span> a Confiança, <br /> Garantindo a{" "}
          <span>Sustentabilidade</span>
        </h2>
        <p className="text">
          Uma solução sustentável utilizando a tecnologia Blockchain
        </p>

        <a href="#features">
          <button className="btn-banner">Saiba Mais</button>
        </a>

        <img className="phone-img" src={bannerImg} alt="" />
      </div>

      {/*<aside className="blur"></aside>*/}
    </>
  );
};

export default Banner;
