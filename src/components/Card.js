import React from "react";

const Card = ({ card, onCardClick }) => {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <div className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__container">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like">
          <button type="button" className="element__like-button"></button>
          <span className="element__like-number">{card.likes.length}</span>
        </div>
        <button type="button" className="element__delete-button"></button>
      </div>
    </div>
  );
};

export default Card;