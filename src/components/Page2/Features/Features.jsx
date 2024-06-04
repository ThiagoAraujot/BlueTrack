import "./Features.scss";
import lockIcon from "../../../assets/lock.svg";
import chainIcon from "../../../assets/chain.svg";
import checkIcon from "../../../assets/check.svg";

const Features = () => {
  return (
    <>
      <div id="features" className="container-features">
        <div className="features">
          <img className="card-img" src={chainIcon} alt="" />
          <h3 className="title-card">
            Transparência Total, Confiança Absoluta
          </h3>
          <p className="text-card">
            Registre cada etapa do fruto do mar em tempo real. Verifique a
            autenticidade e a origem do produto com a segurança da blockchain.
          </p>
        </div>

        <div className="features">
          <img className="card-img" src={lockIcon} alt="" />
          <h3 className="title-card">Protegendo Nossos Oceanos</h3>
          <p className="text-card">
            Identifique e elimine produtos de pesca ilegal com rastreabilidade
            avançada. Garanta que apenas peixes capturados legalmente cheguem ao
            mercado.
          </p>
        </div>

        <div className="features">
          <img className="card-img" src={checkIcon} alt="" />
          <h3 className="title-card">Sustentabilidade que Transforma</h3>
          <p className="text-card">
            Valorize e recompense pescadores e empresas que adotam métodos
            sustentáveis, promovendo a preservação dos oceanos.
          </p>
        </div>
      </div>

      {/*<aside className="blur"></aside>*/}
    </>
  );
};

export default Features;
