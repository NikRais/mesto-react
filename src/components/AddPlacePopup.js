import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, onLoading }) => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddPlace({
      name: description,
      link: image,
    });
  };

  useEffect(() => {
    setImage('');
    setDescription('');
}, [isOpen])

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={description}
        type="text"
        placeholder="Название"
        name="name"
        id="title"
        className="popup__input popup__input_type_title"
        minLength="2"
        maxLength="30"
        required
        onChange={handleDescriptionChange}
      />
      <span className="popup__input-error" id="title-error"></span>
      <input
        value={image}
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        id="link"
        className="popup__input popup__input_type_link"
        required
        onChange={handleImageChange}
      />
      <span id="link-error" className="popup__input-error"></span>

      <button type="submit" className="popup__submit">
        {onLoading ? "Сохранение..." : "Создать"}
      </button>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
