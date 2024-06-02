import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ number, title, text }) => {
  return (
    <>
      <div className="card-container">
        <h1 className="item-number">{number}</h1>
        <h2 className="title">{title}</h2>
        <p className="paragraph">{text}</p>
      </div>
    </>
  );
};

Card.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
