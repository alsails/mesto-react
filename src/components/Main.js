import React from "react";
import '../index.css'
import Api from '../utils/Api.js'

function Main(props) {
    const [profileName, setProfileName] = React.useState('');
    const [profileDescription, setProfileDescription] = React.useState('');
    const [profileAvatar, setProfileAvatar] = React.useState('');

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
                </ul>
            </section>
        </main>
    );
}

export default Main;