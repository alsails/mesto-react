import React from "react";
import '../index.css'

function Main() {
    return (
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
    );
}

export default Main;