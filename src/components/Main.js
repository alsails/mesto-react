import { useEffect, useState } from 'react';
import Card from './Card.js';
import Api from '../utils/Api.js'
import '../index.css'

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [profileName, setProfileName] = useState('');
    const [profileDescription, setProfileDescription] = useState('');
    const [profileAvatar, setProfileAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Api.getUserInfo()
            .then(res => {
                setProfileName(res.name);
                setProfileDescription(res.about);
                setProfileAvatar(res.avatar);
            })
            .then(
                Api.getInitialCards()
                    .then(res => {
                        setCards(res)
                    }))
            .catch(err =>
                console.log(err)
            );
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__img-container" onClick={onEditAvatar}>
                    <img src={profileAvatar} alt="Аватар" className="profile__img" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{profileName}</h1>
                    <p className="profile__description">{profileDescription}</p>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile} />
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace} />
            </section>
            <section className="places">
                <ul className="cards">
                    {cards.map((card) =>
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={onCardClick}
                        />
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;