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
          buttonText={'Сохранить'}
        >
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
          
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText={'Сохранить'}
        >
            <input
              type="url"
              placeholder="Ссылка"
              name="avatar"
              id="avatar"
              className="popup__input popup__input_type_avatar"
              required
            />
            <span className="popup__input-error" id="avatar-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText={'Создать'}
        >
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
        </PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

        <PopupWithForm
        title={'Вы уверены?'}
        name={'confirm'}
        buttonText={'Да'}
        >
        </PopupWithForm>
      
      </div>
  );
}

export default App;