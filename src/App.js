import './App.css';

function App() {
  return (
    <div ClassName="page">
      <div ClassName="header">
        <img src="<%=require('./images/logo.svg')%>" alt="Логотип" ClassName="header__logo" />
      </div>
      <main>
        <section ClassName="profile">
          <div ClassName="profile__img-container">
            <img src="#" alt="Аватар" ClassName="profile__img" />
          </div>
          <div ClassName="profile__info">
            <h1 ClassName="profile__name"></h1>
            <p ClassName="profile__description"></p>
            <button type="button" ClassName="profile__edit-button"></button>
          </div>
          <button type="button" ClassName="profile__add-button"></button>
        </section>
        <section ClassName="places">
          <ul ClassName="cards">
          </ul>
        </section>
      </main>
      <footer ClassName="footer">
        <p ClassName="footer__copyright">© 2022 Mesto Russia</p>
      </footer>
      <div ClassName="popup popup_type_profile" id="profile">
        <div ClassName="popup__profile popup__container">
          <button type="button" id="profile-close" ClassName="popup__close-button"></button>
          <h2 ClassName="popup__title">Редактировать профиль</h2>
          <form action="submit" ClassName="form" name="editProfile" novalidate>
            <input type="text" id="name-input" ClassName="form__input" name="name" placeholder="Ваше Имя" value="" required
              minlength="2" maxlength="40" />
              <span id="name-input-error" ClassName="form__error form__error-visible"></span>
              <input id="description-input" type="text" ClassName="form__input" name="description" placeholder="О вас" value=""
                required minlength="2" maxlength="200" />
                <span id="description-input-error" ClassName="form__error form__error-visible"></span>
                <button type="submit" ClassName="form__save-button form__save-button_disabled type">Сохранить</button>
              </form>
            </div>
        </div>
        <div ClassName="popup popup_type_cards" id="card">
          <div ClassName="popup__cards popup__container">
            <button type="button" id="card-close" ClassName="popup__close-button"></button>
            <h2 ClassName="popup__title">Новое место</h2>
            <form action="submit" ClassName="form" name="addCard" novalidate>
              <input id="title-input" type="text" ClassName="form__input" name="name" placeholder="Название" value="" required
                minlength="2" maxlength="30" />
                <span id="title-input-error" ClassName="form__error form__error-visible"></span>
                <input id="link-input" type="url" ClassName="form__input" name="link" placeholder="Ссылка на картинку" value=""
                  required />
                  <span id="link-input-error" ClassName="form__error form__error-visible"></span>
                  <button type="submit" ClassName="form__save-button form__save-button_disabled">Создать</button>
                </form>
              </div>
          </div>
          <div ClassName="popup popup_type_photos" id="photo">
            <div ClassName="popup__photo ">
              <button type="button" id="photo-close" ClassName="popup__close-button popup__close-button_photo"></button>
              <img src="#" alt="картинка" ClassName="popup__img" />
                <p ClassName="popup__description"></p>
            </div>
          </div>
          <div ClassName="popup popup_type_del" id="del">
            <div ClassName="popup__del popup__container">
              <button type="button" id="del-close" ClassName="popup__close-button"></button>
              <form ClassName="form form_type_del">
                <h2 ClassName="popup__title">Вы уверены?</h2>
                <button type="submit" ClassName="form__save-button form__save-button_del">Да</button>
              </form>
            </div>
          </div>
          <div ClassName="popup popup_type_avatar" id="avatar">
            <div ClassName="popup__avatar popup__container">
              <button type="button" id="avatar-close" ClassName="popup__close-button"></button>
              <h2 ClassName="popup__title">Обновить аватар</h2>
              <form action="submit" ClassName="form" name="changeAvatar" novalidate>
                <input id="avatar-input" type="url" ClassName="form__input" name="avatar" placeholder="Ссылка на картинку" value=""
                  required />
                  <span id="avatar-input-error" ClassName="form__error form__error-visible"></span>
                  <button type="submit" ClassName="form__save-button form__save-button_disabled">Сохранить</button>
              </form>
            </div>
          </div>
        </div>
        );
}

        export default App;
