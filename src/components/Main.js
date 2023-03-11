import React from "react";
import '../index.css'

function Main() {
    const avatar = document.querySelector('.popup_type_avatar')
    const profile = document.querySelector('.popup_type_profile')
    const place = document.querySelector('.popup_type_cards')

    function handleEditAvatarClick() {
        avatar.classList.toggle('popup_opened')
    }

    function handleEditProfileClick() {
        profile.classList.toggle('popup_opened')
    }

    function handleAddPlaceClick() {
        place.classList.toggle('popup_opened')
    }

    return (
        <main>
            <section className="profile">
                <div className="profile__img-container" onClick={handleEditAvatarClick}>
                    <img src="#" alt="Аватар" className="profile__img" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак</h1>
                    <p className="profile__description">Да</p>
                    <button type="button" className="profile__edit-button" onClick={handleEditProfileClick} />
                </div>
                <button type="button" className="profile__add-button" onClick={handleAddPlaceClick} />
            </section>
            <section className="places">
                <ul className="cards">
                </ul>
            </section>
        </main>
    );
}

export default Main;