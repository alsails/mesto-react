import React from "react";
import '../index.css'

function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }  
    return (
        <li className="card">
            <button type="button" className="card__trash"></button>
            <img src={card.link} alt={card.name} className="card__img" onClick={handleClick}/>
            <div className="card__info">
                <h2 className="card__name">{card.name}</h2>
                <div className="card__likes">
                    <button type="button" className="card__like "></button>
                    <p className="card__like-number"></p>
                </div>
            </div>
        </li>
    );
}

export default Card;