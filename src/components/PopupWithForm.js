import React from "react";
import '../index.css'

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}`} id="profile">
            <div className="popup__container">
                <button type="button" id="profile-close" className="popup__close-button"></button>
                <h2 className="popup__title">{props.title}</h2>
                <form action="submit" className="form" name={`${props.name}`} noValidate>
                    {props.children}
                    <button type="submit" className="form__save-button form__save-button_disabled type">{props.buttonText}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;