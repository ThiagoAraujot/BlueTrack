import "./Benefits.scss";
import benefitImg from "../../../assets/benefit.png";
import benefitImg1 from "../../../assets/benefit1.svg";

const Benefits = () => {
  return (
    <div id="benefits" className="container-benefits">
      <h3>
        Why it is <br /> Worth Choosing <span>PrimePay</span>
      </h3>

      <div className="grid-container">
        <div className="item card-1">
          <div className="content">
            <h4 className="title-benefit">
              Acesso Fácil pelo Dispositivo Móvel
            </h4>
            <p className="text-benefit">
              Verifique a origem e a autenticidade do seu fruto do mar
              diretamente pelo seu smartphone, a qualquer hora e em qualquer
              lugar.
            </p>
          </div>
          <img src={benefitImg1} alt="" />
        </div>
        <div className="item card-2">
          <img src={benefitImg} alt="" />
          <h4 className="title-benefit">Transparência Total</h4>
          <p className="text-benefit">
            Com a tecnologia blockchain, cada etapa é rastreável, garantindo
            produtos autênticos e de origem comprovada.
          </p>
        </div>
        <div className="item card-3">
          <img src={benefitImg} alt="" />
          <h4 className="title-benefit">Combate à Pesca Ilegal</h4>
          <p className="text-benefit">
            Elimine práticas ilegais, assegurando que apenas peixes capturados
            de forma sustentável cheguem ao mercado.
          </p>
        </div>
        <div className="item card-4">
          <img src={benefitImg} alt="" />
          <h4 className="title-benefit">Valorização do Produto</h4>
          <p className="text-benefit">
            Produtos rastreáveis aumentam a confiança do consumidor, elevando o
            valor percebido e a competitividade no mercado.
          </p>
        </div>
        <div className="item card-5">
          <img src={benefitImg} alt="" />
          <h4 className="title-benefit">Preservação Marinha</h4>
          <p className="text-benefit">
            Contribua diretamente para a preservação da biodiversidade marinha,
            protegendo nossos oceanos para futuras gerações.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
