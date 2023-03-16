import React from "react";
import '../index.css'

function PopupWithForm({name, title, children, buttonText, isOpened, onClose}) {
    return (
        <div className={`popup popup_type_${name} ${isOpened ? `popup_opened` : ""}`} id={`${name}`}>
            <div className="popup__container">
                <button type="button" id="profile-close" className="popup__close-button" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form action="submit" className="form" name={`${name}`} noValidate>
                    {children}
                    <button type="submit" className="form__save-button form__save-button_disabled type">{buttonText || 'Сохранить'}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;