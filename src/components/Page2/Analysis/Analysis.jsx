import "./Analysis.scss";
import phone from "../../../assets/phone.png";

const Analysis = () => {
  return (
    <div id="analysis" className="container-analysis">
      <div className="up-container">
        <div className="content-text">
          <h4>
            Rastreabilidade
            <br /> <span>Sustentável</span>
          </h4>
          <p>
            Com <strong>BlueTrack</strong>, você pode{" "}
            <strong>rastrear cada etapa</strong> do seu fruto do mar, desde a
            captura até a mesa, com total transparência e segurança. Nossa
            tecnologia blockchain garante produtos{" "}
            <strong>autênticos e sustentáveis</strong>, eliminando a pesca
            ilegal e promovendo um mercado responsável.
          </p>

          <p>
            Ao adotar BlueTrack, você
            <strong> preserva a biodiversidade marinha</strong> e fortalece a
            economia das comunidades pesqueiras. Identifique e elimine produtos
            de <strong>pesca ilegal</strong>, assegurando que apenas peixes
            capturados de forma sustentável cheguem ao consumidor final.
          </p>

          <p>
            BlueTrack <strong>valoriza e recompensa</strong> pescadores e
            empresas que adotam métodos sustentáveis. Nosso sistema facilita a
            conformidade com
            <strong> regulamentações ambientais</strong> e aumenta o valor
            percebido dos produtos no mercado. Junte-se a nós e faça parte de
            uma revolução sustentável na indústria pesqueira.
          </p>
        </div>

        <div className="img-content">
          <img src={phone} alt="" />
        </div>
      </div>

      <div className="down-container">
        <div className="analysis left">
          <h5>500.000 +</h5>
          <p>Frutos Rastreáveis</p>
        </div>

        <div className="analysis middle">
          <h5>- 40%</h5>
          <p>Pesca Ilegal</p>
        </div>

        <div className="analysis right">
          <h5>200 +</h5>
          <p>Empresas Certificadas</p>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
