import React from "react";
import './index.css'
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import ImagePopup from "./components/ImagePopup.js";



function App() {
  return (
    <div className="root">
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <div className="popup popup_type_profile" id="profile">
        <div className="popup__container">
          <button type="button" id="profile-close" className="popup__close-button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form action="submit" className="form" name="editProfile" novalidate>
            <input type="text" id="name-input" className="form__input" name="name" placeholder="Ваше Имя" value="" required
              minlength="2" maxlength="40" />
              <span id="name-input-error" className="form__error form__error-visible"></span>
              <input id="description-input" type="text" className="form__input" name="description" placeholder="О вас" value=""
                required minlength="2" maxlength="200" />
                <span id="description-input-error" className="form__error form__error-visible"></span>
                <button type="submit" className="form__save-button form__save-button_disabled type">Сохранить</button>
              </form>
            </div>
        </div>
        <div className="popup popup_type_cards" id="card">
          <div className="popup__cards popup__container">
            <button type="button" id="card-close" className="popup__close-button"></button>
            <h2 className="popup__title">Новое место</h2>
            <form action="submit" className="form" name="addCard" novalidate>
              <input id="title-input" type="text" className="form__input" name="name" placeholder="Название" value="" required
                minlength="2" maxlength="30" />
                <span id="title-input-error" className="form__error form__error-visible"></span>
                <input id="link-input" type="url" className="form__input" name="link" placeholder="Ссылка на картинку" value=""
                  required />
                  <span id="link-input-error" className="form__error form__error-visible"></span>
                  <button type="submit" className="form__save-button form__save-button_disabled">Создать</button>
                </form>
              </div>
          </div>
          <ImagePopup />
          <div className="popup popup_type_del" id="del">
            <div className="popup__del popup__container">
              <button type="button" id="del-close" className="popup__close-button"></button>
              <form className="form form_type_del">
                <h2 className="popup__title">Вы уверены?</h2>
                <button type="submit" className="form__save-button form__save-button_del">Да</button>
              </form>
            </div>
          </div>
          <div className="popup popup_type_avatar" id="avatar">
            <div className="popup__avatar popup__container">
              <button type="button" id="avatar-close" className="popup__close-button"></button>
              <h2 className="popup__title">Обновить аватар</h2>
              <form action="submit" className="form" name="changeAvatar" novalidate>
                <input id="avatar-input" type="url" className="form__input" name="avatar" placeholder="Ссылка на картинку" value=""
                  required />
                  <span id="avatar-input-error" className="form__error form__error-visible"></span>
                  <button type="submit" className="form__save-button form__save-button_disabled">Сохранить</button>
              </form>
            </div>
          </div>
        </div>
        </div>
        );
}

        export default App;
