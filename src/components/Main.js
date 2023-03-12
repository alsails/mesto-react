import React from "react";
import '../index.css'

function Main(props) {

    return (
        <main>
            <section className="profile">
                <div className="profile__img-container" onClick={props.onEditAvatar}>
                    <img src="#" alt="Аватар" className="profile__img" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">Жак</h1>
                    <p className="profile__description">Да</p>
                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
            </section>
            <section className="places">
                <ul className="cards">
                </ul>
            </section>
        </main>
    );
}

export default Main;