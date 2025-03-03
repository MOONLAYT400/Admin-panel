import "./Cards.css";
import { cardsData } from "../../data/data";
import Card from "../card/card";

const Cards = () => {
  return (
    <div className="cards-wrapper">
      {cardsData.map((card, i) => {
        return (
          <div className="parent-container" key={i}>
            <Card data={card} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
