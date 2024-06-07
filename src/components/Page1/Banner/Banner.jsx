import "./Banner.scss";
import starfish from "../../../assets/Starfish.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-txt">
        <h2 className="banner-subtitle">Bem-vindo(a) à nossa solução!</h2>
        <h1 className="banner-title">BlueTrack</h1>
        <p className="banner-descricao">
          Uma solução inovadora para transformar a indústria de frutos do mar,
          proporcionando total transparência e sustentabilidade, garantindo que
          cada etapa da cadeia de fornecimento seja segura, ética e confiável!
        </p>
        <a href="#desafios">
          <button className="banner-button">Saiba Mais</button>
        </a>
        <div className="home-scroll">
          <span className="home-scroll-name">Scroll down</span>
          <i className="bi bi-chevron-double-down  icon"></i>
        </div>
      </div>

      <img className="startfish-img" src={starfish} alt="" />
    </section>
  );
};

export default Banner;
