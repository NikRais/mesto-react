import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = card => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  return (
    <div>
      <div className="page">
        <Header />

        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__form-set">
            <input
              type="text"
              placeholder="Имя"
              name="username"
              id="username"
              className="popup__input popup__input_type_name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__input-error" id="username-error"></span>
            <input
              type="text"
              placeholder="О себе"
              name="profession"
              id="profession"
              className="popup__input popup__input_type_profession"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__input-error" id="profession-error"></span>
            <button type="submit" className="popup__submit">Сохранить</button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__form-set">
            <input
              type="url"
              placeholder="Ссылка"
              name="avatar"
              id="avatar"
              className="popup__input popup__input_type_avatar"
              required
            />
            <span className="popup__input-error" id="avatar-error"></span>
            <button type="submit" className="popup__submit">Сохранить</button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm
          name="card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <fieldset className="popup__form-set">
            <input
              type="text"
              placeholder="Название"
              name="name"
              id="title"
              className="popup__input popup__input_type_title"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="popup__input-error" id="title-error"></span>
            <input
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              id="link"
              className="popup__input popup__input_type_link"
              required
            />
            <span id="link-error" className="popup__input-error"></span>
            <button type="submit" className="popup__submit">Создать</button>
          </fieldset>
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

        <div className="popup popup-delete">
          <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form
              action="#"
              name="delete-form"
              className="popup__form"
              noValidate
            >
              <button type="submit" className="popup__submit">Да</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;