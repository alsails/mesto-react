import React from "react";
import '../index.css'

function ImagePopup() {
    return (
        <div className="popup popup_type_photos" id="photo">
            <div className="popup__photo ">
                <button type="button" id="photo-close" className="popup__close-button popup__close-button_photo"></button>
                <img src="#" alt="картинка" className="popup__img" />
                <p className="popup__description"></p>
            </div>
        </div>
    );
}

export default ImagePopup;