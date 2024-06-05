import "./Banner.scss";
import starfish from "../../../assets/Starfish.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner-txt">
        <h2 className="banner-subtitle">Bem-vindo(a) ao nosso site!</h2>
        <h1 className="banner-title">BlueTrack</h1>
        <p className="banner-descricao">
          Uma iniciativa voltada á proporcionar a melhor experiência para
          crianças e adolescentes, transformando toda sua jornada hospitalar
          divertida e intuitiva através de jogos!
        </p>
        <Link to="/bluetrack">
          <button className="banner-button">Saiba Mais</button>
        </Link>
        <div className="home-scroll">
          <span className="home-scroll-name">Scroll down</span>
          <i className="bi bi-chevron-double-down"></i>
        </div>
      </div>

      <img className="startfish-img" src={starfish} alt="" />
    </section>
  );
};

export default Banner;
