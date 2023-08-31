import React from "react";

const PopupWithForm = ({isOpen, onClose, name, title, buttonText, children}) => {
  return (
    <div className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose}/>
        <fieldset  className="popup__form-set" name={`${name}`} id={`${name}`}>
        <h2 className="popup__title">{title}</h2>
        <form
          name={`${name}`}
          action="#"
          className="popup__form">
          {children}
        </form>
        <button type="submit" className="popup__submit">{buttonText}</button>
        </fieldset>
      </div>
    </div>
  );
};

export default PopupWithForm;