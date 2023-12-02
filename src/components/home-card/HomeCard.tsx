import REACT from "react";
import "./HomeCard.scss";
import { IHomeCard } from ".";
const HomeCard: REACT.FC<IHomeCard> = ({ icon, title, description, id }) => {
  return (
    <div className="homeCard" key={id}>
      <div className="homeCard__container">
        <img className="homeCard__icon" src={icon} alt={title} />
        <p className="homeCard__title">{title}</p>
        <p className="homeCard__description">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
