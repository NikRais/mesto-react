import React from "react";
import api from "../utils/api";
import Card from "./Card";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);
  
    React.useEffect(() => {
      api
        .getUserInfo()
        .then((data) => {
          setUserName(data.name);
          setUserDescription(data.about);
          setUserAvatar(data.avatar);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }, []);
  
    React.useEffect(() => {
      api
        .getInitialCards()
        .then((data) => {
          setCards(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }, []);
  
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__card">
            <img
              src={userAvatar}
              alt="Аватар"
              className="profile__avatar"
            />
            <button
              className="profile__avatar-button"
              onClick={onEditAvatar}
            ></button>
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Изменить информацию"
                onClick={onEditProfile}
              ></button>
              <p className="profile__profession">{userDescription}</p>
            </div>
          </div>
  
          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить"
            onClick={onAddPlace}
          ></button>
        </section>
  
        <section className="elements" aria-label="Карточки">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={onCardClick} />
            );
          })}
        </section>
      </main>
    );
  };
  
  export default Main;