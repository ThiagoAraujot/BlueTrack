import Banner from "../../components/Page1/Banner/Banner";
import Navbar from "../../components/Page1/Navbar/Navbar";
import CardRight from "../../components/Page1/CardRight/CardRight";
import CardLeft from "../../components/Page1/CardLeft/CardLeft";
import lobster from "../../assets/lobster.webp";
import negative from "../../assets/negative.png";
import positive from "../../assets/positive.png";
import blockchain from "../../assets/blockchain.webp";
import medal from "../../assets/medal.webp";
import world from "../../assets/world.png";
import "./Page1.scss";
import data from "../../data.json";
import { Link } from "react-router-dom";

const Page1 = () => {
  const images = {
    "lobster": lobster,
    "negative": negative,
    "medal": medal,
    "world": world,
    "positive": positive,
    "blockchain": blockchain,
  };

  return (
    <body className="body-page1">
      <Navbar />
      <Banner />

      {data.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <CardRight
              key={index}
              id={item.id}
              img={images[item.img]}
              title={item.title}
              number={item.number}
              first_text={item.first_text}
              second_text={item.second_text}
            />
          );
        } else {
          return (
            <CardLeft
              key={index}
              id={item.id}
              img={images[item.img]}
              title={item.title}
              number={item.number}
              first_text={item.first_text}
              second_text={item.second_text}
            />
          );
        }
      })}

      <section className="final-section">
        <div className="final-section__container">
          <h2 className="banner-title">Explore Mais Sobre a BlueTrack</h2>
          <p className="final-text">
            Descubra como a BlueTrack está transformando a indústria de frutos
            do mar com tecnologia de ponta e práticas sustentáveis. Clique no
            botão abaixo e conheça mais detalhes sobre a nossa solução, veja
            protótipos e entenda como podemos juntos fazer a diferença!
          </p>
          <Link to="/bluetrack">
            <button className="button-page2">Get started</button>
          </Link>
        </div>
      </section>
    </body>
  );
};

export default Page1;
