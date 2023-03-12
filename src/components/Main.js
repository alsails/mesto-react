import React from "react";
import Card from './Card.js';
import Api from '../utils/Api.js'
import '../index.css'

function Main(props) {
    const [profileName, setProfileName] = React.useState('');
    const [profileDescription, setProfileDescription] = React.useState('');
    const [profileAvatar, setProfileAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Api.getUserInfo()
            .then(res => {
                setProfileName(res.name);
                setProfileDescription(res.about);
                setProfileAvatar(res.avatar);
            })
            .catch(err => 
                console.log(err)
            );
    }, [])

    React.useEffect(() => {
        Api.getInitialCards()
            .then(res => {
               setCards(res)
            })
            .catch(err => 
                console.log(err)
            );
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__img-container" onClick={props.onEditAvatar}>
                    <img src={profileAvatar} alt="Аватар" className="profile__img" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{profileName}</h1>
                    <p className="profile__description">{profileDescription}</p>
                    <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
            </section>
            <section className="places">
                <ul className="cards">
                    {cards.map((card) =>
                        <Card 
                        key={card._id} 
                        card={card}
                        onCardClick = {props.onCardClick}
                        />
                    )}
                </ul>
            </section>
        </main>
    );
}

export default Main;