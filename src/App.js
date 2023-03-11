import './index.css'

function App() {
  return (
    <div className="root">
    <div className="page">
      <header className="header">
        <img src="<%=require('./images/logo.svg')%>" alt="Логотип" className="header__logo" />
      </header>
      <main>
        <section className="profile">
          <div className="profile__img-container">
            <img src="#" alt="Аватар" className="profile__img" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">Жак</h1>
            <p className="profile__description">Да</p>
            <button type="button" className="profile__edit-button"></button>
          </div>
          <button type="button" className="profile__add-button"></button>
        </section>
        <section className="places">
          <ul className="cards">
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2022 Mesto Russia</p>
      </footer>
      <div className="popup popup_type_profile" id="profile">
        <div className="popup__profile popup__container">
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
          <div className="popup popup_type_photos" id="photo">
            <div className="popup__photo ">
              <button type="button" id="photo-close" className="popup__close-button popup__close-button_photo"></button>
              <img src="#" alt="картинка" className="popup__img" />
                <p className="popup__description"></p>
            </div>
          </div>
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
