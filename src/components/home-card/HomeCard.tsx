import REACT from "react";
import "./HomeCard.scss";
import { IHomeCard } from ".";
const HomeCard: REACT.FC<IHomeCard> = ({ icon, title, description, id }) => {
  return (
    <div className="homeCard" key={id}>
      <div className="homeCard__container">
        <div className="flex justify-center">
        <img className="homeCard__icon" src={icon} alt={title} />
        </div>
        <p className="flex justify-center homeCard__title">{title}</p>
        <p className="text-center homeCard__description">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
