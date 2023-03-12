import React from "react";
import '../index.css'

function ImagePopup(props) {
    return (
        <div className={`popup popup_type_photos  ${props.isOpened ? `popup_opened` : ""}`} id="photo">
            <div className="popup__photo ">
                <button type="button" id="photo-close" className="popup__close-button popup__close-button_photo" onClick={props.onClose}></button>
                <img src={props.card.link} alt="картинка" className="popup__img" />
                <p className="popup__description">{props.card.name}</p>
            </div>
        </div>
    );
}

export default ImagePopup;