import React from "react";
import './index.css'
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import ImagePopup from "./components/ImagePopup.js";
import PopupWithForm from "./components/PopupWithForm.js";



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [isCardPopupOpen, setCardPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState([])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setCardPopupOpen(true)
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setCardPopupOpen(false)
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick = {handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name='profile'
          title='Редактировать профиль'
          buttonText='Сохранить'
          isOpened ={isEditProfilePopupOpen}
          onClose = {closeAllPopups}
          >
            <input type="text" id="name-input" className="form__input" name="name" placeholder="Ваше Имя"  required
              minLength="2" maxLength="40" />
            <span id="name-input-error" className="form__error form__error-visible"></span>
            <input id="description-input" type="text" className="form__input" name="description" placeholder="О вас" 
              required minLength="2" maxLength="200" />
            <span id="description-input-error" className="form__error form__error-visible"></span>
        </PopupWithForm>

        <PopupWithForm
          name='cards'
          title='Новое место'
          buttonText='Создать'
          isOpened ={isAddPlacePopupOpen}
          onClose ={closeAllPopups}
          >
           <input id="title-input" type="text" className="form__input" name="name" placeholder="Название"  required
                minLength="2" maxLength="30" />
              <span id="title-input-error" className="form__error form__error-visible"></span>
              <input id="link-input" type="url" className="form__input" name="link" placeholder="Ссылка на картинку" 
                required />
              <span id="link-input-error" className="form__error form__error-visible"></span>
        </PopupWithForm>

        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          buttonText='Сохранить'
          isOpened ={isEditAvatarPopupOpen}
          onClose ={closeAllPopups}
          >
            <input id="avatar-input" type="url" className="form__input" name="avatar" placeholder="Ссылка на картинку" 
                required />
              <span id="avatar-input-error" className="form__error form__error-visible"></span>
        </PopupWithForm>

        <ImagePopup 
          card = {selectedCard}
          isOpened ={isCardPopupOpen}
          onClose ={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;
