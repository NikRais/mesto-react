import { useRef, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, onLoading }) => {
  const avatarRef = useRef();
  const [link, setLink] = useState("");

  const handleLinkChange = (e) => {
    setLink(e.target.value)
}

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    setLink('');
}, [isOpen])

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={link}
        type="url"
        placeholder="Ссылка"
        name="avatar"
        id="avatar"
        className="popup__input popup__input_type_avatar"
        required
        ref={avatarRef}
        onChange={handleLinkChange}
      />
      <span className="popup__input-error" id="avatar-error"></span>

      <button type="submit" className="popup__submit">
        {onLoading ? "Сохранение..." : "Сохранить"}
      </button>
    </PopupWithForm>
  )
};

export default EditAvatarPopup;
