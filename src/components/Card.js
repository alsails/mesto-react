import React from "react";
import '../index.css'

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }  
    return (
        <li className="card">
            <button type="button" className="card__trash"></button>
            <img src={props.card.link} alt="картинка" className="card__img" onClick={handleClick}/>
            <div className="card__info">
                <h2 className="card__name">{props.card.name}</h2>
                <div className="card__likes">
                    <button type="button" className="card__like "></button>
                    <p className="card__like-number"></p>
                </div>
            </div>
        </li>
    );
}

export default Card;